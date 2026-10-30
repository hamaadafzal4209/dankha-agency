import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostSeo, seoMetadata } from "@/sanity/seo";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/Home/CTA";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import type { BlogBlock, BlogCategory } from "@/data/blog-posts";
import { getAllPosts, getPost } from "@/sanity/blog";
import { AuthorByline, PostMeta } from "../_components/PostMeta";
import { OrganizationId } from "@/data/commonConstants";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

const siteUrl = "https://www.dankha.co";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return seoMetadata(
    `/blog/${slug}`,
    {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `${siteUrl}/blog/${slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        url: `${siteUrl}/blog/${slug}`,
        publishedTime: post.publishedAt,
        images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
      },
    },
    (await getPostSeo(slug)) ?? undefined,
  );
}

async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allPosts = await getAllPosts();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const author = post.author;
  const related = [
    ...allPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...allPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${siteUrl}/blog/${post.slug}`,
    image: post.coverImage ? new URL(post.coverImage, siteUrl).toString() : undefined,
    author: author
      ? { "@type": "Person", name: author.name, url: author.href ? `${siteUrl}${author.href}` : undefined }
      : undefined,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    publisher: { "@type": "ProfessionalService", "@id": OrganizationId, name: "Dankha", url: siteUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article>
        <header className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 md:pt-20 lg:px-0">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <Reveal immediate className="mt-10">
            <PostMeta post={post} />
            <AnimatedHeading as="h1" immediate text={post.title} className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl" />
            <p className="mt-6 text-xl text-muted-foreground">{post.excerpt}</p>
            {author && (
              <div className="mt-8">
                <AuthorByline author={author} size={44} />
              </div>
            )}
          </Reveal>
        </header>

        {post.coverImage && (
          <Reveal immediate delay={0.08} className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-16/9 overflow-hidden rounded-lg bg-surface-2">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-0">
          {post.body.map((block, index) => (
            <ArticleBlock key={index} block={block} />
          ))}
          <p className="mt-12 text-lg text-foreground/85">
            Want a hand with this?{" "}
            <Link href={serviceForCategory[post.category].href} className="font-semibold text-link hover:underline">
              See our {serviceForCategory[post.category].label} services
            </Link>
            .
          </p>
        </div>

        {author && (
          <footer className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col gap-4 border-y border-border py-8 sm:flex-row sm:items-center sm:justify-between">
              <AuthorByline author={author} size={52} />
              {author.href && (
                <Link
                  href={author.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-link hover:underline"
                >
                  More about {author.name.split(" ")[0]} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </footer>
        )}
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:mt-18 lg:px-8">
          <div className="flex items-baseline justify-between gap-4">
            <AnimatedHeading text="Keep reading" id="related-heading" className="font-display text-2xl font-semibold text-foreground sm:text-3xl" />
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-link">
              All articles
            </Link>
          </div>
          <ul className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="group block">
                  <PostMeta post={item} />
                  <span className="mt-3 block font-display text-xl font-semibold text-foreground transition-colors group-hover:text-link">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-muted-foreground">{item.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-16">
        <CTA />
      </div>
    </>
  );
}

function ArticleBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-semibold text-foreground first:mt-0 sm:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="mt-5 text-lg leading-relaxed text-foreground/85 first:mt-0">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-relaxed text-foreground/85 marker:text-link">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-foreground/85 marker:font-semibold marker:text-link">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-primary pl-6 font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
          {block.text}
        </blockquote>
      );
  }
}

export default BlogPostPage;

/** The service page each blog category links to at the end of a post */
const serviceForCategory: Record<BlogCategory, { href: string; label: string }> = {
  Ecommerce: { href: "/services/ecommerce", label: "ecommerce and marketplace" },
  "Web development": { href: "/services/it", label: "website and app development" },
  Marketing: { href: "/services/marketing", label: "ads, SEO and email marketing" },
};
