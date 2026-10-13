import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./Button";

export function CTASection({
  heading = "Connect With UDY Healthcare",
  description = "Partner with us to explore our growing portfolio of trusted pharmaceutical brands and distribution channels.",
  buttonLabel = "Get in Touch",
  buttonHref = "/contact",
}: {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="container-page py-6">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#072e4a] via-[#005688] to-[#0a9bb4] px-8 py-14 text-center shadow-float sm:px-16 sm:text-left">
        {/* Ambient Light Mesh Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-blue-500/15 blur-2xl"
        />

        <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-xl flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 self-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-md sm:self-start">
              <Sparkles size={13} aria-hidden="true" />
              Strategic Healthcare Partnerships
            </span>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">{heading}</h2>
            <p className="text-base leading-relaxed text-sky-100/90">{description}</p>
          </div>
          <Button href={buttonHref} variant="inverse" className="shrink-0 shadow-lg transition-transform duration-300 hover:scale-105">
            {buttonLabel}
            <ArrowRight aria-hidden="true" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
