"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import styles from "./Header.module.css";

export function NavLinks({
  variant = "desktop",
  onNavigate,
}: {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <ul className={variant === "desktop" ? styles.navList : styles.mobileList}>
      {navigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={variant === "desktop" ? styles.navLink : styles.mobileLink}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
