#!/usr/bin/env bash
# One-shot push of this Care Givers project to GitHub.
# Usage:  bash push-to-github.sh
#
# Requirements on your Mac:
#   - git installed (it is by default on macOS)
#   - You're authenticated with GitHub for HTTPS pushes — either via the
#     GitHub CLI (`gh auth login`) or with a personal access token cached in
#     the macOS keychain. If `git push` to GitHub works in any other repo,
#     you're set.

set -euo pipefail

REMOTE="https://github.com/adonisarun123/care-givers.git"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo "→ Project directory: $PROJECT_DIR"

# 1. Clean up any partial git state from the sandbox.
if [ -d .git ]; then
  echo "→ Removing pre-existing .git/"
  rm -rf .git
fi

# 2. Remove TypeScript build artifact if present.
[ -f tsconfig.tsbuildinfo ] && rm -f tsconfig.tsbuildinfo

# 3. Initialize a fresh repo on the main branch.
echo "→ Initializing fresh git repo on 'main'"
git init -b main >/dev/null

# Use your local git identity if it's set; otherwise fall back to your email.
if [ -z "$(git config --global --get user.email || true)" ]; then
  git config user.email "abenteuer.india@gmail.com"
  git config user.name  "Arun"
fi

# 4. Stage everything respecting .gitignore (which already excludes node_modules).
echo "→ Staging files"
git add -A

# 5. Initial commit.
echo "→ Creating initial commit"
git commit -m "Initial commit: Care Givers — Bangalore home caregiving platform" >/dev/null

# 6. Add the GitHub remote.
echo "→ Adding remote: $REMOTE"
git remote add origin "$REMOTE"

# 7. Push.
echo "→ Pushing to origin/main (use --force on next runs if you re-init)"
git push -u origin main

echo ""
echo "✓ Done. View it at: ${REMOTE%.git}"
