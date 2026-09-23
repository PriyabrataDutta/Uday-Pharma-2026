import { icons } from "@/lib/icons";
import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-0">
      {processSteps.map((step, index) => {
        const Icon = icons[step.icon];
        const isLast = index === processSteps.length - 1;

        return (
          <li
            key={step.label}
            className="relative flex flex-1 flex-col items-center gap-3 text-center lg:px-2"
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-7 hidden h-px w-full -translate-y-1/2 bg-border lg:block"
                style={{ left: "calc(50% + 28px)", width: "calc(100% - 8px)" }}
              />
            )}
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-primary shadow-card">
              <Icon aria-hidden="true" size={24} />
            </span>
            <span className="max-w-[9rem] text-sm font-semibold text-text-primary">
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
