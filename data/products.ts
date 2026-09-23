export type ProductCategory =
  | "pediatric"
  | "respiratory"
  | "gastrointestinal"
  | "nutraceutical"
  | "womens-healthcare"
  | "general-healthcare";

export type Product = {
  slug: string;
  name: string;
  /** Generic / composition name — only set where confirmed by supplied packaging. */
  composition?: string;
  /** Dosage form / pack info — only set where the product name/packaging confirms it. */
  form?: string;
  /** Short confirmed pack note (e.g. usage restriction) shown under the composition line. */
  note?: string;
  /**
   * Category used for the Products page filter. Left undefined where the
   * available information does not clearly support a category — such
   * products still appear under "All Products".
   */
  category?: ProductCategory;
  featured?: boolean;
};

// Composition/pack copy is only included for the products confirmed in the
// approved UDY Healthcare reference design; every other entry uses the
// exact product name from the supplied portfolio list with no invented
// composition, dosage or category. Packshots live in
// public/images/products/udy-healthcare-<slug>.webp.
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
  { slug: "budexol", name: "Budexol" },
  { slug: "colvent-drops", name: "Colvent Drops", form: "Drops" },
  { slug: "colvent-syrup", name: "Colvent Syrup", form: "Syrup" },
  { slug: "emfa-ds", name: "EMFA-DS" },
  { slug: "esmozip-jr", name: "EsmoZip JR", category: "pediatric" },
  { slug: "fevibru", name: "Fevibru" },
  { slug: "flutocin", name: "Flutocin" },
  { slug: "gastrozip", name: "Gastrozip" },
  { slug: "histaxen", name: "Histaxen" },
  { slug: "mucolox-ls", name: "Mucolox-LS" },
  { slug: "mucolox", name: "Mucolox" },
  { slug: "mucolox-cet", name: "Mucolox-CET" },
  { slug: "mupibex", name: "Mupibex" },
  { slug: "ranivon", name: "Ranivon" },
  { slug: "reutibee", name: "ReutiBee" },
  { slug: "saloxol", name: "Saloxol" },
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
  { slug: "ud-pro-gg", name: "UD PRO-GG" },
  { slug: "ud-pro-bc", name: "UD PRO-BC" },
  { slug: "ud3-maxx", name: "UD3 MAXX" },
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
  { slug: "udvit-d3", name: "UDVIT D3" },
  { slug: "vit-a-drops", name: "VIT-A Drops", form: "Drops" },
  { slug: "up-hunger", name: "Up Hunger" },
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
  { slug: "zoinic", name: "Zoinic" },
  { slug: "gestovia-200", name: "Gestovia 200" },
  {
    slug: "ovundra",
    name: "Ovundra",
    composition: "Dydrogesterone Tablets IP 10 mg",
    form: "Tablets",
    category: "womens-healthcare",
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const productCategories: { slug: ProductCategory | "all"; label: string }[] = [
  { slug: "all", label: "All Products" },
  { slug: "pediatric", label: "Pediatric" },
  { slug: "respiratory", label: "Respiratory" },
  { slug: "gastrointestinal", label: "Gastrointestinal" },
  { slug: "nutraceutical", label: "Nutraceutical" },
  { slug: "womens-healthcare", label: "Women's Healthcare" },
  { slug: "general-healthcare", label: "General Healthcare" },
];
