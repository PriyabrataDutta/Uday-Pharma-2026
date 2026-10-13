import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Building2,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Product & Franchise Enquiry",
  description:
    "Submit product enquiries, PCD franchise requests, doctor detailing requests, and bulk institutional supply queries to UDY Healthcare Private Limited.",
  alternates: { canonical: "/enquiry" },
};

export default function EnquiryPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageHero
        eyebrow="Commercial & Clinical Inquiries"
        title="Product & Franchise Enquiry"
        description="Connect directly with our commercial distribution desk for product orders, monopoly PCD franchise availability, and doctor detailing literature."
      />

      <section className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 sm:p-9 shadow-xl shadow-sky-900/5">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Direct Enquiry Desk
                </span>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Submit Your Product Requirement
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Fill in your professional credentials and territory specifications below.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="flex h-64 items-center justify-center text-xs text-slate-400">
                    Loading enquiry interface...
                  </div>
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>
          </div>

          {/* Right Column / Corporate Trust & Advantages (5 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Why Partner Card */}
            <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/50 to-white p-6 sm:p-7 shadow-md shadow-sky-900/5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-sky-800">
                <Sparkles size={16} className="text-sky-600" />
                <span>Partner Advantages</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Why Collaborate with UDY Healthcare?
              </h3>

              <ul className="mt-4 space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-800">WHO-GMP Compliant Manufacturing:</strong>
                    <p className="text-[11px] text-slate-500">Manufactured in high-standard facilities under strict QA/QC release protocols.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-800">Complete Visual Aids & Promotionals:</strong>
                    <p className="text-[11px] text-slate-500">High-resolution scientific detailing folders, reminder cards, and clinical samples.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-800">Monopoly PCD Franchise Opportunities:</strong>
                    <p className="text-[11px] text-slate-500">Dedicated territory exclusivity with transparent pricing and prompt dispatches.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-800">Prompt Response SLA:</strong>
                    <p className="text-[11px] text-slate-500">All genuine commercial queries reviewed and contacted within 24 business hours.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Corporate Identification Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Building2 size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Corporate Entity
                  </h4>
                  <p className="text-sm font-bold text-slate-900">{company.legalName}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">CIN</span>
                  <p className="font-semibold text-slate-700">{company.cin}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">GSTIN</span>
                  <p className="font-semibold text-slate-700">{company.gstin}</p>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-2 text-xs text-slate-500">
                <MapPin size={14} className="shrink-0 mt-0.5 text-slate-400" />
                <p>
                  {company.registeredOffice.lines.join(", ")}
                </p>
              </div>
            </div>

            {/* Timely Dispatch Guarantee */}
            <div className="flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/50 p-4 text-xs">
              <Clock size={20} className="text-teal-600 shrink-0" />
              <div>
                <strong className="font-semibold text-teal-900">Direct Commercial Coordination</strong>
                <p className="text-[11px] text-teal-700">
                  Our regional distribution managers will reach out directly on the phone or WhatsApp provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
