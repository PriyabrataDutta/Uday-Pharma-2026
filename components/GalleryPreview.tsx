import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GalleryGrid } from "./GalleryGrid";
import { products } from "@/data/products";

const galleryPreviewSlugs = [
  "amoxy-xl",
  "tiny-tooths",
  "udkid-cef",
  "vit-maxx-dha-choline-lutein",
  "ovundra",
  "udkid-ls",
];

export function GalleryPreview() {
  const items = galleryPreviewSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="home-gallery bg-background-soft py-16 lg:py-24">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from Our Journey"
          action={
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
            >
              View Gallery <ArrowRight aria-hidden="true" size={15} />
            </Link>
          }
        />
        <GalleryGrid products={items} columns={6} />
      </div>
    </section>
  );
}
