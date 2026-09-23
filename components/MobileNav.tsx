"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { Button } from "./Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-full text-brand-primary hover:bg-background-soft"
      >
        <Menu aria-hidden="true" />
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50">
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-text-primary/40"
              onClick={() => setOpen(false)}
            />
            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col gap-8 bg-white p-6 shadow-float"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold text-brand-primary"
                >
                  UDY Healthcare
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-background-soft"
                >
                  <X aria-hidden="true" />
                </button>
              </div>

              <NavLinks className="flex-col items-start gap-6" onNavigate={() => setOpen(false)} />

              <Button
                href="/contact"
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Enquire Now
              </Button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
