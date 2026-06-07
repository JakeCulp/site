import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const caseStudies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/case-studies",
  }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    team: z.array(z.string()),
    heroImage: z.string(),
    cardImage: z.string(),
    categories: z.array(z.string()).optional(),
  }),
});

export const collections = { caseStudies };
