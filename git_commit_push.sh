#!/bin/bash

# Check if the current branch is 'main'
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
  echo "You are not on the 'main' branch. Please switch to the 'main' branch and try again."
  exit 1
fi

# Prompt the user for a commit message
read -p "Enter commit message: " commit_message

# Add all changes
git add .

# Commit the changes
git commit -m "$commit_message"

# Push the changes to the 'origin' remote
git push origin main

echo "Changes have been committed and pushed to the 'main' branch on 'origin'."
