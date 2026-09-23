import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary min-h-11";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-dark",
  secondary:
    "bg-white text-brand-primary border border-brand-primary/30 hover:bg-background-soft",
  inverse:
    "bg-white text-brand-primary hover:bg-white/90",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
