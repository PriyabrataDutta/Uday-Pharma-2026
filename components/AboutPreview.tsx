import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "./Button";
import { icons } from "@/lib/icons";
import { aboutFeatures } from "@/data/process";
import { products } from "@/data/products";
import styles from "./AboutPreview.module.css";

const showcase = ["mucolox", "budexol", "ovundra"];

export function AboutPreview() {
  return (
    <section className={`container-page ${styles.section}`} aria-labelledby="about-preview-title">
      <div className={styles.visual}>
        <div className={styles.halo} aria-hidden="true" />
        <div className={styles.podium} aria-hidden="true" />
        {showcase.map((slug, index) => (
          <div key={slug} className={`${styles.pack} ${styles[`pack${index}`]}`}>
            <Image
              src={`/images/products/udy-healthcare-${slug}.webp`}
              alt={products.find((product) => product.slug === slug)?.name ?? slug}
              fill
              sizes="(max-width: 767px) 50vw, 300px"
              className={styles.packImage}
            />
          </div>
        ))}
        <div className={styles.badge}>
          <strong>Since 2020</strong>
          <span><MapPin size={13} aria-hidden="true" /> Bengaluru, Karnataka</span>
        </div>
      </div>

      <div className={styles.content}>
        <span className="eyebrow">About UDY Healthcare</span>
        <h2 id="about-preview-title" className={styles.title}>
          Committed to Quality <span>Healthcare Solutions.</span>
        </h2>
        <p className={styles.lead}>
          At UDY Healthcare Private Limited, we are driven by a simple purpose – to make quality healthcare
          products accessible to more people. We focus on developing, marketing and distributing trusted
          pharmaceutical and wellness products that support healthier lives across every stage of life.
        </p>

        <ul className={styles.features}>
          {aboutFeatures.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <li key={feature.title}>
                <span className={styles.featureIcon}><Icon size={22} aria-hidden="true" /></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            );
          })}
        </ul>

        <Button href="/about" className={styles.cta}>
          Learn More About Us <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
