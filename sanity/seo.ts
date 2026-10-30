import { cache } from "react";
import type { Metadata } from "next";
import { defineQuery } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { client, shareImageUrl } from "./client";
import { isSanityConfigured } from "./env";
import { SEO_PAGES, SITE_SEO_ID } from "./seoPages";

/** How often (in seconds) pages check Sanity for edited SEO settings */
export const SEO_REVALIDATE_SECONDS = 60;

const siteUrl = "https://www.dankha.co";

type SeoImage = SanityImageSource & { alt?: string };

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SeoImage;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

export type SiteSeo = {
  siteName?: string;
  defaultTitle?: string;
  titleTemplate?: string;
  defaultDescription?: string;
  defaultKeywords?: string[];
  defaultOgImage?: SeoImage;
  twitterHandle?: string;
};

const seoProjection = `metaTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, noIndex, noFollow`;

const siteSeoQuery = defineQuery(`*[_id == $id][0]{
  siteName, defaultTitle, titleTemplate, defaultDescription, defaultKeywords, defaultOgImage, twitterHandle
}`);

/** A fixed page's own entry wins over an "other pages" entry that happens to use the same address */
const pageSeoQuery = defineQuery(`coalesce(
  *[_type == "pageSeo" && _id == $id][0]{ ${seoProjection} },
  *[_type == "pageSeo" && path == $path][0]{ ${seoProjection} }
)`);

const postSeoQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0].seo`);

const hiddenPagesQuery = defineQuery(`{
  "pages": *[_type == "pageSeo" && noIndex == true]{ _id, path },
  "posts": *[_type == "post" && seo.noIndex == true].slug.current
}`);

async function fetchSeo<T>(query: string, params: Record<string, string>): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }
  try {
    return await client.fetch<T | null>(query, params, { next: { revalidate: SEO_REVALIDATE_SECONDS } });
  } catch (error) {
    console.error("Could not load SEO settings from Sanity, using built-in values instead", error);
    return null;
  }
}

export const getSiteSeo = cache(async (): Promise<SiteSeo> => (await fetchSeo<SiteSeo>(siteSeoQuery, { id: SITE_SEO_ID })) ?? {});

export const getPageSeo = cache(async (path: string): Promise<SeoFields | null> => {
  const id = SEO_PAGES.find((page) => page.path === path)?.id ?? "";
  return fetchSeo<SeoFields>(pageSeoQuery, { id, path });
});

export const getPostSeo = cache(
  async (slug: string): Promise<SeoFields | null> => fetchSeo<SeoFields>(postSeoQuery, { slug }),
);

/** Addresses (e.g. /about, /blog/my-post) that editors have hidden from Google, so the sitemap can leave them out */
export async function getHiddenPaths(): Promise<Set<string>> {
  const hidden = await fetchSeo<{ pages: { _id: string; path?: string }[]; posts: string[] }>(hiddenPagesQuery, {});
  const paths = new Set<string>();
  for (const page of hidden?.pages ?? []) {
    const path = SEO_PAGES.find((fixed) => fixed.id === page._id)?.path ?? page.path;
    if (path) {
      paths.add(path);
    }
  }
  for (const slug of hidden?.posts ?? []) {
    paths.add(`/blog/${slug}`);
  }
  return paths;
}

const filled = (value: string | undefined | null) => (value && value.trim() ? value.trim() : undefined);

const imageFor = (image: SeoImage | undefined, fallbackAlt: string) =>
  image ? [{ url: shareImageUrl(image), width: 1200, height: 630, alt: image.alt || fallbackAlt }] : undefined;

function titleText(title: Metadata["title"]): string | undefined {
  if (!title) {
    return undefined;
  }
  if (typeof title === "string") {
    return title;
  }
  return "absolute" in title ? title.absolute : (title.default ?? undefined);
}

/** Google shows about 160 characters of a description and 60 of a title */
const DESCRIPTION_LIMIT = 160;
const TITLE_LIMIT = 60;

/** Shortens built-in text to fit Google's snippet, ending on a full sentence where possible, otherwise on a whole word */
export function clampDescription(text: string, limit = DESCRIPTION_LIMIT): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) {
    return clean;
  }
  const cut = clean.slice(0, limit);
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  if (sentenceEnd >= limit * 0.55) {
    return cut.slice(0, sentenceEnd + 1);
  }
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s]+$/, "")}…`;
}

/**
 * Keeps the site's title pattern (e.g. "%s | Dankha") on every title, including on layouts whose own title would
 * otherwise reset it for the pages below, and drops the suffix when it would push a title past Google's limit.
 */
function titleFor(title: Metadata["title"], template: string): Metadata["title"] {
  if (!title) {
    return undefined;
  }
  if (typeof title === "string") {
    return template.replace("%s", title).length > TITLE_LIMIT ? { absolute: title, template } : title;
  }
  if ("absolute" in title) {
    return { absolute: title.absolute, template: "template" in title && title.template ? title.template : template };
  }
  return title;
}

function robotsFor(seo: SeoFields | null): Metadata["robots"] {
  const index = !seo?.noIndex;
  const follow = !seo?.noFollow;
  return {
    index,
    follow,
    googleBot: { index, follow, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  };
}

/**
 * Builds a page's metadata from its SEO entry in Sanity, keeping the page's built-in metadata for anything left blank.
 * Pass `seo` when the page already loaded its own settings (blog posts); otherwise they are looked up by `path`.
 */
export async function seoMetadata(path: string, fallback: Metadata, seo?: SeoFields | null): Promise<Metadata> {
  const [site, page] = await Promise.all([getSiteSeo(), seo === undefined ? getPageSeo(path) : seo]);
  const siteName = filled(site.siteName) ?? "Dankha";

  const template = site.titleTemplate?.includes("%s") ? site.titleTemplate : `%s | ${siteName}`;
  const metaTitle = filled(page?.metaTitle);
  const title = titleFor(metaTitle ? { absolute: metaTitle } : fallback.title, template);
  const builtInDescription = fallback.description ?? filled(site.defaultDescription);
  const description = filled(page?.metaDescription) ?? (builtInDescription ? clampDescription(builtInDescription) : undefined);
  const fallbackCanonical = fallback.alternates?.canonical;
  const canonical =
    filled(page?.canonicalUrl) ??
    (fallbackCanonical && typeof fallbackCanonical === "object" && "url" in fallbackCanonical
      ? fallbackCanonical.url
      : fallbackCanonical) ??
    `${siteUrl}${path === "/" ? "" : path}`;
  const keywords = page?.keywords?.length ? page.keywords : (fallback.keywords ?? site.defaultKeywords);

  const fallbackOg = fallback.openGraph ?? {};
  const shareTitle =
    filled(page?.ogTitle) ?? metaTitle ?? titleText(fallbackOg.title) ?? titleText(fallback.title) ?? filled(site.defaultTitle) ?? siteName;
  const shareDescription =
    filled(page?.ogDescription) ??
    filled(page?.metaDescription) ??
    (fallbackOg.description ? clampDescription(fallbackOg.description, 200) : description) ??
    undefined;
  const shareImages =
    imageFor(page?.ogImage, shareTitle) ?? fallbackOg.images ?? imageFor(site.defaultOgImage, siteName) ?? [
      { url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: siteName },
    ];

  const metadata: Metadata = {
    ...fallback,
    title,
    description,
    keywords,
    alternates: { ...fallback.alternates, canonical },
    openGraph: {
      locale: "en_US",
      siteName,
      ...fallbackOg,
      type: "type" in fallbackOg ? fallbackOg.type : "website",
      title: shareTitle,
      description: shareDescription,
      url: canonical,
      images: shareImages,
    } as Metadata["openGraph"],
    twitter: {
      card: "summary_large_image",
      ...(filled(site.twitterHandle) ? { site: filled(site.twitterHandle) } : {}),
      title: shareTitle,
      description: shareDescription,
      images: shareImages,
    },
    robots: robotsFor(page),
  };

  // Next.js treats a key set to undefined as "empty" rather than "inherit from the layout", so blank values are dropped
  return Object.fromEntries(Object.entries(metadata).filter(([, value]) => value !== undefined));
}
