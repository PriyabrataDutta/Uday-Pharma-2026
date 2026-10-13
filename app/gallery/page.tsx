import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { products } from "@/data/products";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Product Gallery",
  description:
    "Visual showcase of UDY Healthcare's growing portfolio of pharmaceutical and healthcare products across pediatric and gynecology segments.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Portfolio"
        title="Our Products in Focus"
        description="A comprehensive visual look at UDY Healthcare's growing portfolio across pediatric, gynecology, and specialized healthcare segments."
        stats={[
          { label: "Product Portfolio", value: `${products.length}+` },
          { label: "Focus Segments", value: "Pediatric & Gynecology" },
          { label: "Packaging Standard", value: "Verified IP" },
        ]}
      />

      <section className="container-page py-12 lg:py-18">
        <GalleryGrid products={products} />

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-sky-100 bg-sky-50/50 p-5 text-center">
          <p className="text-xs leading-relaxed text-slate-500">
            {company.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
