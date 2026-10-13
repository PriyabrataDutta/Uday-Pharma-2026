import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  columns = 4,
  onQuickView,
}: {
  products: Product[];
  columns?: 3 | 4 | 5;
  onQuickView?: (product: Product) => void;
}) {
  const colsClass =
    columns === 5
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      : columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-sky-200 bg-sky-50/50 p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
          🔍
        </div>
        <h3 className="mt-3 text-base font-semibold text-slate-800">No products found</h3>
        <p className="mt-1 max-w-sm text-xs text-slate-500">
          Try adjusting your search query or selecting a different therapeutic category filter above.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${colsClass}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
}
