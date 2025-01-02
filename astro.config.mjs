// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-md.jldec.me/',
  adapter: cloudflare(),
  output: 'server',
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
  integrations: [tailwind()],
});
