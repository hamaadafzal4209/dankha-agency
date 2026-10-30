import { cache } from "react";
import { defineQuery } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { client, imageUrl } from "./client";
import { isSanityConfigured } from "./env";

/** How often (in seconds) the home page checks Sanity for new or edited reviews */
export const REVIEWS_REVALIDATE_SECONDS = 60;

export type Review = {
  name: string;
  role: string;
  /** Photo URL, or empty when the client has no photo */
  img: string;
  body: string;
  highlight?: string;
  rating: number;
  featured: boolean;
};

export type ReviewSummary = { rating: string; count: number };

type SanityReview = {
  name: string;
  role: string;
  photo?: SanityImageSource;
  quote: string;
  highlight?: string;
  rating?: number;
  featured?: boolean;
};

const reviewsQuery = defineQuery(`*[_type == "review" && defined(name) && defined(quote)]
  | order(featured desc, coalesce(order, 9999) asc, _createdAt desc) {
  name, role, photo, quote, highlight, rating, featured
}`);

/**
 * Client reviews added in the Studio, featured first. There are deliberately no built-in stand-ins: with no reviews the
 * home page hides its review section and rating, since invented testimonials break Google's guidelines and consumer law.
 */
export const getReviews = cache(async (): Promise<{ reviews: Review[]; summary: ReviewSummary }> => {
  const fallback = { reviews: [], summary: { rating: "0", count: 0 } };
  if (!isSanityConfigured) {
    return fallback;
  }
  try {
    const rows = await client.fetch<SanityReview[]>(reviewsQuery, {}, { next: { revalidate: REVIEWS_REVALIDATE_SECONDS } });
    if (rows.length === 0) {
      return fallback;
    }
    const reviews = rows.map((row) => ({
      name: row.name,
      role: row.role ?? "",
      img: row.photo ? imageUrl(row.photo, 160) : "",
      body: row.quote,
      highlight: row.highlight || undefined,
      rating: row.rating ?? 5,
      featured: Boolean(row.featured),
    }));
    const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    return { reviews, summary: { rating: average.toFixed(1), count: reviews.length } };
  } catch (error) {
    console.error("Could not load reviews from Sanity, hiding the review section", error);
    return fallback;
  }
});

export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
