export type Segment = {
  slug: "pediatric" | "gynecology";
  name: string;
  badge: string;
  headline: string;
  description: string;
  icon: "Baby" | "HeartPulse";
  heroImage: string;
  brands: string[];
};

export const segments: Segment[] = [
  {
    slug: "pediatric",
    name: "Pediatric Healthcare",
    badge: "PEDIATRIC CARE DIVISION",
    headline: "Care Designed for Growing Needs",
    description:
      "Nurturing healthy growth with gentle, effective formulations. Our pediatric portfolio covers anti-infectives, oral suspensions, drops, pediatric toothpaste, and essential nutritional care.",
    icon: "Baby",
    heroImage: "/images/segments/pediatric-hero.jpg",
    brands: ["Amoxy XL", "UDKID-CEF", "Tiny Tooths", "VIT-MAXX"],
  },
  {
    slug: "gynecology",
    name: "Gynecology & Women's Health",
    badge: "WOMEN'S HEALTH DIVISION",
    headline: "Therapeutics for Every Stage of Life",
    description:
      "Empowering women's health with trusted pharmaceutical care. Our gynecology range supports reproductive wellness, hormonal balance, and maternal health across all life stages.",
    icon: "HeartPulse",
    heroImage: "/images/segments/gynecology-hero.jpg",
    brands: ["Gestovia 200", "Ovundra", "EMFA-DS", "UD3 MAXX"],
  },
];
