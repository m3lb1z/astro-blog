import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image(),

      // Relation
      author: z.string().optional(),

      // Relation
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
