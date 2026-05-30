# Phase 5 Public Release Readiness Plan

## Purpose

Phase 5 prepares the repository for public sharing after the second-pass visual QA accepted the current frontend catalog and found no P0 or P1 blockers.

## Release-Readiness Checklist

- Confirm the branch strategy before any merge.
- Confirm the README accurately describes the current app state.
- Confirm all public-safe documentation is consistent.
- Confirm no non-public planning context or target-specific language exists.
- Confirm no raw review artifacts, screenshots, recordings, traces, prompts, or transcripts are tracked.
- Confirm `npm run lint`, `npm run test`, `npm run typecheck`, and `npm run build` pass.
- Confirm `npm audit --audit-level=high` remains acceptable.

## Public Repo Hygiene Checklist

- Review `.gitignore` for generated files and local agent folders.
- Confirm `.agent-runs/`, `.claude/`, and `.antigravity/` are not tracked.
- Confirm `node_modules/`, `.next/`, and TypeScript build info are ignored.
- Confirm no local absolute paths appear in tracked public-facing docs.
- Confirm no secrets, credentials, customer data, private assets, or non-public source excerpts are present.

## README Readiness

- Update README status from Phase 3 wording to the latest reviewed state if approved.
- Keep positioning generic and public-safe.
- Preserve the BtoB SaaS frontend catalog framing.
- Avoid target-specific claims or private narrative.

## License Decision Required

A license should be selected before public release. The choice should be made by the human owner before creating or pushing to a public remote.

## GitHub Remote Creation Decision Required

No remote exists yet. The human owner should approve whether to create a GitHub remote, what repository name to use, and whether the remote should start private or public.

## Branch And Merge Plan

- Decide whether to merge the latest AI run branch into the public main branch.
- Keep merge history clean enough for public review.
- Avoid squashing away useful phase history unless the human owner wants a simpler public history.
- Do not push until explicit approval is given.

## Public-Safety Scan Plan

Run private-leakage and URL scans before any push. Inspect every match manually and rewrite anything that is not public-safe.

## Dependency Audit Stance

The high-level audit currently passes. Moderate PostCSS advisories remain through Next.js, and the forced fix path is breaking. Do not run `npm audit fix --force` without a separate dependency-upgrade decision.

## Build, Test, And Typecheck Checklist

- `npm run lint`
- `npm run test`
- `npm run typecheck`
- `npm run build`
- `npm audit --audit-level=high`

## Optional Deployment Decision

Deployment is not required for repository release readiness. If deployment is approved later, choose the host, environment settings, and public URL policy as a separate task.

## Out Of Scope

- Feature expansion.
- E2E tooling unless separately approved.
- Backend, auth, database, or external API work.
- CI, deployment, or infrastructure unless explicitly approved.
- Target-specific language.

## Human Approvals Needed Before Public Push Or Publish

- License selection.
- Remote creation and repository name.
- Public/private remote visibility.
- Branch merge strategy.
- Whether to deploy.
- Whether to create a release tag.
