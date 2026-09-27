"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !document.startViewTransition) {
      previousPathname.current = pathname;
      return;
    }

    document.startViewTransition(() => {
      // Keep this transition purely visual. We intentionally do not delay
      // the page render, hide content, or inject any loading state.
    });

    previousPathname.current = pathname;
  }, [pathname]);

  return <>{children}</>;
}
