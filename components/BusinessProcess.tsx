import { SectionHeading } from "./SectionHeading";
import { ProcessTimeline } from "./ProcessTimeline";
import styles from "./BusinessProcess.module.css";

export function BusinessProcess() {
  return (
    <section className={styles.section}>
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Strategic Workflow"
          title="From Innovation to Impact"
          description="A structured pharmaceutical workflow ensuring quality, compliance, and seamless distribution across healthcare channels."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}
