# BtoB SaaS Dashboard Catalog

React / Next.js / TypeScript frontend catalog for BtoB SaaS analytics dashboards, focused on data-rich UI, reusable components, accessibility, performance, and testable delivery.

## What This Demonstrates

- Public presentation-ready catalog structure.
- Dashboard preview with typed static sample data.
- Data table preview with semantic markup, search, filters, accessible sorting, result counts, empty state, and status labels.
- Lightweight analytics visual with inline SVG, segment bars, text summary, and no chart dependency.
- Evidence cards that distinguish demonstrated, verified, and planned work.
- Reusable React components assembled into a serious frontend showcase.
- Accessibility-minded structure with skip link, landmarks, headings, focus styles, and table semantics.
- Quality-oriented delivery through lint, unit tests, typecheck, and production build scripts.

## Current Status

Phase 5B adds a Japanese presentation mode while preserving the reviewed public catalog surface. Japanese is the default presentation language, and English remains available through the in-page language switch. The table includes search, filters, accessible sorting, empty state, result counts, visible sort affordances, and a mobile scroll cue. The analytics visual derives a meaningful trend from static sample data without chart libraries and has passed review-only visual QA. E2E tests, deployment, and deeper performance measurement remain deferred.

## Local Setup

```sh
npm install
npm run dev
```

## Available Scripts

```sh
npm run lint
npm run test
npm run typecheck
npm run build
npm run dev
```

## Architecture Overview

- `src/app/` contains the App Router entry, global CSS, and page-level CSS module.
- `src/components/` contains reusable UI components such as sections, evidence cards, metric cards, dashboard preview, data table preview, trend preview, quality gates, and delivery timeline.
- `src/data/` contains public-safe localized copy and static sample data.
- `src/lib/` contains pure TypeScript transformation utilities for table filtering/sorting and analytics derivation.
- `src/types/` contains the TypeScript data model for catalog evidence, metrics, table rows, trend points, quality gates, delivery milestones, and locale selection.
- `docs/` contains public-safe planning and build notes.

## Public-Safe Data Policy

All data is artificial and generic. The project does not include real customer data, private assets, external API data, secrets, credentials, analytics tracking, backend integration, or organization-specific context.

## Quality Checks

The current release candidate is expected to pass:

```sh
npm run lint
npm run test
npm run typecheck
npm run build
```

Current implemented evidence:

- Table search, segment filter, status filter, sortable columns, result count, and empty state.
- Japanese default presentation mode with an English language switch.
- Inline SVG analytics trend with value labels, adjacent text summary, and tested derivation logic.
- Review-only visual QA accepted the current visual, responsive, accessibility, and public-safe presentation state.
- Unit tests for table model and analytics model utilities.
- No chart library, table library, UI kit, backend, live API, or real customer data.

Still deferred:

- E2E tests.
- Deployment.
- Full accessibility certification.
- Complete performance measurement.

## Roadmap

- Phase 3.5: review-only visual QA for responsive layout, visual hierarchy, and accessibility observations.
- Later: add focused browser checks and measured performance evidence when the interaction surface justifies it.

## Intentionally Not Included

- Backend services.
- Authentication.
- Database code.
- External API integration.
- Chart or table libraries.
- CI, deployment, or infrastructure.
- Real customer data or private assets.
- E2E tests in this phase.
