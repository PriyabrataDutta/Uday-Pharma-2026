import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProductGrid } from "./ProductGrid";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="home-products container-page py-16 lg:py-24">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Featured Products"
          title="Our Product Range"
          description="A growing portfolio of healthcare brands across multiple therapeutic and healthcare segments."
          action={
            <Link
              href="/products"
              className="hidden items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline sm:inline-flex"
            >
              View All Products <ArrowRight aria-hidden="true" size={15} />
            </Link>
          }
        />
        <ProductGrid products={featuredProducts} columns={5} />
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 self-center text-sm font-semibold text-brand-primary hover:underline sm:hidden"
        >
          View All Products <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </section>
  );
}
