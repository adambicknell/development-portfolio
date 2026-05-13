import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const baseUrl = (process.env.SITEMAP_ORIGIN ?? "https://dev.bicknell.uk").replace(/\/$/, "");

const absoluteUrl = (path: string) => `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

const toSitemapEntry = ({
  path,
  lastModified = new Date(),
  changeFrequency = "weekly",
  priority = 0.7,
}: {
  path: string;
  lastModified?: Date | string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
}): MetadataRoute.Sitemap[number] => ({
  url: absoluteUrl(path),
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/case-studies", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/demo-projects", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/experience", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/skills", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/skills/a-z", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/cv", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/uses", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/now", changeFrequency: "weekly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const caseStudyRoutes = caseStudies.map((item) =>
    toSitemapEntry({
      path: `/case-studies/${item.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const demoProjectRoutes = projects.map((item) =>
    toSitemapEntry({
      path: `/demo-projects/${item.slug}`,
      changeFrequency: item.status === "Live" ? "monthly" : "weekly",
      priority: item.status === "Live" ? 0.8 : 0.7,
    }),
  );

  return [
    ...staticRoutes.map(toSitemapEntry),
    ...caseStudyRoutes,
    ...demoProjectRoutes,
  ];
}
