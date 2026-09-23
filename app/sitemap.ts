import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.udyhealthcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
