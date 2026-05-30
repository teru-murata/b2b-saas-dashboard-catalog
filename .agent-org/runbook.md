# Public Project Runbook v0.3

Run IDs use `YYYYMMDD-HHMMSS`.

Before writes:
1. Confirm the target root is the intended public-safe repository.
2. Classify the workspace as `new_project`, `existing_repo_clean`, `dirty_existing_repo`, or `ambiguous_workspace`.
3. Stop if the path is cloud-synced, dirty, ambiguous, or inside another repository.

Branch naming:
- Public bootstrap: `ai/public-bootstrap-<run_id>`
- Implementation: `ai/run-<run_id>`
- Candidate work: `ai/candidate-<agent>-<run_id>`

Workflow:
- Keep repo language generic and public-safe.
- Use the Ask Gate for high-risk ambiguity.
- Prefer small implementation stories with visible evidence.
- Run local verification before commits.
- Commit only sanitized source, docs, and configuration approved for the phase.

Local commit conditions:
- Diff is scoped to approved files.
- Raw runtime artifacts remain ignored and untracked.
- No secrets, private strategy, raw prompts, raw transcripts, screenshots, recordings, or local-only paths are committed.
- Public safety scan passes.

No merge, push, deploy, publish, or external release happens without explicit approval.
