import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo/udy-healthcare-logo.webp"
      alt="UDY Healthcare"
      width={928}
      height={363}
      priority
      className={`h-9 w-auto ${className}`}
    />
  );
}
