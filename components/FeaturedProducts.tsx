"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { products, featuredProducts, productCategories, type Product, type ProductCategory } from "@/data/products";
import styles from "./FeaturedProducts.module.css";

const categoryLabel = (product: Product) =>
  productCategories.find((c) => c.slug === product.category)?.label;

const filterTabs: { slug: ProductCategory | "all"; label: string }[] = [
  { slug: "all", label: "Featured Range" },
  { slug: "pediatric", label: "Pediatric Healthcare" },
  { slug: "gynecology", label: "Gynecology & Women's Health" },
];

function FeaturedCard({ product }: { product: Product }) {
  const label = categoryLabel(product);
  const href = product.category ? `/products?category=${product.category}` : "/products";

  return (
    <li className={styles.item}>
      <Link href={href} className={styles.card} data-tone={product.category ?? "pediatric"}>
        <div className={styles.stage}>
          {label && <span className={styles.tag}>{label}</span>}
          {product.form && <span className={styles.formBadge}>{product.form}</span>}
          <span className={styles.podium} aria-hidden="true" />
          <Image
            src={`/images/products/udy-healthcare-${product.slug}.webp`}
            alt={`${product.name} packaging`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.headerRow}>
            <h3 className={styles.name}>{product.name}</h3>
          </div>
          
          <p className={styles.composition}>
            {product.composition || "Formulated according to verified pharmaceutical standards."}
          </p>

          <div className={styles.footer}>
            {product.note ? (
              <span className={styles.noteBadge}>{product.note}</span>
            ) : (
              <span className={styles.genericMeta}>Verified Packaging</span>
            )}
            <span className={styles.actionBtn}>
              <span className={styles.actionText}>Explore</span>
              <span className={styles.actionIcon} aria-hidden="true">
                <ArrowUpRight size={15} />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<ProductCategory | "all">("all");

  const displayedProducts =
    activeTab === "all"
      ? featuredProducts
      : products.filter((p) => p.category === activeTab).slice(0, 6);

  return (
    <section className="home-products container-page py-16 lg:py-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Products"
            title="Our Product Range"
            description="A growing portfolio of healthcare brands focused on Pediatric Healthcare and Gynecology & Women's Health."
          />
          <Link href="/products" className={`${styles.viewAll} hidden lg:inline-flex`}>
            View Full Directory <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsList} role="tablist" aria-label="Filter products by therapeutic area">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.slug;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.slug)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spacious 3-Column Card Layout */}
        <ul className={styles.grid}>
          {displayedProducts.map((product) => (
            <FeaturedCard key={product.slug} product={product} />
          ))}
        </ul>

        <Link href="/products" className={`${styles.viewAll} self-center lg:hidden`}>
          View Full Directory <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </section>
  );
}
