import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/Home/CTA";
import { getAllPosts } from "@/sanity/blog";
import { BlogList } from "./_components/BlogList";

const fallbackMetadata: Metadata = {
  title: "Blog: ecommerce, web and marketing advice",
  description:
    "Practical advice from the Dankha team on websites, apps, Shopify, Amazon and other marketplaces, ads, SEO and email marketing.",
  alternates: { canonical: "https://www.dankha.co/blog" },
  openGraph: {
    title: "Blog | Dankha",
    description:
      "Practical advice from the Dankha team on websites, apps, Shopify, Amazon and other marketplaces, ads, SEO and email marketing.",
    url: "https://www.dankha.co/blog",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/blog", fallbackMetadata);
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 md:pt-20 lg:px-8 lg:pb-18">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Notes on building and growing online."
          description="Practical advice from our team on websites, apps, marketplaces and marketing. No fluff, just what we'd tell a client on a call."
          className="max-w-3xl"
        />
        <BlogList posts={posts} />
      </section>

      <CTA />
    </>
  );
}
