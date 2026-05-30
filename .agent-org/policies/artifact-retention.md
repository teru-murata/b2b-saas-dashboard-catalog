# Artifact Retention Policy v0.3

`.agent-runs/` is raw local runtime material and must remain ignored and untracked.

Raw logs may include prompts, stderr, local paths, environment details, and future secrets. Do not commit them.

Committed history must be sanitized and stored under `.agent-org/history/`. Sanitized summaries must exclude secrets, credentials, raw stderr, raw prompts, private data, customer data, and unnecessary local paths.

Screenshots, recordings, DOM snapshots, browser traces, and visual comparison images are raw artifacts by default. They may be committed only with explicit approval after sanitation and scope review.
