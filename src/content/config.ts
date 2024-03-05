import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.string().array().optional(),
    status: z.string().optional().default("draft"),
  }),
});

const markDown = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = { blog, markDown };
