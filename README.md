# UDY Healthcare — Corporate Website

Production-quality Next.js (App Router, TypeScript, Tailwind CSS v4) website
for UDY Healthcare Private Limited: Home, About Us, Products, Gallery and
Contact Us.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes (`/`, `/about`, `/products`, `/gallery`, `/contact`) plus
  `app/api/contact` (validation stub), `sitemap.ts`, `robots.ts`.
- `components/` — reusable UI (Header, Footer, HeroSection, ProductCard,
  ProcessTimeline, ContactForm, etc).
- `data/` — content separated from UI: `company.ts`, `navigation.ts`,
  `segments.ts`, `products.ts`, `process.ts`.
- `app/globals.css` — design tokens (`--brand-primary`, `--brand-secondary`,
  spacing container, shadows) mapped into Tailwind's `@theme`.

## Pending before production launch

Nothing below was invented — each is a clearly-marked placeholder pending
real assets/details.

- **Official logo file** — `components/Logo.tsx` currently renders a
  placeholder mark using the brand color tokens. See
  `public/images/logo/README.md`.
- **Real product packshots** — every product visual (hero, cards, gallery)
  renders an icon placeholder via `components/FormIcon.tsx`. See
  `public/images/products/README.md`.
- **Contact details** — phone, email, WhatsApp and social links are `null`
  in `data/company.ts`. The Contact page explains they're pending instead of
  showing invented values.
- **Contact form delivery** — `app/api/contact/route.ts` validates and
  acknowledges submissions but does not yet send email/CRM notifications;
  wire up a real provider before launch.
- **Domain** — `NEXT_PUBLIC_SITE_URL` defaults to a placeholder domain used
  for metadata/sitemap; set the real env var once the domain is confirmed.
- **Product categorization** — only products with brand names or supplied
  captions that clearly indicate a segment are tagged in
  `data/products.ts`; the rest intentionally fall under "All Products" per
  the no-guessing rule.
