# Phase 2 Implementation Plan

Phase 2 should scaffold and implement a small public-safe catalog. It should not add backend services, deployment, real customer data, private assets, or broad automation.

## Default Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Static/sample data only
- No backend
- No real customer data
- No third-party private assets

Tailwind is the default styling choice because it keeps the first implementation compact, makes responsive layout and state styling fast to review, and avoids early design-system file sprawl. CSS Modules remain a reasonable fallback if the implementation should minimize framework-specific class composition.

## Stories

### 1. Scaffold

- Objective: Create the minimal Next.js / React / TypeScript project scaffold.
- Acceptance criteria: App runs locally, TypeScript is enabled, no additional product dependencies are added without approval.
- Files likely to be created: `package.json`, app entry files, TypeScript config, framework config, style entry.
- Verification commands: install command, typecheck, lint if available.

### 2. App Shell

- Objective: Build navigation and page structure for the catalog.
- Acceptance criteria: Overview, dashboard, table, component, quality, delivery, and implementation sections are reachable.
- Files likely to be created: layout, page component, navigation component, shared shell styles.
- Verification commands: local render smoke check.

### 3. Overview Page

- Objective: Present the public positioning and evidence status.
- Acceptance criteria: The first screen explains the catalog without private context and marks evidence as planned, demonstrated, or verified.
- Files likely to be created: overview component and evidence summary data.
- Verification commands: typecheck and responsive manual check.

### 4. Dashboard Summary Cards

- Objective: Show summary cards using static analytics sample data.
- Acceptance criteria: Cards are readable, responsive, and tied to typed sample data.
- Files likely to be created: sample data file, metric card component, dashboard section.
- Verification commands: typecheck and basic render check.

### 5. Public-Safe Evidence Sections

- Objective: Render requirements and evidence using generic language.
- Acceptance criteria: Sections cover dashboard UI, tables, visualization, components, accessibility, performance, testing, documentation, and delivery workflow.
- Files likely to be created: evidence data, evidence card component, quality section, delivery notes.
- Verification commands: typecheck and content scan.

### 6. Static Sample Data Model

- Objective: Define typed sample data for dashboard and table sections.
- Acceptance criteria: Data is artificial, generic, and does not resemble real customer data.
- Files likely to be created: `src/data/sample-dashboard.ts`, `src/types/catalog.ts`.
- Verification commands: typecheck and unit test later.

### 7. Basic Responsive Layout

- Objective: Ensure the initial catalog reads well on mobile and desktop.
- Acceptance criteria: No overlapping text, tables have a mobile strategy, and navigation remains usable.
- Files likely to be created: responsive styles and layout components.
- Verification commands: manual viewport check; browser automation later if approved.

## Explicit Phase 2 Non-Scope

- No charts unless trivial and dependency-free.
- No E2E tests yet.
- No visual review tool yet.
- No deployment.
- No CI.
- No backend or live API.
- No private assets or real customer data.

## What to Defer to Phase 3

- Full data table interactions.
- Chart implementation with a selected library.
- Unit tests and browser smoke tests.
- Visual review.
- Performance measurement.
- Deployment discussion.
- Optional component gallery after real components exist.

## Later Visual Review

The visual review should happen after Overview, Dashboard Demo, Data Table Demo, Component System, and Quality Evidence screens exist. It should inspect dashboard readability, table density, mobile layout, spacing, typography, focus states, and accessibility affordances. Raw screenshots and browser traces remain untracked unless explicitly approved and sanitized.
