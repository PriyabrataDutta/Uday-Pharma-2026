export type ProcessStep = {
  step: string;
  label: string;
  description: string;
  icon: "Lightbulb" | "Factory" | "PackageCheck" | "Megaphone" | "Truck" | "Building2" | "Users";
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    label: "Product Planning",
    description: "Therapeutic demand analysis & formulation design.",
    icon: "Lightbulb",
  },
  {
    step: "02",
    label: "Manufacturing",
    description: "Partnering with certified WHO-GMP facilities.",
    icon: "Factory",
  },
  {
    step: "03",
    label: "Quality Control",
    description: "Rigorous quality checks & protective packaging.",
    icon: "PackageCheck",
  },
  {
    step: "04",
    label: "Marketing",
    description: "Doctor detailing & strategic medical education.",
    icon: "Megaphone",
  },
  {
    step: "05",
    label: "Distribution",
    description: "Reliable, temperature-monitored logistics network.",
    icon: "Truck",
  },
  {
    step: "06",
    label: "Healthcare Partners",
    description: "Supplying verified pharmacies & hospitals.",
    icon: "Building2",
  },
  {
    step: "07",
    label: "Patient Outcomes",
    description: "Delivering trusted therapeutic care to families.",
    icon: "Users",
  },
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
