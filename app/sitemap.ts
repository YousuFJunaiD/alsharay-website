import type { MetadataRoute } from "next";

import { mainNavigation, utilityLinks } from "@/data/navigation";
import { resultEntries } from "@/data/results";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = new Set<string>(["/", "/home", "/contact"]);

  for (const item of mainNavigation) {
    staticRoutes.add(item.href);
    item.children?.forEach((child) => staticRoutes.add(child.href));
  }

  utilityLinks.forEach((item) => staticRoutes.add(item.href));
  resultEntries.forEach((item) => staticRoutes.add(`/results/${item.slug}`));

  return Array.from(staticRoutes).map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
