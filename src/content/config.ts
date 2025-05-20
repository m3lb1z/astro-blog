import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image(),

      // Relation
      // author: z.string().optional(),
      author: reference("author"),

      // Relation
      tags: z.array(z.string()).optional(),

      // Boolean
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string().optional(),
      linkedIn: z.string().optional(),
      github: z.string().optional(),
      bio: z.string().optional(),
      subtitle: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
