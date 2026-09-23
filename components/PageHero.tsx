export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div className="container-page relative flex flex-col items-center gap-4 py-16 text-center sm:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="max-w-3xl text-[34px] font-bold leading-tight text-text-primary sm:text-[44px] lg:text-[54px]">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
