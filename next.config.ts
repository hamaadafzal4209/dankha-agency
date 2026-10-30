import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A pnpm-lock.yaml in the parent Downloads folder otherwise makes Turbopack treat Downloads as the project root
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;