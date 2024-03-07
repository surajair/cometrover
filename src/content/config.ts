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

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tagLine: z.string(),
    description: z.string(),
    github: z.string().optional(),
    demo: z.string().optional(),
    website: z.string(),
    image: z.string(),
  }),
});

export const collections = { blog, markDown, projects };
