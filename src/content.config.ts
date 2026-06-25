import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    readTime: z.string(),
    words: z.string(),
    category: z.string(),
    summary: z.string(),
    featuredExcerpt: z.string().optional(),
    featured: z.boolean().optional(),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string()
      })
    )
  })
});

export const collections = { blog };
