import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "title", type: "string", group: "content", validation: (rule) => rule.required().max(110) }),
    defineField({
      name: "slug",
      group: "content",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      group: "content",
      type: "text",
      rows: 3,
      description: "One or two sentences shown on the blog list and in Google results.",
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "category",
      group: "content",
      type: "string",
      options: { list: ["Ecommerce", "Web development", "Marketing"], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      group: "content",
      title: "Published on",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "author", type: "reference", group: "content", to: [{ type: "author" }], validation: (rule) => rule.required() }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", group: "content", options: { hotspot: true } }),
    defineField({
      name: "body",
      group: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullets", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: { decorators: [], annotations: [] },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      description: "Optional. Anything left blank uses the post's title, excerpt and cover image.",
    }),
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "coverImage" } },
});
