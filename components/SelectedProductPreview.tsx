"use client";

import Image from "next/image";
import Link from "next/link";
import { Pill, Package, X, FileText, ExternalLink } from "lucide-react";
import { type Product, productCategories } from "@/data/products";

export function SelectedProductPreview({
  product,
  onClear,
}: {
  product: Product;
  onClear?: () => void;
}) {
  const categoryObj = productCategories.find((c) => c.slug === product.category);
  const isGyne = product.category === "gynecology";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-white via-sky-50/40 to-white p-5 shadow-sm transition-all">
      <div className="flex items-start justify-between gap-3 border-b border-sky-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-[11px] font-bold">
            ✓
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
            Selected Product for Enquiry
          </span>
        </div>

        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
            title="Clear product selection"
          >
            <X size={13} /> Change Product
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
        {/* Product Packshot */}
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2 shadow-2xs">
          <Image
            src={`/images/products/udy-healthcare-${product.slug}.webp`}
            alt={`${product.name} packaging`}
            fill
            sizes="96px"
            className="object-contain p-2 mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-1.5 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                isGyne ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-sky-50 text-sky-700 border border-sky-200"
              }`}
            >
              {categoryObj?.label || "Healthcare"}
            </span>
            {product.form && (
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                <Pill size={11} /> {product.form}
              </span>
            )}
            {product.note && (
              <span className="inline-flex items-center gap-1 rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700 border border-teal-100">
                <Package size={11} /> {product.note}
              </span>
            )}
          </div>

          <h4 className="text-base font-bold text-slate-900">{product.name}</h4>

          {product.composition && (
            <p className="text-xs font-medium text-slate-600 line-clamp-2">
              <span className="font-semibold text-sky-700">Formulation:</span> {product.composition}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] font-semibold">
            <Link
              href={`/products/${product.slug}`}
              target="_blank"
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 hover:underline"
            >
              <ExternalLink size={11} /> View Full Profile
            </Link>
            <a
              href={`/images/visual-aids/${product.slug}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 hover:underline"
            >
              <FileText size={11} /> View Detailing Poster
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
