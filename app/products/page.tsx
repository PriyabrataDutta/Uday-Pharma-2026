import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { products } from "@/data/products";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore UDY Healthcare's portfolio across pediatric, general healthcare, women's healthcare, nutraceutical and specialized therapeutic segments.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Our Products"
        description="Explore UDY Healthcare's portfolio across pediatric, general healthcare, women's healthcare, nutraceutical and specialized therapeutic segments."
      />

      <section className="container-page py-16 lg:py-24">
        <Suspense>
          <ProductsExplorer products={products} />
        </Suspense>

        <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed text-text-muted">
          {company.disclaimer}
        </p>
      </section>
    </>
  );
}
