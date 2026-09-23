"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";

export function GalleryGrid({
  products,
  columns = 3,
}: {
  products: Product[];
  columns?: 3 | 6;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? products[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % products.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + products.length) % products.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, products.length]);

  const colsClass = columns === 6 ? "sm:grid-cols-3 lg:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 ${colsClass}`}>
        {products.map((product, index) => (
          <button
            key={product.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${product.name}`}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background-soft to-surface shadow-card transition-shadow hover:shadow-card-hover"
          >
            <Image
              src={`/images/products/udy-healthcare-${product.slug}.webp`}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 16vw, 33vw"
              className="object-contain p-3 transition-transform duration-200 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} preview`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-text-primary/70 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-background-soft"
            >
              <X aria-hidden="true" size={18} />
            </button>

            <span className="relative h-40 w-40 overflow-hidden rounded-2xl bg-background-soft">
              <Image
                src={`/images/products/udy-healthcare-${active.slug}.webp`}
                alt={active.name}
                fill
                sizes="160px"
                className="object-contain p-3"
              />
            </span>
            <h3 className="text-lg font-semibold text-text-primary">{active.name}</h3>
            {active.composition && (
              <p className="text-sm text-text-secondary">{active.composition}</p>
            )}

            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((i) => (i === null ? i : (i - 1 + products.length) % products.length))
                }
                aria-label="Previous"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:bg-background-soft"
              >
                <ChevronLeft aria-hidden="true" size={16} />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i === null ? i : (i + 1) % products.length))}
                aria-label="Next"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary hover:bg-background-soft"
              >
                <ChevronRight aria-hidden="true" size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
