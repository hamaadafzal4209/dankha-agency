/** Website pages that get their own entry under SEO in the Studio sidebar */
export const SEO_PAGES = [
  { id: "seo-home", title: "Home", path: "/" },
  { id: "seo-about", title: "About", path: "/about" },
  { id: "seo-services", title: "Services", path: "/services" },
  { id: "seo-portfolio", title: "Portfolio", path: "/portfolio" },
  { id: "seo-blog", title: "Blog", path: "/blog" },
  { id: "seo-contact", title: "Contact", path: "/contact" },
  { id: "seo-privacy-policy", title: "Privacy Policy", path: "/privacy-policy" },
] as const;

export const SITE_SEO_ID = "siteSeo";

/** Strips the "drafts." prefix the Studio adds while a document has unpublished changes */
const publishedId = (id: string | undefined) => (id ?? "").replace(/^drafts\./, "");

export const seoPageFor = (documentId: string | undefined) =>
  SEO_PAGES.find((page) => page.id === publishedId(documentId));
