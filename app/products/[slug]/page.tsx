import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Pill, Package, ShieldCheck, Mail, Award } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { company } from "@/data/company";
import { ProductGrid } from "@/components/ProductGrid";
import { CTASection } from "@/components/CTASection";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return { title: "Product Not Found" };
    }

    const categoryObj = productCategories.find((c) => c.slug === product.category);
    const categoryName = categoryObj ? categoryObj.label : "Healthcare Products";

    return {
      title: `${product.name} | ${categoryName}`,
      description: product.composition
        ? `${product.name} (${product.composition}) by UDY Healthcare. Formulated for ${categoryName.toLowerCase()}.`
        : `${product.name} by UDY Healthcare Private Limited across ${categoryName.toLowerCase()} segment.`,
      alternates: { canonical: `/products/${product.slug}` },
      openGraph: {
        title: `${product.name} | UDY Healthcare`,
        description: product.composition || `${product.name} by UDY Healthcare`,
        images: [{ url: `/images/products/udy-healthcare-${product.slug}.webp` }],
      },
    };
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const categoryObj = productCategories.find((c) => c.slug === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      {/* Breadcrumbs & Navigation Bar */}
      <section className="w-full border-b border-sky-100 bg-white py-4 shadow-2xs">
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-300" />
            <Link href="/products" className="hover:text-sky-600 transition-colors">
              Products
            </Link>
            {categoryObj && (
              <>
                <ChevronRight size={14} className="text-slate-300" />
                <Link
                  href={`/products?category=${categoryObj.slug}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {categoryObj.label}
                </Link>
              </>
            )}
            <ChevronRight size={14} className="text-slate-300" />
            <span className="font-semibold text-slate-900">{product.name}</span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline"
          >
            <ArrowLeft size={14} /> Back to Products
          </Link>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Product Packaging Stage (5 columns) */}
          <div className="lg:col-span-5">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 p-8 shadow-xl shadow-sky-900/5">
              <div
                className="absolute bottom-10 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-sky-900/15 blur-lg"
                aria-hidden="true"
              />
              <Image
                src={`/images/products/udy-healthcare-${product.slug}.webp`}
                alt={`${product.name} packaging`}
                fill
                priority
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-contain p-8 mix-blend-multiply transition-transform duration-300 hover:scale-105"
              />
              {categoryObj && (
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-sm backdrop-blur-md border border-sky-100">
                  {categoryObj.label}
                </span>
              )}
            </div>
          </div>

          {/* Product Information & Specification Details (7 columns) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {product.form && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    <Pill size={14} /> {product.form}
                  </span>
                )}
                {product.note && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    <Package size={14} /> {product.note}
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {product.name}
              </h1>

              {product.composition && (
                <p className="mt-2 text-base font-medium text-sky-800">
                  {product.composition}
                </p>
              )}
            </div>

            {/* Active Composition Box */}
            {product.composition ? (
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Confirmed Active Composition
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  {product.composition}
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Product Overview
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  Formulated according to verified pharmaceutical standards for corporate healthcare distribution under UDY Healthcare Private Limited.
                </p>
              </div>
            )}

            {/* Product Specifications Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700">
                Product Details & Attributes
              </div>
              <dl className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="grid grid-cols-3 px-5 py-3.5">
                  <dt className="font-semibold text-slate-500">Product Brand</dt>
                  <dd className="col-span-2 font-medium text-slate-900">{product.name}</dd>
                </div>
                <div className="grid grid-cols-3 px-5 py-3.5">
                  <dt className="font-semibold text-slate-500">Therapeutic Focus</dt>
                  <dd className="col-span-2 font-medium text-slate-900">
                    {categoryObj ? categoryObj.label : "General Healthcare"}
                  </dd>
                </div>
                {product.form && (
                  <div className="grid grid-cols-3 px-5 py-3.5">
                    <dt className="font-semibold text-slate-500">Dosage Form</dt>
                    <dd className="col-span-2 font-medium text-slate-900">{product.form}</dd>
                  </div>
                )}
                {product.note && (
                  <div className="grid grid-cols-3 px-5 py-3.5">
                    <dt className="font-semibold text-slate-500">Packaging Note</dt>
                    <dd className="col-span-2 font-medium text-slate-900">{product.note}</dd>
                  </div>
                )}
                <div className="grid grid-cols-3 px-5 py-3.5">
                  <dt className="font-semibold text-slate-500">Marketing Company</dt>
                  <dd className="col-span-2 font-medium text-slate-900">{company.legalName}</dd>
                </div>
              </dl>
            </div>

            {/* Quality & Assurance Badges */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/40 p-4">
                <Award className="text-teal-600 shrink-0" size={24} />
                <div>
                  <h4 className="text-xs font-bold text-teal-900">Standardized Quality</h4>
                  <p className="text-[11px] text-teal-700">Strict quality assurance protocols</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50/40 p-4">
                <ShieldCheck className="text-sky-600 shrink-0" size={24} />
                <div>
                  <h4 className="text-xs font-bold text-sky-900">Corporate Distribution</h4>
                  <p className="text-[11px] text-sky-700">Promoted across healthcare segments</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Action Box */}
            <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-600 to-sky-700 p-6 text-white shadow-lg shadow-sky-600/20">
              <h3 className="text-lg font-bold">Interested in {product.name}?</h3>
              <p className="mt-1 text-xs text-sky-100">
                Contact our distribution team for product availability, partnership queries, and details.
              </p>
              <div className="mt-4">
                <Link
                  href={`/enquiry?product=${encodeURIComponent(product.slug)}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-sky-700 shadow-sm transition-transform hover:scale-105 active:scale-95"
                >
                  <Mail size={15} /> Send Partnership Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <p className="mt-10 text-center text-xs text-slate-400">
          {company.disclaimer}
        </p>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="eyebrow">Explore Further</span>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Related Products in {categoryObj?.label}
                </h2>
              </div>
              <Link
                href={`/products?category=${product.category}`}
                className="text-xs font-semibold text-sky-600 hover:underline"
              >
                View Category ({products.filter((p) => p.category === product.category).length}) →
              </Link>
            </div>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </section>

      <div className="pt-10">
        <CTASection />
      </div>
    </div>
  );
}
