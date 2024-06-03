#!/bin/bash

# Prompt for a commit message
echo "Enter commit message:"
read commit_message

# Add all changes
git add .

# Commit with the provided message
git commit -m "$commit_message"

# Push changes to the default branch
git push

# Run the build and deploy script
npm run deploy