"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Wraps pages in the site header and footer, except the full-screen Sanity Studio at /studio. Each piece is its own
 * slot rather than a list, because the footer streams in later and a streamed item inside a list loses its key.
 */
export function SiteChrome({
  header,
  footer,
  floating,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  /** Fixed-position extras, such as the back-to-top button */
  floating?: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main className="relative min-h-screen pt-18 lg:pt-22">{children}</main>
      {footer}
      {floating}
    </>
  );
}
