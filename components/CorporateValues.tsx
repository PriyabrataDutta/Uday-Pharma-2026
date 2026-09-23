import { SectionHeading } from "./SectionHeading";
import { ValueCard } from "./ValueCard";
import { values } from "@/data/process";

export function CorporateValues() {
  return (
    <section className="home-values container-page py-16 lg:py-24">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="Why Choose UDY Healthcare" title="A Stronger, Healthier Tomorrow" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
