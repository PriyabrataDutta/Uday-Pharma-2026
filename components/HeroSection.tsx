"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getImageProps } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import styles from "./HeroSection.module.css";

const slides = [
  {
    src: "/images/banners/udy-healthcare-banner-specialized-healthcare.webp",
    mobileSrc: "/images/banners/udy-healthcare-mobile-banner-specialized-healthcare.webp",
    alt: "Specialized Healthcare Solutions for Everyday Clinical Needs — UDY Healthcare respiratory, pediatric and general healthcare products including Budexol, Flutobrin, Mucolox, Mucolox-LS, Mupibex and Ovundra",
    href: "/products", label: "Specialized healthcare portfolio",
  },
  {
    src: "/images/banners/udy-healthcare-banner-pediatric-range.webp",
    mobileSrc: "/images/banners/udy-healthcare-mobile-banner-pediatric-range.webp",
    alt: "Pediatric Healthcare Range for Growing Needs — UDY Healthcare pediatric products including Amoxy XL, EMFA-DS, Fevibru and ReutiBec",
    href: "/products?category=pediatric", label: "Pediatric range",
  },
  {
    src: "/images/banners/udy-healthcare-banner-trusted-brands.webp",
    mobileSrc: "/images/banners/udy-healthcare-mobile-banner-trusted-brands.webp",
    alt: "Building Trusted Healthcare Brands for Better Care — UDY Healthcare products across pediatric, gynecology, general healthcare and specialized segments",
    href: "/products", label: "Trusted healthcare brands",
  },
];

function BannerImage({ slide, eager }: { slide: (typeof slides)[number]; eager: boolean }) {
  const common = { alt: slide.alt, fill: true, sizes: "100vw", loading: eager ? "eager" : "lazy", fetchPriority: eager ? "high" : undefined } as const;
  const { props: { srcSet: mobile } } = getImageProps({ ...common, src: slide.mobileSrc });
  const { props } = getImageProps({ ...common, src: slide.src });
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobile} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} className={styles.image} />
    </picture>
  );
}

const subscribeMotion = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);

  function showSlide(index: number, manual = true) {
    setActive((index + slides.length) % slides.length);
    if (manual) setPaused(true);
  }

  useEffect(() => {
    if (paused || hovered || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(current => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, reducedMotion]);

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
      <h1 className="sr-only">UDY Healthcare Private Limited — Pharmaceutical &amp; Healthcare Products</h1>
      <div className={styles.viewport}>
        {slides.map((slide, index) => (
          <Link key={slide.src} href={slide.href} className={`${styles.slide} ${active === index ? styles.active : ""}`}
            role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
            aria-hidden={active !== index} inert={active !== index}>
            <BannerImage slide={slide} eager={index === 0} />
          </Link>
        ))}
        <button type="button" className={`${styles.arrow} ${styles.prev}`} aria-label="Previous slide" onClick={() => showSlide(active - 1)}><ChevronLeft size={20} /></button>
        <button type="button" className={`${styles.arrow} ${styles.next}`} aria-label="Next slide" onClick={() => showSlide(active + 1)}><ChevronRight size={20} /></button>
      </div>
      <div className={styles.controls}>
        <div className={styles.dots} aria-label="Choose campaign">
          {slides.map((slide, index) => <button type="button" key={slide.src} aria-label={`Show slide ${index + 1}: ${slide.label}`} aria-current={active === index ? "true" : undefined} onClick={() => showSlide(index)}><span /></button>)}
        </div>
        {!reducedMotion && <button type="button" className={styles.play} aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(value => !value)}>{paused ? <Play size={13} /> : <Pause size={13} />}</button>}
      </div>
      <span className="sr-only" aria-live={paused ? "polite" : "off"} aria-atomic="true">{slides[active].label}, slide {active + 1} of {slides.length}</span>
    </section>
  );
}
