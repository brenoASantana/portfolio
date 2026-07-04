#!/bin/bash

# Pre-commit hook script
# Runs tests, lint, and type checks before allowing commit

set -e

echo "🔍 Running pre-commit checks..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install Node.js"
    exit 1
fi

# Run linting
echo "🔎 Running Biome lint..."
npm run lint || {
    echo "❌ Lint failed. Please fix linting errors."
    exit 1
}

# Run type checking
echo "🔍 Running TypeScript type check..."
npx tsc --noEmit || {
    echo "❌ TypeScript compilation failed."
    exit 1
}

# Run tests
echo "🧪 Running tests..."
npm test -- --watchAll=false --passWithNoTests || {
    echo "❌ Tests failed. Please fix test errors."
    exit 1
}

echo "✅ All pre-commit checks passed!"
exit 0
