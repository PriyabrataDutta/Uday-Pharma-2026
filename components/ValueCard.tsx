import { icons } from "@/lib/icons";
import type { ValueItem } from "@/data/process";

export function ValueCard({ value }: { value: ValueItem }) {
  const Icon = icons[value.icon];

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/30 hover:shadow-card-hover">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-background-soft to-surface text-brand-primary transition-colors duration-300 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
        <Icon aria-hidden="true" size={22} />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-bold text-text-primary transition-colors group-hover:text-brand-primary">
          {value.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">{value.description}</p>
      </div>
    </div>
  );
}
