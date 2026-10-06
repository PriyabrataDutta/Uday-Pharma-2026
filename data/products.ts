export type ProductCategory = "pediatric" | "gynecology";

export type Product = {
  slug: string;
  name: string;
  /** Generic / composition name — only set where confirmed by supplied packaging. */
  composition?: string;
  /** Dosage form / pack info — only set where the product name/packaging confirms it. */
  form?: string;
  /** Short confirmed pack note (e.g. usage restriction) shown under the composition line. */
  note?: string;
  /** Primary focus area: Pediatric or Gynecology. */
  category?: ProductCategory;
  featured?: boolean;
};

// Composition/pack copy is only included for the products confirmed in the
// approved UDY Healthcare reference design; every entry maps to Pediatric or Gynecology.
export const products: Product[] = [
  {
    slug: "amoxy-xl",
    name: "Amoxy XL",
    composition: "Amoxycillin & Potassium Clavulanate for Oral Suspension I.P.",
    form: "Oral Suspension",
    note: "For paediatric use only",
    category: "pediatric",
    featured: true,
  },
  {
    slug: "amoxy-ds",
    name: "Amoxy DS",
    category: "pediatric",
  },
  { slug: "budexol", name: "Budexol", category: "pediatric" },
  { slug: "colvent-drops", name: "Colvent Drops", form: "Drops", category: "pediatric" },
  { slug: "colvent-syrup", name: "Colvent Syrup", form: "Syrup", category: "pediatric" },
  { slug: "emfa-ds", name: "EMFA-DS", category: "gynecology" },
  { slug: "esmozip-jr", name: "EsmoZip JR", category: "pediatric" },
  { slug: "fevibru", name: "Fevibru", category: "pediatric" },
  { slug: "flutocin", name: "Flutocin", category: "gynecology" },
  { slug: "gastrozip", name: "Gastrozip", category: "pediatric" },
  { slug: "histaxen", name: "Histaxen", category: "pediatric" },
  { slug: "mucolox-ls", name: "Mucolox-LS", category: "pediatric" },
  { slug: "mucolox", name: "Mucolox", category: "pediatric" },
  { slug: "mucolox-cet", name: "Mucolox-CET", category: "pediatric" },
  { slug: "mupibex", name: "Mupibex", category: "pediatric" },
  { slug: "ranivon", name: "Ranivon", category: "pediatric" },
  { slug: "reutibee", name: "ReutiBee", category: "pediatric" },
  { slug: "saloxol", name: "Saloxol", category: "pediatric" },
  { slug: "saloxol-jr", name: "Saloxol-JR", category: "pediatric" },
  {
    slug: "tiny-bell-drops",
    name: "Tiny Bell Drops",
    form: "Drops",
    category: "pediatric",
  },
  {
    slug: "tiny-tooths",
    name: "Tiny Tooths",
    composition: "Toothpaste for Tiny Teeth",
    form: "Toothpaste",
    note: "Strawberry · 6m+",
    category: "pediatric",
    featured: true,
  },
  {
    slug: "ud-pro-gg",
    name: "UD PRO-GG",
    composition: "Lactobacillus rhamnosus GG Sachet",
    form: "Sachet",
    category: "pediatric",
    featured: true,
  },
  { slug: "ud-pro-bc", name: "UD PRO-BC", category: "pediatric" },
  { slug: "ud3-maxx", name: "UD3 MAXX", category: "gynecology" },
  {
    slug: "udkid-cef",
    name: "UDKID-CEF",
    composition: "Cefixime Oral Suspension IP",
    form: "Oral Suspension",
    note: "With sterile water",
    category: "pediatric",
    featured: true,
  },
  { slug: "udkid-ls", name: "UDKID-LS", category: "pediatric" },
  { slug: "udkid-ns", name: "UDKID-NS", category: "pediatric" },
  { slug: "udvit-d3", name: "UDVIT D3", category: "pediatric" },
  { slug: "vit-a-drops", name: "VIT-A Drops", form: "Drops", category: "pediatric" },
  { slug: "up-hunger", name: "Up Hunger", category: "pediatric" },
  {
    slug: "vit-maxx-dha-choline-lutein",
    name: "VIT-MAXX",
    composition: "High-Purity DHA | Choline | Lutein",
    note: "For infants & toddlers",
    category: "pediatric",
    featured: true,
  },
  {
    slug: "vit-maxx-dha-epa",
    name: "VIT-MAXX DHA / EPA",
    composition: "DHA | EPA",
    category: "pediatric",
  },
  { slug: "zoinic", name: "Zoinic", category: "pediatric" },
  {
    slug: "gestovia-200",
    name: "Gestovia 200",
    composition: "Micronised Progesterone Sustained Release",
    form: "SR Tablets",
    category: "gynecology",
    featured: true,
  },
  {
    slug: "ovundra",
    name: "Ovundra",
    composition: "Dydrogesterone Tablets IP 10 mg",
    form: "Tablets",
    category: "gynecology",
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const productCategories: { slug: ProductCategory | "all"; label: string }[] = [
  { slug: "all", label: "All Products" },
  { slug: "pediatric", label: "Pediatric Healthcare" },
  { slug: "gynecology", label: "Gynecology & Women's Health" },
];
