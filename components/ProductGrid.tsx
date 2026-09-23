import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 4 | 5;
}) {
  const colsClass =
    columns === 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : "sm:grid-cols-2 lg:grid-cols-4";

  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center text-sm text-text-secondary">
        No products found in this category yet.
      </p>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-5 ${colsClass}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
