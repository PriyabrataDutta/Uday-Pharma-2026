"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Plus } from "lucide-react";
import { products } from "@/data/products";
import { trustIndicators } from "@/data/process";
import { icons } from "@/lib/icons";
import styles from "./HeroSection.module.css";

const slides = [
  {
    eyebrow: "UDY HEALTHCARE · YOUR HEALTH, OUR COMMITMENT",
    title: "Building Trusted Healthcare Brands",
    highlight: "for Better Care",
    description: "UDY Healthcare Private Limited develops and promotes healthcare and pharmaceutical products across pediatric, gynecology, general healthcare and specialized therapeutic segments.",
    cta: "Explore Our Products", href: "/products", label: "Corporate brand",
    products: ["vit-maxx-dha-choline-lutein", "amoxy-xl", "ovundra", "udkid-cef", "tiny-tooths"],
  },
  {
    eyebrow: "PEDIATRIC HEALTHCARE", title: "Care Designed for", highlight: "Growing Needs",
    description: "Explore healthcare and nutritional products developed for different stages of children's healthcare.",
    cta: "Explore Pediatric Range", href: "/products?category=pediatric", label: "Pediatric portfolio",
    products: ["udkid-cef", "amoxy-xl", "tiny-tooths", "tiny-bell-drops", "vit-maxx-dha-choline-lutein"],
  },
  {
    eyebrow: "A GROWING HEALTHCARE PORTFOLIO", title: "Healthcare Solutions Across", highlight: "Multiple Therapeutic Segments",
    description: "From pediatric and general healthcare to women's healthcare and nutraceutical products, UDY Healthcare continues to expand its product portfolio.",
    cta: "View Product Portfolio", href: "/products", label: "Multi-segment portfolio",
    products: ["vit-maxx-dha-choline-lutein", "ud-pro-gg", "ovundra", "udvit-d3", "gestovia-200"],
  },
];
const subscribeMotion = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visited, setVisited] = useState([0]);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);

  function showSlide(index: number, manual = true) {
    const next = (index + slides.length) % slides.length;
    setActive(next);
    setVisited(previous => previous.includes(next) ? previous : [...previous, next]);
    if (manual) setPaused(true);
  }

  useEffect(() => {
    if (paused || hovered || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      const next = (active + 1) % slides.length;
      setActive(next);
      setVisited(previous => previous.includes(next) ? previous : [...previous, next]);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active, paused, hovered, reducedMotion]);

  return (
    <section className={styles.banner} aria-label="UDY Healthcare campaigns" aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPaused(true)}
      onKeyDown={event => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); showSlide(active + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
      onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
      onTouchEnd={event => {
        if (!touch.current) return;
        const dx = event.changedTouches[0].clientX - touch.current.x;
        const dy = event.changedTouches[0].clientY - touch.current.y;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) showSlide(active + (dx < 0 ? 1 : -1));
        touch.current = null;
      }}>
      {slides.map((slide, index) => {
        const Heading = index === 0 ? "h1" : "h2";
        return <div key={slide.label} className={`${styles.slide} ${styles[`theme${index}`]} ${active === index ? styles.active : ""}`}
          role="group" aria-roledescription="slide" aria-label={`${index + 1} of 3: ${slide.label}`}
          aria-hidden={active !== index} inert={active !== index}>
          <div className={styles.orbit} aria-hidden="true" />
          <div className={styles.wave} aria-hidden="true" />
          <div className={styles.inner}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}><span />{slide.eyebrow}</p>
              <Heading className={styles.headline}>{slide.title} <span>{slide.highlight}</span></Heading>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.actions}>
                <Link href={slide.href} className={styles.primary}>{slide.cta}<ArrowRight size={17} aria-hidden="true" /></Link>
                {index === 0 && <Link href="/about" className={styles.secondary}>About UDY Healthcare</Link>}
              </div>
              {index === 0 && (
                <ul className={styles.trust}>
                  {trustIndicators.map(item => {
                    const Icon = icons[item.icon];
                    return <li key={item.label}><span><Icon size={15} aria-hidden="true" /></span>{item.label}</li>;
                  })}
                </ul>
              )}
            </div>
            <div className={styles.stage} aria-label="Selected UDY Healthcare products">
              <div className={styles.halo} aria-hidden="true" />
              <Plus className={styles.crossOne} aria-hidden="true" /><Plus className={styles.crossTwo} aria-hidden="true" />
              <div className={styles.podiumBack} aria-hidden="true" /><div className={styles.podium} aria-hidden="true" />
              {visited.includes(index) && slide.products.map((slug, position) => <div key={slug} className={`${styles.pack} ${styles[`pack${position}`]}`}>
                <Image src={`/images/products/udy-healthcare-${slug}.webp`} alt={products.find(product => product.slug === slug)?.name ?? slug}
                  fill sizes="(max-width: 600px) 60vw, (max-width: 1023px) 32vw, 420px" className={styles.productImage}
                  preload={index === 0 && position === 0} loading={index === 0 && position === 0 ? undefined : "lazy"} />
              </div>)}
              <span className={styles.stageCaption}>UDY HEALTHCARE <span> / </span> {index === 1 ? "GROWING WITH CARE" : "CARE IN EVERY DETAIL"}</span>
            </div>
          </div>
        </div>;
      })}
      <div className={styles.controls}>
        <span className={styles.counter}>0{active + 1}<span> / 03</span></span>
        <div className={styles.dots} aria-label="Choose campaign">
          {slides.map((slide, index) => <button type="button" key={slide.label} aria-label={`Show slide ${index + 1}: ${slide.label}`} aria-current={active === index ? "true" : undefined} onClick={() => showSlide(index)}><span /></button>)}
        </div>
        <div className={styles.controlActions}>
          <button type="button" aria-label="Previous slide" onClick={() => showSlide(active - 1)}><ChevronLeft size={18} /></button>
          <button type="button" aria-label="Next slide" onClick={() => showSlide(active + 1)}><ChevronRight size={18} /></button>
          {!reducedMotion && <button type="button" aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(value => !value)}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
        </div>
      </div>
      <span className="sr-only" aria-live={paused ? "polite" : "off"} aria-atomic="true">{slides[active].label}, slide {active + 1} of 3</span>
    </section>
  );
}
