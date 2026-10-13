import { SegmentCard } from "./SegmentCard";
import { segments } from "@/data/segments";
import styles from "./HealthcareSegments.module.css";

export function HealthcareSegments() {
  return (
    <section className={styles.section}>
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <span className="inline-flex self-start rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
            Our Strategic Divisions
          </span>
          <h2 className="text-[26px] font-bold leading-tight text-white sm:text-3xl lg:text-[36px]">
            Healthcare Segments
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-sky-100/90 lg:text-base">
            UDY Healthcare is dedicated to specialized pharmaceutical care across Pediatric Healthcare and Gynecology &amp; Women&apos;s Health.
          </p>
        </div>

        <div className={styles.flexContainer}>
          {segments.map((segment) => (
            <SegmentCard key={segment.slug} segment={segment} />
          ))}
        </div>
      </div>
    </section>
  );
}
