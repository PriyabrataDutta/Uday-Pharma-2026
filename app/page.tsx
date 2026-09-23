import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { HealthcareSegments } from "@/components/HealthcareSegments";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BusinessProcess } from "@/components/BusinessProcess";
import { CorporateValues } from "@/components/CorporateValues";
import { GalleryPreview } from "@/components/GalleryPreview";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "UDY Healthcare Private Limited | Pharmaceutical & Healthcare Products",
  description:
    "UDY Healthcare Private Limited develops, markets and distributes pharmaceutical and healthcare products across pediatric, gynecology, general healthcare and specialized segments.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutPreview />
      <HealthcareSegments />
      <FeaturedProducts />
      <BusinessProcess />
      <CorporateValues />
      <GalleryPreview />
      <div className="home-cta">
        <CTASection />
      </div>
    </div>
  );
}
