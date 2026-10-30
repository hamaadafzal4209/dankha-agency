import Image from "next/image";
import { initialsOf } from "@/sanity/reviews";

/** A client's photo, or their initials when the review has no photo */
export function ReviewAvatar({
  name,
  img,
  size,
  alt = "",
  className = "",
}: {
  name: string;
  img: string;
  size: number;
  alt?: string;
  className?: string;
}) {
  if (img) {
    return (
      <Image
        src={img}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden={alt ? undefined : true}
      aria-label={alt || undefined}
      role={alt ? "img" : undefined}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-primary/15 font-semibold text-link ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }}
    >
      {initialsOf(name)}
    </span>
  );
}
