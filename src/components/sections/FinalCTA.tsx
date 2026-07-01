"use client";

import { Button } from "@/components/ui/Button";
import { CTAS, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-x-clip py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb glow-orb-primary left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 sm:h-[600px] sm:w-[600px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(14_100%_50%/0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Tu box merece una plataforma a la altura de su comunidad.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
        >
          Solicita acceso promocional a ATHRON Elite y prueba durante 30 días
          cómo sería operar tu box con una plataforma profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={SITE.whatsappPromoUrl} size="lg">
            {CTAS.primary}
          </Button>
          <Button href={SITE.whatsappPromoUrl} variant="secondary" size="lg">
            {CTAS.secondary}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
