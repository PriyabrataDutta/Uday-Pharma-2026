import { Target, Sparkles, ShieldCheck, Check } from "lucide-react";

const pillars = [
  {
    eyebrow: "Our Mission",
    title: "Patient-Centered Healthcare",
    description:
      "To develop, promote, and distribute high-standard pharmaceutical formulations that improve patient health and provide reliable therapeutic support for healthcare professionals.",
    icon: Target,
    colorStyle: "from-brand-primary to-brand-primary-dark",
    iconBg: "bg-brand-primary/10 text-brand-primary",
    tagBg: "bg-blue-50 text-brand-primary border-blue-200/60",
    points: [
      "Targeted Pediatric & Infant-Safe Lines",
      "Specialized Women's Health & Gynecology Care",
      "Ethical, Responsible Distribution Channels",
    ],
  },
  {
    eyebrow: "Our Vision",
    title: "A Stronger, Healthier Tomorrow",
    description:
      "To emerge as an enduring and widely trusted healthcare brand across India, recognized for clinical integrity, expanding portfolio depth, and dedicated community wellness.",
    icon: Sparkles,
    colorStyle: "from-brand-secondary to-teal-700",
    iconBg: "bg-brand-secondary/15 text-brand-secondary",
    tagBg: "bg-teal-50 text-teal-800 border-teal-200/60",
    points: [
      "Consistent Expansion Across Therapeutic Segments",
      "Reliable Supply Chains & Partner Support",
      "Enduring Trust Among Medical Professionals",
    ],
  },
  {
    eyebrow: "Quality Mandate",
    title: "WHO-GMP Partner Standard",
    description:
      "We partner strictly with certified manufacturing facilities and enforce stringent quality standards across raw materials, stability testing, and protective pharmaceutical packaging.",
    icon: ShieldCheck,
    colorStyle: "from-slate-800 to-slate-900",
    iconBg: "bg-slate-100 text-slate-800",
    tagBg: "bg-slate-50 text-slate-700 border-slate-200/60",
    points: [
      "Collaboration with Certified WHO-GMP Facilities",
      "Standardized Blister, Strip & Bottle Packaging",
      "Full Adherence to Indian Regulatory Norms",
    ],
  },
];

export function MissionVisionMandate() {
  return (
    <section className="bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30 py-16 lg:py-24">
      <div className="container-page flex flex-col gap-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary shadow-2xs">
            Strategic Foundations
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Guiding Principles Behind Every Brand
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Our strategic foundations dictate our product planning, partner selection, formulation safety, and commitment to healthcare accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.eyebrow}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/30 hover:shadow-card-hover sm:p-8"
              >
                {/* Decorative Top Accent Line */}
                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${pillar.colorStyle}`}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${pillar.tagBg}`}>
                      {pillar.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Core Commitments
                  </span>
                  <ul className="mt-2.5 flex flex-col gap-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check size={14} className="text-brand-secondary shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
