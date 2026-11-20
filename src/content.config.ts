import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const roadmap = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/roadmap' }),
  schema: z.object({
    title: z.string().trim().min(1),
    status: z.enum(['in-progress', 'planned', 'shipped']),
    order: z.number().int().default(0),
  }),
})

export const collections = { roadmap }
