# PrintBench website

The public website for [PrintBench](https://github.com/PrintBench/printbench), built with Astro and shipped as a static nginx container.

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

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
