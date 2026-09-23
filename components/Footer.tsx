import Link from "next/link";
import { Logo } from "./Logo";
import { navigation } from "@/data/navigation";
import { segments } from "@/data/segments";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
            {company.tagline}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our segments">
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            Our Segments
          </h3>
          <ul className="flex flex-col gap-3">
            {segments.map((segment) => (
              <li key={segment.slug}>
                <Link
                  href={`/products?category=${segment.slug === "specialized" ? "all" : segment.slug === "gynecology" ? "womens-healthcare" : segment.slug}`}
                  className="text-sm text-text-secondary transition-colors hover:text-brand-primary"
                >
                  {segment.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            Connect With Us
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            For partnership enquiries and additional information, please
            contact our team.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-semibold text-brand-primary hover:underline"
          >
            Contact UDY Healthcare →
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All Rights Reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
