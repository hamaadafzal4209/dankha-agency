import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dankha Agency. Whether you have a project in mind or want to learn more about our services, we'd love to hear from you.",
  alternates: { canonical: "https://dankha.co/contact" },
  openGraph: {
    title: "Contact Dankha Agency",
    description:
      "Get in touch with Dankha Agency. Whether you have a project in mind or want to learn more about our services, we'd love to hear from you.",
    url: "https://dankha.co/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
