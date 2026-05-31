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
    buildReview: { eyebrow: string; title: string; description: string };
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
  buildReviewMilestones: DeliveryMilestone[];
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
    { href: "#delivery", label: "Delivery" },
    { href: "#build-review", label: "Build / Review" }
  ],
  languageSwitch: {
    label: "Presentation language",
    optionLabel: (label, active) => `${label}${active ? " selected" : ""}`
  },
  hero: {
    eyebrow: "Cloud-hosted frontend catalog",
    title: "BtoB SaaS analytics dashboard catalog built with React, Next.js, and TypeScript.",
    description:
      "This public catalog shows how a frontend-only dashboard can turn static BtoB SaaS sample data into a reviewable product surface: summary metrics, trend context, searchable records, accessibility basics, and a release path from GitHub main to AWS Amplify Hosting.",
    actions: [
      { href: "#dashboard", label: "Review the dashboard scenario" },
      { href: "#table", label: "Check the data table behavior" }
    ],
    panelLabel: "Release evidence snapshot",
    panelTitle: "What can be verified now",
    panelItems: [
      { label: "Default language", value: "Japanese-first UI with English switch" },
      { label: "Live deployment", value: "GitHub main to AWS Amplify Hosting" },
      { label: "Project scope", value: "Frontend-only, sample data, no backend" }
    ]
  },
  sections: {
    evidence: {
      eyebrow: "Evidence model",
      title: "Engineering-lead-friendly proof, without private context",
      description:
        "The cards below explain what is already implemented, why it matters in a data-heavy SaaS dashboard, and which deeper checks intentionally remain future scope."
    },
    dashboard: {
      eyebrow: "Dashboard preview",
      title: "Data-rich dashboard scenario",
      description:
        "The dashboard simulates a weekly business review for BtoB SaaS teams, combining pipeline health, adoption signals, workflow quality, and a review queue into one readable screen.",
      scenarioEyebrow: "Data-rich dashboard scenario",
      scenarioTitle: "Pipeline health review",
      scenarioDescription:
        "A public-safe scenario that lets reviewers inspect layout density, typed data boundaries, status communication, and trend context without relying on private customer data or external services.",
      scenarioItems: [
        { label: "Typed boundary", detail: "Sample records are typed in TypeScript so UI assumptions are visible before integration work." },
        { label: "Quality signal", detail: "Status uses text plus color so the signal remains readable without depending on color alone." },
        {
          label: "Future-ready",
          detail: "The current scope proves the dashboard surface first; pagination, saved views, and API-backed data can be added later."
        }
      ]
    },
    table: {
      eyebrow: "Data interaction",
      title: "Data table preview",
      description:
        "The table demonstrates practical data-work UI: search, segment and status filters, accessible sorting, visible result counts, an empty state, and mobile horizontal-scroll guidance."
    },
    quality: {
      eyebrow: "Quality evidence",
      title: "Quality-oriented delivery",
      description:
        "The project records lint, unit tests, typecheck, production build, npm audit, deployed URL checks, and review-only visual QA as release-readiness evidence, while keeping E2E and deeper measurement separate."
    },
    delivery: {
      eyebrow: "Delivery notes",
      title: "Public-safe GitHub-style workflow",
      description:
        "The repository is organized around small reviewable phases, sanitized public summaries, and artifact hygiene so the project can be evaluated without exposing local working notes."
    },
    buildReview: {
      eyebrow: "Deployment evidence",
      title: "Build, Deploy, and Review Evidence",
      description:
        "This section connects implementation evidence to the public URL: local checks, GitHub main, AWS Amplify Hosting cloud build, deployed-page review, and the remaining non-blocking polish items."
    },
    implementation: {
      eyebrow: "Implementation notes",
      title: "Current scope and intentional limits",
      description:
        "The current app is intentionally narrow: it proves frontend structure, dashboard interaction patterns, and release evidence without adding backend, authentication, external APIs, or real customer data."
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
      expandsLater: "The deployed page has been checked with review-only visual QA. E2E coverage and deeper browser accessibility audits remain future scope."
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
      expandsLater: "The release path now includes local checks, cloud deployment, and deployed URL review. E2E automation and deeper performance measurement can be added later."
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
      label: "Deployed-page visual review",
      status: "verified",
      detail:
        "The public URL was checked with review-only visual QA. No P0/P1 blockers were carried into this catalog update; E2E and deeper accessibility audits remain future scope."
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
  buildReviewMilestones: [
    {
      id: "next-react-typescript",
      label: "Next.js / React / TypeScript implementation",
      status: "demonstrated",
      detail: "The catalog is implemented as a typed frontend app using static, public-safe sample data."
    },
    {
      id: "local-verification",
      label: "Local verification",
      status: "verified",
      detail: "Lint, unit tests, typecheck, production build, and audit checks are used as the local release-readiness baseline."
    },
    {
      id: "github-main",
      label: "Published from GitHub main",
      status: "verified",
      detail: "The public repository main branch is the source of the hosted catalog, so the deployed app can be traced back to reviewed code."
    },
    {
      id: "amplify-cloud-build",
      label: "AWS Amplify cloud build",
      status: "verified",
      detail: "AWS Amplify Hosting builds the Next.js app from the connected GitHub repository and serves the public URL."
    },
    {
      id: "agy-review-only-qa",
      label: "Review-only visual QA",
      status: "verified",
      detail: "Agy review-only visual QA checked the deployed URL and reported no P0/P1 blockers for sharing the catalog."
    },
    {
      id: "non-blocking-polish",
      label: "Non-blocking polish remains",
      status: "planned",
      detail:
        "Remaining work is limited to polish-level follow-ups such as E2E automation, deeper measurement, and optional language preference persistence."
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
      title: "Public-safe static data",
      body:
        "All records are artificial sample data stored in the repository. The app does not connect to a backend, external API, production account, or real customer system."
    },
    {
      title: "Lightweight frontend implementation",
      body:
        "The dashboard preview, table behavior, and SVG trend visual are implemented without chart or table libraries. Data transforms are isolated in typed utilities so they can be tested directly."
    },
    {
      title: "Review depth is explicit",
      body:
        "AWS Amplify Hosting deployment and review-only visual QA are complete. E2E automation, deeper browser accessibility audits, and performance measurement are intentionally marked as future scope."
    }
  ],
  footer: "BtoB SaaS frontend catalog. Static public-safe sample data, cloud-hosted demo, and release-readiness evidence."
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
    { href: "#delivery", label: "デリバリー" },
    { href: "#build-review", label: "構築・レビュー" }
  ],
  languageSwitch: {
    label: "表示言語",
    optionLabel: (label, active) => `${label}${active ? "を選択中" : "に切り替え"}`
  },
  hero: {
    eyebrow: "クラウドホスト型フロントエンドカタログ",
    title: "React、Next.js、TypeScriptで構築されたBtoB SaaS分析ダッシュボードカタログ",
    description:
      "この公開カタログでは、フロントエンドのみのダッシュボードによって、静的なBtoB SaaSのサンプルデータをレビュー可能なプロダクト画面へとどのように昇華できるかを示しています。具体的には、サマリーメトリクス、トレンド情報、検索可能なレコード、アクセシビリティの基本、そしてGitHub mainからAWS Amplify Hostingへのリリースパスなどを確認できます。",
    actions: [
      { href: "#dashboard", label: "ダッシュボードシナリオをレビュー" },
      { href: "#table", label: "データテーブルの挙動を確認" }
    ],
    panelLabel: "リリースエビデンスのスナップショット",
    panelTitle: "現在検証可能な内容",
    panelItems: [
      { label: "デフォルト言語", value: "日本語優先UI（英語切り替え機能付き）" },
      { label: "ライブデプロイ", value: "GitHub main から AWS Amplify Hosting" },
      { label: "プロジェクトスコープ", value: "フロントエンドのみ、サンプルデータ、バックエンドなし" }
    ]
  },
  sections: {
    evidence: {
      eyebrow: "証拠モデル",
      title: "エンジニアリングリードが確認しやすい実装証拠",
      description:
        "以下のカードでは、すでに実装されている内容、データ量の多いSaaSダッシュボードにおいてそれが重要である理由、および意図的に将来のスコープとしている詳細な検証項目について説明しています。"
    },
    dashboard: {
      eyebrow: "ダッシュボードプレビュー",
      title: "データリッチなダッシュボードシナリオ",
      description:
        "このダッシュボードは、BtoB SaaSチーム向けの週次ビジネスレビューをシミュレーションしたものであり、パイプラインの健全性、アダプションシグナル、ワークフローの品質、およびレビューキューを1つの見やすい画面に統合しています。",
      scenarioEyebrow: "データリッチなダッシュボードシナリオ",
      scenarioTitle: "パイプライン健全性レビュー",
      scenarioDescription:
        "顧客のプライベートデータや外部サービスに依存することなく、レビュアーがレイアウト密度、型定義されたデータの境界、ステータス伝達、およびトレンドのコンテキストを検証できる、公開用に安全化されたシナリオです。",
      scenarioItems: [
        { label: "型安全な境界", detail: "サンプルレコードはTypeScriptで型定義されているため、システム統合前にUI側の前提条件が可視化されます。" },
        {
          label: "品質シグナル",
          detail: "ステータス表示にはテキストと色の両方を使用しているため、色だけに依存することなくシグナルを正確に読み取ることができます。"
        },
        {
          label: "拡張しやすい構成",
          detail:
            "現在のスコープではダッシュボードのUI表示の実証を優先しており、ページネーション、保存済みビュー、API連携によるデータ取得などは後から追加可能な設計になっています。"
        }
      ]
    },
    table: {
      eyebrow: "データ操作",
      title: "データテーブルプレビュー",
      description:
        "このテーブルは、実用的なデータ操作UIの例を示しています。検索、セグメントおよびステータスのフィルター、アクセシビリティに配慮したソート機能、結果件数の表示、空状態（Empty State）、モバイルでの横スクロール指示などが含まれます。"
    },
    quality: {
      eyebrow: "品質証跡",
      title: "検証可能なデリバリー",
      description:
        "本プロジェクトでは、リリース準備状況の証跡として、lint、ユニットテスト、型チェック、本番ビルド、npm audit、デプロイ先URLの検証、およびreview-only visual QAを記録しており、E2Eテストやより詳細な測定とは切り離して管理しています。"
    },
    delivery: {
      eyebrow: "デリバリーノート",
      title: "公開向けの GitHub スタイルワークフロー",
      description:
        "本リポジトリは、レビューしやすい小さな開発フェーズ、機密情報を除外した公開用のサマリー、および成果物のクリーンな管理によって構成されており、内部の計画資料を露出させることなくプロジェクトを評価できます。"
    },
    buildReview: {
      eyebrow: "デプロイ証跡",
      title: "構築・デプロイ・レビュー証跡",
      description:
        "このセクションでは、実装の証跡と公開URLを紐づけています。具体的には、ローカル検証、GitHub main、AWS Amplify Hostingによるクラウドビルド、デプロイ済みページのレビュー、および進行の妨げにならない残りの微調整項目について記載しています。"
    },
    implementation: {
      eyebrow: "実装ノート",
      title: "現在のスコープと意図的な制限",
      description:
        "現在のアプリケーションは意図的にスコープを限定しています。バックエンド、認証、外部API、実際の顧客データを組み込むことなく、フロントエンドの構造、ダッシュボードのインタラクションパターン、およびリリースに向けた証跡の実証に特化しています。"
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
      expandsLater: "デプロイ済みのページはreview-only visual QAで検証されています。E2Eのカバーや、より詳細なブラウザアクセシビリティ監査は今後の対応予定となります。"
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
      expandsLater: "リリースプロセスには現在、ローカルでのチェック、クラウドへのデプロイ、およびデプロイされたURLのレビューが含まれています。E2E自動化や、より詳細なパフォーマンス測定は後から追加可能です。"
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
      label: "デプロイ済みページのビジュアルレビュー",
      status: "verified",
      detail:
        "公開URLはreview-only visual QAで検証済みです。今回のカタログ更新にP0/P1のブロッカーは持ち込まれていません。E2Eや、より詳細なアクセシビリティ監査は今後の対応予定となります。"
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
  buildReviewMilestones: [
    {
      id: "next-react-typescript",
      label: "Next.js / React / TypeScript で実装",
      status: "demonstrated",
      detail: "このカタログは、静的かつ公開可能な安全なサンプルデータを使用した、型定義されたフロントエンドアプリとして実装されています。"
    },
    {
      id: "local-verification",
      label: "lint、unit test、typecheck、production build で検証",
      status: "verified",
      detail: "ローカル環境でのリリース準備完了基準として、Lint、ユニットテスト、型チェック、プロダクションビルド、および監査チェックが用いられています。"
    },
    {
      id: "github-main",
      label: "GitHub main から公開",
      status: "verified",
      detail: "ホストされるカタログのソースは公開リポジトリのmainブランチであるため、デプロイされたアプリはレビュー済みのコードまで遡って追跡可能です。"
    },
    {
      id: "amplify-cloud-build",
      label: "AWS Amplify Hosting の cloud build でデプロイ",
      status: "verified",
      detail: "AWS Amplify Hostingが、連携されたGitHubリポジトリからNext.jsアプリをビルドし、公開URLを配信します。"
    },
    {
      id: "agy-review-only-qa",
      label: "Agy review-only visual QA で公開 URL を確認",
      status: "verified",
      detail: "Agyによるreview-only visual QAがデプロイされたURLを検証し、カタログを共有する上でのP0/P1ブロッカーがないことを報告しました。"
    },
    {
      id: "non-blocking-polish",
      label: "残りは non-blocking polish",
      status: "planned",
      detail: "残りの作業は、E2E自動化、より詳細な測定、および任意の言語設定の永続化など、ブラッシュアップレベルのフォローアップのみに限定されています。"
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
      title: "公開可能な静的データ",
      body: "すべてのレコードはリポジトリ内に保存されたダミーのサンプルデータです。本アプリは、バックエンド、外部API、本番アカウント、または実際の顧客システムには接続しません。"
    },
    {
      title: "軽量なフロントエンド実装",
      body:
        "ダッシュボードのプレビュー、テーブルの挙動、およびSVGによるトレンド表示は、チャートやテーブルのライブラリを使用せずに実装されています。データ変換処理は型定義されたユーティリティに分離されているため、直接テストが可能です。"
    },
    {
      title: "レビュー範囲の明確化",
      body:
        "AWS Amplify Hostingへのデプロイおよびreview-only visual QAは完了しています。E2Eの自動化、より詳細なブラウザアクセシビリティ監査、およびパフォーマンス測定は、意図的に今後の対応スコープとして定義しています。"
    }
  ],
  footer: "BtoB SaaSフロントエンドカタログ。外部公開可能な静的サンプルデータ、クラウドホストされたデモ、およびリリース判定用エビデンス。"
};

export const localizedCopy: Record<Locale, CatalogCopy> = {
  en: englishCopy,
  ja: japaneseCopy
};
