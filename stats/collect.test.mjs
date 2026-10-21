// node --test stats/collect.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeDaily, mergeHistory, mergeNpm, windowDays } from './collect.mjs';

const ORG = { login: 'o', avatar_url: 'https://avatars.example/u/1' };

const pt = (d, count, uniques) => ({ timestamp: `${d}T00:00:00Z`, count, uniques });

const fetched = (name, over = {}) => ({
  meta: {
    name,
    html_url: `https://github.com/o/${name}`,
    description: null,
    created_at: '2026-09-01T08:00:00Z',
    pushed_at: '2026-10-20T08:00:00Z',
    archived: false,
    has_pages: false,
    stargazers_count: 2,
    forks_count: 1,
    subscribers_count: 3,
    open_issues_count: 0,
  },
  views: { count: 5, uniques: 2, views: [pt('2026-10-20', 5, 2)] },
  clones: { count: 1, uniques: 1, clones: [] },
  referrers: [{ referrer: 'github.com', count: 4, uniques: 2 }],
  paths: [{ path: `/o/${name}`, title: name, count: 5, uniques: 2 }],
  starDates: ['2026-09-02', '2026-10-01'],
  forkDates: ['2026-09-05'],
  ...over,
});

test('windowDays covers 14 days ending today', () => {
  const w = windowDays('2026-10-21');
  assert.equal(w.length, 14);
  assert.equal(w[0], '2026-10-08');
  assert.equal(w.at(-1), '2026-10-21');
});

test('mergeDaily zero-fills the window, keeps older history, newer wins', () => {
  const prev = { '2026-09-01': [9, 4], '2026-10-21': [1, 1] };
  const out = mergeDaily(prev, [pt('2026-10-21', 7, 3)], '2026-10-22');
  assert.deepEqual(out['2026-09-01'], [9, 4]); // outside the window: preserved
  assert.deepEqual(out['2026-10-21'], [7, 3]); // partial day completed
  assert.deepEqual(out['2026-10-15'], [0, 0]); // observed, no traffic
  assert.equal(out['2026-09-02'], undefined); // never observed
  assert.deepEqual(Object.keys(out), Object.keys(out).toSorted());
});

test('mergeHistory snapshots per day and flags repos that disappeared', () => {
  const t1 = Date.parse('2026-10-21T03:00:00Z');
  const h1 = mergeHistory(null, ORG, [fetched('a'), fetched('b')], t1);
  assert.deepEqual(h1.repos.a.snapshots['2026-10-21'], {
    stars: 2, forks: 1, watchers: 3, openIssues: 0, views14: [5, 2], clones14: [1, 1],
  });
  assert.equal(h1.repos.a.removed, undefined);

  const t2 = Date.parse('2026-10-22T03:00:00Z');
  const h2 = mergeHistory(JSON.parse(JSON.stringify(h1)), ORG, [fetched('a', { starDates: null })], t2);
  assert.deepEqual(Object.keys(h2.repos.a.snapshots), ['2026-10-21', '2026-10-22']);
  assert.deepEqual(h2.repos.a.starDates, ['2026-09-02', '2026-10-01']); // kept when too long to page
  assert.equal(h2.repos.b.removed, true);
  assert.ok(h2.repos.b.views['2026-10-20']); // history of a removed repo is kept
});

test('mergeNpm keeps older days and lets the fetched range win', () => {
  const prev = { p: { repo: 'r', downloads: { '2026-09-01': 4, '2026-10-20': 0 } } };
  const out = mergeNpm(prev, [{ name: 'p', repo: 'r', downloads: [{ day: '2026-10-20', downloads: 9 }, { day: '2026-10-21', downloads: 1 }] }]);
  assert.deepEqual(out.p.downloads, { '2026-09-01': 4, '2026-10-20': 9, '2026-10-21': 1 });
  const h = mergeHistory({ npm: prev }, ORG, [], Date.parse('2026-10-21T03:00:00Z'));
  assert.equal(h.avatar, ORG.avatar_url);
  assert.deepEqual(h.npm, prev); // npm history survives a run that fetched none
});
