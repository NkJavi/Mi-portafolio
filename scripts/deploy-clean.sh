#!/usr/bin/env bash
set -euo pipefail

PROJECT_NAME="${PROJECT_NAME:-portafolio}"
ENVIRONMENT="${ENVIRONMENT:-production}"
RETAIN_COUNT="${RETAIN_COUNT:-1}"
WORKDIR="${WORKDIR:-.}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"

if ! [[ "$RETAIN_COUNT" =~ ^[0-9]+$ ]]; then
  echo "RETAIN_COUNT must be a non-negative integer"
  exit 1
fi

echo "Deploying project '$PROJECT_NAME' from '$WORKDIR' to branch '$DEPLOY_BRANCH'..."
npx --yes wrangler pages deploy "$WORKDIR" --project-name="$PROJECT_NAME" --branch="$DEPLOY_BRANCH"

echo "Listing deployments for cleanup..."
json=$(npx --yes wrangler pages deployment list --project-name="$PROJECT_NAME" --environment="$ENVIRONMENT" --json)

ids=$(printf '%s' "$json" | node -e '
const retain = Number(process.argv[1]);
const arr = JSON.parse(require("fs").readFileSync(0, "utf8"));
const remove = arr.slice(retain).map((d) => d.Id);
process.stdout.write(remove.join("\n"));
' "$RETAIN_COUNT")

if [ -z "$ids" ]; then
  echo "No previous deployments to delete."
  exit 0
fi

while IFS= read -r id; do
  [ -z "$id" ] && continue
  echo "Deleting deployment: $id"
  npx --yes wrangler pages deployment delete "$id" --project-name="$PROJECT_NAME" --force
  echo "Deleted: $id"
done <<< "$ids"

echo "Cleanup complete."
