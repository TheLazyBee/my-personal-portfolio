# CI verifies, Vercel deploys

Pull requests must pass typecheck, lint, and build in GitHub Actions before merge. Vercel remains the only deployment mechanism: CI runs with a read-only token and has no deploy step, so it cannot publish previews or production.

We chose this split because Vercel already builds and deploys every branch, and duplicating deployment in CI would create two sources of truth. Tests are intentionally omitted until there is behavior worth testing; typecheck and the production build cover the current presentational site. The workflow exposes a single `verify` job so branch protection can require one stable check.
