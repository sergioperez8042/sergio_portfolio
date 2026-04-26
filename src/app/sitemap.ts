import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sergio-portfolio.vercel.app";

const sections = [
  "",
  "#about",
  "#work",
  "#projects",
  "#case-study",
  "#writing",
  "#contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return sections.map((section) => ({
    url: `${SITE_URL}/${section}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: section === "" ? 1 : 0.8,
    alternates: {
      languages: {
        "es-ES": `${SITE_URL}/${section}`,
        "en-US": `${SITE_URL}/${section}`,
      },
    },
  }));
}
