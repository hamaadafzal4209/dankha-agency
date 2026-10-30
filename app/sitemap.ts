import type { MetadataRoute } from "next";
import { getAllPosts } from "@/sanity/blog";
import { getHiddenPaths } from "@/sanity/seo";
import { portfolioProjects } from "@/data/portfolio-projects";
import { getServices } from "@/sanity/services";
import { teamMembers } from "@/data/team";

const siteUrl = "https://www.dankha.co";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = (await getServices()).flatMap((service) => [
    {
      url: `${siteUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...service.subcategories.map((subcategory) => ({
      url: `${siteUrl}/services/${service.slug}/${subcategory.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);

  const teamRoutes: MetadataRoute.Sitemap = teamMembers.map((member) => ({
    url: `${siteUrl}/team/${member.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = (await getAllPosts()).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const hiddenPaths = await getHiddenPaths();
  const isHidden = (url: string) => hiddenPaths.has(url.slice(siteUrl.length) || "/");

  return [...staticRoutes, ...portfolioRoutes, ...serviceRoutes, ...teamRoutes, ...blogRoutes].filter(
    (route) => !isHidden(route.url),
  );
}
