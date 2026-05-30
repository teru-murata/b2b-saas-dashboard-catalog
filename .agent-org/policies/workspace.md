# Workspace Policy v0.3

Workspace modes:
- `new_project`: fresh or intentionally empty local target selected for bootstrap.
- `existing_repo_clean`: existing Git repo with clean status and understood scope.
- `dirty_existing_repo`: existing Git repo with uncommitted, untracked, or ignored material that may affect scope.
- `ambiguous_workspace`: existing files, nested Git state, old agent folders, dependency files, IDE settings, or unexplained content.

Rules:
- No writes before classification.
- Cloud-synced paths are unsafe for this repository.
- New-project work must be isolated in a fresh target root.
- Dirty or ambiguous repositories are a hard stop.
- Existing repo work requires a run branch before edits.
- True new-project bootstrap may initialize Git and create the first branch.
