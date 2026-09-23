export type Segment = {
  slug: string;
  name: string;
  description: string;
  icon: "Baby" | "HeartPulse" | "Stethoscope" | "FlaskConical";
};

export const segments: Segment[] = [
  {
    slug: "pediatric",
    name: "Pediatric",
    description:
      "Supporting healthy growth for a brighter tomorrow — products focused on children's healthcare and nutritional needs.",
    icon: "Baby",
  },
  {
    slug: "gynecology",
    name: "Gynecology",
    description: "Women's health solutions for every stage of life.",
    icon: "HeartPulse",
  },
  {
    slug: "general-healthcare",
    name: "General Healthcare",
    description:
      "Everyday care for healthier families — products intended for broader healthcare requirements and general medical practice.",
    icon: "Stethoscope",
  },
  {
    slug: "specialized",
    name: "Specialized Segments",
    description:
      "Focused therapies for specific needs — additional healthcare and pharmaceutical products catering to different therapeutic requirements.",
    icon: "FlaskConical",
  },
];
