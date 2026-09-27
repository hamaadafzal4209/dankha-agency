import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio-projects";
import { SERVICES } from "@/data/services";
import { teamMembers } from "@/data/team";

const siteUrl = "https://www.dankha.co";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.flatMap((service) => [
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

  return [...staticRoutes, ...portfolioRoutes, ...serviceRoutes, ...teamRoutes];
}
