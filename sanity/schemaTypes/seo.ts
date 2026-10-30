import { defineField, defineType } from "sanity";

/** Tabs shown at the top of every SEO form */
export const seoGroups = [
  { name: "search", title: "Search results", default: true },
  { name: "social", title: "Social sharing" },
  { name: "advanced", title: "Advanced" },
];

/** SEO fields shared by page SEO entries and blog posts. Anything left blank keeps the website's built-in text. */
export const seoFields = [
  defineField({
    name: "metaTitle",
    title: "Page title",
    type: "string",
    group: "search",
    description:
      "The blue link shown in Google and the browser tab, exactly as typed. Aim for under 60 characters. Leave blank to keep the current title.",
    validation: (rule) => rule.max(70).warning("Google usually cuts titles off after about 60 characters."),
  }),
  defineField({
    name: "metaDescription",
    title: "Description",
    type: "text",
    rows: 3,
    group: "search",
    description: "The grey text under the link in Google. Aim for 120–160 characters.",
    validation: (rule) => rule.max(170).warning("Google usually cuts descriptions off after about 160 characters."),
  }),
  defineField({
    name: "keywords",
    type: "array",
    of: [{ type: "string" }],
    options: { layout: "tags" },
    group: "search",
    description: "Words and phrases people search for to find this page. Press Enter after each one.",
  }),
  defineField({
    name: "ogTitle",
    title: "Share title",
    type: "string",
    group: "social",
    description: "Title shown when the link is shared on WhatsApp, LinkedIn, Facebook or X. Leave blank to use the page title.",
  }),
  defineField({
    name: "ogDescription",
    title: "Share description",
    type: "text",
    rows: 3,
    group: "social",
    description: "Text shown under the share title. Leave blank to use the description.",
  }),
  defineField({
    name: "ogImage",
    title: "Share image (OG image)",
    type: "image",
    group: "social",
    description: "Picture shown with the shared link. Best size is 1200 × 630 pixels.",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Image description",
        type: "string",
        description: "A short description of the picture for screen readers.",
      }),
    ],
  }),
  defineField({
    name: "canonicalUrl",
    title: "Canonical URL",
    type: "url",
    group: "advanced",
    description:
      "The main address of this content, if the same content lives at more than one address. Leave blank to use this page's own address.",
    validation: (rule) => rule.uri({ scheme: ["https", "http"] }),
  }),
  defineField({
    name: "noIndex",
    title: "Hide this page from Google",
    type: "boolean",
    group: "advanced",
    initialValue: false,
    description: "Turn on to keep this page out of search results and the sitemap.",
  }),
  defineField({
    name: "noFollow",
    title: "Tell Google not to follow links on this page",
    type: "boolean",
    group: "advanced",
    initialValue: false,
  }),
];

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  groups: seoGroups,
  fields: seoFields,
});
