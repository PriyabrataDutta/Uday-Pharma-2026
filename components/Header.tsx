"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" aria-label="UDY Healthcare — Home" className={styles.logoLink}>
          <Logo preload className={styles.logo} />
        </Link>

        <nav aria-label="Primary" className={styles.desktopNav}>
          <NavLinks />
        </nav>

        <div className={styles.actions}>
          <Button href="/contact" variant="primary" className={styles.cta}>
            Enquire Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <p className={styles.tagline}>
            Healthier People
            <br />
            Brighter Tomorrows
          </p>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
