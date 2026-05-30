export type EvidenceStatus = "demonstrated" | "planned" | "verified";

export type EvidenceCategory =
  | "dashboard_ui"
  | "data_table"
  | "analytics_visualization"
  | "component_architecture"
  | "typed_boundary"
  | "accessibility"
  | "performance"
  | "testing"
  | "delivery_workflow";

export type EvidenceCard = {
  id: string;
  title: string;
  category: EvidenceCategory;
  status: EvidenceStatus;
  demonstrates: string;
  matters: string;
  phaseEvidence: string;
  expandsLater: string;
};

export type DashboardMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  signal: "strong" | "watch" | "steady";
  description: string;
};

export type SegmentBreakdown = {
  id: string;
  label: string;
  value: number;
  status: "healthy" | "watch" | "improving";
};

export type TrendPoint = {
  id: string;
  label: string;
  value: number;
  note: string;
};

export type TableRecord = {
  id: string;
  accountSegment: string;
  signal: string;
  ownerWorkflow: string;
  confidence: number;
  status: "Ready" | "Watch" | "Review";
  lastReviewed: string;
};

export type TableSortKey = "accountSegment" | "confidence" | "lastReviewed" | "signal";

export type SortDirection = "asc" | "desc";

export type TableFilters = {
  search: string;
  segment: string;
  status: string;
};

export type TableSort = {
  key: TableSortKey;
  direction: SortDirection;
};

export type QualityGate = {
  id: string;
  label: string;
  status: EvidenceStatus;
  detail: string;
};

export type DeliveryMilestone = {
  id: string;
  label: string;
  status: EvidenceStatus;
  detail: string;
};
