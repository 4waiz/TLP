import type { MetadataRoute } from "next";

import { events } from "@/data/events";

const routes = [
  "",
  "/services",
  "/events",
  "/people",
  "/gallery",
  "/about",
  "/about/company",
  "/about/founder",
  "/about/core-team",
  "/about/story",
  "/about/patrons",
  "/about/brand",
  "/alumni",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theleappakistan.com";

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...events.map((event) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: new Date(event.date),
    })),
  ];
}
