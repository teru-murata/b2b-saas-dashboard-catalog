# Staffing Policy v0.3

Roles:
- Human Owner: approves goals, high-risk decisions, external effects, and final authority.
- Supervisor Codex: routes tasks, maintains governance, applies accepted patches, runs verification, and creates allowed local commits.
- Codex Auditor: independent read-only reviewer for scope, policy, diff, evidence, and high-risk changes.
- Candidate Implementer: proposes scoped patches for review.
- Visual Review Pod: future UI and browser verification specialist, review-only by default.
- Local Tooling Pod: local scripts, formatters, linters, tests, renderers, and verification tools.

Public bootstrap rule: do not call external model reviewers or visual review tools unless the phase explicitly approves them.
