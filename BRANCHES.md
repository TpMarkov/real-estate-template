# Make sure you're on main
git checkout main

# Create and switch to a new branch
git checkout -b new-design-experiment
Now:

Edit files

Commit freely

Nothing affects main

git add .
git commit -m "Try new layout and styles"
When you like the result:

git checkout main
git merge new-design-experiment
If you don’t like it:

git branch -D new-design-experiment