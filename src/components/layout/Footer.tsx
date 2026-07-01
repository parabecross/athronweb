import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";
import Link from "next/link";

const footerLinks = [
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Funciones", href: "#funciones" },
  { label: "Planes", href: "#planes" },
  { label: "Seguridad", href: "#seguridad" },
];

const contactLinks = [
  {
    label: "WhatsApp",
    value: SITE.whatsapp,
    href: SITE.whatsappUrl,
    external: true,
  },
  {
    label: "Correo",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    label: "Instagram",
    value: SITE.instagram,
    href: SITE.instagramUrl,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo variant="full" className="mb-5 w-36" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Producto
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Contacto
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="text-xs text-muted-foreground/60">
                      {item.label}
                    </span>
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground/70">
            © {SITE.name} 2026 · Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#planes"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Ver Planes
            </Link>
            <Link
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
