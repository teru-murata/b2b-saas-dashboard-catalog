# Phase 4 Visual Fix Plan

## Purpose

Phase 4 will apply the accepted visual QA findings from the Agy / Antigravity review. The goal is to improve public presentation readiness without expanding the app beyond a BtoB SaaS frontend catalog.

## Accepted P0 Fixes

None. The review accepted the current catalog and did not identify release-blocking visual, responsive, accessibility, or public-safety issues.

## Accepted P1 Fixes

- Darken muted small text for stronger readability.
- Add hover feedback to sortable table headers.
- Add a visible mobile scroll cue for the data table.
- Add an accessible title to the analytics SVG.

## Deferred P2 Polish

- Add subtle guide lines or stronger point-to-label alignment in the trend chart.
- Add a compact app-like cue to the table empty state.
- Smooth the mid-size navigation wrapping.
- Add broader transition polish after core fixes are complete.

## Files Likely To Change In Phase 4

- `src/app/page.module.css`
- `src/components/DataTablePreview.tsx`
- `src/components/AnalyticsVisual.tsx`
- `src/components/DataTablePreview.module.css`
- `src/components/AnalyticsVisual.module.css`
- `README.md` only if implementation status wording changes.

## Acceptance Criteria

- Table sort controls have visible hover feedback.
- Mobile users can discover horizontal table scrolling before swiping.
- Muted small text has stronger contrast than the current token.
- Analytics SVG has a useful accessible title.
- Chart labels and trend points are easier to connect visually.
- Empty state remains concise and public-safe.
- No chart, table, UI, animation, or E2E dependency is added.
- No backend, auth, database, external API, CI, deploy, or infra work is introduced.
- Public-safe language remains intact.

## Checks To Run

- `npm run lint`
- `npm run test`
- `npm run typecheck`
- `npm run build`
- `npm audit --audit-level=high`
- Public-safety grep checks before commit.
- Manual responsive review at desktop, tablet, mobile, and narrow mobile widths.

## Agy / Antigravity Follow-Up

A second Agy / Antigravity review is recommended after Phase 4 fixes if responsive table behavior or analytics SVG geometry changes.

## Out Of Scope

- Backend work.
- Auth.
- Database work.
- External API integration.
- Chart library.
- Table library.
- UI component library.
- Animation library.
- CI, deploy, or infra.
- E2E tooling unless approved later.
