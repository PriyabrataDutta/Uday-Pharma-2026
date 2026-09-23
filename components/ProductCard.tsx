import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-background-soft to-surface">
        <Image
          src={`/images/products/udy-healthcare-${product.slug}.webp`}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-4 transition-transform duration-200 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="text-base font-semibold text-text-primary">{product.name}</h3>
        {product.composition && (
          <p className="text-sm leading-snug text-text-secondary">{product.composition}</p>
        )}
        {(product.form || product.note) && (
          <p className="mt-auto pt-1 text-xs font-medium text-text-muted">
            {[product.form, product.note].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}
