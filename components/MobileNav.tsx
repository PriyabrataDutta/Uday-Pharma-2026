"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { Button } from "./Button";
import styles from "./Header.module.css";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  // Scroll lock + focus: move focus into the drawer on open, back to the trigger on close.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      if (wasOpen.current) triggerRef.current?.focus();
    }
    wasOpen.current = open;
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className={styles.mobileNav}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open navigation"
        className={styles.menuButton}
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      <div className={styles.drawerRoot} data-open={open} inert={!open}>
        <div className={styles.backdrop} onClick={close} aria-hidden="true" />
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={styles.drawer}
        >
          <div className={styles.drawerHead}>
            <Link href="/" onClick={close} aria-label="UDY Healthcare — Home" className={styles.logoLink}>
              <Logo className={styles.drawerLogo} />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close navigation"
              className={styles.menuButton}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile">
            <NavLinks variant="mobile" onNavigate={close} />
          </nav>

          <Button href="/contact" variant="primary" className={`${styles.cta} ${styles.drawerCta}`} onClick={close}>
            Enquire Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
