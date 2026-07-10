# Parasite Target Atlas

One repository for the deployed atlas and its disease-target-to-virus pipeline.

## Structure

- `my-app` — exact source recovered from the production Vercel deployment `dpl_9gyYuS94TUwPA1YKamguPTKURjAG`.
- `python` — Open Targets disease-target loading and HPIDB viral-interaction ranking pipeline.

## Common commands

```bash
bun run atlas:build
bun run table:build
bun run pipeline:targets
bun run pipeline:viruses
```

The pipeline expects the local HPIDB MITAB files under `python/data/inputs/hpidb2.mitab/`. Those raw files are intentionally excluded from Git because one exceeds GitHub's 100 MB file limit. Generated JSON outputs remain tracked.

## Deployment

The Vercel project is `parasite-target-atlas` under the `benkigeras-projects` scope. Its Git root directory should be `my-app`.
