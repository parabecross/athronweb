"use client";

import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { CTAS, HERO_CHECKS, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-x-clip pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb glow-orb-primary -left-1/4 top-20 h-[400px] w-[400px] sm:-left-40 sm:h-[600px] sm:w-[600px]" />
        <div className="glow-orb glow-orb-accent -right-1/4 top-1/3 h-[350px] w-[350px] sm:-right-40 sm:h-[500px] sm:w-[500px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(14_100%_50%/0.08),transparent_50%)]" />

      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="min-w-0 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="text-xs font-medium tracking-wide text-primary sm:text-sm">
                Acceso promocional para 5 boxes piloto
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              La plataforma que conecta todo tu{" "}
              <span className="brand-text">box.</span>
            </h1>

            <p className="mb-4 text-sm font-medium text-orange-400/90">
              Acceso promocional ATHRON Elite · 30 días para tu box · Cupo
              limitado a 5 boxes piloto
            </p>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Solicita acceso promocional a ATHRON Elite durante 30 días y
              descubre cómo puede transformar la operación de tu box.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <Button href={SITE.whatsappPromoUrl} size="lg">
                {CTAS.primary}
              </Button>
              <Button href={SITE.whatsappPromoUrl} variant="secondary" size="lg">
                {CTAS.secondary}
              </Button>
            </div>

            <LinkPlans />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
              {HERO_CHECKS.map((check, i) => (
                <motion.div
                  key={check}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {check}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-w-0 overflow-hidden lg:pl-8"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function LinkPlans() {
  return (
    <a
      href="#planes"
      className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-white hover:underline"
    >
      {CTAS.plans}
    </a>
  );
}
