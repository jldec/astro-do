# Astro Markdown Demo

This is demo of processing markdown server-side, at runtime in Astro.

The context for this exercise was this [discord question](https://discord.com/channels/830184174198718474/1324262352748679208).

### Usage
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |

### Deploy to Cloudflare Pages
Cloudflare Pages will auto-build and republish on every commit if you [link to your git repo](https://developers.cloudflare.com/pages/get-started/git-integration/).

Alternatively, you can push builds directly from your local machine using Wrangler.
- Modify the name in `wrangler.toml` to suit your project
- `pnpm wrangler login` - authenticates with Cloudflare (one time)
- `pnpm ship` - runs astro build && wrangler pages deploy

> [!TIP]
> Set the site name in `astro.config` to generate canonical URLs.

### To learn more
- [Astro docs](https://docs.astro.build) | [Astro Discord](https://astro.build/chat).
- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/get-started/git-integration/) | [Cloudflare Discord](https://discord.cloudflare.com/)

---
Copyright (c) 2025-present, Jürgen Leschner (@jldec)
MIT License
