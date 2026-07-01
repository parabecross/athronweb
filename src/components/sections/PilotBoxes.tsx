"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTAS, PILOT_CARDS, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function PilotBoxes() {
  return (
    <SectionWrapper id="piloto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
            Programa piloto
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Estamos abriendo ATHRON a solo 5 boxes piloto.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Durante esta etapa, los boxes seleccionados reciben acceso
            promocional a ATHRON Elite por 30 días, configuración inicial y
            acompañamiento para probar la plataforma en operación real.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILOT_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard hover className="h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-mono text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href={SITE.whatsappPromoUrl} size="lg">
            {CTAS.pilot}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
