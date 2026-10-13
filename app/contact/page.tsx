import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { MapPin, Building2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with UDY Healthcare Private Limited for corporate partnership enquiries and additional information.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact UDY Healthcare"
        description="For corporate partnership enquiries and product information, please get in touch using the enquiry form."
      />

      <section className="container-page py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            {/* Registered Office Card */}
            <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/50 p-6 shadow-md shadow-sky-900/5 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
                  <MapPin aria-hidden="true" size={20} />
                </span>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    {company.registeredOffice.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    <strong className="font-semibold text-slate-900">{company.legalName}</strong>
                    <br />
                    {company.registeredOffice.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Identification Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-900/5 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
                  <Building2 aria-hidden="true" size={20} />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    Corporate Identifiers
                  </h3>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p><strong className="font-semibold text-slate-800">CIN:</strong> {company.cin}</p>
                    <p><strong className="font-semibold text-slate-800">GSTIN:</strong> {company.gstin}</p>
                    <p><strong className="font-semibold text-slate-800">Director:</strong> {company.director}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiries Note Card */}
            <div className="rounded-3xl border border-sky-100 bg-sky-50/50 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-800">
                    Partnership & Distribution
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    Official phone and direct channel details are being finalized. For product distribution partnerships, franchise enquiries, or bulk clinical supply, please visit our dedicated enquiry desk.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="/enquiry"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      Go to Dedicated Product & Franchise Enquiry Desk →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-900/5 sm:p-8">
            <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
