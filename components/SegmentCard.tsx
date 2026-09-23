import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { icons } from "@/lib/icons";
import type { Segment } from "@/data/segments";
import { ReferenceArtwork } from "./ReferenceArtwork";
const photos: Record<string, number> = { pediatric: 60, gynecology: 220, "general-healthcare": 379, specialized: 538 };
const descriptions: Record<string, string> = { pediatric: "Supporting healthy growth for a brighter tomorrow.", gynecology: "Women’s health solutions for every stage of life.", "general-healthcare": "Everyday care for healthier families.", specialized: "Focused therapies for specific needs." };
export function SegmentCard({ segment }: { segment: Segment }) {
  const Icon = icons[segment.icon];
  const category = segment.slug === "specialized" ? "all" : segment.slug === "gynecology" ? "womens-healthcare" : segment.slug;
  return <Link href={`/products?category=${category}`} className="segment-card">
    <ReferenceArtwork x={photos[segment.slug]} y={658} width={146} height={75} label={`${segment.name} healthcare`} />
    <div className="segment-content"><span className="feature-icon"><Icon size={24} aria-hidden="true" /></span><div><h3>{segment.name}</h3><p>{descriptions[segment.slug]}</p></div><span className="segment-arrow"><ArrowRight size={17} aria-hidden="true" /></span></div>
  </Link>;
}
