"use client";

import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { HERO_CHECKS, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="glow-orb glow-orb-primary -left-40 top-20 h-[600px] w-[600px]" />
      <div className="glow-orb glow-orb-accent -right-40 top-1/3 h-[500px] w-[500px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(14_100%_50%/0.08),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-6 text-sm font-medium tracking-widest text-primary uppercase">
              {SITE.name}
            </p>
            <h1 className="mb-8 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              La plataforma que conecta todo tu{" "}
              <span className="brand-text">box.</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              ATHRON centraliza toda la operación de tu box para que puedas
              enfocarte en lo más importante: entrenar, hacer crecer tu
              comunidad y tomar mejores decisiones.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <Button href={SITE.whatsappUrl} size="lg">
                Solicitar Demo
              </Button>
              <Button href="#planes" variant="secondary" size="lg">
                Ver Planes
              </Button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
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
          className="relative lg:pl-8"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
