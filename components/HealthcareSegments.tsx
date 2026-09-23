import { SectionHeading } from "./SectionHeading";
import { SegmentCard } from "./SegmentCard";
import { segments } from "@/data/segments";

export function HealthcareSegments() {
  return (
    <section className="home-segments bg-background-soft py-16 lg:py-24">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow="Our Focus Areas" title="Healthcare Segments" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <SegmentCard key={segment.slug} segment={segment} />
          ))}
        </div>
      </div>
    </section>
  );
}
