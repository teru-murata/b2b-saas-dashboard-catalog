# Catalog Content Model

## Page Map

- Overview
- Dashboard Demo
- Data Table Demo
- Analytics Visualization Demo
- Component System
- Quality Evidence
- Delivery Notes
- Implementation Notes

## Reusable Sections

- Positioning header
- Evidence summary
- Dashboard metric group
- Table workflow section
- Visualization notes
- Component system section
- Quality checklist
- Delivery workflow notes
- Implementation decision record

## Content Blocks

- EvidenceCard
- MetricCard
- DataTablePreview
- FilterBar
- StatusBadge
- ChartPlaceholder
- ComponentUsageNote
- QualityChecklist
- DeliveryChecklist
- AssumptionNote

## Data Model

```ts
type EvidenceCategory =
  | "dashboard_ui"
  | "data_table"
  | "analytics_visualization"
  | "component_architecture"
  | "typed_boundary"
  | "design_system"
  | "accessibility"
  | "performance"
  | "testing"
  | "documentation"
  | "delivery_workflow";

type EvidenceStatus = "planned" | "demonstrated" | "verified";

type CatalogEvidence = {
  id: string;
  title: string;
  summary: string;
  category: EvidenceCategory;
  status: EvidenceStatus;
  demoEvidence: string;
  qualityEvidence: string;
  pitchNote: string;
};
```

## Evidence Taxonomy

- Dashboard UI
- Data table interaction
- Analytics visualization
- Component architecture
- Typed data boundary
- Design-system discipline
- Accessibility
- Performance
- Testing
- Documentation
- Delivery workflow

## Public Copy Guidelines

- Use generic BtoB SaaS and analytics dashboard language.
- Use "planned" for work not yet implemented.
- Use "demonstrated" only after UI or code exists.
- Use "verified" only after checks or review evidence exists.
- Keep claims tied to repo evidence.
- Avoid references to non-public context, named organizations, real customers, or private assets.

## Acceptance Criteria

Overview:
- States the positioning clearly.
- Shows what evidence is planned, demonstrated, or verified.
- Does not disclose non-public context.

Dashboard Demo:
- Shows summary metrics, business-data hierarchy, and state handling.
- Stays readable on desktop and mobile.

Data Table Demo:
- Uses realistic sample fields.
- Supports clear sorting, filtering, status, and empty-state behavior in later implementation.

Analytics Visualization Demo:
- Starts as a placeholder or trivial chart if scope is tight.
- Explains what decision the chart supports.

Component System:
- Shows reusable pieces through real page sections before adding any standalone gallery.
- Uses consistent tokens and focus states.

Quality Evidence:
- Lists concrete local checks once implemented.
- Separates measured evidence from planned rationale.

Delivery Notes:
- Shows issue-style planning, assumptions, and review checklist.
- Does not imply participation in any private or external team.

Implementation Notes:
- Explains stack decisions, sample data boundaries, and deferred work.
- Avoids backend, deployment, and private data claims.

## What Not to Disclose

- Named organizations, non-public review outputs, non-public strategy docs, copied requirements, real customer data, credentials, raw prompts, raw transcripts, raw logs, screenshots, recordings, browser traces, and unnecessary local paths.
