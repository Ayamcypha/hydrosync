import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hydrosync.com";

  const staticPages = [
    "",
    "/services",
    "/schedule",
    "/contact",
    "/about",
    "/reviews",
    "/faq",
    "/service-area",
    "/financing",
    "/coupons",
    "/careers",
    "/blog",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = [
    "/services/hvac",
    "/services/hvac/heating",
    "/services/hvac/cooling",
    "/services/hvac/air-quality",
    "/services/plumbing",
    "/services/sewer-drains",
    "/services/commercial",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const subServicePages = [
    "/services/hvac/heating/furnace-installation",
    "/services/hvac/heating/furnace-replacement",
    "/services/hvac/heating/furnace-repair",
    "/services/hvac/heating/furnace-maintenance",
    "/services/hvac/cooling/ac-replacement",
    "/services/hvac/cooling/ac-repair",
    "/services/hvac/cooling/ac-maintenance",
    "/services/plumbing/emergency",
    "/services/plumbing/water-heaters",
    "/services/plumbing/water-treatment",
    "/services/sewer-drains/drain-cleaning",
    "/services/sewer-drains/hydrojetting",
    "/services/sewer-drains/camera-inspection",
    "/services/sewer-drains/sewer-line",
    "/services/commercial/hvac",
    "/services/commercial/plumbing",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...subServicePages];
}