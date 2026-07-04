#!/bin/bash

# Cleanup script
# Removes build artifacts and dependencies

set -e

echo "🧹 Cleaning project..."

# Remove build directory
if [ -d "build" ]; then
    echo "Removing ./build directory..."
    rm -rf build
fi

# Remove node_modules
if [ -d "node_modules" ]; then
    echo "Removing ./node_modules directory..."
    rm -rf node_modules
fi

# Remove coverage directory
if [ -d "coverage" ]; then
    echo "Removing ./coverage directory..."
    rm -rf coverage
fi

# Remove package-lock.json
if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm package-lock.json
fi

echo "✅ Cleanup complete!"
echo "💡 Run 'npm install' to reinstall dependencies"
exit 0
