import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";
import Link from "next/link";

const footerLinks = [
  { label: "Inicio", href: "#" },
  { label: "Funciones", href: "#funciones" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Logo variant="full" className="mb-5 w-36" />
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              {SITE.tagline}
            </p>
            <div className="mb-6 flex gap-4 text-sm">
              {SITE.motto.map((word, i) => (
                <span
                  key={word}
                  className={
                    i === 2 ? "brand-text font-medium" : "text-muted-foreground"
                  }
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/70">
              Diseñado para boxes de CrossFit y entrenamiento funcional.
            </p>
          </div>

          <div className="lg:col-span-5">
            <nav>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
                {footerLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/5 pt-8">
          <p className="text-xs text-muted-foreground/60">
            {SITE.email} · {SITE.instagram}
          </p>
          <p className="text-xs text-muted-foreground/60">{SITE.domain}</p>
          <p className="text-xs text-muted-foreground/70">
            © {SITE.name} 2026. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
