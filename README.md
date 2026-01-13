# dokkodo.xyz

A personal website built with Jekyll and hosted on GitHub Pages.

## Local Development

1. Install Ruby and Bundler
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## Adding New Posts

Create new markdown files in the appropriate collection folder:

- `_money/` — Finance and market posts
- `_meditations/` — Thoughts and reflections
- `_music/` — Music-related posts
- `_mountains/` — Outdoor adventures

Use this front matter format:

```yaml
---
title: "Your Post Title"
date: YYYY-MM-DD
---
```

## Deployment

Push to the `main` branch and GitHub Pages will automatically build and deploy.
