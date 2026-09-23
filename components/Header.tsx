import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="UDY Healthcare — Home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="/contact" variant="primary">
            Enquire Now
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
