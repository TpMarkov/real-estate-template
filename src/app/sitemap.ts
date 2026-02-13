import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/agents`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Property filter pages
  const propertyFilterPages = [
    { url: `${baseUrl}/properties?status=for_sale`, priority: 0.8 },
    { url: `${baseUrl}/properties?status=for_rent`, priority: 0.8 },
    { url: `${baseUrl}/properties?type=apartment`, priority: 0.7 },
    { url: `${baseUrl}/properties?type=house`, priority: 0.7 },
    { url: `${baseUrl}/properties?type=villa`, priority: 0.7 },
    { url: `${baseUrl}/properties?type=studio`, priority: 0.6 },
    { url: `${baseUrl}/properties?type=office`, priority: 0.6 },
    { url: `${baseUrl}/properties?type=commercial`, priority: 0.6 },
    { url: `${baseUrl}/properties?type=land`, priority: 0.6 },
  ];

  // Location pages
  const locationPages = siteConfig.locations.map((location) => ({
    url: `${baseUrl}/properties?location=${location.code}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Individual property pages (in production, these would come from a database)
  // TODO: Fetch actual property IDs from database/API
  const propertyPages = [
    "prop-1",
    "prop-2",
    "prop-3",
    "prop-4",
    "prop-5",
    "prop-6",
  ].map((id) => ({
    url: `${baseUrl}/properties/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...propertyFilterPages.map((page) => ({
      ...page,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),
    ...locationPages,
    ...propertyPages,
  ];
}
