import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://handinhandtherapy.ca";

  const routes = [
    "",
    "/therapy",
    "/aba-therapy-vaughan",
    "/speech-therapy-vaughan",
    "/locations/speech-therapy-adults-vaughan",
    "/occupational-therapy-vaughan",
    "/adult-program",
    "/adult-programs",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/sitemap",
    "/blogs",
    "/blogs/adult-speech-therapy-vaughan-guide",
    "/blogs/aba-therapy-vaughan-parent-guide",
    "/blogs/signs-child-needs-occupational-therapy-vaughan",
    "/blogs/signs-your-child-needs-speech-therapy-vaughan",
    "/blogs/passport-funding-transition-18",
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
