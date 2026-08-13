import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://handinhandtherapy.ca";

  const routes = [
    "",
    "/therapy",
    "/speech-therapy-vaughan",
    "/occupational-therapy-vaughan",
    "/adult-program",
    "/adult-programs",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/sitemap",
    "/blogs",
    "/gallery",
    "/faqs",
    "/admissions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/therapy" || route === "/adult-program" ? 0.9 : 0.8,
  }));
}
