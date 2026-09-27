import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://www.dankha.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dankha | Premium Digital Agency & Custom Software Solutions",
    template: "%s | Dankha",
  },
  description:
    "Scale your enterprise with Dankha. We design intuitive digital products, bespoke software engineering, and data-driven marketing frameworks. Get a free audit.",
  keywords: [
    "digital agency",
    "web development",
    "ecommerce",
    "digital marketing",
    "brand design",
    "UI UX design",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Dankha Agency", url: siteUrl }],
  creator: "Dankha Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dankha",
    title: "Dankha | Premium Digital Agency & Custom Software Solutions",
    description:
      "Scale your enterprise with Dankha. We design intuitive digital products, bespoke software engineering, and data-driven marketing frameworks.",
    images: [
      {
        url: `${siteUrl}/assets/logo.png`,
        width: 1200,
        height: 630,
        alt: "Dankha Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dankha | Premium Digital Agency & Custom Software Solutions",
    description:
      "Scale your enterprise with Dankha. We design intuitive digital products, bespoke software engineering, and data-driven marketing frameworks.",
    images: [`${siteUrl}/assets/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dankha Agency",
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    description:
      "Premium digital agency specialising in web engineering, ecommerce, digital marketing, and brand design.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dankha",
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-gradient-radial)">
        <AppShell>{children}</AppShell>
        <Toaster />
      </body>
    </html>
  );
}
