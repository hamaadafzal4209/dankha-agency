import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dankha | Book Your Free Technical Consultation",
  description:
    "Ready to scale your next digital product? Contact the engineering and strategy experts at Dankha today for a comprehensive, zero-obligation project evaluation.",
  alternates: { canonical: "https://dankha.co/contact" },
  openGraph: {
    title: "Contact Dankha | Book Your Free Technical Consultation",
    description:
      "Ready to scale your next digital product? Contact the engineering and strategy experts at Dankha today for a comprehensive, zero-obligation project evaluation.",
    url: "https://dankha.co/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
