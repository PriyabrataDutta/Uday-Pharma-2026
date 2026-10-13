"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Package,
  Pill,
  ShieldCheck,
  Mail,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  FileText,
  Boxes,
  Award,
} from "lucide-react";
import { productCategories, type Product } from "@/data/products";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;
  return <ProductModalInner key={product.slug} product={product} onClose={onClose} />;
}

function ProductModalInner({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"visual-aid" | "pack">("visual-aid");
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasVisualAidError, setHasVisualAidError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const categoryObj = productCategories.find((c) => c.slug === product.category);
  const isGyne = product.category === "gynecology";
  const visualAidSrc = `/images/visual-aids/${product.slug}.jpg`;
  const packshotSrc = `/images/products/udy-healthcare-${product.slug}.webp`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 sm:p-5 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl max-h-[92vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 animate-in zoom-in-95 lg:flex-row lg:items-stretch border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product view"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur-md transition-all hover:bg-slate-100 hover:text-slate-900 hover:scale-105"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {/* Left / Main Showcase: Visual Aid & Pack Viewer */}
        <div className="relative flex flex-col flex-1 lg:w-[62%] bg-slate-100/90 border-b lg:border-b-0 lg:border-r border-slate-200 min-h-0">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 bg-white/80 px-4 py-2.5 backdrop-blur-sm sm:px-6">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("visual-aid");
                  setIsZoomed(false);
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "visual-aid"
                    ? "bg-white text-sky-700 shadow-xs ring-1 ring-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FileText size={13} className={activeTab === "visual-aid" ? "text-sky-600" : ""} />
                <span>Visual Aid Detailing</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("pack");
                  setIsZoomed(false);
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "pack"
                    ? "bg-white text-sky-700 shadow-xs ring-1 ring-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Boxes size={13} className={activeTab === "pack" ? "text-sky-600" : ""} />
                <span>3D Packshot</span>
              </button>
            </div>

            {/* Quick Actions (Zoom & Open Full) */}
            <div className="flex items-center gap-2">
              {activeTab === "visual-aid" && !hasVisualAidError && (
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all ${
                    isZoomed
                      ? "border-sky-300 bg-sky-50 text-sky-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  title={isZoomed ? "Reset zoom" : "Zoom in on detailing poster"}
                >
                  {isZoomed ? <ZoomOut size={13} /> : <ZoomIn size={13} />}
                  <span className="hidden sm:inline">{isZoomed ? "Fit to View" : "Zoom In"}</span>
                </button>
              )}

              <a
                href={activeTab === "visual-aid" && !hasVisualAidError ? visualAidSrc : packshotSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900"
                title="Open high-resolution image in new browser tab"
              >
                <ExternalLink size={13} />
                <span className="hidden sm:inline">Open Full Size</span>
              </a>
            </div>
          </div>

          {/* Interactive Image Viewport */}
          <div
            className={`relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center min-h-[340px] sm:min-h-[460px] lg:min-h-[560px] ${
              isZoomed ? "cursor-zoom-out" : activeTab === "visual-aid" && !hasVisualAidError ? "cursor-zoom-in" : ""
            }`}
            onClick={() => {
              if (activeTab === "visual-aid" && !hasVisualAidError) {
                setIsZoomed(!isZoomed);
              }
            }}
          >
            {activeTab === "visual-aid" && !hasVisualAidError ? (
              <div
                className={`relative transition-all duration-300 flex items-center justify-center ${
                  isZoomed
                    ? "w-[1200px] max-w-none py-4"
                    : "w-full h-full max-h-[500px] lg:max-h-[600px]"
                }`}
              >
                {/* Visual Aid Detailing Image */}
                <Image
                  src={visualAidSrc}
                  alt={`${product.name} pharmaceutical visual aid detailing chart`}
                  fill={!isZoomed}
                  width={isZoomed ? 1200 : undefined}
                  height={isZoomed ? 890 : undefined}
                  priority
                  sizes="(min-width: 1024px) 60vw, 95vw"
                  className={`rounded-2xl shadow-xl shadow-slate-900/10 ${
                    isZoomed ? "h-auto w-full object-contain" : "object-contain"
                  }`}
                  onError={() => setHasVisualAidError(true)}
                />

                {/* Subtle Helper Hint Badge */}
                {!isZoomed && (
                  <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/75 px-3 py-1 text-[10px] font-semibold tracking-wide text-white shadow-sm backdrop-blur-sm">
                    Click image or toggle zoom to inspect fine detailing text
                  </span>
                )}
              </div>
            ) : (
              /* Packshot View (or fallback if visual aid missing) */
              <div className="relative flex aspect-square w-full max-w-sm items-center justify-center p-6">
                <div
                  className="absolute bottom-6 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-sky-900/15 blur-lg"
                  aria-hidden="true"
                />
                <Image
                  src={packshotSrc}
                  alt={`${product.name} packaging`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 85vw"
                  className="object-contain p-6 mix-blend-multiply transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Product Clinical Information & Actions */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:w-[38%] bg-white overflow-y-auto">
          <div className="space-y-4">
            {/* Category & Attributes Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {categoryObj && (
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      isGyne
                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                        : "bg-sky-50 text-sky-700 border border-sky-200"
                    }`}
                  >
                    {categoryObj.label}
                  </span>
                )}
                {product.form && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    <Pill size={12} /> {product.form}
                  </span>
                )}
                {product.note && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                    <Package size={12} /> {product.note}
                  </span>
                )}
              </div>

              <h2 id="product-modal-title" className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                {product.name}
              </h2>
            </div>

            {/* Active Composition Box */}
            {product.composition ? (
              <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/80 to-slate-50/60 p-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-sky-700">
                  <FileText size={12} /> Active Composition / Generic Formulation
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-800">
                  {product.composition}
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <p className="text-xs leading-relaxed text-slate-600">
                  Quality pharmaceutical formulation manufactured under strict quality standards for corporate healthcare distribution.
                </p>
              </div>
            )}

            {/* Verification Checklist */}
            <div className="space-y-2 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Clinical Detailing Standards
              </span>
              <ul className="space-y-2 text-xs font-medium text-slate-600 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                  <span>Verified Visual Aid for Healthcare Professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-sky-600 shrink-0" />
                  <span>Standardized Packaging & Batch Uniformity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award size={15} className="text-amber-600 shrink-0" />
                  <span>Marketed by UDY Healthcare Private Limited</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
            <Link
              href={`/enquiry?product=${encodeURIComponent(product.slug)}`}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 shadow-md shadow-sky-600/25 active:scale-98"
            >
              <Mail size={16} /> Enquire About {product.name}
            </Link>

            <Link
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              View Full Product Page <ArrowRight size={14} />
            </Link>

            <a
              href={visualAidSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-semibold text-sky-600 hover:text-sky-700 hover:underline"
            >
              <ExternalLink size={12} /> Open High-Resolution Poster in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
