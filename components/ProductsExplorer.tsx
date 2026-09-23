"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductGrid } from "./ProductGrid";
import { productCategories, type Product, type ProductCategory } from "@/data/products";

export function ProductsExplorer({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlCategory = searchParams.get("category") as ProductCategory | "all" | null;
  const [category, setCategory] = useState<ProductCategory | "all">(urlCategory ?? "all");

  const filtered = useMemo(
    () => (category === "all" ? products : products.filter((p) => p.category === category)),
    [products, category],
  );

  function handleSelect(next: ProductCategory | "all") {
    setCategory(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") {
      params.delete("category");
    } else {
      params.set("category", next);
    }
    router.replace(params.size ? `${pathname}?${params.toString()}` : pathname, {
      scroll: false,
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-2.5"
      >
        {productCategories.map((item) => {
          const isActive = category === item.slug;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(item.slug)}
              className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-border bg-white text-text-secondary hover:border-brand-primary/40 hover:text-brand-primary"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <ProductGrid products={filtered} columns={4} />
    </div>
  );
}
