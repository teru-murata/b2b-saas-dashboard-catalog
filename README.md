# BtoB SaaS Dashboard Catalog

A React / Next.js / TypeScript showcase built around BtoB SaaS analytics dashboards. It is a small, self-contained frontend project that shows how static sample data can become a reviewable product surface: dashboard summaries, trend context, searchable records, accessible table behavior, and a release path from GitHub main to AWS Amplify Hosting.

**日本語:**
BtoB SaaSの分析ダッシュボードを想定した、React / Next.js / TypeScriptによるフロントエンド実装例です。静的なサンプルデータを、サマリー指標、トレンド情報、検索可能なレコード、アクセシビリティに配慮したテーブル操作、そしてGitHub mainからAWS Amplify Hostingへのリリースパスまで確認できるプロダクト画面として提示します。

## What it shows

The catalog pulls a few common dashboard patterns into one screen:

- A dashboard preview driven by typed, static sample data.
- A data table with search, filters, accessible sorting, a result count, and an empty state.
- A small analytics chart drawn with inline SVG — segment bars plus a text summary, no charting library.
- Evidence cards that separate what's actually built from what's verified and what's still planned.

Around those, the basics you'd want in a serious frontend project are intentionally visible: a skip link and landmarks, real heading structure, visible focus styles, proper table semantics, typed transform utilities, and lint / test / typecheck / build checks that can be rerun locally.

**日本語:**
本リポジトリでは、ダッシュボードでよく見られる以下のパターンを1つの画面に集約しています。

- 型付けされた静的サンプルデータに基づくダッシュボードプレビュー
- 検索、フィルタ、アクセシブルなソート機能、件数表示、Empty State を備えたデータテーブル
- チャートライブラリを使用せず、インライン SVG だけで描画した軽量な分析グラフ（セグメントバーとテキスト要約）
- 「実装済み」「検証済み」「未着手」のステータスを可視化したエビデンスカード

また、実務向けフロントエンドの基本要件として、スキップリンクやランドマーク、適切な見出し構造、フォーカススタイルの可視化、テーブルのセマンティクス、型定義された変換ユーティリティ、ローカルで再実行できる各種検証（lint / test / typecheck / build）を整備しています。

## Current status

The UI opens in Japanese, with an in-page switch to English. The table has search, filters, accessible sorting, result counts, an empty state, visible sort indicators, and a horizontal-scroll hint on mobile. The analytics chart derives a real trend from the sample data without a chart library. The deployed URL has been checked with review-only visual QA, and the remaining work is explicitly limited to follow-up depth such as E2E automation, deeper accessibility audits, performance measurement, and optional language preference persistence.

Deployment is complete through AWS Amplify Hosting from the public GitHub main branch. Not done yet: E2E tests and deeper performance measurement.

**日本語:**
現在のUIは日本語をデフォルトとし、画面内で英語へ切り替えられます。データテーブルには検索、フィルター、アクセシビリティに配慮したソート機能、件数表示、Empty State、ソートインジケーター、モバイル向けの横スクロールヒントを実装済みです。分析グラフはチャートライブラリを使用せず、サンプルデータから傾向を算出してインラインSVGで描画しています。公開URLはreview-only visual QAで検証済みであり、残りの作業はE2E自動化、より詳細なアクセシビリティ監査、パフォーマンス測定、任意の言語設定の永続化といったフォローアップ項目に限定しています。

公開 GitHub repository の main branch から AWS Amplify Hosting でデプロイ済みです。なお、E2E テストとより深いパフォーマンス計測は未実施です。

## Live demo

- Public repository: https://github.com/teru-murata/b2b-saas-dashboard-catalog
- Live demo: https://main.d2hds3qtnyld83.amplifyapp.com
- Review status: lint, unit tests, typecheck, production build, audit, and deployed URL review-only visual QA are recorded as release-readiness evidence.
- Scope: static public-safe sample data only; no backend, external API, real customer data, custom AWS infrastructure, or secrets are required.

## Setup

```sh
npm install
npm run dev
```
