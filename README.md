# Astro Markdown Demo
https://astro-md.jldec.me/

### Markdown
```md
---
title: Server Render Markdown
excerpt: '> A demo of processing **markdown** server-side'
---

This is a demo of processing markdown server-side, at runtime in Astro.

The context for this exercise was this [discord question](https://discord.com/channels/830184174198718474/1324262352748679208).
```

### HTML
```html
<article class="prose mx-auto p-4">
  <h1>Server Render Markdown</h1>
  <div>
    <blockquote>
      <p>A demo of processing <strong>markdown</strong> server-side</p>
    </blockquote>
  </div>
  <a href="/" class="mt-4">&lt;&lt; Back</a>
  <p>This is a demo of processing markdown server-side, at runtime in Astro.</p>
  <p>
    The context for this exercise was this
    <a
      href="https://discord.com/channels/830184174198718474/1324262352748679208"
      >discord question</a
    >.
  </p>
</article>
```

### src/pages/markdown/[id].astro
```astro
---
...
// Render markdown excerpt
// Disable syntax highlighting to avoid calling createShikiInternal in Cloudflare Workers.
const processor = await createMarkdownProcessor({
  ...markdownConfigDefaults,
  syntaxHighlight: false,
});
const renderedExcerpt = await processor.render(post.data.excerpt, {
  frontmatter: post.data,
});
console.log(`rendered excerpt: ${post.data.excerpt}`);
---

<Layout title={post.data.title}>
  <article class="prose mx-auto p-4">
    <h1>{post.data.title}</h1>
    <div set:html={renderedExcerpt.code} />
    <a href="/" class="mt-4">&lt;&lt; Back</a>
    <Content />
  </article>
</Layout>
```

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
