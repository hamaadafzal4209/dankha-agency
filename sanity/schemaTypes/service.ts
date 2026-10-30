import { defineArrayMember, defineField, defineType } from "sanity";
import { SERVICE_ICON_MAP } from "../../data/service-icons";

const groups = [
  { name: "basics", title: "Basics", default: true },
  { name: "content", title: "Page content" },
  { name: "faqs", title: "FAQs" },
];

/** A titled step or item, e.g. one stage of "How we work" or one thing in "What's included" */
const titledItems = (name: string, title: string, group: string, description?: string) =>
  defineField({
    name,
    title,
    type: "array",
    group,
    description,
    of: [
      defineArrayMember({
        type: "object",
        name: "item",
        fields: [
          defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
          defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
        ],
        preview: { select: { title: "title", subtitle: "description" } },
      }),
    ],
  });

const stringList = (name: string, title: string, group: string, description?: string) =>
  defineField({ name, title, type: "array", group, description, of: [defineArrayMember({ type: "string" })] });

const faqsField = defineField({
  name: "faqs",
  title: "FAQs",
  type: "array",
  group: "faqs",
  description: "Shown at the bottom of the page and sent to Google so the answers can appear in search results.",
  of: [
    defineArrayMember({
      type: "object",
      name: "faq",
      fields: [
        defineField({ name: "question", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
      ],
      preview: { select: { title: "question", subtitle: "answer" } },
    }),
  ],
});

const orderField = defineField({
  name: "order",
  title: "Display order",
  type: "number",
  group: "basics",
  description: "Lower numbers show first.",
});

export const serviceCategoryType = defineType({
  name: "serviceCategory",
  title: "Service category",
  type: "document",
  groups,
  fields: [
    defineField({
      name: "name",
      title: "Short name",
      type: "string",
      group: "basics",
      description: "Used in menus, breadcrumbs and the browser tab, e.g. Websites and apps.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page address",
      type: "slug",
      group: "basics",
      description: "The part after /services/, e.g. it or ecommerce. Changing it changes the page's address.",
      options: { source: "name", maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
    orderField,
    defineField({
      name: "headline",
      title: "Page headline",
      type: "string",
      group: "basics",
      description: "The large heading at the top of the page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Intro",
      type: "text",
      rows: 3,
      group: "basics",
      description: "The paragraph under the headline.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 2,
      group: "basics",
      description: "One sentence shown on the services overview page.",
      validation: (rule) => rule.required(),
    }),
    stringList("heroPoints", "Includes", "content", "Short list shown in the sidebar."),
    titledItems("approach", "How we work", "content"),
    stringList("outcomes", "What you can expect", "content"),
    faqsField,
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "headline" } },
});

export const serviceType = defineType({
  name: "service",
  title: "Sub-service",
  type: "document",
  groups,
  fields: [
    defineField({ name: "title", type: "string", group: "basics", validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "serviceCategory" }],
      group: "basics",
      description: "The service category this sits under.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page address",
      type: "slug",
      group: "basics",
      description: "The last part of the address, e.g. amazon-services.",
      options: { source: "title", maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    orderField,
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 2,
      group: "basics",
      description: "One sentence shown in service lists and under the page heading.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      type: "string",
      group: "basics",
      options: { list: Object.keys(SERVICE_ICON_MAP) },
      initialValue: "globe",
    }),
    defineField({
      name: "overview",
      type: "text",
      rows: 6,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    titledItems("services", "What's included", "content"),
    titledItems("process", "How it works", "content"),
    stringList("keyBenefits", "Why clients choose it", "content", "Short points shown in the sidebar."),
    stringList("outcomes", "What you can expect", "content"),
    faqsField,
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "category.name" } },
});
