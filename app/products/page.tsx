import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { products } from "@/data/products";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Products Directory",
  description:
    "Explore UDY Healthcare's portfolio across pediatric, gynecology & women's health, general healthcare, and specialized therapeutic segments.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const pediatricCount = products.filter((p) => p.category === "pediatric").length;
  const gynecologyCount = products.filter((p) => p.category === "gynecology").length;

  return (
    <>
      <PageHero
        eyebrow="Product Portfolio"
        title="Pharmaceutical & Healthcare Portfolio"
        description="Explore UDY Healthcare's growing product range developed for Pediatric Healthcare, Gynecology & Women's Health, and Specialized Therapeutic Segments."
        stats={[
          { label: "Total Formulations", value: `${products.length}+` },
          { label: "Pediatric Brands", value: `${pediatricCount}` },
          { label: "Gynecology Brands", value: `${gynecologyCount}` },
          { label: "Quality Standard", value: "Verified IP" },
        ]}
      />

      <section className="container-page py-12 lg:py-16">
        <Suspense fallback={<div className="p-12 text-center text-xs text-slate-400">Loading catalog...</div>}>
          <ProductsExplorer products={products} />
        </Suspense>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-sky-100 bg-sky-50/50 p-5 text-center">
          <p className="text-xs leading-relaxed text-slate-500">
            {company.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
