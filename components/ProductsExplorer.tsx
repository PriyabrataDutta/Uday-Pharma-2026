"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, X, Filter, Grid3X3, Grid2X2, RotateCcw } from "lucide-react";
import { ProductGrid } from "./ProductGrid";
import { ProductModal } from "./ProductModal";
import { productCategories, type Product, type ProductCategory } from "@/data/products";

export function ProductsExplorer({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlCategory = searchParams.get("category") as ProductCategory | "all" | null;
  const [category, setCategory] = useState<ProductCategory | "all">(urlCategory ?? "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [gridColumns, setGridColumns] = useState<3 | 4>(4);

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(query) ||
        (p.composition && p.composition.toLowerCase().includes(query)) ||
        (p.form && p.form.toLowerCase().includes(query)) ||
        (p.note && p.note.toLowerCase().includes(query))
      );
    });
  }, [products, category, searchQuery]);

  // Compute product counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: products.length,
      pediatric: 0,
      gynecology: 0,
    };
    products.forEach((p) => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, [products]);

  function handleSelectCategory(next: ProductCategory | "all") {
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

  function handleReset() {
    setCategory("all");
    setSearchQuery("");
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Top Filter & Search Controls */}
      <div className="flex flex-col gap-5 rounded-3xl border border-sky-100 bg-white p-5 shadow-lg shadow-sky-900/5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter products by therapeutic area"
            className="flex flex-wrap items-center gap-2"
          >
            {productCategories.map((item) => {
              const isActive = category === item.slug;
              const count = categoryCounts[item.slug] ?? 0;
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelectCategory(item.slug)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 ring-2 ring-sky-600/30"
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-700"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box & Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72 lg:w-80">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, composition, form..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 py-2.5 pl-10 pr-9 text-xs font-medium text-slate-900 placeholder-slate-400 transition-all focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Column Layout Toggles (Hidden on mobile) */}
            <div className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 sm:flex">
              <button
                type="button"
                onClick={() => setGridColumns(4)}
                aria-label="4 column layout"
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  gridColumns === 4 ? "bg-white text-sky-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <Grid3X3 size={15} />
              </button>
              <button
                type="button"
                onClick={() => setGridColumns(3)}
                aria-label="3 column layout"
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  gridColumns === 3 ? "bg-white text-sky-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <Grid2X2 size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700">
              Showing {filteredProducts.length} of {products.length} Products
            </span>
            {(category !== "all" || searchQuery) && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-2 py-0.5 font-medium text-sky-700 border border-sky-100">
                <Filter size={11} /> Filtered
              </span>
            )}
          </div>

          {(category !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700 hover:underline"
            >
              <RotateCcw size={12} /> Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Main Product Grid */}
      <ProductGrid
        products={filteredProducts}
        columns={gridColumns}
        onQuickView={(prod) => setSelectedProduct(prod)}
      />

      {/* Quick View Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
