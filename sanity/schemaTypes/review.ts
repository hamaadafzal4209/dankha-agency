import { CommentIcon } from "@sanity/icons/Comment";
import { defineField, defineType } from "sanity";

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({ name: "name", title: "Client name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "role",
      title: "Role and company",
      type: "string",
      description: "e.g. Founder, Lumère Skincare",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      type: "image",
      options: { hotspot: true },
      description: "A square headshot works best. Leave empty to show the client's initials.",
    }),
    defineField({
      name: "quote",
      title: "Review",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: "highlight",
      title: "Short highlight",
      type: "string",
      description: "Optional. One short sentence from the review for the top of the home page.",
      validation: (rule) => rule.max(140),
    }),
    defineField({
      name: "rating",
      title: "Star rating",
      type: "number",
      initialValue: 5,
      options: { list: [5, 4, 3, 2, 1], layout: "radio", direction: "horizontal" },
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: "featured",
      title: "Show as the large quote",
      type: "boolean",
      initialValue: false,
      description: "Turn on for the one review shown big at the top of the reviews section.",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers show first. Leave empty to show newest first.",
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Newest first", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});
