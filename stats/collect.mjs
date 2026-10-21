// Collects traffic and growth stats for the org's public repositories and merges
// them into stats/data/history.json, so history outlives GitHub's 14-day window.
//
//   STATS_TOKEN=<pat> node stats/collect.mjs
//
// The token needs push access to the repos (traffic API requirement): a
// fine-grained PAT owned by the org with "Administration: read" (repository
// access "All" or "Only select", not "Public repositories"), or a classic PAT
// with `public_repo`.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const DATA_FILE = join(HERE, 'data', 'history.json');
export const WINDOW_DAYS = 14;
const MAX_LIST_PAGES = 10; // stargazers / forks: up to 1000 each
// npm packages published from each repo; downloads are public (no token).
export const NPM_PACKAGES = { 'geoverse-line-finder': ['geoverse-line-finder'] };
const NPM_MAX_DAYS = 540; // api.npmjs.org range limit is 18 months

export const day = (d) => new Date(d).toISOString().slice(0, 10);

export function windowDays(today, n = WINDOW_DAYS) {
  const end = Date.parse(today + 'T00:00:00Z');
  return Array.from({ length: n }, (_, i) => day(end - (n - 1 - i) * 86400000));
}

/**
 * Merge one 14-day traffic response into a {date: [count, uniques]} series.
 * Every day of the current window is written explicitly (missing = 0), so a key
 * present means "observed" and an absent key means "not tracked".
 * Newer observations win: today's partial bucket is completed by tomorrow's run.
 */
export function mergeDaily(series = {}, points = [], today) {
  const out = { ...series };
  for (const d of windowDays(today)) out[d] = [0, 0];
  for (const p of points) out[day(p.timestamp)] = [p.count, p.uniques];
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

export function mergeRepo(prev = {}, fetched, today) {
  return {
    url: fetched.meta.html_url,
    description: fetched.meta.description ?? '',
    createdAt: day(fetched.meta.created_at),
    pushedAt: fetched.meta.pushed_at,
    archived: fetched.meta.archived,
    hasPages: fetched.meta.has_pages,
    views: mergeDaily(prev.views, fetched.views.views, today),
    clones: mergeDaily(prev.clones, fetched.clones.clones, today),
    snapshots: {
      ...prev.snapshots,
      [today]: {
        stars: fetched.meta.stargazers_count,
        forks: fetched.meta.forks_count,
        watchers: fetched.meta.subscribers_count,
        openIssues: fetched.meta.open_issues_count,
        views14: [fetched.views.count, fetched.views.uniques],
        clones14: [fetched.clones.count, fetched.clones.uniques],
      },
    },
    // Stargazer / fork dates let the dashboard draw growth from day one, not
    // just from the first run. Kept from the previous run when the list is too
    // long to page through.
    starDates: fetched.starDates ?? prev.starDates ?? [],
    forkDates: fetched.forkDates ?? prev.forkDates ?? [],
    // Referrers and paths are 14-day rolling totals; they cannot be split by day.
    referrers: fetched.referrers,
    paths: fetched.paths.map(({ path, title, count, uniques }) => ({ path, title, count, uniques })),
  };
}

/** npm counts settle a day or two late, so the fetched range always wins. */
export function mergeNpm(prev = {}, fetchedNpm = []) {
  const out = { ...prev };
  for (const { name, repo, downloads } of fetchedNpm) {
    const series = { ...out[name]?.downloads };
    for (const d of downloads) series[d.day] = d.downloads;
    out[name] = {
      repo,
      downloads: Object.fromEntries(Object.entries(series).sort(([a], [b]) => a.localeCompare(b))),
    };
  }
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

export function mergeHistory(prev, org, fetchedRepos, now, fetchedNpm = []) {
  const today = day(now);
  const repos = { ...(prev?.repos ?? {}) };
  for (const f of fetchedRepos) repos[f.meta.name] = mergeRepo(repos[f.meta.name], f, today);
  const active = new Set(fetchedRepos.map((f) => f.meta.name));
  for (const [name, r] of Object.entries(repos)) r.removed = !active.has(name) || undefined;
  return {
    schema: 1,
    org: org.login,
    avatar: org.avatar_url,
    updatedAt: new Date(now).toISOString(),
    repos: Object.fromEntries(Object.entries(repos).sort(([a], [b]) => a.localeCompare(b))),
    npm: mergeNpm(prev?.npm, fetchedNpm),
  };
}

function client(token) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'geoverselabs-repo-stats',
    Authorization: `Bearer ${token}`,
  };
  return async function gh(path, accept) {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: accept ? { ...headers, Accept: accept } : headers,
    });
    if (!res.ok) {
      const body = await res.text();
      throw Object.assign(new Error(`GET ${path} → ${res.status} ${body.slice(0, 200)}`), { status: res.status });
    }
    return { data: await res.json(), link: res.headers.get('link') ?? '' };
  };
}

// Backfill lists are optional: since 2026-07 GitHub limits the stargazers list
// to repo admins / collaborators and answers fine-grained PATs with 403. On
// 401/403 keep the previous list; the dashboard falls back to daily snapshots.
async function listDates(gh, path, pick, accept) {
  const dates = [];
  for (let page = 1; page <= MAX_LIST_PAGES; page++) {
    let res;
    try {
      res = await gh(`${path}${path.includes('?') ? '&' : '?'}per_page=100&page=${page}`, accept);
    } catch (e) {
      if (e.status !== 401 && e.status !== 403) throw e;
      console.log(`::warning::${path} not accessible (${e.status}); keeping previous backfill`);
      return null;
    }
    const { data, link } = res;
    dates.push(...data.map(pick).filter(Boolean).map(day));
    if (!link.includes('rel="next"')) return dates.sort();
  }
  return null; // too many to page through; keep the previous list
}

async function fetchRepo(gh, full) {
  const [meta, views, clones, referrers, paths, starDates, forkDates] = await Promise.all([
    gh(`/repos/${full}`).then((r) => r.data),
    gh(`/repos/${full}/traffic/views?per=day`).then((r) => r.data),
    gh(`/repos/${full}/traffic/clones?per=day`).then((r) => r.data),
    gh(`/repos/${full}/traffic/popular/referrers`).then((r) => r.data),
    gh(`/repos/${full}/traffic/popular/paths`).then((r) => r.data),
    listDates(gh, `/repos/${full}/stargazers`, (s) => s.starred_at, 'application/vnd.github.star+json'),
    listDates(gh, `/repos/${full}/forks?sort=oldest`, (f) => f.created_at),
  ]);
  return { meta, views, clones, referrers, paths, starDates, forkDates };
}

export async function fetchNpm(name, repo, today) {
  const meta = await fetch(`https://registry.npmjs.org/${encodeURIComponent(name)}`);
  if (!meta.ok) throw new Error(`npm registry ${name} → ${meta.status}`);
  const created = day((await meta.json()).time.created);
  const floor = day(Date.parse(today) - (NPM_MAX_DAYS - 1) * 86400000);
  const start = created > floor ? created : floor;
  const res = await fetch(`https://api.npmjs.org/downloads/range/${start}:${today}/${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error(`npm downloads ${name} → ${res.status}`);
  return { name, repo, downloads: (await res.json()).downloads };
}

async function main() {
  const token = process.env.STATS_TOKEN;
  const org = process.env.STATS_ORG || 'GeoVerseLabs';
  if (!token) throw new Error('STATS_TOKEN is not set');
  const gh = client(token);
  const orgInfo = (await gh(`/orgs/${org}`)).data;

  const repos = [];
  for (let page = 1; ; page++) {
    const { data, link } = await gh(`/orgs/${org}/repos?type=public&per_page=100&page=${page}`);
    repos.push(...data.filter((r) => !r.private && !r.fork));
    if (!link.includes('rel="next"')) break;
  }

  // Any failure aborts before writing: a skipped day is recovered by the next
  // run (14-day window), a half-written file is not.
  const fetched = [];
  for (const r of repos) fetched.push(await fetchRepo(gh, r.full_name));
  const today = day(Date.now());
  const npm = [];
  for (const [repo, pkgs] of Object.entries(NPM_PACKAGES)) {
    for (const p of pkgs) npm.push(await fetchNpm(p, repo, today));
  }

  let prev = null;
  try {
    prev = JSON.parse(await readFile(DATA_FILE, 'utf8'));
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
  const next = mergeHistory(prev, orgInfo, fetched, Date.now(), npm);
  await mkdir(dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(next, null, 1) + '\n');

  for (const f of fetched) {
    console.log(
      `${f.meta.name.padEnd(28)} ★${f.meta.stargazers_count} ⑂${f.meta.forks_count}` +
        ` views ${f.views.count}/${f.views.uniques} clones ${f.clones.count}/${f.clones.uniques}`,
    );
  }
  for (const p of npm) {
    console.log(`npm ${p.name.padEnd(24)} ${p.downloads.reduce((s, d) => s + d.downloads, 0)} downloads since ${p.downloads[0]?.day}`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
