"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowRight, Pill, Package } from "lucide-react";
import { productCategories, type Product, type ProductCategory } from "@/data/products";

export function GalleryGrid({
  products,
  columns,
}: {
  products: Product[];
  columns?: number;
}) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const active = activeIndex !== null ? filteredProducts[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % filteredProducts.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + filteredProducts.length) % filteredProducts.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, filteredProducts.length]);

  const gridColsClass =
    columns === 6
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6";

  return (
    <div className="flex flex-col gap-8">
      {/* Therapeutic Area Filter Tabs (Only shown when full products list is passed) */}
      {products.length > 6 && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const count =
              cat.slug === "all"
                ? products.length
                : products.filter((p) => p.category === cat.slug).length;

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.slug);
                  setActiveIndex(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 ring-2 ring-sky-600/30"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-700"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Product Gallery Renders */}
      <div className={`grid gap-4 ${gridColsClass}`}>
        {filteredProducts.map((product, index) => (
          <button
            key={product.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${product.name} gallery image`}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50/60 to-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/10"
          >
            <div
              className="absolute bottom-4 left-1/2 h-3 w-3/4 -translate-x-1/2 rounded-full bg-sky-900/10 blur-sm"
              aria-hidden="true"
            />
            <Image
              src={`/images/products/udy-healthcare-${product.slug}.webp`}
              alt={product.name}
              fill
              sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 20vw, 33vw"
              className="object-contain p-4 mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-2 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="block truncate text-[11px] font-bold text-white">
                {product.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {active && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex w-full max-w-lg flex-col items-center gap-4 rounded-3xl bg-white p-6 sm:p-8 text-center shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
            >
              <X aria-hidden="true" size={18} />
            </button>

            <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl bg-gradient-to-b from-sky-50 to-slate-100 p-4">
              <div
                className="absolute bottom-6 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-sky-900/15 blur-md"
                aria-hidden="true"
              />
              <Image
                src={`/images/products/udy-healthcare-${active.slug}.webp`}
                alt={active.name}
                fill
                priority
                sizes="224px"
                className="object-contain p-4 mix-blend-multiply"
              />
            </div>

            <div>
              <div className="flex justify-center gap-2 mb-1">
                {active.form && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    <Pill size={11} /> {active.form}
                  </span>
                )}
                {active.note && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                    <Package size={11} /> {active.note}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">{active.name}</h3>
              {active.composition && (
                <p className="mt-1 text-xs font-medium text-slate-600 max-w-sm mx-auto">
                  {active.composition}
                </p>
              )}
            </div>

            <div className="flex w-full items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) =>
                      i === null ? i : (i - 1 + filteredProducts.length) % filteredProducts.length
                    )
                  }
                  aria-label="Previous image"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
                >
                  <ChevronLeft aria-hidden="true" size={18} />
                </button>
                <span className="text-xs font-medium text-slate-400">
                  {activeIndex + 1} / {filteredProducts.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) =>
                      i === null ? i : (i + 1) % filteredProducts.length
                    )
                  }
                  aria-label="Next image"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
                >
                  <ChevronRight aria-hidden="true" size={18} />
                </button>
              </div>

              <Link
                href={`/products/${active.slug}`}
                onClick={() => setActiveIndex(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-sky-600/20 hover:bg-sky-700"
              >
                Product Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
