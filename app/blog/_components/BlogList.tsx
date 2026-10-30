"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FilterTabs } from "@/app/_components/FilterTabs";
import { blogCategories, type BlogCategory } from "@/data/blog-posts";
import type { ResolvedPost } from "@/sanity/blog";
import { AuthorByline, PostMeta } from "./PostMeta";

type Filter = "All" | BlogCategory;

export function BlogList({ posts }: { posts: ResolvedPost[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const [featured, ...rest] = posts;
  const listed = filter === "All" ? rest : posts.filter((post) => post.category === filter);
  const countFor = (c: Filter) => (c === "All" ? posts.length : posts.filter((post) => post.category === c).length);

  return (
    <>
      {filter === "All" && featured && (
        <Reveal immediate className="mt-16">
          <Link href={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {featured.coverImage && (
              <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-surface-2 lg:col-span-7">
                <Image
                  src={featured.coverImage}
                  alt=""
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className={featured.coverImage ? "lg:col-span-5" : "lg:col-span-12"}>
              <p className="text-sm font-medium text-muted-foreground">Latest article</p>
              <PostMeta post={featured} className="mt-3" />
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground transition-colors group-hover:text-link sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{featured.excerpt}</p>
              {featured.author && (
                <div className="mt-6">
                  <AuthorByline author={featured.author} linked={false} />
                </div>
              )}
            </div>
          </Link>
        </Reveal>
      )}

      <FilterTabs
        label="Filter articles by topic"
        options={blogCategories}
        value={filter}
        onChange={setFilter}
        countFor={countFor}
        className="mt-20"
      />

      <ul>
        {listed.map((post) => (
          <li key={`${filter}-${post.slug}`} className="border-b border-border">
            <Reveal>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-[14rem_1fr_auto] md:gap-10"
              >
                <PostMeta post={post} className="md:flex-col md:items-start md:gap-1 md:[&>span[aria-hidden]]:hidden" />
                <span>
                  <span className="block font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-link">
                    {post.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-muted-foreground">{post.excerpt}</span>
                </span>
                <ArrowRight
                  size={20}
                  className="hidden self-center text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-link md:block"
                />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
