"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export function NavLinks({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <ul className={`flex items-center gap-8 ${className}`}>
      {navigation.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`relative py-1 text-[15px] font-medium transition-colors hover:text-brand-primary ${
                isActive ? "text-brand-primary" : "text-text-secondary"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-primary transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
