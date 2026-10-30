import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";

const fallbackMetadata: Metadata = {
  title: "Contact us: book a free project call",
  description:
    "Book a free call with Dankha about your online store, marketplace listings, ads or website. Email info@dankha.co or call +92 336 1409344.",
  alternates: { canonical: "https://www.dankha.co/contact" },
  openGraph: {
    title: "Contact Dankha: book a free project call",
    description:
      "Book a free call with Dankha about your online store, marketplace listings, ads or website. Email info@dankha.co or call +92 336 1409344.",
    url: "https://www.dankha.co/contact",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadata("/contact", fallbackMetadata);
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
