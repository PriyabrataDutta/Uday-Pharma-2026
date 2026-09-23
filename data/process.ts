export type ProcessStep = {
  label: string;
  icon: "Lightbulb" | "Factory" | "PackageCheck" | "Megaphone" | "Truck" | "Building2" | "Users";
};

export const processSteps: ProcessStep[] = [
  { label: "Product Planning & Development", icon: "Lightbulb" },
  { label: "Third-Party Manufacturing", icon: "Factory" },
  { label: "Quality & Packaging", icon: "PackageCheck" },
  { label: "Marketing", icon: "Megaphone" },
  { label: "Distribution", icon: "Truck" },
  { label: "Pharmacies / Hospitals", icon: "Building2" },
  { label: "Patients", icon: "Users" },
];

export type ValueItem = {
  title: string;
  description: string;
  icon: "Gem" | "HandHeart" | "TrendingUp" | "Network";
};

export const values: ValueItem[] = [
  {
    title: "Quality Focus",
    description: "Focused on consistent quality and responsible healthcare practices.",
    icon: "Gem",
  },
  {
    title: "Responsible Practices",
    description: "A healthcare-focused approach built around responsible business practices.",
    icon: "HandHeart",
  },
  {
    title: "Growing Portfolio",
    description: "Expanding healthcare brands across different therapeutic requirements.",
    icon: "TrendingUp",
  },
  {
    title: "Wider Distribution",
    description: "Working through appropriate healthcare and distribution channels.",
    icon: "Network",
  },
];

export type TrustIndicator = {
  label: string;
  icon: "ShieldCheck" | "Globe2" | "Sunrise";
};

export const trustIndicators: TrustIndicator[] = [
  { label: "Quality Products", icon: "ShieldCheck" },
  { label: "Wider Healthcare Access", icon: "Globe2" },
  { label: "A Healthier Tomorrow", icon: "Sunrise" },
];

export type AboutFeature = {
  title: string;
  description: string;
  icon: "Users" | "BadgeCheck" | "Expand";
};

export const aboutFeatures: AboutFeature[] = [
  {
    title: "People Focused",
    description: "Healthcare for every stage of life.",
    icon: "Users",
  },
  {
    title: "Quality Driven",
    description: "Consistent and reliable products.",
    icon: "BadgeCheck",
  },
  {
    title: "Expanding Access",
    description: "Wider reach, brighter communities.",
    icon: "Expand",
  },
];
