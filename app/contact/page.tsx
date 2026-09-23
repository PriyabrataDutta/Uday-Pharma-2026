import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with UDY Healthcare Private Limited for partnership enquiries and additional information.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact UDY Healthcare"
        description="For partnership enquiries and additional information, please get in touch using the form below."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-card">
                  <MapPin aria-hidden="true" size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                    {company.registeredOffice.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {company.legalName}
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

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                Connect With Us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Official phone, email and WhatsApp details are being finalized
                and will be published here shortly. For partnership
                enquiries and additional information, please use the enquiry
                form.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
