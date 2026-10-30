import { BookIcon } from "@sanity/icons/Book";
import { CogIcon } from "@sanity/icons/Cog";
import { CommentIcon } from "@sanity/icons/Comment";
import { DocumentsIcon } from "@sanity/icons/Documents";
import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { FolderIcon } from "@sanity/icons/Folder";
import { LinkIcon } from "@sanity/icons/Link";
import { SearchIcon } from "@sanity/icons/Search";
import { UserIcon } from "@sanity/icons/User";
import type { StructureResolver } from "sanity/structure";
import { SEO_PAGES, SITE_SEO_ID } from "./seoPages";

const fixedPageIds = SEO_PAGES.flatMap((page) => [page.id, `drafts.${page.id}`]);

/** The Studio sidebar: Blog (posts and authors), Services (categories and their sub-services), Reviews, and SEO (one entry per website page) */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog")
        .icon(BookIcon)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts").icon(DocumentTextIcon),
              S.documentTypeListItem("author").title("Authors").icon(UserIcon),
            ]),
        ),
      S.listItem()
        .title("Services")
        .icon(FolderIcon)
        .child(
          S.list()
            .title("Services")
            .items([
              S.listItem()
                .title("Categories and their sub-services")
                .icon(FolderIcon)
                .child(
                  S.documentTypeList("serviceCategory")
                    .title("Service categories")
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .child((categoryId) =>
                      S.list()
                        .title("Category")
                        .items([
                          S.listItem()
                            .title("Category page")
                            .icon(DocumentTextIcon)
                            .child(S.document().schemaType("serviceCategory").documentId(categoryId)),
                          S.listItem()
                            .title("Sub-services")
                            .icon(DocumentsIcon)
                            .child(
                              S.documentList()
                                .title("Sub-services")
                                .schemaType("service")
                                .filter('_type == "service" && category._ref == $categoryId')
                                .params({ categoryId: categoryId.replace(/^drafts\./, "") })
                                .defaultOrdering([{ field: "order", direction: "asc" }])
                                .initialValueTemplates([
                                  S.initialValueTemplateItem("service-in-category", {
                                    categoryId: categoryId.replace(/^drafts\./, ""),
                                  }),
                                ]),
                            ),
                        ]),
                    ),
                ),
              S.divider(),
              S.documentTypeListItem("service").title("All sub-services").icon(DocumentsIcon),
            ]),
        ),
      S.documentTypeListItem("review").title("Reviews").icon(CommentIcon),
      S.divider(),
      S.listItem()
        .title("SEO")
        .icon(SearchIcon)
        .child(
          S.list()
            .title("SEO")
            .items([
              S.listItem()
                .title("Site-wide defaults")
                .icon(CogIcon)
                .child(S.document().schemaType("siteSeo").documentId(SITE_SEO_ID).title("Site-wide defaults")),
              S.divider(),
              ...SEO_PAGES.map((page) =>
                S.listItem()
                  .id(page.id)
                  .title(page.title)
                  .icon(DocumentsIcon)
                  .child(S.document().schemaType("pageSeo").documentId(page.id).title(`${page.title} page SEO`)),
              ),
              S.divider(),
              S.listItem()
                .title("Other pages (by address)")
                .icon(LinkIcon)
                .child(
                  S.documentList()
                    .title("Other pages")
                    .schemaType("pageSeo")
                    .filter('_type == "pageSeo" && !(_id in $fixedPageIds)')
                    .params({ fixedPageIds })
                    .initialValueTemplates([S.initialValueTemplateItem("pageSeo")]),
                ),
            ]),
        ),
    ]);
