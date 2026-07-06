import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work: Case Studies & Digital Success Stories | Dankha",
  description:
    "See how Dankha helps global brands scale. Explore real-world case studies in custom software engineering, UX/UI transformation, and performance optimization.",
  alternates: { canonical: "https://dankha.co/portfolio" },
  openGraph: {
    title: "Our Work: Case Studies & Digital Success Stories | Dankha",
    description:
      "See how Dankha helps global brands scale. Explore real-world case studies in custom software engineering, UX/UI transformation, and performance optimization.",
    url: "https://dankha.co/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
