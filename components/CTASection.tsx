import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function CTASection({
  heading = "Connect With UDY Healthcare",
  description = "Connect with our team to learn more about our healthcare portfolio.",
  buttonLabel = "Get in Touch",
  buttonHref = "/contact",
}: {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-14 text-center sm:px-16 sm:text-left">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10"
        />
        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-base text-white/85">{description}</p>
          </div>
          <Button href={buttonHref} variant="inverse" className="shrink-0">
            {buttonLabel}
            <ArrowRight aria-hidden="true" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
