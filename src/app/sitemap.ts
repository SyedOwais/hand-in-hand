import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://handinhandtherapy.ca";

  const routes = [
    "",
    "/therapy",
    "/aba-therapy-vaughan",
    "/speech-therapy-vaughan",
    "/locations/speech-therapy-adults-vaughan",
    "/locations/bradford/life-skills-routines",
    "/occupational-therapy-vaughan",
    "/adult-program",
    "/adult-programs",
    "/about",
    "/about-the-next-level",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/sitemap",
    "/blogs",
    "/blogs/bradford-life-skills-routines-parent-guide",
    "/blogs/adult-speech-therapy-vaughan-guide",
    "/blogs/aba-therapy-vaughan-parent-guide",
    "/blogs/vaughan-pediatric-occupational-therapy-signs",
    "/blogs/vaughan-pediatric-speech-language-delay-signs",
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
