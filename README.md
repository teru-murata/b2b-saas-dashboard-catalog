# BtoB SaaS Dashboard Catalog

A React / Next.js / TypeScript showcase built around BtoB SaaS analytics dashboards. It's a small, self-contained frontend project meant to show how I approach data-heavy UI — reusable components, accessible markup, reasonable performance, and a delivery process you can actually verify.

**日本語:**
BtoB SaaS の分析ダッシュボードを題材にした、React / Next.js / TypeScript の小さなフロントエンド作例です。データ量の多い UI をどう組むか——再利用しやすいコンポーネント、アクセシブルなマークアップ、現実的なパフォーマンス、検証できる開発フロー——を見てもらうために作りました。

## What it shows

The catalog pulls a few common dashboard patterns into one screen:

- A dashboard preview driven by typed, static sample data.
- A data table with search, filters, accessible sorting, a result count, and an empty state.
- A small analytics chart drawn with inline SVG — segment bars plus a text summary, no charting library.
- Evidence cards that separate what's actually built from what's verified and what's still planned.

Around those, the basics you'd want in any frontend project: a skip link and landmarks, real heading structure, visible focus styles, proper table semantics, and lint / test / typecheck / build all wired up.

**日本語:**
ダッシュボード周りのよくあるパターンを一画面にまとめています。

- 型付きの静的サンプルデータで動くダッシュボードプレビュー
- 検索・フィルタ・並び替え（アクセシブル）・件数表示・空状態を備えたデータテーブル
- インライン SVG だけで描いた軽い分析グラフ（セグメントの棒＋テキスト要約。チャートライブラリは不使用）
- 「実装済み」「確認済み」「これから」を分けて示すエビデンスカード

そのまわりは、フロントエンドとして当然押さえたい点を整えています。スキップリンクとランドマーク、見出し構造、フォーカススタイル、テーブルのセマンティクス、そして lint / test / typecheck / build 一式です。

## Current status

The UI opens in Japanese, with an in-page switch to English. The table has search, filters, accessible sorting, result counts, an empty state, visible sort indicators, and a horizontal-scroll hint on mobile. The analytics chart derives a real trend from the sample data without a chart library, and has been through a manual visual QA pass.

Not done yet: E2E tests, deployment, and proper performance measurement.

**日本語:**
初期表示は日本語で、画面内の切り替えから英語にできます。テーブルには検索・フィルタ・アクセシブルな並び替え・件数表示・空状態・並び替えインジケータ・モバイルでの横スクロール案内があります。分析グラフはサンプルデータから傾向を計算して描画しており、チャートライブラリは使っていません。目視 QA は一度通しています。

未着手は、E2E テスト・デプロイ・本格的なパフォーマンス計測です。

## Setup

```sh
npm install
npm run dev
```

**日本語:** 依存関係を入れて開発サーバーを起動するだけです。

## Scripts

```sh
npm run lint       # ESLint
npm run test       # unit tests
npm run typecheck  # type check
npm run build      # production build
npm run dev        # dev server
```

## Structure

```
src/
  app/         App Router entry, global styles, page-level CSS module
  components/  Reusable UI — sections, evidence/metric cards, dashboard
               preview, data table, trend chart, quality gates, timeline
  data/        Localized copy and static sample data
  lib/         Pure TypeScript: table filter/sort, analytics derivation
  types/       Data model — evidence, metrics, rows, trend points,
               quality gates, milestones, locale
docs/          Planning and build notes
```

**日本語:**
おおまかに、`src/app/` が App Router の入口とスタイル、`src/components/` が再利用 UI、`src/data/` が文言と静的データ、`src/lib/` がテーブル処理・分析計算の純粋ロジック、`src/types/` が型定義、`docs/` がメモ類です。

## Sample data

Everything on screen is fake. No real customer data, no external APIs, no auth, no backend, no analytics tracking, no secrets or credentials, and nothing tied to a specific organization.

**日本語:**
画面に出ているデータはすべてダミーです。実顧客データ・外部 API・認証・バックエンド・解析トラッキング・秘匿情報・特定組織に紐づく内容は一切含みません。

## What's built

- Table: search, segment filter, status filter, sortable columns, result count, empty state.
- Japanese by default, with an English toggle.
- Inline-SVG analytics trend with value labels and a matching text summary; the derivation logic is unit-tested.
- Unit tests for the table and analytics utilities.
- A manual visual QA pass over the visual, responsive, accessibility, and data-safety state.

**日本語:**

- テーブル: 検索、セグメントフィルタ、ステータスフィルタ、並び替え、件数表示、空状態
- 日本語デフォルト＋英語切り替え
- インライン SVG の分析トレンド（値ラベル＋テキスト要約）。計算ロジックはユニットテスト済み
- テーブルと分析ユーティリティのユニットテスト
- 表示・レスポンシブ・アクセシビリティ・データ安全性についての目視 QA を一度通過

## Out of scope (on purpose)

No backend, auth, or database. No external API integration. No chart library, table library, or UI kit. No CI or infrastructure, and no real data or private assets.

**日本語:**
バックエンド・認証・DB、外部 API 連携、チャート/テーブルライブラリや UI キット、CI・インフラ、実データや非公開アセットは入れていません。

## Not done yet

- E2E tests
- Deployment
- A full accessibility audit / certification
- Measured performance numbers

This isn't claiming production readiness — it's a showcase, and the lists above are meant to be honest about where the line sits.

**日本語:**

- E2E テスト
- デプロイ
- アクセシビリティの本格的な監査・認証
- 実測のパフォーマンス値

本番運用レベルを主張するものではなく、あくまで作例です。上のリストは、どこまでやっているかを正直に示すためのものです。

## Roadmap

- Keep this bilingual README as the repo's front page.
- Add browser-based checks and measured performance numbers once the UI is interactive enough to warrant them.
- Maybe split off a leaner presentation branch later if the process notes start to feel heavy for a small showcase.

**日本語:**

- この日英 README をリポジトリの入口として維持する
- UI のインタラクションが増えてきたら、ブラウザでの確認や実測パフォーマンスを足す
- プロセスのメモが小さな作例には重く感じられてきたら、表示用に軽いブランチを切ることも検討する

## License

MIT License. See [LICENSE](./LICENSE).

**日本語:** MIT ライセンスです。詳細は [LICENSE](./LICENSE) を参照してください。
