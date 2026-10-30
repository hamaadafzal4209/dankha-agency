import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      description: "Use the same slug as the team page (e.g. daniyal-khalid) to link the author to their profile.",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});
