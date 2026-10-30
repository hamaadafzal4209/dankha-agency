import { CogIcon } from "@sanity/icons/Cog";
import { defineField, defineType } from "sanity";

export const siteSeoType = defineType({
  name: "siteSeo",
  title: "Site-wide SEO defaults",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "search", title: "Search results", default: true },
    { name: "social", title: "Social sharing" },
  ],
  fields: [
    defineField({
      name: "siteName",
      type: "string",
      group: "search",
      initialValue: "Dankha",
      description: "Shown next to page titles and on shared links.",
    }),
    defineField({
      name: "defaultTitle",
      title: "Default title",
      type: "string",
      group: "search",
      description: "Used for any page that has no title of its own.",
    }),
    defineField({
      name: "titleTemplate",
      title: "Title pattern",
      type: "string",
      group: "search",
      initialValue: "%s | Dankha",
      description: "How built-in page titles are finished off. %s is replaced with the page's own title.",
      validation: (rule) =>
        rule.custom((value) => (!value || value.includes("%s") ? true : "Include %s where the page title should go")),
    }),
    defineField({
      name: "defaultDescription",
      title: "Default description",
      type: "text",
      rows: 3,
      group: "search",
      description: "Used for any page that has no description of its own.",
    }),
    defineField({
      name: "defaultKeywords",
      title: "Default keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      group: "search",
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default share image (OG image)",
      type: "image",
      group: "social",
      description: "Shown when a page without its own share image is shared. Best size is 1200 × 630 pixels.",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Image description", type: "string" })],
    }),
    defineField({
      name: "twitterHandle",
      title: "X (Twitter) handle",
      type: "string",
      group: "social",
      description: "e.g. @dankha. Leave blank if you don't use X.",
    }),
  ],
  preview: { prepare: () => ({ title: "Site-wide SEO defaults" }) },
});
