import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dankha",
    short_name: "Dankha",
    description: "Websites, mobile apps and online stores, plus the ads, SEO and marketplace management that grow them.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1626",
    theme_color: "#0b1626",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
