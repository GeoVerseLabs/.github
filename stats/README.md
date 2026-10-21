# Repo stats

Daily traffic and growth stats for GeoVerseLabs public repositories, plus npm
downloads for packages published from them (`NPM_PACKAGES` in `collect.mjs`).
Icons use the organization avatar (taken from the API on each run).

- Dashboard: <https://geoverselabs.github.io/.github/stats/> (not linked from the site, `noindex`)
- Data: [`data/history.json`](data/history.json), appended by the
  [Repo stats](../.github/workflows/repo-stats.yml) workflow every day at 02:17 UTC
- Collector: [`collect.mjs`](collect.mjs) (Node ≥ 20, no dependencies); tests: `node --test stats/collect.test.mjs`

GitHub keeps views / clones for 14 days only. History starts on the first run;
stars and forks are backfilled from their timestamps. Referrers and popular
paths are 14-day rolling totals.

## Setup

1. Create a fine-grained personal access token:
   - resource owner **GeoVerseLabs** (not your personal account);
   - repository access **All repositories** or **Only select repositories** —
     *not* "Public repositories", which is read-only and cannot carry the
     permission below (traffic calls then fail with `403 Resource not
     accessible by personal access token`);
   - repository permission **Administration: Read-only** (Metadata: Read-only is
     added automatically);
   - if the org requires approval, approve it under org Settings → Personal
     access tokens → Pending requests.

   Only public repos are collected either way. A classic token with
   `public_repo` also works.
2. Add it to this repo as an Actions secret named `STATS_TOKEN`.
3. Run **Actions → Repo stats → Run workflow** once to seed the data.

The token expires on the date you choose; after that the workflow fails with
`401`. Outages shorter than 14 days are back-filled by the next successful run;
longer ones leave a gap (shown as "未采集" on the dashboard).

## Data format

```text
repos.<name>.views / clones   { "YYYY-MM-DD": [count, uniques] }  key present = observed
repos.<name>.snapshots        { "YYYY-MM-DD": { stars, forks, watchers, openIssues, views14, clones14 } }
repos.<name>.starDates        sorted dates each current stargazer starred
repos.<name>.forkDates        sorted creation dates of forks
repos.<name>.referrers/paths  latest 14-day totals
npm.<package>.downloads       { "YYYY-MM-DD": n }  refreshed from the package's first day each run
avatar                        organization avatar URL
```
