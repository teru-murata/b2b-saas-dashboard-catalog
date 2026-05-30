import type {
  DashboardMetric,
  DeliveryMilestone,
  EvidenceCard,
  QualityGate,
  SegmentBreakdown,
  TableRecord,
  TrendPoint
} from "@/types/catalog";
import type { Locale, LocaleOption } from "@/types/locale";

export const localeOptions: LocaleOption[] = [
  { locale: "ja", label: "日本語" },
  { locale: "en", label: "English" }
];

type StatusLabels = {
  demonstrated: string;
  planned: string;
  verified: string;
  Ready: string;
  Watch: string;
  Review: string;
};

type EvidenceLabels = {
  demonstrates: string;
  matters: string;
  phaseEvidence: string;
  expandsLater: string;
};

type DashboardCopy = {
  eyebrow: string;
  title: string;
  description: string;
  scenarioEyebrow: string;
  scenarioTitle: string;
  scenarioDescription: string;
  scenarioItems: { label: string; detail: string }[];
};

type TableCopy = {
  toolbarSearch: string;
  searchPlaceholder: string;
  segmentLabel: string;
  allSegments: string;
  statusLabel: string;
  allStatuses: string;
  clearFilters: string;
  resultShowing: string;
  resultOf: string;
  resultRecords: string;
  averageConfidence: string;
  statusCountsLabel: string;
  activeFilters: string;
  noFilters: string;
  anySearch: string;
  columns: Record<"accountSegment" | "signal" | "ownerWorkflow" | "confidence" | "status" | "lastReviewed", string>;
  sortIdle: string;
  sortAsc: string;
  sortDesc: string;
  sortAriaIdle: string;
  sortAriaReverse: string;
  scrollCue: string;
  regionLabel: string;
  caption: string;
  emptyTitle: string;
  emptyBody: string;
  helper: string;
};

type TrendCopy = {
  title: string;
  description: string;
  metaTitle: string;
  svgTitle: string;
  latestUp: (latest: string, delta: number) => string;
  latestDown: (latest: string, delta: number) => string;
  latestSteady: (latest: string) => string;
  insightTitle: string;
  insightSentence: (direction: "up" | "down" | "steady", delta: number, peak: string, peakLabel: string) => string;
  lightweightNote: string;
  barsLabel: string;
};

type SegmentCopy = {
  title: string;
  helper: string;
  largest: string;
  total: string;
};

type CatalogCopy = {
  skipLink: string;
  navLabel: string;
  brand: string;
  navItems: { href: string; label: string }[];
  languageSwitch: {
    label: string;
    optionLabel: (label: string, active: boolean) => string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    actions: { href: string; label: string }[];
    panelLabel: string;
    panelTitle: string;
    panelItems: { label: string; value: string }[];
  };
  sections: {
    evidence: { eyebrow: string; title: string; description: string };
    dashboard: DashboardCopy;
    table: { eyebrow: string; title: string; description: string };
    quality: { eyebrow: string; title: string; description: string };
    delivery: { eyebrow: string; title: string; description: string };
    implementation: { eyebrow: string; title: string; description: string };
  };
  evidenceLabels: EvidenceLabels;
  statusLabels: StatusLabels;
  dashboardMetrics: DashboardMetric[];
  evidenceCards: Array<EvidenceCard & { categoryLabel: string }>;
  segmentBreakdown: SegmentBreakdown[];
  trendPoints: TrendPoint[];
  tableRecords: TableRecord[];
  qualityGates: QualityGate[];
  deliveryMilestones: DeliveryMilestone[];
  table: TableCopy;
  trend: TrendCopy;
  segment: SegmentCopy;
  implementationNotes: { title: string; body: string }[];
  footer: string;
};

const englishCopy: CatalogCopy = {
  skipLink: "Skip to content",
  navLabel: "Catalog sections",
  brand: "BtoB SaaS frontend catalog",
  navItems: [
    { href: "#overview", label: "Overview" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#table", label: "Table" },
    { href: "#quality", label: "Quality" },
    { href: "#delivery", label: "Delivery" }
  ],
  languageSwitch: {
    label: "Presentation language",
    optionLabel: (label, active) => `${label}${active ? " selected" : ""}`
  },
  hero: {
    eyebrow: "Public presentation-ready catalog",
    title: "React / Next.js / TypeScript frontend catalog for BtoB SaaS analytics dashboards.",
    description:
      "An evidence-driven frontend showcase for data-rich UI, reusable components, typed data boundaries, accessibility, performance-minded rendering, testable delivery, and a remote GitHub-style workflow.",
    actions: [
      { href: "#dashboard", label: "View dashboard preview" },
      { href: "#table", label: "Inspect table preview" }
    ],
    panelLabel: "Phase 5B evidence summary",
    panelTitle: "Current status",
    panelItems: [
      { label: "Japanese mode", value: "Default" },
      { label: "English fallback", value: "Available" },
      { label: "Lint, test, build", value: "Verified before commit" }
    ]
  },
  sections: {
    evidence: {
      eyebrow: "Evidence model",
      title: "Engineering-lead-friendly proof, without private context",
      description: "Each card separates what exists now from what later phases can improve."
    },
    dashboard: {
      eyebrow: "Dashboard preview",
      title: "Data-rich dashboard scenario",
      description:
        "Static sample data shows how summary metrics, segment signals, and trend context can fit into one readable surface.",
      scenarioEyebrow: "Data-rich dashboard scenario",
      scenarioTitle: "Pipeline health review",
      scenarioDescription:
        "A static, public-safe scenario that combines account segment signals, operational efficiency, activation signals, and a review queue into one decision surface.",
      scenarioItems: [
        { label: "Typed boundary", detail: "sample records are imported from TypeScript data." },
        { label: "Quality signal", detail: "status is expressed with text and color, never color alone." },
        { label: "Future-ready", detail: "deeper table and analytics behavior is intentionally deferred." }
      ]
    },
    table: {
      eyebrow: "Data interaction",
      title: "Data table preview",
      description:
        "A semantic table with typed sample records, search, segment/status filters, accessible sorting, result count, and empty state."
    },
    quality: {
      eyebrow: "Quality evidence",
      title: "Quality-oriented delivery",
      description:
        "This catalog verifies lint, unit tests, typecheck, and build while keeping E2E and deeper measurement clearly deferred."
    },
    delivery: {
      eyebrow: "Delivery notes",
      title: "Public-safe GitHub-style workflow",
      description: "The catalog is structured for small reviewable phases, sanitized summaries, and raw artifact hygiene."
    },
    implementation: {
      eyebrow: "Implementation notes",
      title: "Current scope and intentional limits",
      description: "The app is useful for public review while keeping later work clearly labeled."
    }
  },
  evidenceLabels: {
    demonstrates: "Demonstrates",
    matters: "Why it matters",
    phaseEvidence: "Current evidence",
    expandsLater: "Expanded later"
  },
  statusLabels: {
    demonstrated: "Demonstrated",
    planned: "Planned",
    verified: "Verified",
    Ready: "Ready",
    Watch: "Watch",
    Review: "Review"
  },
  dashboardMetrics: [
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
  ],
  evidenceCards: [
    {
      id: "dashboard-ui",
      title: "Data-rich dashboard UI",
      category: "dashboard_ui",
      categoryLabel: "Dashboard UI",
      status: "demonstrated",
      demonstrates: "Summary cards, scenario context, segment breakdowns, trend preview, and workflow signals.",
      matters: "BtoB SaaS teams need dense data to become readable decisions quickly.",
      phaseEvidence: "The app ships a static dashboard preview backed by typed sample data.",
      expandsLater: "Later phases can add measured performance evidence after the interaction model grows."
    },
    {
      id: "table-interaction",
      title: "Data table interaction",
      category: "data_table",
      categoryLabel: "Data table",
      status: "demonstrated",
      demonstrates:
        "Semantic table markup, typed records, status labels, search, segment/status filters, sorting, result counts, and empty states.",
      matters: "Table-first workflows are common in analytics and operations tools.",
      phaseEvidence: "Client-side table controls are backed by tested pure TypeScript utilities.",
      expandsLater: "Later phases can add density controls, pagination, and browser-based interaction review."
    },
    {
      id: "analytics-visual",
      title: "Analytics visualization",
      category: "analytics_visualization",
      categoryLabel: "Analytics visual",
      status: "demonstrated",
      demonstrates: "A lightweight SVG trend visual, compact segment bars, value labels, and text insight summary.",
      matters: "Visual summaries help teams spot direction and variance without hiding the underlying data.",
      phaseEvidence: "Dependency-free SVG/CSS visuals are backed by tested trend derivation logic.",
      expandsLater: "Later phases can add richer chart affordances after visual QA."
    },
    {
      id: "components",
      title: "Reusable component architecture",
      category: "component_architecture",
      categoryLabel: "Components",
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
      categoryLabel: "Typed boundary",
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
      categoryLabel: "Accessibility",
      status: "demonstrated",
      demonstrates: "Skip link, landmarks, one H1, semantic table markup, visible focus, and text-backed status.",
      matters: "Accessible structure improves enterprise review quality and day-to-day usability.",
      phaseEvidence: "The app establishes semantic structure and keyboard-friendly controls.",
      expandsLater: "Later phases can add browser-based accessibility checks and visual QA."
    },
    {
      id: "performance",
      title: "Performance-minded rendering",
      category: "performance",
      categoryLabel: "Performance",
      status: "planned",
      demonstrates: "Static rendering, small data sets, dependency restraint, and table/chart scope control.",
      matters: "Dashboard UI can become slow when visuals and tables grow without boundaries.",
      phaseEvidence: "The app avoids chart and table libraries, derives visuals locally, and keeps all data static.",
      expandsLater: "Later phases can add measured table and visual rendering checks."
    },
    {
      id: "testing",
      title: "Testable delivery",
      category: "testing",
      categoryLabel: "Testing",
      status: "verified",
      demonstrates: "Lint, unit tests, typecheck, and production build scripts are part of the repository contract.",
      matters: "Engineering leads need lightweight proof that the app can be checked locally.",
      phaseEvidence: "Build notes record lint, test, typecheck, build, and audit results.",
      expandsLater: "Later phases can add browser review and visual QA."
    },
    {
      id: "delivery",
      title: "Public-safe delivery workflow",
      category: "delivery_workflow",
      categoryLabel: "Delivery",
      status: "demonstrated",
      demonstrates: "Small phase boundaries, sanitized summaries, artifact hygiene, and public-ready language.",
      matters: "Remote collaboration depends on reviewable changes and clean repository hygiene.",
      phaseEvidence: "Raw artifacts stay out of Git and deferred work is documented.",
      expandsLater: "Later phases can add PR-style implementation notes as the app grows."
    }
  ],
  segmentBreakdown: [
    { id: "growth", label: "Growth accounts", value: 42, status: "healthy" },
    { id: "expansion", label: "Expansion accounts", value: 31, status: "improving" },
    { id: "risk", label: "Review queue", value: 18, status: "watch" },
    { id: "activation", label: "Activation signal", value: 9, status: "improving" }
  ],
  trendPoints: [
    { id: "w1", label: "Week 1", value: 46, note: "Baseline review volume" },
    { id: "w2", label: "Week 2", value: 54, note: "Improved activation signal" },
    { id: "w3", label: "Week 3", value: 49, note: "Review queue increased" },
    { id: "w4", label: "Week 4", value: 64, note: "Workflow quality recovered" },
    { id: "w5", label: "Week 5", value: 72, note: "Operational efficiency improved" }
  ],
  tableRecords: [
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
  ],
  qualityGates: [
    {
      id: "typescript",
      label: "TypeScript static data model",
      status: "demonstrated",
      detail: "Types cover evidence cards, metrics, table rows, trends, delivery milestones, and quality gates."
    },
    { id: "lint", label: "Lint verification", status: "verified", detail: "Verified with npm run lint before commit." },
    {
      id: "test",
      label: "Unit tests for transforms",
      status: "verified",
      detail: "Verified with npm run test for table and analytics model utilities."
    },
    { id: "typecheck", label: "Typecheck", status: "verified", detail: "Verified with npm run typecheck before commit." },
    { id: "build", label: "Production build", status: "verified", detail: "Verified with npm run build before commit." },
    {
      id: "semantic-html",
      label: "Semantic HTML",
      status: "demonstrated",
      detail: "The app uses landmarks, one H1, headings, labels, and semantic table markup."
    },
    {
      id: "future-tests",
      label: "Browser and visual review",
      status: "planned",
      detail: "E2E and deeper browser accessibility checks are deferred to later phases."
    }
  ],
  deliveryMilestones: [
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
      detail: "Small phases keep table, analytics, review, and release-readiness work inspectable."
    },
    {
      id: "artifact-hygiene",
      label: "Artifact hygiene",
      status: "demonstrated",
      detail: "Raw runtime artifacts, screenshots, recordings, and local logs remain untracked."
    },
    {
      id: "japanese-mode",
      label: "Japanese presentation mode",
      status: "demonstrated",
      detail: "Japanese is the default visible language, with English available from the switch."
    }
  ],
  table: {
    toolbarSearch: "Search records",
    searchPlaceholder: "Try Ready, Watch, or activation",
    segmentLabel: "Segment",
    allSegments: "All segments",
    statusLabel: "Status",
    allStatuses: "All statuses",
    clearFilters: "Clear filters",
    resultShowing: "Showing",
    resultOf: "of",
    resultRecords: "sample records.",
    averageConfidence: "Average confidence is",
    statusCountsLabel: "Visible status counts",
    activeFilters: "Active filters",
    noFilters: "No filters are active.",
    anySearch: "any search",
    columns: {
      accountSegment: "Account segment",
      signal: "Signal",
      ownerWorkflow: "Owner workflow",
      confidence: "Confidence",
      status: "Status",
      lastReviewed: "Last reviewed"
    },
    sortIdle: "Sort",
    sortAsc: "Asc",
    sortDesc: "Desc",
    sortAriaIdle: "Not sorted. Activate to sort this column.",
    sortAriaReverse: "Activate to reverse order.",
    scrollCue: "More columns are available across the table. On narrow screens, scroll sideways inside the table area.",
    regionLabel: "Static data table preview",
    caption:
      "Public-safe sample records showing account segment signals, owner workflows, confidence, status, and review recency.",
    emptyTitle: "No matching sample records.",
    emptyBody: "Adjust search, segment, or status filters to restore the table.",
    helper:
      "Table clarity matters because many BtoB SaaS workflows rely on dense operational records. This phase demonstrates the baseline without adding a table library."
  },
  trend: {
    title: "Analytics visual preview",
    description: "Dependency-free SVG trend and list-backed values so the visual is meaningful without a chart library.",
    metaTitle: "Workflow quality trend",
    svgTitle: "Workflow quality trend sparkline",
    latestUp: (latest, delta) => `Latest value is ${latest}, up ${delta} points from the first period.`,
    latestDown: (latest, delta) => `Latest value is ${latest}, down ${delta} points from the first period.`,
    latestSteady: (latest) => `Latest value is ${latest}, unchanged from the first period.`,
    insightTitle: "Insight summary",
    insightSentence: (direction, delta, peak, peakLabel) =>
      `The sample trend moves ${direction === "up" ? "upward" : direction} by ${Math.abs(
        delta
      )} points from first to latest period. Peak sample value is ${peak} in ${peakLabel}.`,
    lightweightNote: "This is a lightweight implementation, not a full charting system.",
    barsLabel: "Workflow quality trend by week"
  },
  segment: {
    title: "Segment breakdown",
    helper:
      "Values are static sample shares. Text labels and percentages keep the visual readable without relying on color.",
    largest: "Largest segment",
    total: "Total sample share"
  },
  implementationNotes: [
    {
      title: "Static data only",
      body: "Sample data is artificial and local. There is no backend, no external API data, and no real customer data."
    },
    {
      title: "No chart or table libraries yet",
      body: "The visual preview and table behavior are dependency-free. Table and analytics derivations use typed utilities instead of chart or table libraries."
    },
    {
      title: "Deferred review depth",
      body: "Unit tests exist for transformation logic. E2E, deeper browser accessibility checks, and deployment remain deferred."
    }
  ],
  footer: "BtoB SaaS frontend catalog. Public-safe sample data only."
};

const japaneseCopy: CatalogCopy = {
  ...englishCopy,
  skipLink: "本文へ移動",
  navLabel: "カタログ内セクション",
  brand: "BtoB SaaS フロントエンドカタログ",
  navItems: [
    { href: "#overview", label: "概要" },
    { href: "#dashboard", label: "ダッシュボード" },
    { href: "#table", label: "テーブル" },
    { href: "#quality", label: "品質" },
    { href: "#delivery", label: "デリバリー" }
  ],
  languageSwitch: {
    label: "表示言語",
    optionLabel: (label, active) => `${label}${active ? "を選択中" : "に切り替え"}`
  },
  hero: {
    eyebrow: "公開URLで提示できるカタログ",
    title: "BtoB SaaS 分析ダッシュボードのための React / Next.js / TypeScript フロントエンドカタログ。",
    description:
      "データリッチな UI、再利用可能なコンポーネント、型安全なデータ境界、アクセシビリティ、軽量な描画、検証可能なデリバリーを実装証拠で見せるフロントエンドショーケースです。",
    actions: [
      { href: "#dashboard", label: "ダッシュボードを見る" },
      { href: "#table", label: "テーブルを確認する" }
    ],
    panelLabel: "Phase 5B の証拠サマリー",
    panelTitle: "現在の状態",
    panelItems: [
      { label: "日本語モード", value: "標準表示" },
      { label: "英語表示", value: "切り替え可能" },
      { label: "Lint / Test / Build", value: "commit 前に検証" }
    ]
  },
  sections: {
    evidence: {
      eyebrow: "証拠モデル",
      title: "エンジニアリングリードが確認しやすい実装証拠",
      description: "各カードで、現在実装済みの証拠と今後広げられる余地を分けて示します。"
    },
    dashboard: {
      eyebrow: "ダッシュボードプレビュー",
      title: "データリッチなダッシュボードシナリオ",
      description:
        "静的なサンプルデータで、サマリーメトリクス、セグメントシグナル、トレンド文脈を 1 つの読みやすい画面に整理します。",
      scenarioEyebrow: "データリッチなダッシュボードシナリオ",
      scenarioTitle: "パイプライン健全性レビュー",
      scenarioDescription:
        "アカウントセグメント、運用効率、活性化シグナル、レビュー待ちを 1 つの判断面にまとめた公開向けの静的シナリオです。",
      scenarioItems: [
        { label: "型安全な境界", detail: "サンプルレコードは TypeScript データから読み込みます。" },
        { label: "品質シグナル", detail: "ステータスは色だけでなくテキストでも表現します。" },
        { label: "拡張しやすい構成", detail: "より深いテーブル操作や分析表現は後続フェーズに分けています。" }
      ]
    },
    table: {
      eyebrow: "データ操作",
      title: "データテーブルプレビュー",
      description:
        "型付きサンプルレコード、検索、セグメント/ステータスフィルタ、アクセシブルな並び替え、件数表示、空状態を持つセマンティックなテーブルです。"
    },
    quality: {
      eyebrow: "品質証跡",
      title: "検証可能なデリバリー",
      description:
        "lint、unit test、typecheck、build を確認しつつ、E2E とより深い計測は後続スコープとして明示します。"
    },
    delivery: {
      eyebrow: "デリバリーノート",
      title: "公開向けの GitHub スタイルワークフロー",
      description: "小さくレビューしやすいフェーズ、サニタイズ済みサマリー、raw artifact を残さない運用を示します。"
    },
    implementation: {
      eyebrow: "実装ノート",
      title: "現在のスコープと意図的な制限",
      description: "公開レビューに十分な範囲を実装し、後続作業は明確にラベル付けしています。"
    }
  },
  evidenceLabels: {
    demonstrates: "示していること",
    matters: "重要な理由",
    phaseEvidence: "現在の証拠",
    expandsLater: "今後の拡張"
  },
  statusLabels: {
    demonstrated: "実装済み",
    planned: "計画",
    verified: "検証済み",
    Ready: "Ready",
    Watch: "Watch",
    Review: "Review"
  },
  dashboardMetrics: [
    {
      id: "pipeline-health",
      label: "パイプライン健全性",
      value: "84%",
      change: "+6 pt",
      signal: "strong",
      description: "アクティブなワークフローセグメント全体で健全なサンプルシグナル。"
    },
    {
      id: "adoption-trend",
      label: "導入トレンド",
      value: "71%",
      change: "+9 pt",
      signal: "strong",
      description: "直近の確認期間で活性化シグナルが改善。"
    },
    {
      id: "retention-signal",
      label: "継続シグナル",
      value: "62%",
      change: "watch",
      signal: "watch",
      description: "フォローが必要なセグメントをレビュー待ちとして表示。"
    },
    {
      id: "operational-efficiency",
      label: "運用効率",
      value: "3.4日",
      change: "-0.8日",
      signal: "steady",
      description: "サンプルのサイクルタイムはより短いワークフローへ推移。"
    }
  ],
  evidenceCards: [
    {
      id: "dashboard-ui",
      title: "データリッチなダッシュボード UI",
      category: "dashboard_ui",
      categoryLabel: "ダッシュボード UI",
      status: "demonstrated",
      demonstrates: "サマリーカード、シナリオ文脈、セグメント分解、トレンドプレビュー、ワークフローシグナル。",
      matters: "BtoB SaaS では、密度の高いデータを判断しやすい形に変換する必要があります。",
      phaseEvidence: "型付きサンプルデータに基づく静的ダッシュボードプレビューを実装しています。",
      expandsLater: "インタラクションが増えた段階で、測定済みのパフォーマンス証跡を追加できます。"
    },
    {
      id: "table-interaction",
      title: "データテーブル操作",
      category: "data_table",
      categoryLabel: "データテーブル",
      status: "demonstrated",
      demonstrates: "セマンティックな table、型付きレコード、ステータス表示、検索、フィルタ、並び替え、件数、空状態。",
      matters: "分析や運用系の SaaS では、テーブル起点のワークフローが中心になりやすいためです。",
      phaseEvidence: "クライアント側のテーブル操作を、テスト済みの TypeScript ユーティリティで支えています。",
      expandsLater: "密度調整、ページング、ブラウザ上の操作レビューは後続で追加できます。"
    },
    {
      id: "analytics-visual",
      title: "分析ビジュアル",
      category: "analytics_visualization",
      categoryLabel: "分析ビジュアル",
      status: "demonstrated",
      demonstrates: "軽量な SVG トレンド、セグメントバー、値ラベル、テキストによるインサイト要約。",
      matters: "視覚要約は、元データを隠さずに方向性や変化を把握しやすくします。",
      phaseEvidence: "依存ライブラリなしの SVG/CSS 表現を、テスト済みのトレンド算出ロジックで支えています。",
      expandsLater: "視覚レビュー後に、より豊かなチャート操作を追加できます。"
    },
    {
      id: "components",
      title: "再利用可能なコンポーネント構成",
      category: "component_architecture",
      categoryLabel: "コンポーネント",
      status: "demonstrated",
      demonstrates: "section、card、metric、trend、table、quality、delivery の共有コンポーネント。",
      matters: "再利用可能な部品により、機能追加をレビューしやすく一貫した形で進められます。",
      phaseEvidence: "ページは 1 つの巨大な view ではなく、再利用可能な React コンポーネントで構成しています。",
      expandsLater: "画面側の必要性が明確になってから variant を整理できます。"
    },
    {
      id: "typed-boundary",
      title: "型安全なデータ境界",
      category: "typed_boundary",
      categoryLabel: "型境界",
      status: "demonstrated",
      demonstrates: "evidence、metrics、trend、table row、gate、milestone に対する明示的な TypeScript 型。",
      matters: "型契約により、UI が前提にしているデータ構造を統合前に確認できます。",
      phaseEvidence: "静的サンプルデータを型付き構造として import しています。",
      expandsLater: "より大きいサンプル量や描画計測を後続で追加できます。"
    },
    {
      id: "accessibility",
      title: "アクセシビリティ基盤",
      category: "accessibility",
      categoryLabel: "アクセシビリティ",
      status: "demonstrated",
      demonstrates: "skip link、landmark、1 つの H1、セマンティック table、見える focus、テキスト付き status。",
      matters: "アクセシブルな構造は、レビュー品質と日常的な使いやすさを高めます。",
      phaseEvidence: "セマンティックな構造とキーボード操作しやすい control を実装しています。",
      expandsLater: "ブラウザ上のアクセシビリティ確認と視覚 QA を後続で追加できます。"
    },
    {
      id: "performance",
      title: "パフォーマンスを意識した描画",
      category: "performance",
      categoryLabel: "パフォーマンス",
      status: "planned",
      demonstrates: "静的描画、小さなデータセット、依存抑制、テーブル/チャートのスコープ管理。",
      matters: "ダッシュボード UI は、表現と表が増えるほど境界設計なしでは重くなります。",
      phaseEvidence: "チャート/テーブルライブラリを追加せず、ローカルで算出し、データは静的に保っています。",
      expandsLater: "テーブルとビジュアル描画の計測を後続で追加できます。"
    },
    {
      id: "testing",
      title: "検証可能なデリバリー",
      category: "testing",
      categoryLabel: "テスト",
      status: "verified",
      demonstrates: "lint、unit test、typecheck、production build script を repository の確認項目に含めています。",
      matters: "エンジニアリングリードは、ローカルで確認できる軽量な証跡を必要とします。",
      phaseEvidence: "build notes に lint、test、typecheck、build、audit の結果を記録しています。",
      expandsLater: "ブラウザレビューと視覚 QA は後続で追加できます。"
    },
    {
      id: "delivery",
      title: "公開向けデリバリーワークフロー",
      category: "delivery_workflow",
      categoryLabel: "デリバリー",
      status: "demonstrated",
      demonstrates: "小さなフェーズ境界、サニタイズ済みサマリー、artifact hygiene、公開向けの言葉づかい。",
      matters: "リモートでの協働には、レビューしやすい変更と整った repository hygiene が必要です。",
      phaseEvidence: "raw artifact は Git に入れず、後続作業を明確に文書化しています。",
      expandsLater: "アプリが広がった段階で PR スタイルの実装ノートを追加できます。"
    }
  ],
  segmentBreakdown: [
    { id: "growth", label: "成長セグメント", value: 42, status: "healthy" },
    { id: "expansion", label: "拡張セグメント", value: 31, status: "improving" },
    { id: "risk", label: "レビュー待ち", value: 18, status: "watch" },
    { id: "activation", label: "活性化シグナル", value: 9, status: "improving" }
  ],
  trendPoints: [
    { id: "w1", label: "1週目", value: 46, note: "レビュー量の基準値" },
    { id: "w2", label: "2週目", value: 54, note: "活性化シグナルが改善" },
    { id: "w3", label: "3週目", value: 49, note: "レビュー待ちが増加" },
    { id: "w4", label: "4週目", value: 64, note: "ワークフロー品質が回復" },
    { id: "w5", label: "5週目", value: 72, note: "運用効率が改善" }
  ],
  tableRecords: [
    {
      id: "seg-enterprise",
      accountSegment: "エンタープライズ",
      signal: "パイプライン健全性",
      ownerWorkflow: "四半期レビュー",
      confidence: 88,
      status: "Ready",
      lastReviewed: "2026-05-14"
    },
    {
      id: "seg-mid-market",
      accountSegment: "ミッドマーケット",
      signal: "導入トレンド",
      ownerWorkflow: "活性化チェック",
      confidence: 76,
      status: "Ready",
      lastReviewed: "2026-05-18"
    },
    {
      id: "seg-growth",
      accountSegment: "グロース",
      signal: "継続シグナル",
      ownerWorkflow: "レビュー待ち",
      confidence: 61,
      status: "Watch",
      lastReviewed: "2026-05-19"
    },
    {
      id: "seg-self-serve",
      accountSegment: "セルフサービス",
      signal: "運用効率",
      ownerWorkflow: "トリアージ",
      confidence: 69,
      status: "Review",
      lastReviewed: "2026-05-21"
    },
    {
      id: "seg-strategic",
      accountSegment: "戦略セグメント",
      signal: "ワークフロー品質",
      ownerWorkflow: "エグゼクティブサマリー",
      confidence: 92,
      status: "Ready",
      lastReviewed: "2026-05-23"
    },
    {
      id: "seg-partner",
      accountSegment: "パートナー",
      signal: "活性化シグナル",
      ownerWorkflow: "有効化チェック",
      confidence: 58,
      status: "Watch",
      lastReviewed: "2026-05-24"
    },
    {
      id: "seg-regional",
      accountSegment: "リージョナル",
      signal: "パイプライン健全性",
      ownerWorkflow: "更新準備",
      confidence: 73,
      status: "Ready",
      lastReviewed: "2026-05-25"
    },
    {
      id: "seg-platform",
      accountSegment: "プラットフォーム",
      signal: "ワークフロー品質",
      ownerWorkflow: "例外レビュー",
      confidence: 64,
      status: "Review",
      lastReviewed: "2026-05-26"
    },
    {
      id: "seg-operations",
      accountSegment: "オペレーション",
      signal: "運用効率",
      ownerWorkflow: "SLA レビュー",
      confidence: 81,
      status: "Ready",
      lastReviewed: "2026-05-27"
    }
  ],
  qualityGates: [
    {
      id: "typescript",
      label: "TypeScript 静的データモデル",
      status: "demonstrated",
      detail: "evidence、metrics、table row、trend、milestone、quality gate を型で表現しています。"
    },
    { id: "lint", label: "Lint 検証", status: "verified", detail: "commit 前に npm run lint で検証します。" },
    {
      id: "test",
      label: "変換ロジックの unit test",
      status: "verified",
      detail: "table と analytics model utility を npm run test で検証します。"
    },
    { id: "typecheck", label: "Typecheck", status: "verified", detail: "commit 前に npm run typecheck で検証します。" },
    { id: "build", label: "Production build", status: "verified", detail: "commit 前に npm run build で検証します。" },
    {
      id: "semantic-html",
      label: "セマンティック HTML",
      status: "demonstrated",
      detail: "landmark、H1、heading、label、semantic table markup を使っています。"
    },
    {
      id: "future-tests",
      label: "ブラウザ/E2E 確認",
      status: "planned",
      detail: "E2E とより深いブラウザ上のアクセシビリティ確認は後続スコープです。"
    }
  ],
  deliveryMilestones: [
    {
      id: "public-safe-language",
      label: "公開向けの言葉づかい",
      status: "demonstrated",
      detail: "repository copy は汎用的な BtoB SaaS フロントエンドカタログの表現に統一しています。"
    },
    {
      id: "small-phases",
      label: "小さな実装フェーズ",
      status: "demonstrated",
      detail: "テーブル、分析、レビュー、release readiness を小さく確認できる単位に分けています。"
    },
    {
      id: "artifact-hygiene",
      label: "Artifact hygiene",
      status: "demonstrated",
      detail: "raw runtime artifact、screenshot、recording、local log は Git に入れません。"
    },
    {
      id: "japanese-mode",
      label: "日本語プレゼンテーションモード",
      status: "demonstrated",
      detail: "日本語を標準表示にし、英語にも切り替えられるようにしています。"
    }
  ],
  table: {
    toolbarSearch: "レコード検索",
    searchPlaceholder: "Ready、Watch、活性化で検索",
    segmentLabel: "セグメント",
    allSegments: "すべてのセグメント",
    statusLabel: "ステータス",
    allStatuses: "すべてのステータス",
    clearFilters: "フィルタをクリア",
    resultShowing: "表示中",
    resultOf: "/",
    resultRecords: "件のサンプルレコード",
    averageConfidence: "平均信頼度",
    statusCountsLabel: "表示中ステータス件数",
    activeFilters: "有効なフィルタ",
    noFilters: "有効なフィルタはありません。",
    anySearch: "検索なし",
    columns: {
      accountSegment: "アカウントセグメント",
      signal: "シグナル",
      ownerWorkflow: "担当ワークフロー",
      confidence: "信頼度",
      status: "ステータス",
      lastReviewed: "最終レビュー"
    },
    sortIdle: "並替",
    sortAsc: "昇順",
    sortDesc: "降順",
    sortAriaIdle: "未ソートです。この列で並び替えます。",
    sortAriaReverse: "選択すると逆順に並び替えます。",
    scrollCue: "横に続く列があります。狭い画面ではテーブル領域内を横スクロールできます。",
    regionLabel: "静的データテーブルプレビュー",
    caption:
      "アカウントセグメント、シグナル、担当ワークフロー、信頼度、ステータス、レビュー日を示す公開向けサンプルレコード。",
    emptyTitle: "一致するサンプルレコードはありません。",
    emptyBody: "検索、セグメント、ステータスの条件を調整してください。",
    helper:
      "BtoB SaaS の多くのワークフローでは、密度の高い運用レコードを読みやすく扱う必要があります。この実装ではテーブルライブラリを追加せず、基礎操作を示しています。"
  },
  trend: {
    title: "分析ビジュアルプレビュー",
    description: "チャートライブラリなしでも意味のある視覚表現になるよう、SVG トレンドとリスト型の値を組み合わせています。",
    metaTitle: "ワークフロー品質トレンド",
    svgTitle: "ワークフロー品質トレンドのスパークライン",
    latestUp: (latest, delta) => `最新値は ${latest}、初回期間から ${delta} ポイント上昇しています。`,
    latestDown: (latest, delta) => `最新値は ${latest}、初回期間から ${delta} ポイント低下しています。`,
    latestSteady: (latest) => `最新値は ${latest}、初回期間から横ばいです。`,
    insightTitle: "インサイト要約",
    insightSentence: (direction, delta, peak, peakLabel) => {
      const directionText = direction === "up" ? "上昇" : direction === "down" ? "低下" : "横ばい";
      return `サンプルトレンドは初回から最新期間まで ${Math.abs(
        delta
      )} ポイント${directionText}しています。ピーク値は ${peak}（${peakLabel}）です。`;
    },
    lightweightNote: "これは軽量な実装であり、フル機能のチャートシステムではありません。",
    barsLabel: "週別ワークフロー品質トレンド"
  },
  segment: {
    title: "セグメント内訳",
    helper: "値は静的なサンプル比率です。テキストラベルとパーセンテージで、色だけに依存せず読めるようにしています。",
    largest: "最大セグメント",
    total: "サンプル比率合計"
  },
  implementationNotes: [
    {
      title: "静的データのみ",
      body: "サンプルデータは人工的でローカルです。バックエンド、外部 API データ、実データは含みません。"
    },
    {
      title: "チャート/テーブルライブラリなし",
      body: "ビジュアルプレビューとテーブル操作は依存ライブラリなしで実装しています。算出処理は型付き utility に分離しています。"
    },
    {
      title: "後続スコープを明示",
      body: "変換ロジックの unit test はあります。E2E、より深いブラウザ確認、デプロイは後続スコープです。"
    }
  ],
  footer: "BtoB SaaS フロントエンドカタログ。公開向けのサンプルデータのみ。"
};

export const localizedCopy: Record<Locale, CatalogCopy> = {
  en: englishCopy,
  ja: japaneseCopy
};
