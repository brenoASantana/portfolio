#!/bin/bash

# Deployment script
# Builds and deploys to GitHub Pages

set -e

echo "🚀 Starting deployment process..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install Node.js"
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ git not found. Please install git"
    exit 1
fi

# Verify clean working directory
if ! git diff-index --quiet HEAD --; then
    echo "❌ Working directory is not clean. Please commit or stash changes."
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build || {
    echo "❌ Build failed."
    exit 1
}

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy || {
    echo "❌ Deployment failed."
    exit 1
}

echo "✅ Deployment successful!"
echo "📍 Your portfolio is now live at: https://brenoASantana.github.io/portfolio"
exit 0
