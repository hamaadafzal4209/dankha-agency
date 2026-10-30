import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";

const fallbackMetadata: Metadata = {
  title: {
    absolute: "Our work: ecommerce and web case studies | Dankha",
  },
  description:
    "Case studies from Dankha: Shopify, Amazon, eBay, Walmart, Etsy and TikTok Shop stores, plus websites and apps for clients in Sweden, the UAE, Saudi Arabia and Pakistan.",
  alternates: { canonical: "https://www.dankha.co/portfolio" },
  openGraph: {
    title: "Our work: ecommerce and web case studies | Dankha",
    description:
      "Case studies from Dankha: Shopify, Amazon, eBay, Walmart, Etsy and TikTok Shop stores, plus websites and apps for clients in Sweden, the UAE, Saudi Arabia and Pakistan.",
    url: "https://www.dankha.co/portfolio",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/portfolio", fallbackMetadata);
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
