# BtoB SaaS Dashboard Catalog

React / Next.js / TypeScript frontend catalog for BtoB SaaS analytics dashboards, focused on data-rich UI, reusable components, accessibility, performance, and testable delivery.

## What This Demonstrates

- Public presentation-ready catalog structure.
- Dashboard preview with typed static sample data.
- Data table preview with semantic markup, filtering, sorting, and status labels.
- Lightweight analytics visual without chart dependencies.
- Evidence cards that distinguish demonstrated, verified, and planned work.
- Reusable React components assembled into a serious frontend showcase.
- Accessibility-minded structure with skip link, landmarks, headings, focus styles, and table semantics.
- Quality-oriented delivery through lint and production build scripts.

## Current Status

Phase 2 establishes a runnable initial catalog. It is intentionally useful for first review, while deeper data table utility and stronger analytics visualization are deferred to Phase 3.

## Local Setup

```sh
npm install
npm run dev
```

## Available Scripts

```sh
npm run lint
npm run build
npm run dev
```

## Architecture Overview

- `src/app/` contains the App Router entry, global CSS, and page-level CSS module.
- `src/components/` contains reusable UI components such as sections, evidence cards, metric cards, dashboard preview, data table preview, trend preview, quality gates, and delivery timeline.
- `src/data/` contains public-safe static sample data.
- `src/types/` contains the TypeScript data model for catalog evidence, metrics, table rows, trend points, quality gates, and delivery milestones.
- `docs/` contains public-safe planning and build notes.

## Public-Safe Data Policy

All data is artificial and generic. The project does not include real customer data, private assets, external API data, secrets, credentials, analytics tracking, backend integration, or organization-specific context.

## Quality Checks

Phase 2 is complete when these commands pass:

```sh
npm run lint
npm run build
```

## Roadmap

- Phase 3: strengthen data table utility and analytics visualization credibility.
- Later: add focused unit tests, browser review, visual review, and measured performance evidence when the interaction surface justifies it.

## Intentionally Not Included

- Backend services.
- Authentication.
- Database code.
- External API integration.
- Chart or table libraries.
- CI, deployment, or infrastructure.
- Real customer data or private assets.
- E2E tests in this phase.
