import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const markdown = defineCollection({
  loader: glob({
    base: './src/content/markdown',
    pattern: ['!index.md', '*.md'],
  }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

export const collections = { markdown };
