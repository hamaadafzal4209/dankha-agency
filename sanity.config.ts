"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { SITE_SEO_ID } from "./sanity/seoPages";
import { structure } from "./sanity/structure";

/** Actions the site-wide SEO defaults keep; deleting or duplicating it would break the single settings document */
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  basePath: "/studio",
  title: "Dankha",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) => [
      ...templates.filter((template) => template.schemaType !== "siteSeo"),
      {
        id: "service-in-category",
        title: "Sub-service in this category",
        schemaType: "service",
        parameters: [{ name: "categoryId", type: "string" }],
        value: ({ categoryId }: { categoryId: string }) => ({ category: { _type: "reference", _ref: categoryId } }),
      },
    ],
  },
  document: {
    actions: (actions, { schemaType, documentId }) =>
      schemaType === "siteSeo" || documentId === SITE_SEO_ID
        ? actions.filter((action) => action.action && singletonActions.has(action.action))
        : actions,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
