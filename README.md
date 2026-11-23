# PrintBench website

The public website for [PrintBench](https://github.com/PrintBench/printbench), built with Astro and shipped as a static nginx container.

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Editing the roadmap

- Edit [`src/pages/roadmap.md`](src/pages/roadmap.md) to change the page title, search description, introduction or feedback link. Keep the `layout` line.
- Add one Markdown file per item in [`src/content/roadmap/`](src/content/roadmap/). To remove an item, delete its file.
- Set `title` and `status` in the frontmatter. Use `in-progress` for active work, `planned` for upcoming work, or `shipped` for released work. Sections without items are hidden.
- For a shipped item, add an optional `version` such as `v0.7.6`. It links to the release notes. Shipped items sort by version, newest first, followed by any shipped items without a version.
- Set an optional whole-number `order` to arrange items in a section or within the same shipped version. Lower numbers appear first, the default is `0`, and ties sort by filename.
- Write the item’s details and related links in the Markdown body. Use `npm run dev` to preview at `http://localhost:4321/roadmap/`. The next website build and deployment publishes the changes.

For example, a shipped item can use this frontmatter and Markdown body.

```md
---
title: Filament inventory
status: shipped
version: v0.7.0
order: 10
---

Track spools and record how much filament each print uses.
```

## Production build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t printbench-website .
docker run --rm -p 8080:80 printbench-website
```

Open `http://localhost:8080`. The container exposes port `80` and provides a health endpoint at `/health`.

## Coolify

Create a new resource from the Git repository and choose **Dockerfile** as the build pack.

- Dockerfile location: `/Dockerfile`
- Build context: `/`
- Container port: `80`
- Health check path: `/health`

No environment variables or persistent volumes are required. Coolify should terminate TLS and proxy the public domain to port `80`.

If this folder is still inside the main PrintBench repository, use `/website/Dockerfile` as the Dockerfile location and `/website` as the build context instead.
