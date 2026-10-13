"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories, type Product } from "@/data/products";
import styles from "./ProductCard.module.css";

const categoryLabel = (product: Product) =>
  productCategories.find((c) => c.slug === product.category)?.label;

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  const label = categoryLabel(product);
  const href = `/products/${product.slug}`;

  const handleArrowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  return (
    <article className="h-full">
      <div
        className={styles.card}
        data-tone={product.category ?? "pediatric"}
      >
        <Link
          href={href}
          className={styles.cardLink}
          aria-label={`${product.name} product details`}
        >
          <div className={styles.stage}>
            {label && <span className={styles.tag}>{label}</span>}
            {product.form && <span className={styles.formBadge}>{product.form}</span>}
            <span className={styles.podium} aria-hidden="true" />
            <Image
              src={`/images/products/udy-healthcare-${product.slug}.webp`}
              alt={`${product.name} packaging`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className={styles.image}
            />
          </div>
          <div className={styles.body}>
            <h3 className={styles.name}>{product.name}</h3>
            
            <p className={styles.composition}>
              {product.composition || "Formulated according to verified pharmaceutical standards."}
            </p>
          </div>
        </Link>

        <div className={styles.footer}>
          {product.note ? (
            <span className={styles.noteBadge} title={product.note}>
              {product.note}
            </span>
          ) : (
            <span className={styles.genericMeta}>Verified Pack</span>
          )}
          <button
            type="button"
            onClick={handleArrowClick}
            className={styles.actionBtn}
            aria-label={`View visual aid detailing for ${product.name}`}
            title="View Visual Aid Detailing"
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
