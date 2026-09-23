import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look at UDY Healthcare's growing portfolio of pharmaceutical and healthcare products.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Products in Focus"
        description="A visual look at UDY Healthcare's growing portfolio across pediatric, gynecology, general healthcare and specialized segments."
      />

      <section className="container-page py-16 lg:py-24">
        <GalleryGrid products={products} columns={3} />
      </section>
    </>
  );
}
