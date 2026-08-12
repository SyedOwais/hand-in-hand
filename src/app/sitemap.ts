import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thedesignsllc.com/will/therapyanddaycare";

  const routes = [
    "",
    "/therapy",
    "/adult-program",
    "/adult-programs",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/sitemap",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/therapy" || route === "/adult-program" ? 0.9 : 0.8,
  }));
}
