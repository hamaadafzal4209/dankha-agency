"use client";

import { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";
import { Background } from "@/components/Background";
import { CursorGlow } from "@/components/CursorGlow";
import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <NextTopLoader color="var(--secondary)" showSpinner={false} />
      <Analytics />
      <Background />
      <CursorGlow />
      <Navbar />
      <main className="relative min-h-screen pt-24">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
