import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { PressSpring } from "@/app/_components/PressSpring";
import { Toaster } from "@/components/ui/sonner";
import { BusinessAddress, ContactEmail, OrganizationId, PhoneNumber } from "@/data/commonConstants";
import { serviceAreas } from "@/components/services/ServiceSections";
import { shareImageUrl } from "@/sanity/client";
import { getSiteSeo } from "@/sanity/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const siteUrl = "https://www.dankha.co";

/** Used for anything not filled in under SEO → Site-wide defaults in the Studio */
const fallbackMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dankha | Websites, apps, online stores and marketing",
    template: "%s | Dankha",
  },
  description:
    "Dankha designs and builds websites, apps and online stores, and runs ads, SEO and marketplaces for brands in the UAE, Sweden, Saudi Arabia, the US and Pakistan.",
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
    title: "Dankha | Websites, apps, online stores and marketing",
    description:
      "Websites, mobile apps and online stores, plus the ads, SEO and marketplace management that grow them.",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Dankha Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dankha | Websites, apps, online stores and marketing",
    description:
      "Websites, mobile apps and online stores, plus the ads, SEO and marketplace management that grow them.",
    images: [`${siteUrl}/opengraph-image`],
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
} satisfies Metadata;

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSeo();
  const siteName = site.siteName?.trim() || fallbackMetadata.openGraph.siteName;
  const defaultTitle = site.defaultTitle?.trim() || fallbackMetadata.title.default;
  const description = site.defaultDescription?.trim() || fallbackMetadata.description;
  const shareImages = site.defaultOgImage
    ? [{ url: shareImageUrl(site.defaultOgImage), width: 1200, height: 630, alt: site.defaultOgImage.alt || siteName }]
    : fallbackMetadata.openGraph.images;

  return {
    ...fallbackMetadata,
    title: {
      default: defaultTitle,
      template: site.titleTemplate?.includes("%s") ? site.titleTemplate : fallbackMetadata.title.template,
    },
    description,
    keywords: site.defaultKeywords?.length ? site.defaultKeywords : fallbackMetadata.keywords,
    openGraph: {
      ...fallbackMetadata.openGraph,
      siteName,
      title: site.defaultTitle?.trim() || fallbackMetadata.openGraph.title,
      description: site.defaultDescription?.trim() || fallbackMetadata.openGraph.description,
      images: shareImages,
    },
    twitter: {
      ...fallbackMetadata.twitter,
      ...(site.twitterHandle?.trim() ? { site: site.twitterHandle.trim() } : {}),
      title: site.defaultTitle?.trim() || fallbackMetadata.twitter.title,
      description: site.defaultDescription?.trim() || fallbackMetadata.twitter.description,
      images: shareImages.map((image) => image.url),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialUrls = [
    "https://www.instagram.com/dankha.co/",
    "https://www.linkedin.com/company/dankha/",
  ];

  /** One linked description of the business for Google; service, article and team pages point back to it by `@id` */
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": OrganizationId,
        name: "Dankha",
        alternateName: "Dankha Agency",
        url: siteUrl,
        logo: { "@type": "ImageObject", url: `${siteUrl}/assets/logo.png` },
        image: `${siteUrl}/assets/logo.png`,
        description:
          "Lahore-based agency that designs and builds websites, mobile apps and online stores, and manages ads, SEO and marketplaces.",
        foundingDate: "2020",
        email: ContactEmail,
        telephone: PhoneNumber,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: BusinessAddress.addressLocality,
          addressRegion: BusinessAddress.addressRegion,
          addressCountry: BusinessAddress.addressCountry,
        },
        areaServed: serviceAreas.map((name) => ({ "@type": "Country", name })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: PhoneNumber,
          email: ContactEmail,
          availableLanguage: "English",
        },
        sameAs: socialUrls,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Dankha",
        url: siteUrl,
        inLanguage: "en",
        publisher: { "@id": OrganizationId },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AppShell key="app-shell">{children}</AppShell>
        <PressSpring key="press-spring" />
        <Toaster key="toaster" />
      </body>
    </html>
  );
}
