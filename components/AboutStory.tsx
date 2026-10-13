import Image from "next/image";
import { company } from "@/data/company";
import { HeartPulse, Sparkles, Building2, MapPin, CheckCircle2 } from "lucide-react";

export function AboutStory() {
  return (
    <section id="overview" className="container-page py-14 lg:py-20 scroll-mt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Narrative & Purpose */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow inline-flex items-center gap-1.5 self-start rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
              <Sparkles size={13} className="text-brand-secondary" />
              Company Overview & Purpose
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Dedicated to Therapeutic Quality &amp; Community Health
            </h2>
            <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              {company.overview}
            </p>
          </div>

          {/* Narrative Paragraphs */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/40 p-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary font-bold text-xs">
                  01
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Diverse Therapeutic Focus</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {company.about[1]}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/40 p-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15 text-brand-secondary font-bold text-xs">
                  02
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Responsible Development &amp; Partnerships</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {company.about[2]}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/40 p-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700 font-bold text-xs">
                  03
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Reliable Access &amp; Compliance</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {company.about[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Tagline Highlight */}
          <div className="flex items-center gap-4 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-4 sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white shadow-sm">
              <HeartPulse size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Official Corporate Motto
              </p>
              <p className="text-base font-bold text-slate-900 sm:text-lg">
                &ldquo;{company.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Podium Showcase */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md rounded-3xl border border-sky-200/80 bg-gradient-to-b from-sky-50/90 via-white to-sky-50/60 p-6 shadow-card sm:p-8">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-secondary/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl"
            />

            {/* Header Badge */}
            <div className="relative z-10 flex items-center justify-between border-b border-sky-100 pb-4">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-brand-primary" />
                <span className="text-xs font-bold text-slate-900">UDY Healthcare</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-primary shadow-2xs border border-sky-100">
                <MapPin size={12} /> Bengaluru HQ
              </span>
            </div>

            {/* Real Product Pack Stage */}
            <div className="relative z-10 my-6 flex h-60 items-end justify-center gap-2 sm:h-72">
              {/* Product 1 */}
              <div className="relative h-44 w-28 transition-transform duration-300 hover:scale-105 sm:h-56 sm:w-32">
                <Image
                  src="/images/products/udy-healthcare-udkid-cef.webp"
                  alt="UDKID-CEF Pediatric Suspension"
                  fill
                  sizes="140px"
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* Product 2 (Centered, prominent) */}
              <div className="relative -mb-2 h-52 w-32 z-10 transition-transform duration-300 hover:scale-105 sm:h-64 sm:w-36">
                <Image
                  src="/images/products/udy-healthcare-ovundra.webp"
                  alt="Ovundra Women's Healthcare Formulation"
                  fill
                  sizes="160px"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Product 3 */}
              <div className="relative h-44 w-28 transition-transform duration-300 hover:scale-105 sm:h-56 sm:w-32">
                <Image
                  src="/images/products/udy-healthcare-amoxy-xl.webp"
                  alt="Amoxy XL Formulation"
                  fill
                  sizes="140px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Product Podium Shadow Plate */}
            <div
              aria-hidden="true"
              className="mx-auto h-4 w-4/5 rounded-[100%] bg-sky-900/10 blur-xs"
            />

            {/* Credential Tags */}
            <div className="relative z-10 mt-6 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 text-xs font-medium text-slate-700 shadow-2xs border border-sky-100/60">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>35+ Approved Formulations in Active Portfolio</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 text-xs font-medium text-slate-700 shadow-2xs border border-sky-100/60">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Quality-Assured Third-Party Manufacturing</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/90 p-2.5 text-xs font-medium text-slate-700 shadow-2xs border border-sky-100/60">
                <CheckCircle2 size={16} className="text-brand-secondary shrink-0" />
                <span>Specialized Pediatric &amp; Gynecology Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
