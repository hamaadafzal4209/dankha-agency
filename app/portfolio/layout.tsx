import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of web, ecommerce, marketing, and brand design projects. See how Dankha Agency has helped ambitious brands grow.",
  alternates: { canonical: "https://dankha.co/portfolio" },
  openGraph: {
    title: "Portfolio — Dankha Agency",
    description:
      "Browse our portfolio of web, ecommerce, marketing, and brand design projects.",
    url: "https://dankha.co/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
