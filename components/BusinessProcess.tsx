import { SectionHeading } from "./SectionHeading";
import { ProcessTimeline } from "./ProcessTimeline";

export function BusinessProcess() {
  return (
    <section className="home-process bg-background-soft py-16 lg:py-24">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Process"
          title="From Innovation to Impact"
          description="A focused process supporting healthcare products from development through appropriate distribution channels."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}
