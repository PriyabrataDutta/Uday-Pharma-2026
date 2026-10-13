import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { products } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.udyhealthcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = navigation.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const additionalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/enquiry`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...additionalRoutes, ...productRoutes];
}
