# Presentation Talk Track

## 30-Second Pitch

This is a React / Next.js / TypeScript catalog for BtoB SaaS analytics dashboards. It focuses on dense dashboard UI, reusable components, typed sample data, accessibility, performance rationale, testing discipline, and review-ready delivery notes.

## 90-Second Walkthrough

Start with the overview and evidence status. Move to the dashboard summary to show how business metrics are structured. Open the table section to explain density, filtering, and state handling. Point to the component system to show how the UI stays consistent. Close with quality and delivery notes to explain how the work can be reviewed remotely.

## How to Explain the Dashboard Section

Describe the dashboard as a compact decision surface. The goal is to show hierarchy, data grouping, clear labels, and state handling rather than decorative charts.

## How to Explain Data Tables

Tables are often the core workflow in BtoB SaaS. Explain how the catalog handles readable density, typed sample data, status labels, sorting or filtering plans, empty states, and responsive tradeoffs.

## How to Explain Charts Later

Charts should answer a specific question. When charts are added, explain the decision they support, how labels remain legible, and how the table and chart reinforce each other.

## How to Explain Design-System Thinking

Focus on practical reuse: shared spacing, color, focus states, badges, cards, tables, filters, and predictable variants. Avoid presenting a component gallery before real screens need those components.

## How to Explain Testing and Quality

Explain that the catalog separates planned, demonstrated, and verified evidence. Type checks, focused unit tests, accessibility review, and later browser smoke tests should support claims only after they exist.

## How to Adapt the Same Catalog to Different BtoB SaaS Conversations

Emphasize the part that matches the audience: dashboard hierarchy for product leads, typed data boundaries for engineers, reusable components for design partners, and delivery notes for remote collaboration. Keep the repository text generic while the live explanation can adjust emphasis.

## Things Not to Say in the Public Repo or Public Demo

- Do not say the catalog was created for a named organization.
- Do not reference non-public planning, non-public source material, non-public review outputs, or copied requirements.
- Do not imply real customer data or production usage.
- Do not claim implemented tests, charts, or performance evidence before they exist.
- Do not mention secrets, credentials, private assets, or local runtime details.
