type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${
        action ? "sm:flex-row sm:items-end sm:justify-between" : ""
      } ${isCenter ? "items-center text-center" : ""}`}
    >
      <div className={`flex max-w-2xl flex-col gap-3 ${isCenter ? "items-center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-[28px] font-bold leading-tight text-text-primary sm:text-3xl lg:text-[40px]">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
