import { icons } from "@/lib/icons";
import type { ValueItem } from "@/data/process";

export function ValueCard({ value }: { value: ValueItem }) {
  const Icon = icons[value.icon];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-card">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background-soft text-brand-primary">
        <Icon aria-hidden="true" size={22} />
      </span>
      <h3 className="text-base font-semibold text-text-primary">{value.title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{value.description}</p>
    </div>
  );
}
