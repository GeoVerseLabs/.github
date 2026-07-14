# Contributing to GeoVerse Labs

Thanks for your interest in contributing! This guide applies org-wide across GeoVerseLabs
open-source repos. Project-specific notes (build steps, test commands) live in each repo's own
`README.md` / `CONTRIBUTING.md` when they differ from the general flow below.

## Before you start

- Search existing [issues](https://github.com/GeoVerseLabs) and open PRs in the target repo to
  avoid duplicate work.
- For anything beyond a small fix (new features, breaking changes, architectural changes), open
  an issue first to discuss the approach before writing code.
- By contributing, you agree your contributions are licensed under the target repo's existing
  license (Apache-2.0 for `mybatis-plus-geometry`, MIT for `geoverse-sar`).

## Development workflow

1. Fork the repo and create a branch off `main` for your change.
2. Make your change, following the existing code style of the repo.
3. Add or update tests covering your change.
4. Run the repo's full test suite locally before opening a PR:
   - `mybatis-plus-geometry`: `mvn test` (Java 17+, Maven)
   - `geoverse-sar`: `pnpm install && pnpm build && pnpm test` (Node ≥20, pnpm ≥10)
5. Open a pull request against `main` with a clear description of the change and why it's
   needed. Link the related issue if one exists.
6. Keep PRs focused — one logical change per PR is easier to review and merge.

## Commit messages

Use clear, descriptive commit messages that explain *why* a change was made, not just *what*
changed. Conventional prefixes (`fix:`, `feat:`, `docs:`, `refactor:`, `test:`, `chore:`) are
welcome but not required.

## Code review

Maintainers review PRs as time allows. Please be patient and responsive to review feedback —
most PRs merge faster when the author iterates quickly on comments.

## Reporting bugs / requesting features

Use the issue templates in the target repo (or the org-wide defaults from this repo if the
target repo doesn't have its own). Include enough detail to reproduce the issue: environment,
steps, expected vs. actual behavior, and relevant logs or code snippets.

## Security issues

Do **not** open a public issue for security vulnerabilities. See [SECURITY.md](SECURITY.md)
for how to report them privately.

## Code of conduct

All contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions

For licensing or early access to the closed-source GeoVerse SDK, reach out to
libra.liuyb@gmail.com. For anything related to an open-source repo, open an issue there.
