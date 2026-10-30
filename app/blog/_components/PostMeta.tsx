import Image from "next/image";
import Link from "next/link";
import { formatPostDate, readingMinutes, type BlogPost } from "@/data/blog-posts";
import type { PostAuthor } from "@/sanity/blog";

export function PostMeta({
  post,
  className,
}: {
  post: Pick<BlogPost, "category" | "publishedAt" | "body">;
  className?: string;
}) {
  return (
    <p className={`flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground ${className ?? ""}`}>
      <span className="font-medium text-link">{post.category}</span>
      <span aria-hidden>·</span>
      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
      <span aria-hidden>·</span>
      <span>{readingMinutes(post)} min read</span>
    </p>
  );
}

/** Author photo, name and role, linking to their team profile. Pass `linked={false}` inside another link. */
export function AuthorByline({
  author,
  size = 40,
  linked = true,
}: {
  author: PostAuthor;
  size?: number;
  linked?: boolean;
}) {
  const content = (
    <>
      <span
        className="relative shrink-0 overflow-hidden rounded-full bg-surface-2"
        style={{ width: size, height: size }}
      >
        {author.avatar ? (
          <Image src={author.avatar} alt="" fill sizes={`${size}px`} className="object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-display text-sm font-semibold text-link">
            {author.initials}
          </span>
        )}
      </span>
      <span className="text-sm">
        <span className="block font-semibold text-foreground group-hover:text-link">{author.name}</span>
        <span className="block text-muted-foreground">{author.role}</span>
      </span>
    </>
  );
  const className = "group inline-flex items-center gap-3";

  return linked && author.href ? (
    <Link href={author.href} className={className}>
      {content}
    </Link>
  ) : (
    <span className={className}>{content}</span>
  );
}
