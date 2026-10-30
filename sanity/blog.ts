import { defineQuery } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { blogPosts, type BlogBlock, type BlogCategory, type BlogPost } from "@/data/blog-posts";
import { teamMembers } from "@/data/team";
import { client, imageUrl } from "./client";
import { isSanityConfigured } from "./env";

/** How often (in seconds) blog pages check Sanity for new or edited posts */
export const BLOG_REVALIDATE_SECONDS = 60;

export type PostAuthor = {
  name: string;
  role: string;
  avatar: string;
  initials: string;
  /** Team profile link, when the author is on the team page */
  href?: string;
};

export type ResolvedPost = Omit<BlogPost, "authorSlug"> & { author?: PostAuthor };

type PortableTextSpan = { _type: "span"; text: string };
type PortableTextBlock = {
  _type: "block";
  style?: string;
  listItem?: "bullet" | "number";
  children?: PortableTextSpan[];
};

type SanityPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  coverImage?: SanityImageSource;
  body?: PortableTextBlock[];
  author?: { name: string; slug?: string; role?: string; photo?: SanityImageSource };
};

const postsQuery = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  coverImage,
  body,
  author->{ name, "slug": slug.current, role, photo }
}`);

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function teamAuthor(slug: string | undefined): PostAuthor | undefined {
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) {
    return undefined;
  }
  return {
    name: member.name,
    role: member.role,
    avatar: member.avatar,
    initials: member.initials,
    href: `/team/${member.slug}`,
  };
}

/** Converts Sanity's rich text into the simple blocks the article page renders */
function toBlocks(body: PortableTextBlock[] = []): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  for (const block of body) {
    if (block._type !== "block") {
      continue;
    }
    const text = (block.children ?? []).map((child) => child.text).join("");
    if (!text.trim()) {
      continue;
    }
    if (block.listItem) {
      const type = block.listItem === "number" ? "ol" : "ul";
      const previous = blocks[blocks.length - 1];
      if (previous && previous.type === type) {
        previous.items.push(text);
      } else {
        blocks.push({ type, items: [text] });
      }
    } else if (block.style === "h2") {
      blocks.push({ type: "h2", text });
    } else if (block.style === "blockquote") {
      blocks.push({ type: "quote", text });
    } else {
      blocks.push({ type: "p", text });
    }
  }
  return blocks;
}

function fromSanity(post: SanityPost): ResolvedPost {
  const author = post.author
    ? (teamAuthor(post.author.slug) ?? {
        name: post.author.name,
        role: post.author.role ?? "",
        avatar: post.author.photo ? imageUrl(post.author.photo, 160) : "",
        initials: initialsOf(post.author.name),
      })
    : undefined;

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
    coverImage: post.coverImage ? imageUrl(post.coverImage, 1600) : undefined,
    body: toBlocks(post.body),
    author: author && post.author?.photo && !author.avatar ? { ...author, avatar: imageUrl(post.author.photo, 160) } : author,
  };
}

function localPosts(): ResolvedPost[] {
  return [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(({ authorSlug, ...post }) => ({ ...post, author: teamAuthor(authorSlug) }));
}

/** Posts from Sanity when it has any, otherwise the built-in posts in data/blog-posts.ts */
export async function getAllPosts(): Promise<ResolvedPost[]> {
  if (!isSanityConfigured) {
    return localPosts();
  }
  try {
    const posts = await client.fetch<SanityPost[]>(postsQuery, {}, { next: { revalidate: BLOG_REVALIDATE_SECONDS } });
    return posts.length > 0 ? posts.map(fromSanity) : localPosts();
  } catch (error) {
    console.error("Could not load posts from Sanity, using local posts instead", error);
    return localPosts();
  }
}

export async function getPost(slug: string): Promise<ResolvedPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
