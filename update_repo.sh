#!/bin/bash

echo "🔄 Checking Git status..."
git status

echo "➕ Adding all changes..."
git add .

echo "✍️  Committing changes..."
read -p "Enter commit message: " msg
git commit -m "$msg"

echo "🚀 Pushing to remote repository..."
git push

echo "✅ Update complete!"
