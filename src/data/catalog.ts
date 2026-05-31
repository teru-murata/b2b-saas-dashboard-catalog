import type {
  DashboardMetric,
  DeliveryMilestone,
  EvidenceCard,
  QualityGate,
  SegmentBreakdown,
  TableRecord,
  TrendPoint
} from "@/types/catalog";

export const evidenceCards: EvidenceCard[] = [
  {
    id: "dashboard-ui",
    title: "Data-rich dashboard UI",
    category: "dashboard_ui",
    status: "demonstrated",
    demonstrates: "Summary cards, scenario context, segment breakdowns, trend preview, and workflow signals.",
    matters: "BtoB SaaS teams need dense data to become readable decisions quickly.",
    phaseEvidence: "This phase ships a static dashboard preview backed by typed sample data.",
    expandsLater: "Later phases can add measured performance evidence after the interaction model grows."
  },
  {
    id: "table-interaction",
    title: "Data table interaction",
    category: "data_table",
    status: "demonstrated",
    demonstrates: "Semantic table markup, typed records, status labels, search, segment/status filters, sorting, result counts, and empty states.",
    matters: "Table-first workflows are common in analytics and operations tools.",
    phaseEvidence: "This phase includes client-side table controls backed by tested pure TypeScript utilities.",
    expandsLater: "Later phases can add density controls, pagination, and browser-based interaction review."
  },
  {
    id: "analytics-visual",
    title: "Analytics visualization",
    category: "analytics_visualization",
    status: "demonstrated",
    demonstrates: "A lightweight SVG trend visual, compact segment bars, value labels, and text insight summary.",
    matters: "Visual summaries help teams spot direction and variance without hiding the underlying data.",
    phaseEvidence: "This phase uses dependency-free SVG/CSS visuals backed by tested trend derivation logic.",
    expandsLater: "Later phases can add richer chart affordances after visual QA."
  },
  {
    id: "components",
    title: "Reusable component architecture",
    category: "component_architecture",
    status: "demonstrated",
    demonstrates: "Shared section, card, metric, trend, table, quality, and delivery components.",
    matters: "Reusable primitives keep feature work reviewable and consistent.",
    phaseEvidence: "The page is assembled from reusable React components rather than one monolithic view.",
    expandsLater: "Later phases can formalize variants only after the screens prove they need them."
  },
  {
    id: "typed-boundary",
    title: "Typed data boundary",
    category: "typed_boundary",
    status: "demonstrated",
    demonstrates: "Explicit TypeScript types for evidence, metrics, trends, table rows, gates, and milestones.",
    matters: "Typed contracts make UI assumptions visible before integration work begins.",
    phaseEvidence: "Static sample data is imported through typed structures.",
    expandsLater: "Later phases can add larger sample volumes and measured rendering evidence."
  },
  {
    id: "accessibility",
    title: "Accessibility baseline",
    category: "accessibility",
    status: "demonstrated",
    demonstrates: "Skip link, landmarks, one H1, semantic table markup, visible focus, and text-backed status.",
    matters: "Accessible structure improves enterprise review quality and day-to-day usability.",
    phaseEvidence: "This phase establishes semantic structure and keyboard-friendly controls.",
    expandsLater: "The deployed page has been checked with review-only visual QA. E2E coverage and deeper browser accessibility audits remain future scope."
  },
  {
    id: "performance",
    title: "Performance-minded rendering",
    category: "performance",
    status: "planned",
    demonstrates: "Static rendering, small data sets, dependency restraint, and table/chart scope control.",
    matters: "Dashboard UI can become slow when visuals and tables grow without boundaries.",
    phaseEvidence: "This phase avoids chart and table libraries, derives visuals locally, and keeps all data static.",
    expandsLater: "Later phases can add measured table and visual rendering checks."
  },
  {
    id: "testing",
    title: "Testable delivery",
    category: "testing",
    status: "verified",
    demonstrates: "Lint, unit tests, typecheck, and production build scripts are part of the repository contract.",
    matters: "Engineering leads need lightweight proof that the app can be checked locally.",
    phaseEvidence: "This phase records lint, test, typecheck, build, and audit results in public-safe build notes.",
    expandsLater: "The release path now includes local checks, cloud deployment, and deployed URL review. E2E automation and deeper performance measurement can be added later."
  },
  {
    id: "delivery",
    title: "Public-safe delivery workflow",
    category: "delivery_workflow",
    status: "demonstrated",
    demonstrates: "Small phase boundaries, sanitized summaries, artifact hygiene, and public-ready language.",
    matters: "Remote collaboration depends on reviewable changes and clean repository hygiene.",
    phaseEvidence: "This phase keeps raw artifacts out of Git and documents what is intentionally deferred.",
    expandsLater: "Later phases can add PR-style implementation notes as the app grows."
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "pipeline-health",
    label: "Pipeline health",
    value: "84%",
    change: "+6 pts",
    signal: "strong",
    description: "Healthy sample signal across active workflow segments."
  },
  {
    id: "adoption-trend",
    label: "Adoption trend",
    value: "71%",
    change: "+9 pts",
    signal: "strong",
    description: "Activation signal improved in the latest review window."
  },
  {
    id: "retention-signal",
    label: "Retention signal",
    value: "62%",
    change: "watch",
    signal: "watch",
    description: "Review queue indicates a segment needing follow-up."
  },
  {
    id: "operational-efficiency",
    label: "Operational efficiency",
    value: "3.4d",
    change: "-0.8d",
    signal: "steady",
    description: "Sample cycle time is trending toward a tighter workflow."
  }
];

export const segmentBreakdown: SegmentBreakdown[] = [
  { id: "growth", label: "Growth accounts", value: 42, status: "healthy" },
  { id: "expansion", label: "Expansion accounts", value: 31, status: "improving" },
  { id: "risk", label: "Review queue", value: 18, status: "watch" },
  { id: "activation", label: "Activation signal", value: 9, status: "improving" }
];

export const trendPoints: TrendPoint[] = [
  { id: "w1", label: "Week 1", value: 46, note: "Baseline review volume" },
  { id: "w2", label: "Week 2", value: 54, note: "Improved activation signal" },
  { id: "w3", label: "Week 3", value: 49, note: "Review queue increased" },
  { id: "w4", label: "Week 4", value: 64, note: "Workflow quality recovered" },
  { id: "w5", label: "Week 5", value: 72, note: "Operational efficiency improved" }
];

export const tableRecords: TableRecord[] = [
  {
    id: "seg-enterprise",
    accountSegment: "Enterprise",
    signal: "Pipeline health",
    ownerWorkflow: "Quarterly review",
    confidence: 88,
    status: "Ready",
    lastReviewed: "2026-05-14"
  },
  {
    id: "seg-mid-market",
    accountSegment: "Mid-market",
    signal: "Adoption trend",
    ownerWorkflow: "Activation check",
    confidence: 76,
    status: "Ready",
    lastReviewed: "2026-05-18"
  },
  {
    id: "seg-growth",
    accountSegment: "Growth",
    signal: "Retention signal",
    ownerWorkflow: "Review queue",
    confidence: 61,
    status: "Watch",
    lastReviewed: "2026-05-19"
  },
  {
    id: "seg-self-serve",
    accountSegment: "Self-serve",
    signal: "Operational efficiency",
    ownerWorkflow: "Triage loop",
    confidence: 69,
    status: "Review",
    lastReviewed: "2026-05-21"
  },
  {
    id: "seg-strategic",
    accountSegment: "Strategic",
    signal: "Workflow quality",
    ownerWorkflow: "Executive summary",
    confidence: 92,
    status: "Ready",
    lastReviewed: "2026-05-23"
  },
  {
    id: "seg-partner",
    accountSegment: "Partner",
    signal: "Activation signal",
    ownerWorkflow: "Enablement check",
    confidence: 58,
    status: "Watch",
    lastReviewed: "2026-05-24"
  },
  {
    id: "seg-regional",
    accountSegment: "Regional",
    signal: "Pipeline health",
    ownerWorkflow: "Renewal readiness",
    confidence: 73,
    status: "Ready",
    lastReviewed: "2026-05-25"
  },
  {
    id: "seg-platform",
    accountSegment: "Platform",
    signal: "Workflow quality",
    ownerWorkflow: "Exception review",
    confidence: 64,
    status: "Review",
    lastReviewed: "2026-05-26"
  },
  {
    id: "seg-operations",
    accountSegment: "Operations",
    signal: "Operational efficiency",
    ownerWorkflow: "SLA review",
    confidence: 81,
    status: "Ready",
    lastReviewed: "2026-05-27"
  }
];

export const qualityGates: QualityGate[] = [
  {
    id: "typescript",
    label: "TypeScript static data model",
    status: "demonstrated",
    detail: "Types cover evidence cards, metrics, table rows, trends, delivery milestones, and quality gates."
  },
  {
    id: "lint",
    label: "Lint verification",
    status: "verified",
    detail: "Verified with npm run lint before commit."
  },
  {
    id: "test",
    label: "Unit tests for transforms",
    status: "verified",
    detail: "Verified with npm run test for table and analytics model utilities."
  },
  {
    id: "typecheck",
    label: "Typecheck",
    status: "verified",
    detail: "Verified with npm run typecheck before commit."
  },
  {
    id: "build",
    label: "Production build",
    status: "verified",
    detail: "Verified with npm run build before commit."
  },
  {
    id: "semantic-html",
    label: "Semantic HTML",
    status: "demonstrated",
    detail: "The app uses landmarks, one H1, headings, labels, and semantic table markup."
  },
  {
    id: "future-tests",
    label: "Deployed-page visual review",
    status: "verified",
    detail:
      "The public URL was checked with review-only visual QA. No P0/P1 blockers were carried into this catalog update; E2E and deeper accessibility audits remain future scope."
  }
];

export const deliveryMilestones: DeliveryMilestone[] = [
  {
    id: "public-safe-language",
    label: "Public-safe language",
    status: "demonstrated",
    detail: "Repository copy uses generic BtoB SaaS frontend catalog language."
  },
  {
    id: "small-phases",
    label: "Small implementation phases",
    status: "demonstrated",
    detail: "Phase 3 strengthens table utility, analytics visualization, and tested transformation logic."
  },
  {
    id: "artifact-hygiene",
    label: "Artifact hygiene",
    status: "demonstrated",
    detail: "Raw runtime artifacts, screenshots, recordings, and local logs remain untracked."
  },
  {
    id: "phase-three",
    label: "Amplify deployment review",
    status: "verified",
    detail:
      "GitHub main is deployed through AWS Amplify Hosting and checked with review-only visual QA, so the public URL can be traced back to reviewed code."
  }
];
