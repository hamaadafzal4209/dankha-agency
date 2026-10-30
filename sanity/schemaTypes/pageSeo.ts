import { SearchIcon } from "@sanity/icons/Search";
import { defineField, defineType } from "sanity";
import { seoPageFor } from "../seoPages";
import { seoFields, seoGroups } from "./seo";

export const pageSeoType = defineType({
  name: "pageSeo",
  title: "Page SEO",
  type: "document",
  icon: SearchIcon,
  groups: seoGroups,
  fields: [
    defineField({
      name: "path",
      title: "Page address",
      type: "string",
      group: "search",
      description: "The part of the address after dankha.co, e.g. /services/marketplaces or /portfolio/rise-premier.",
      hidden: ({ document }) => Boolean(seoPageFor(document?._id)),
      validation: (rule) =>
        rule.custom((value, context) => {
          if (seoPageFor(context.document?._id)) {
            return true;
          }
          if (!value || !value.startsWith("/")) {
            return "Enter the page address starting with /, e.g. /services/marketplaces";
          }
          return true;
        }),
    }),
    ...seoFields,
  ],
  preview: {
    select: { id: "_id", path: "path", metaTitle: "metaTitle" },
    prepare: ({ id, path, metaTitle }) => {
      const page = seoPageFor(id);
      return {
        title: page?.title ?? path ?? "New page",
        subtitle: metaTitle ?? page?.path ?? "Using the website's built-in title",
      };
    },
  },
});
