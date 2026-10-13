"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { products, productCategories, type Product, type ProductCategory } from "@/data/products";
import styles from "./FeaturedProducts.module.css";

const categoryLabel = (product: Product) =>
  productCategories.find((c) => c.slug === product.category)?.label;

const filterTabs: { slug: ProductCategory | "all"; label: string }[] = [
  { slug: "all", label: "All Products" },
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
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 85vw"
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
                <ArrowUpRight size={14} />
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
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // When 'all', display featured products first followed by all other products
  const displayedProducts = useMemo(() => {
    return activeTab === "all"
      ? [...products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      : products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const checkScrollability = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 6;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 6;
    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  }, []);

  // On page load, start the carousel positioned at a randomly selected product
  useEffect(() => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return;

    // Pick a random product index to start at (ensuring 3 products are visible ahead)
    const maxIndex = Math.max(0, el.children.length - 3);
    if (maxIndex > 0) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const targetItem = el.children[randomIndex] as HTMLElement | undefined;
      if (targetItem) {
        el.scrollTo({ left: targetItem.offsetLeft, behavior: "instant" });
      }
    }

    checkScrollability();
  }, [checkScrollability]);

  // Monitor resize & tab change
  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkScrollability, activeTab, displayedProducts.length]);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    // Calculate exact stride (card width + gap) of products in track
    const firstItem = el.children[0] as HTMLElement | undefined;
    const secondItem = el.children[1] as HTMLElement | undefined;

    let stride = 0;
    if (firstItem && secondItem) {
      stride = secondItem.offsetLeft - firstItem.offsetLeft;
    } else if (firstItem) {
      stride = firstItem.offsetWidth + 16;
    } else {
      stride = el.clientWidth / 6;
    }

    // Scroll by exactly 3 products at a time
    const distance = stride * 3;

    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const handleTabChange = (slug: ProductCategory | "all") => {
    setActiveTab(slug);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <section className="home-products w-full py-14 lg:py-20">
      <div className="container-page flex flex-col gap-8">
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

        {/* Controls: Tabs & Scroll Navigation Arrows */}
        <div className={styles.controlsRow}>
          <div className={styles.tabsWrapper}>
            <div className={styles.tabsList} role="tablist" aria-label="Filter products by therapeutic area">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.slug;
                const count =
                  tab.slug === "all"
                    ? products.length
                    : products.filter((p) => p.category === tab.slug).length;
                return (
                  <button
                    key={tab.slug}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleTabChange(tab.slug)}
                    className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                  >
                    {tab.label}
                    <span className={styles.countBadge}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Left / Right Chevron Controls */}
          <div className={styles.arrowGroup}>
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll products left"
              className={`${styles.arrowBtn} ${!canScrollLeft ? styles.arrowDisabled : ""}`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll products right"
              className={`${styles.arrowBtn} ${!canScrollRight ? styles.arrowDisabled : ""}`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Carousel Track with Fade Masks */}
        <div className={styles.carouselContainer}>
          <div
            className={`${styles.fadeMask} ${styles.fadeMaskLeft} ${canScrollLeft ? styles.visible : ""}`}
            aria-hidden="true"
          />
          <div
            className={`${styles.fadeMask} ${styles.fadeMaskRight} ${canScrollRight ? styles.visible : ""}`}
            aria-hidden="true"
          />

          <ul
            ref={trackRef}
            onScroll={checkScrollability}
            className={styles.scrollTrack}
            tabIndex={0}
            role="region"
            aria-label="Scrollable list of products in 6-item layout"
          >
            {displayedProducts.map((product) => (
              <FeaturedCard key={product.slug} product={product} />
            ))}
          </ul>
        </div>

        <Link href="/products" className={`${styles.viewAll} self-center lg:hidden`}>
          View Full Directory <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </section>
  );
}
