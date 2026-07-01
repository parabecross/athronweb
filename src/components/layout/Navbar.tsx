"use client";

import { Logo } from "@/components/ui/Logo";
import { CTAS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Funciones", href: "#funciones" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="group min-w-0 shrink transition-opacity duration-300 hover:opacity-90">
          <Logo variant="wordmark" priority />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#planes"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-white"
          >
            {CTAS.plans}
          </Link>
          <Link
            href={SITE.whatsappPromoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient glow-primary rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
          >
            {CTAS.primary}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menú"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={SITE.whatsappPromoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-medium text-white"
            >
              {CTAS.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
