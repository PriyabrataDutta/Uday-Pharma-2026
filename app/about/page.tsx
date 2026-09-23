import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { HealthcareSegments } from "@/components/HealthcareSegments";
import { BusinessProcess } from "@/components/BusinessProcess";
import { CorporateValues } from "@/components/CorporateValues";
import { CompanyInfoCard } from "@/components/CompanyInfoCard";
import { CTASection } from "@/components/CTASection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "UDY Healthcare Private Limited is committed to developing and promoting healthcare products across pediatric, gynecology, general healthcare and specialized segments.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About UDY Healthcare"
        title="About UDY Healthcare"
        description="Building healthcare brands with a focus on quality, accessibility and responsible practices."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <SectionHeading eyebrow="Company Overview" title="Who We Are" align="left" />
          {company.about.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-text-secondary lg:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <HealthcareSegments />
      <BusinessProcess />
      <CorporateValues />

      <section className="container-page pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <CompanyInfoCard />
        </div>
      </section>

      <div className="pb-16 lg:pb-24">
        <CTASection />
      </div>
    </>
  );
}
