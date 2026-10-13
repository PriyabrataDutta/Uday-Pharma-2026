import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutStory } from "@/components/AboutStory";
import { MissionVisionMandate } from "@/components/MissionVisionMandate";
import { HealthcareSegments } from "@/components/HealthcareSegments";
import { BusinessProcess } from "@/components/BusinessProcess";
import { CorporateValues } from "@/components/CorporateValues";
import { CompanyInfoCard } from "@/components/CompanyInfoCard";
import { ComplianceDisclaimer } from "@/components/ComplianceDisclaimer";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | UDY Healthcare Private Limited",
  description:
    "UDY Healthcare Private Limited is committed to developing and promoting quality healthcare products across pediatric, gynecology, general healthcare, and specialized therapeutic segments.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Profile · Since 2020"
        title="About UDY Healthcare"
        description="Dedicated to developing, marketing and distributing quality pharmaceutical brands with a commitment to health, accessibility, and responsible corporate practices."
        stats={[
          { label: "Incorporated", value: "2 Nov 2020" },
          { label: "Formulations", value: "35+ Active" },
          { label: "Strategic Focus", value: "Pediatric & Gynecology" },
          { label: "Registered HQ", value: "Bengaluru, KA" },
        ]}
      >
        {/* Quick Section Navigation Anchor Pills */}
        <nav
          aria-label="About page section navigation"
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold"
        >
          <a
            href="#overview"
            className="rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-slate-700 shadow-2xs transition-all hover:border-brand-primary hover:text-brand-primary cursor-pointer"
          >
            Company Story
          </a>
          <a
            href="#foundations"
            className="rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-slate-700 shadow-2xs transition-all hover:border-brand-primary hover:text-brand-primary cursor-pointer"
          >
            Mission &amp; Vision
          </a>
          <a
            href="#segments"
            className="rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-slate-700 shadow-2xs transition-all hover:border-brand-primary hover:text-brand-primary cursor-pointer"
          >
            Therapeutic Divisions
          </a>
          <a
            href="#process"
            className="rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-slate-700 shadow-2xs transition-all hover:border-brand-primary hover:text-brand-primary cursor-pointer"
          >
            Operational Model
          </a>
          <a
            href="#values"
            className="rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-slate-700 shadow-2xs transition-all hover:border-brand-primary hover:text-brand-primary cursor-pointer"
          >
            Corporate Values
          </a>
          <a
            href="#corporate-info"
            className="rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-slate-700 shadow-2xs transition-all hover:border-brand-primary hover:text-brand-primary cursor-pointer"
          >
            Statutory Registry
          </a>
        </nav>
      </PageHero>

      {/* 1. Company Overview Narrative & Visual Podium */}
      <AboutStory />

      {/* 2. Strategic Foundations: Mission, Vision, Quality Mandate */}
      <div id="foundations" className="scroll-mt-20">
        <MissionVisionMandate />
      </div>

      {/* 3. Therapeutic Segments */}
      <div id="segments" className="scroll-mt-20">
        <HealthcareSegments />
      </div>

      {/* 4. Operational Value Chain ("From Innovation to Impact") */}
      <div id="process" className="scroll-mt-20">
        <BusinessProcess />
      </div>

      {/* 5. Corporate Values & Governance */}
      <div id="values" className="scroll-mt-20">
        <CorporateValues />
      </div>

      {/* 6. Corporate Transparency & Legal Registry */}
      <section id="corporate-info" className="container-page py-16 lg:py-24 scroll-mt-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-10">
          <SectionHeading
            eyebrow="Statutory Information"
            title="Corporate Transparency & Governance"
            description="UDY Healthcare Private Limited is a registered Indian corporation committed to full compliance, accountability, and ethical business standards."
            align="center"
          />

          <CompanyInfoCard />
        </div>
      </section>

      {/* 7. Regulatory & Medical Advisory Notice */}
      <ComplianceDisclaimer />

      {/* 8. Call to Action */}
      <div className="pb-16 lg:pb-24">
        <CTASection
          heading="Partner with UDY Healthcare"
          description="Explore distribution opportunities, product partnerships, and medical collaborations with our pharmaceutical team."
          buttonLabel="Connect With Us"
          buttonHref="/contact"
        />
      </div>
    </>
  );
}
