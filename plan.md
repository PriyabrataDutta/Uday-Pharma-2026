# UDY Healthcare Website Development Plan

## 1. Project Overview

Build a polished, responsive, corporate pharmaceutical website for **UDY Healthcare Private Limited**.

The site should take structural inspiration from **https://www.dermaglitzpharma.com/**, especially the use of a prominent full-width product-led hero/banner slider, while keeping the final design original and fully aligned with UDY Healthcare branding.

The primary design reference is the approved UDY Healthcare UI/UX concept already created for this project. The visual direction should remain:

- clean and modern
- premium but not luxurious
- corporate and pharmaceutical
- product-led
- trustworthy and professional
- highly responsive
- minimal, with strong spacing and hierarchy

The website is an informational corporate website, not an e-commerce website.

---

## 2. Core Objectives

The website should:

1. Introduce UDY Healthcare professionally.
2. Present the company’s product portfolio clearly.
3. Communicate focus areas such as Pediatric, Gynecology, General Healthcare, and Specialized Segments.
4. Use real UDY product imagery throughout the website.
5. Create a high-impact banner/slider similar in structure to the Dermaglitz reference website.
6. Maintain strong brand consistency using only the official UDY Healthcare logo colors.
7. Support desktop, tablet, and mobile layouts.
8. Provide strong SEO, performance, accessibility, and maintainability.
9. Avoid unsupported medical claims, certifications, reviews, or business claims.
10. Keep the site easy to expand with more products or pages later.

---

## 3. Source Priority

If any information conflicts, use this priority order:

1. Official UDY Healthcare logo
2. Approved UDY Healthcare UI/UX reference design
3. Official UDY Healthcare company profile
4. Supplied UDY product packaging/images
5. Explicit project instructions
6. Dermaglitz reference website for structural inspiration only
7. General UI/UX conventions

Never use the Dermaglitz website as a factual source for UDY Healthcare.

---

## 4. Brand Identity

### 4.1 Logo

Use the official UDY Healthcare logo exactly as supplied.

Do not:

- redraw it
- recolor it
- distort it
- change proportions
- add shadows or effects
- replace it with typed text

### 4.2 Color Palette

Use only the official colors extracted from the UDY Healthcare logo as the core website palette:

- UDY Healthcare Blue
- UDY Healthcare Aqua / Teal

Allowed neutral supporting colors:

- white
- off-white
- very light grey
- very light blue/aqua tints
- dark charcoal/navy for readable text

Do not introduce unrelated UI accent colors such as red, orange, pink, purple, green, yellow, or gold.

Product packaging may retain its own original colors inside the actual product images.

### 4.3 Design Tokens

Create centralized variables for:

- `--brand-primary`
- `--brand-secondary`
- `--brand-primary-dark`
- `--brand-secondary-light`
- `--background`
- `--background-soft`
- `--surface`
- `--text-primary`
- `--text-secondary`
- `--text-muted`
- `--border`
- `--shadow`

Avoid random hard-coded colors across components.

---

## 5. Official Company Information

### Company Name
UDY Healthcare Private Limited

### Established
2 November 2020

### Company Status
Active

### CIN
U33119KA2020PTC140506

### Director
Sharan Gulgav

### GSTIN
29AACCU7097E1ZX

### Registered Office
Khata No. 108/1, Abhirudhi Layout, Site No. 16, 2nd Floor, Seegehalli Main Rd, opposite Forties Waterscape Apartment, Bengaluru, Karnataka – 560049

This address should be labelled specifically as **Registered Office** unless the client later confirms another public-facing office.

---

## 6. Official Company Overview

UDY Healthcare Private Limited is a pharmaceutical and healthcare company engaged in the development, marketing, and distribution of healthcare and pharmaceutical products across different therapeutic and healthcare segments.

The company focuses on building a portfolio of quality healthcare products designed to meet the needs of different sections of the healthcare market.

Primary areas of focus:

- Pediatric
- Gynecology
- General Healthcare
- Other specialized healthcare segments

UDY Healthcare works with third-party pharmaceutical manufacturers and focuses on:

- product planning
- product development
- brand building
- packaging
- marketing
- distribution
- healthcare portfolio expansion

Do not imply that UDY owns its own manufacturing facility unless separately verified.

---

## 7. Website Architecture

Create the following pages:

1. Home
2. About Us
3. Products
4. Gallery
5. Contact Us

### Main Navigation

- Home
- About Us
- Products
- Gallery
- Contact Us

Optional header CTA:

- Enquire Now

---

## 8. Recommended Tech Stack

Preferred implementation:

- Next.js 14+ / App Router
- React
- TypeScript
- Tailwind CSS or clean modular CSS
- Next.js Image optimization
- reusable components
- semantic HTML

Suggested project structure:

```text
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  products/
    page.tsx
  gallery/
    page.tsx
  contact/
    page.tsx

components/
  Header.tsx
  MobileNav.tsx
  HeroSlider.tsx
  SectionHeading.tsx
  AboutPreview.tsx
  SegmentCard.tsx
  HealthcareSegments.tsx
  ProductCard.tsx
  ProductGrid.tsx
  ProductCarousel.tsx
  ProcessTimeline.tsx
  ValueCard.tsx
  GalleryPreview.tsx
  GalleryGrid.tsx
  CTASection.tsx
  ContactForm.tsx
  Footer.tsx

data/
  company.ts
  products.ts
  segments.ts
  navigation.ts

public/
  images/
    logo/
    products/
    gallery/
```

---

## 9. Global Layout System

### Desktop

- content max-width: 1240–1320px
- page gutters: 32–48px

### Tablet

- page gutters: 24–32px

### Mobile

- page gutters: 18–22px

All sections should align to the same content grid.

---

## 10. Typography

Preferred font:

- Inter

Alternatives:

- Manrope
- DM Sans
- Plus Jakarta Sans

Recommended hierarchy:

- Eyebrow: 12–14px, uppercase, medium/semi-bold
- H1 desktop: 54–72px
- H1 mobile: 34–40px
- H2 desktop: 36–44px
- H2 mobile: 28–34px
- H3: 20–26px
- Body: 16–18px
- Small text: 14px

Use strong hierarchy with comfortable line height and generous spacing.

---

## 11. Global Visual Style

Use:

- white space
- soft blue/aqua background tints
- rounded cards
- subtle shadows
- thin borders
- clean line icons
- restrained gradients using only UDY logo colors
- large, clear product imagery
- subtle section transitions

Recommended corner radii:

- small elements: 10–12px
- cards: 16–20px
- large panels: 20–28px
- buttons: pill-shaped

Avoid:

- excessive glassmorphism
- heavy neumorphism
- dark luxury styling
- bright unrelated colors
- over-animated sections
- generic SaaS visual language

---

## 12. Header Plan

### Desktop

Left:
- UDY Healthcare logo

Right:
- Home
- About Us
- Products
- Gallery
- Contact Us
- Enquire Now button

Recommended height:

- 76–84px

Style:

- white background
- subtle bottom border or very light shadow
- optional sticky behavior
- active nav item indicated with UDY blue underline

### Mobile

- logo left
- hamburger right
- accessible slide-down or side drawer menu

---

## 13. Homepage Structure

Homepage section order:

1. Header
2. Hero / Banner Slider
3. About UDY Healthcare
4. Healthcare Segments
5. Featured Products
6. Business Process
7. Corporate Values
8. Gallery Preview
9. Final CTA
10. Footer

---

## 14. Hero / Banner Slider Plan

This is the most important visual section.

The banner should take structural inspiration from the Dermaglitz homepage, using a large full-width campaign slider with product-led visuals.

### Banner Size

Desktop:
- full-width
- target visual ratio approximately 1920 × 700
- visible height approximately 600–720px

Tablet:
- approximately 900 × 520px

Mobile:
- create a dedicated portrait composition
- do not simply crop the desktop hero

### Slider Behavior

Create 3 slides.

Recommended behavior:

- autoplay every 5–7 seconds
- pause on hover where practical
- pagination dots
- optional subtle arrows
- swipe support on mobile
- keyboard-accessible controls
- reduced-motion support

### Slide 1 — Corporate Brand Banner

Eyebrow:

`UDY HEALTHCARE PRIVATE LIMITED`

Headline:

`Building Trusted Healthcare Brands for Better Care`

Description:

`UDY Healthcare Private Limited develops and promotes healthcare and pharmaceutical products across pediatric, gynecology, general healthcare and specialized therapeutic segments.`

Buttons:

- Explore Our Products
- About UDY Healthcare

Visual composition:

- Amoxy XL
- UDKID-CEF
- Tiny Tooths
- VIT-MAXX
- Ovundra

Desktop composition:

- text: 42–48%
- product visual: 52–58%

Use:

- clean product pedestal/platform
- large soft blue/aqua gradients
- subtle circular shapes
- restrained shadows
- strong product hierarchy

### Slide 2 — Pediatric Healthcare

Eyebrow:

`PEDIATRIC HEALTHCARE`

Headline:

`Care Designed for Growing Needs`

Description:

`Explore healthcare and nutritional products developed for different stages of children's healthcare.`

CTA:

`Explore Pediatric Range`

Suggested products:

- UDKID-CEF
- UDKID-LS
- UDKID-NS
- Tiny Bell Drops
- Tiny Tooths
- Amoxy XL
- VIT-MAXX

Keep the composition professional and not cartoon-heavy.

### Slide 3 — Multi-Segment Portfolio

Eyebrow:

`A GROWING HEALTHCARE PORTFOLIO`

Headline:

`Healthcare Solutions Across Multiple Therapeutic Segments`

Description:

`From pediatric and general healthcare to women's healthcare and nutraceutical products, UDY Healthcare continues to expand its product portfolio.`

CTA:

`View Product Portfolio`

Suggested visual mix:

- VIT-MAXX
- UD PRO-GG
- UDVIT D3
- Ovundra
- Gestovia 200
- Mucolox or another appropriate supplied product

Do not create unsupported product categories or claims.

---

## 15. Hero Design Rules

Use only UDY logo colors for interface elements.

Allowed decorative elements:

- large soft blue/aqua curves
- radial gradients
- translucent circles
- subtle healthcare patterns
- product platforms
- very light botanical or abstract accents if tasteful

Do not:

- regenerate fake product packs
- distort packaging
- alter product text
- introduce unrelated colors
- overload the banner with text

Headline should be 2–4 lines maximum.

Supporting copy should be concise.

---

## 16. About Preview Section

Eyebrow:

`ABOUT UDY HEALTHCARE`

Heading:

`Committed to Quality Healthcare Solutions`

Content should summarize the official About Us copy.

CTA:

`Learn More`

Layout:

- asymmetrical 2-column design
- one side: text
- one side: branded visual / product composition / abstract healthcare graphic

Do not invent a UDY office building image and present it as factual unless a real building image is supplied.

Suggested supporting feature items:

- People Focused
- Quality Driven
- Expanding Access

---

## 17. Healthcare Segments Section

Eyebrow:

`OUR FOCUS AREAS`

Heading:

`Healthcare Segments`

Create 4 cards:

### Pediatric
Products focused on children's healthcare and nutritional needs.

### Gynecology
Products focused on women's healthcare.

### General Healthcare
Products intended for broader healthcare requirements and general medical practice.

### Specialized Segments
Additional healthcare and pharmaceutical products catering to different therapeutic requirements.

Card layout:

- clean image or icon area
- title
- short description
- small round arrow button

All cards should share the same UDY brand palette.

---

## 18. Featured Products Section

Eyebrow:

`FEATURED PRODUCTS`

Heading:

`Our Product Range`

Supporting text:

`A growing portfolio of healthcare brands across multiple therapeutic and healthcare segments.`

CTA link:

`View All Products`

Recommended desktop display:

- 4–5 cards per row

Recommended featured products:

- Amoxy XL
- Tiny Tooths
- UDKID-CEF
- VIT-MAXX
- Ovundra

Each card should include:

- real supplied product image
- exact product name
- generic/composition name where verified
- dosage form / pack information where verified

Hover behavior:

- translateY(-4px)
- slightly stronger shadow
- image scale around 1.02

---

## 19. Product Portfolio Source List

Use the supplied product assets and exact product names.

Available products include:

1. Amoxy DS
2. Amoxy XL
3. Budexol
4. Colvent Drops
5. Colvent Syrup
6. EMFA-DS
7. EsmoZip JR
8. Fevibru
9. Flutocin
10. Gastrozip
11. Histaxen
12. Mucolox-LS
13. Mucolox
14. Mucolox-CET
15. Mupibex
16. Ranivon
17. ReutiBee
18. Saloxol
19. Saloxol-JR
20. Tiny Bell Drops
21. Tiny Tooths
22. UD PRO-GG
23. UD PRO-BC
24. UD3 MAXX
25. UDKID-CEF
26. UDKID-LS
27. UDKID-NS
28. UDVIT D3
29. VIT-A Drops
30. Up Hunger
31. VIT-MAXX DHA / Choline / Lutein
32. VIT-MAXX DHA / EPA
33. Zoinic
34. Gestovia 200
35. Ovundra

Do not change spelling unless the official packaging confirms a correction.

---

## 20. Product Image Rules

Use real supplied product imagery wherever possible.

Preserve:

- packaging proportions
- brand names
- labels
- original colors
- product strength
- composition text
- UDY logo placement

Do not:

- recreate product packs with AI
- stretch images
- crop essential labels
- replace products with generic bottles
- alter medicine names

Prefer `object-fit: contain` for product cards.

---

## 21. Business Process Section

Eyebrow:

`OUR PROCESS`

Heading:

`From Innovation to Impact`

Supporting copy:

`A focused process supporting healthcare products from development through appropriate distribution channels.`

Timeline:

1. Product Planning & Development
2. Third-Party Manufacturing
3. Quality & Packaging
4. Marketing
5. Distribution
6. Pharmacies / Hospitals
7. Patients

Desktop:

- horizontal timeline

Mobile:

- vertical timeline

Use white circular icon containers with UDY blue/aqua icons and subtle connectors.

---

## 22. Corporate Values Section

Eyebrow:

`WHY CHOOSE UDY HEALTHCARE`

Heading:

`A Stronger, Healthier Tomorrow`

Create 4 cards:

### Quality Focus
Focused on consistent quality and responsible healthcare practices.

### Responsible Practices
A healthcare-focused approach built around responsible business practices.

### Growing Portfolio
Expanding healthcare brands across different therapeutic requirements.

### Wider Distribution
Working through appropriate healthcare and distribution channels.

Do not add statistics or achievements that were not provided.

---

## 23. Gallery Preview Section

Eyebrow:

`GALLERY`

Heading options:

- Our Products in Focus
- Moments from Our Portfolio

Show approximately 6 thumbnails using real supplied UDY product photography.

Possible subjects:

- Amoxy products
- Tiny Tooths
- UDKID products
- VIT-MAXX
- Ovundra
- other authentic UDY product imagery

CTA:

`View Gallery`

Do not use invented manufacturing or laboratory imagery unless clearly decorative and generic.

---

## 24. Final CTA Section

Use a full-width rounded CTA panel.

Background:

- subtle UDY blue to aqua gradient

Heading:

`Connect With UDY Healthcare`

Supporting text:

`Connect with our team to learn more about our healthcare portfolio.`

Button:

`Get in Touch`

---

## 25. Footer Plan

### Column 1

UDY Healthcare logo

Short description:

`UDY Healthcare Private Limited is committed to developing and promoting healthcare products across diverse therapeutic segments.`

### Column 2 — Quick Links

- Home
- About Us
- Products
- Gallery
- Contact Us

### Column 3 — Our Segments

- Pediatric
- Gynecology
- General Healthcare
- Specialized Segments

### Column 4 — Connect With Us

Until official contact details are supplied, use neutral wording such as:

`For partnership enquiries and additional information, please contact our team.`

Do not invent phone numbers, emails, WhatsApp numbers, or social profiles.

Bottom bar:

`© 2026 UDY Healthcare Private Limited. All Rights Reserved.`

---

## 26. About Us Page Plan

Page structure:

1. Page Hero
2. Company Overview
3. Healthcare Segments
4. Business Model
5. Quality / Responsible Practices
6. Company Information
7. CTA

### Hero Heading

`About UDY Healthcare`

### Hero Subheading

`Building Healthcare Brands with a Focus on Quality, Accessibility and Responsible Practices`

### Official About Us Content

Use the supplied approved text:

`UDY Healthcare Private Limited is a pharmaceutical and healthcare company committed to developing and promoting healthcare products across diverse therapeutic segments. With a focus on Pediatric, Gynecology, General Healthcare, and other specialized segments, the company aims to build trusted healthcare brands that address evolving market needs.`

`UDY Healthcare works with appropriate pharmaceutical manufacturing partners and focuses on product development, brand building, marketing, distribution, and expanding its healthcare portfolio.`

`The company strives to make its products accessible through suitable healthcare and distribution channels while maintaining a strong focus on quality, compliance, and responsible healthcare practices.`

---

## 27. Company Information Block

Display compactly:

- Company: UDY Healthcare Private Limited
- Established: 2 November 2020
- Company Status: Active
- CIN: U33119KA2020PTC140506
- Director: Sharan Gulgav
- GSTIN: 29AACCU7097E1ZX

Do not make legal information the dominant page element.

---

## 28. Products Page Plan

Hero heading:

`Our Products`

Supporting text:

`Explore UDY Healthcare's portfolio across pediatric, general healthcare, women's healthcare, nutraceutical and specialized therapeutic segments.`

Recommended layout:

- compact page hero
- optional filters
- product grid
- product disclaimer
- CTA

### Suggested Filters

- All Products
- Pediatric
- Respiratory
- Gastrointestinal
- Nutraceutical
- Women's Healthcare
- General Healthcare

Only use categories when supported by supplied product information.

If uncertain, leave the product under All Products.

### Grid

Desktop:
- 4 columns

Large tablet:
- 3 columns

Small tablet:
- 2 columns

Mobile:
- 1–2 columns depending on width

---

## 29. Product Disclaimer

Use:

`Product information on this website is intended for informational purposes. Prescription medicines should be used only under the guidance of a qualified healthcare professional.`

Do not provide:

- dosage recommendations
- treatment schedules
- self-medication instructions

---

## 30. Gallery Page Plan

Create a clean product-focused gallery.

Use real images from the supplied UDY Product Images file.

Layout:

Desktop:
- 3 columns

Tablet:
- 2 columns

Mobile:
- 1–2 columns

Features:

- image lightbox
- subtle hover zoom
- lazy loading
- consistent corner radius
- no aggressive image cropping

---

## 31. Contact Us Page Plan

Hero heading:

`Contact UDY Healthcare`

Contact details are pending.

Do not invent:

- phone number
- email address
- WhatsApp number
- social media links

Keep placeholders only in configuration/data files until real information is supplied.

### Contact Form

Fields:

- Full Name
- Phone Number
- Email Address
- Subject
- Message

Button:

`Submit Enquiry`

Include:

- required-field validation
- email validation
- phone validation
- loading state
- success state
- error state

Do not ask users to submit sensitive medical information.

---

## 32. Button System

### Primary Button

- UDY blue background
- white text
- pill shape
- subtle hover darkening or blue/aqua transition

### Secondary Button

- white or transparent background
- UDY blue border
- UDY blue text
- very light blue/aqua hover background

All buttons should use consistent height, padding, typography, and radius.

---

## 33. Icon System

Use one consistent icon library such as:

- Lucide
- Heroicons

Prefer outline icons.

Use only:

- UDY blue
- UDY aqua
- neutral text tones

Avoid multi-color UI icons.

---

## 34. Responsive Rules

### Hero

Desktop:
- 2-column

Mobile:
- stacked
- text first
- products second

### Healthcare Segments

Desktop:
- 4 columns

Tablet:
- 2 columns

Mobile:
- 1 column

### Featured Products

Desktop:
- 4–5 visible cards

Tablet:
- 2–3

Mobile:
- 1–2

### Process Timeline

Desktop:
- horizontal

Mobile:
- vertical

### Footer

Desktop:
- 4 columns

Mobile:
- stacked sections

Ensure:

- no horizontal overflow
- no clipped product imagery
- readable typography
- minimum 44px tap targets
- consistent mobile spacing

---

## 35. Animation Plan

Use restrained motion only.

Allowed:

- fade-in
- fade-up
- card hover
- slight product lift
- button transitions
- subtle slide transitions

Avoid:

- bouncing
- spinning products
- heavy parallax
- constant floating animations
- dramatic motion
- autoplay text effects

Support `prefers-reduced-motion`.

---

## 36. Accessibility Plan

Implement:

- semantic HTML
- proper heading hierarchy
- descriptive alt text
- keyboard navigation
- accessible slider controls
- visible focus states
- sufficient color contrast
- associated form labels
- meaningful button text

---

## 37. SEO Plan

Every page should have:

- title
- meta description
- canonical URL when domain is known
- Open Graph title
- Open Graph description
- Open Graph image where available

### Homepage SEO Title

`UDY Healthcare Private Limited | Pharmaceutical & Healthcare Products`

### Homepage Meta Description

`UDY Healthcare Private Limited develops, markets and distributes pharmaceutical and healthcare products across pediatric, gynecology, general healthcare and specialized segments.`

---

## 38. Structured Data Plan

Use only factual structured data.

### Home

- Organization schema

### About

- Organization schema

### Contact

- Organization / ContactPoint only after official contact details are supplied

Do not create:

- fake reviews
- fake ratings
- AggregateRating
- unsupported certifications

---

## 39. Image Optimization Plan

For all product imagery:

- preserve aspect ratio
- use WebP/AVIF where practical
- use Next.js Image optimization
- lazy-load below-the-fold images
- preload only the first hero image
- provide accurate alt text

Example alt text:

`UDKID-CEF Cefixime Oral Suspension product packaging by UDY Healthcare`

Do not keyword-stuff alt text.

---

## 40. Pharmaceutical Content Safety Rules

Do not invent medical claims.

Never state that any product:

- guarantees recovery
- cures a condition
- is 100% safe
- has no side effects
- is clinically superior
- is recommended by all doctors

unless officially supported.

Do not invent:

- WHO-GMP certification
- FDA approval
- ISO certification
- DCGI certification claims
- manufacturing facilities
- awards
- export markets
- doctor counts
- patient counts
- distributor counts

---

## 41. Content Style

Use language that is:

- professional
- concise
- corporate
- healthcare appropriate
- credible
- responsible

Avoid:

- exaggerated marketing language
- generic fluff
- unsupported superlatives

Preferred phrasing:

- Focused on quality and responsible healthcare practices.
- Developing and promoting healthcare products across diverse therapeutic segments.
- Building healthcare brands for evolving market needs.

---

## 42. Performance Requirements

Target:

- strong Core Web Vitals
- lightweight JavaScript
- optimized images
- minimal layout shift
- no unnecessary heavy slider libraries
- no oversized assets

Use a lightweight custom slider or a small, well-maintained dependency only if needed.

---

## 43. Development Phases

### Phase 1 — Asset Audit

- review official UDY logo
- extract brand colors
- organize product images
- verify product names
- identify gallery imagery
- identify missing contact information

### Phase 2 — Design System

- define color tokens
- define typography
- define spacing scale
- define radii
- define shadow system
- define buttons
- define cards
- define icon style

### Phase 3 — Global Components

Build:

- Header
- Mobile Navigation
- Footer
- Section Heading
- CTA
- Button styles

### Phase 4 — Homepage

Build in this order:

1. Hero Slider
2. About Preview
3. Healthcare Segments
4. Featured Products
5. Business Process
6. Corporate Values
7. Gallery Preview
8. CTA

### Phase 5 — Inner Pages

Build:

- About Us
- Products
- Gallery
- Contact Us

### Phase 6 — Responsive Polish

Test:

- desktop
- laptop
- tablet
- mobile
- small mobile

### Phase 7 — SEO / Accessibility / Performance

Add:

- metadata
- schema
- alt text
- keyboard support
- focus states
- image optimization
- performance tuning

### Phase 8 — Final QA

Verify all content and design rules.

---

## 44. Final QA Checklist

Before delivery confirm:

- [ ] Official UDY logo is used correctly
- [ ] Website palette comes only from UDY logo colors
- [ ] No unrelated UI accent colors are used
- [ ] Hero uses the approved product-led slider direction
- [ ] Desktop hero resembles a premium 1920×700 pharmaceutical banner
- [ ] Mobile hero is independently composed
- [ ] Real UDY product images are used
- [ ] Product packaging is not distorted
- [ ] Product names remain accurate
- [ ] Company information is accurate
- [ ] No fake contact details exist
- [ ] No fake medical claims exist
- [ ] No fake certification claims exist
- [ ] No fake office building is presented as real
- [ ] All five pages exist
- [ ] Navigation works
- [ ] Mobile navigation works
- [ ] Slider controls are accessible
- [ ] Product grid is responsive
- [ ] Gallery is responsive
- [ ] Contact form validates properly
- [ ] SEO metadata exists
- [ ] Schema is factual
- [ ] Image alt text exists
- [ ] Core Web Vitals are considered
- [ ] Website feels corporate and pharmaceutical
- [ ] Final result is inspired by Dermaglitz structurally but is clearly original

---

## 45. Pending Client Inputs

The following details must still be supplied before final production launch:

- official phone number
- official email address
- WhatsApp number if applicable
- social media URLs
- domain name if not confirmed
- confirmation that the registered office should be publicly displayed

Do not invent any missing details.

---

## 46. Final Implementation Instruction

Do not only create static mockups or describe the website.

Implement the website as a production-quality Next.js project.

Start by reviewing and organizing all supplied UDY assets. Then create the design system, shared layout, hero/banner slider, homepage sections, inner pages, responsive behavior, SEO, accessibility, and performance optimization.

The final website should look like a professionally art-directed pharmaceutical corporate website, with a full-width product-led hero similar in structural impact to the Dermaglitz reference website, while remaining unmistakably UDY Healthcare in branding, content, products, and visual identity.
