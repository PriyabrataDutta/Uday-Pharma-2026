import type React from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  stats,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  stats?: { label: string; value: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-100/90 via-sky-50/60 to-white border-b border-sky-100/60 py-14 sm:py-20">
      {/* Edge-to-edge ambient gradient mesh - spans 100% full width with zero side gaps */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(0,126,196,0.14),rgba(35,170,192,0.08),transparent_85%)]"
      />

      <div className="container-page relative z-10 flex flex-col items-center gap-4 text-center">
        <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-sky-700 shadow-sm backdrop-blur-sm">
          {eyebrow}
        </span>

        <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            {description}
          </p>
        )}

        {stats && stats.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-sky-100/80 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-extrabold text-sky-700 sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
