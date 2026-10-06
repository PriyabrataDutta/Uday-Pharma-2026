import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Segment } from "@/data/segments";
import styles from "./HealthcareSegments.module.css";

export function SegmentCard({ segment }: { segment: Segment }) {
  const href = `/products?category=${segment.slug}`;

  return (
    <Link href={href} className={styles.card} data-division={segment.slug}>
      <div>
        {/* Soothing High-Resolution Photography Frame */}
        <div className={styles.imageFrame}>
          <Image
            src={segment.heroImage}
            alt={`${segment.name} healthcare`}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className={styles.heroImg}
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
          <span className={styles.badgeOverlay}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {segment.badge}
          </span>
        </div>

        {/* Card Body Content */}
        <div className={styles.body}>
          <h3 className={styles.title}>{segment.headline}</h3>
          <p className={styles.description}>{segment.description}</p>

          {/* Key Brands Tag Cloud */}
          <div className={styles.brandRow}>
            <span className={styles.brandLabel}>Key Brands:</span>
            {segment.brands.map((b) => (
              <span key={b} className={styles.brandTag}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className={styles.footer}>
        <span className={styles.ctaBtn}>
          <span>Explore {segment.name}</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            <ArrowRight size={15} />
          </span>
        </span>
      </div>
    </Link>
  );
}
