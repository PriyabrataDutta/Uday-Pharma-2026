import Image from "next/image";

export function Logo({ className = "", preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src="/images/logo/udy-healthcare-logo.webp"
      alt="UDY Healthcare"
      width={928}
      height={363}
      preload={preload}
      className={`h-9 w-auto ${className}`}
    />
  );
}
