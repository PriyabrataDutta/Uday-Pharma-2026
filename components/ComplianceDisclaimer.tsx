import { FileCheck, Stethoscope } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/company";

export function ComplianceDisclaimer() {
  return (
    <section className="container-page py-6">
      <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/60 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-brand-primary">
              <Stethoscope size={18} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Regulatory &amp; Medical Advisory
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-100/80 px-2 py-0.5 text-[10px] font-semibold text-sky-800">
                  <FileCheck size={11} /> Compliance Notice
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                {company.disclaimer}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-sky-300 bg-white px-4 py-2 text-xs font-bold text-brand-primary shadow-2xs transition-colors hover:bg-sky-50"
          >
            Medical Inquiries &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
