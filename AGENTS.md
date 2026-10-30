## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (`TheLazyBee/my-personal-portfolio`), managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles mapped 1:1 to `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Verification

Before opening a PR, run `npm run typecheck`, `npm run lint`, and `npm run build`. CI runs the same commands in the `verify` job on every pull request and never deploys; Vercel handles previews and production. See `docs/adr/0001-ci-verifies-vercel-deploys.md`.

The `verify` check should be required on `main` through branch protection.
