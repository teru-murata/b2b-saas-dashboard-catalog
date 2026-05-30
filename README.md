# BtoB SaaS Dashboard Catalog

A React / Next.js / TypeScript showcase built around BtoB SaaS analytics dashboards. It's a small, self-contained frontend project meant to show how I approach data-heavy UI — reusable components, accessible markup, reasonable performance, and a delivery process you can actually verify.

**日本語:**
BtoB SaaS の分析ダッシュボードを想定した、React / Next.js / TypeScript によるフロントエンドの実装例です。データ量の多い UI における、再利用可能なコンポーネント設計、アクセシビリティを考慮したマークアップ、現実的なパフォーマンス、そして検証可能な開発フローの実証を目的としています。

## What it shows

The catalog pulls a few common dashboard patterns into one screen:

- A dashboard preview driven by typed, static sample data.
- A data table with search, filters, accessible sorting, a result count, and an empty state.
- A small analytics chart drawn with inline SVG — segment bars plus a text summary, no charting library.
- Evidence cards that separate what's actually built from what's verified and what's still planned.

Around those, the basics you'd want in any frontend project: a skip link and landmarks, real heading structure, visible focus styles, proper table semantics, and lint / test / typecheck / build all wired up.

**日本語:**
本リポジトリでは、ダッシュボードでよく見られる以下のパターンを1つの画面に集約しています。

- 型付けされた静的サンプルデータに基づくダッシュボードプレビュー
- 検索、フィルタ、アクセシブルなソート機能、件数表示、Empty State を備えたデータテーブル
- チャートライブラリを使用せず、インライン SVG だけで描画した軽量な分析グラフ（セグメントバーとテキスト要約）
- 「実装済み」「検証済み」「未着手」のステータスを可視化したエビデンスカード

また、フロントエンドの基本要件として、スキップリンクやランドマーク、適切な見出し構造、フォーカススタイルの可視化、テーブルのセマンティクス、各種静的解析およびテスト環境（lint / test / typecheck / build）を整備しています。

## Current status

The UI opens in Japanese, with an in-page switch to English. The table has search, filters, accessible sorting, result counts, an empty state, visible sort indicators, and a horizontal-scroll hint on mobile. The analytics chart derives a real trend from the sample data without a chart library, and has been through a manual visual QA pass.

Not done yet: E2E tests, deployment, and proper performance measurement.

**日本語:**
現在の UI は日本語をデフォルトとし、画面内で英語への切り替えが可能です。データテーブルには検索、フィルタ、アクセシブルなソート機能、件数表示、Empty State、ソートインジケーター、モバイル向けの横スクロールヒントを実装済みです。分析グラフはチャートライブラリを使用せず、サンプルデータから傾向を算出してインライン SVG で描画しています。また、全体的な目視での QA を1度実施しています。

なお、E2E テスト、デプロイ、および本格的なパフォーマンス計測は未実施です。

## Setup

```sh
npm install
npm run dev
```
