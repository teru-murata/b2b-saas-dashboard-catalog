# BtoB SaaS Dashboard Catalog

React / Next.js / TypeScript frontend catalog for BtoB SaaS analytics dashboards, focused on data-rich UI, reusable components, accessibility, performance, and testable delivery.

**日本語:**
BtoB SaaS 分析ダッシュボード向けの React / Next.js / TypeScript フロントエンドカタログです。データリッチな UI、再利用可能なコンポーネント、アクセシビリティ、パフォーマンスを意識した実装、検証可能なデリバリーを重視しています。

## What This Demonstrates

- Public presentation-ready catalog structure.
- Dashboard preview with typed static sample data.
- Data table preview with semantic markup, search, filters, accessible sorting, result counts, empty state, and status labels.
- Lightweight analytics visual with inline SVG, segment bars, text summary, and no chart dependency.
- Evidence cards that distinguish demonstrated, verified, and planned work.
- Reusable React components assembled into a serious frontend showcase.
- Accessibility-minded structure with skip link, landmarks, headings, focus styles, and table semantics.
- Quality-oriented delivery through lint, unit tests, typecheck, and production build scripts.

**日本語:**
公開URLで提示できるカタログ構成、型付き静的サンプルデータによるダッシュボードプレビュー、検索・フィルタ・並び替え・件数・空状態を持つデータテーブル、チャートライブラリに依存しない軽量な分析ビジュアルを実装しています。実装済み、検証済み、後続で広げる項目を分けて示し、エンジニアリングリードが確認しやすい実装証拠として読める構成にしています。

## Current Status

The app defaults to Japanese and English is available through the in-page language switch. The table includes search, filters, accessible sorting, empty state, result counts, visible sort affordances, and a mobile scroll cue. The analytics visual derives a meaningful trend from static sample data without chart libraries and has passed review-only visual QA. E2E tests, deployment, and deeper performance measurement remain deferred.

**日本語:**
このアプリは日本語表示を初期状態とし、画面上の言語切り替えから English 表示に変更できます。テーブルには検索、フィルタ、アクセシブルな並び替え、空状態、結果件数、並び替え表示、モバイル向けの横スクロール案内があります。分析ビジュアルは静的サンプルデータから傾向を算出し、チャートライブラリなしで表示しています。E2E、デプロイ、より深いパフォーマンス計測は後続スコープです。

## Local Setup

```sh
npm install
npm run dev
```

**日本語:**
ローカルでは上記のコマンドで依存関係を入れ、開発サーバーを起動できます。

## Available Scripts

```sh
npm run lint
npm run test
npm run typecheck
npm run build
npm run dev
```

**日本語:**
`lint`、`test`、`typecheck`、`build` を品質確認の基本コマンドとして用意しています。`dev` はローカル確認用の開発サーバーです。

## Architecture Overview

- `src/app/` contains the App Router entry, global CSS, and page-level CSS module.
- `src/components/` contains reusable UI components such as sections, evidence cards, metric cards, dashboard preview, data table preview, trend preview, quality gates, and delivery timeline.
- `src/data/` contains public-safe localized copy and static sample data.
- `src/lib/` contains pure TypeScript transformation utilities for table filtering/sorting and analytics derivation.
- `src/types/` contains the TypeScript data model for catalog evidence, metrics, table rows, trend points, quality gates, delivery milestones, and locale selection.
- `docs/` contains public-safe planning and build notes.

**日本語:**
`src/app/` は App Router の入口とスタイル、`src/components/` は再利用可能な UI 部品、`src/data/` は公開用のローカライズ copy と静的サンプルデータを持ちます。`src/lib/` にはテーブル処理と分析算出の純粋な TypeScript utility、`src/types/` には型安全なデータ境界を置いています。`docs/` には公開可能な計画とビルド記録をまとめています。

## Public-Safe Data Policy

All data is artificial and generic. The project does not include real customer data, private assets, external API data, secrets, credentials, analytics tracking, backend integration, or organization-specific context.

**日本語:**
表示データはすべて公開用の静的サンプルです。実データ、外部 API データ、認証、バックエンド連携、分析トラッキング、秘密情報、認証情報、組織固有の文脈は含みません。

## Quality Checks

The current release candidate is expected to pass:

```sh
npm run lint
npm run test
npm run typecheck
npm run build
```

**日本語:**
現在の公開版は、上記の lint、unit test、typecheck、production build が通る状態を前提にしています。

Current implemented evidence:

- Table search, segment filter, status filter, sortable columns, result count, and empty state.
- Japanese default presentation mode with an English language switch.
- Inline SVG analytics trend with value labels, adjacent text summary, and tested derivation logic.
- Review-only visual QA accepted the current visual, responsive, accessibility, and public-safe presentation state.
- Unit tests for table model and analytics model utilities.
- No chart library, table library, UI kit, backend, live API, or real customer data.

**日本語:**
実装済みの証拠として、テーブル検索、セグメントフィルタ、ステータスフィルタ、並び替え、結果件数、空状態、日本語初期表示と English 切り替え、SVG による分析トレンド、変換ロジックの unit test があります。チャートライブラリ、テーブルライブラリ、UI キット、バックエンド、live API、実データは使っていません。

Still deferred:

- E2E tests.
- Deployment.
- Full accessibility certification.
- Complete performance measurement.

**日本語:**
E2E、デプロイ、包括的なアクセシビリティ認証、完全なパフォーマンス計測は後続スコープです。現時点では production readiness を主張せず、実装証拠として確認できる範囲を明確にしています。

## Roadmap

- Maintain the public-safe bilingual README as the repository landing page.
- Add focused browser checks and measured performance evidence when the interaction surface justifies it.
- Consider a cleaner presentation branch later if the process documentation feels too visible for a minimal showcase surface.

**日本語:**
README は英語と日本語の両方で読める公開向け landing page として保ちます。インタラクションが増えた段階で、ブラウザ確認や計測済みパフォーマンス証跡を追加できます。より薄い公開面が必要になった場合は、後続で presentation branch を検討できます。

## Intentionally Not Included

- Backend services.
- Authentication.
- Database code.
- External API integration.
- Chart or table libraries.
- CI, deployment, or infrastructure.
- Real customer data or private assets.
- E2E tests in this phase.

**日本語:**
バックエンド、認証、データベース、外部 API 連携、チャート/テーブルライブラリ、CI、デプロイ、インフラ、実データ、private asset、E2E はこの公開版には含めていません。

## License

MIT License. See [LICENSE](./LICENSE).

**日本語:**
MIT License です。詳細は [LICENSE](./LICENSE) を参照してください。
