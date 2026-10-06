import { icons } from "@/lib/icons";
import { processSteps } from "@/data/process";
import styles from "./BusinessProcess.module.css";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className={styles.trackLine} aria-hidden="true" />
      <ol className={styles.timeline}>
        {processSteps.map((step) => {
          const Icon = icons[step.icon];

          return (
            <li key={step.step} className={styles.stepItem}>
              <div className={styles.stepCard}>
                <div className={styles.nodeWrapper}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <span className={styles.iconNode}>
                    <Icon aria-hidden="true" size={22} />
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className={styles.stepTitle}>{step.label}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
