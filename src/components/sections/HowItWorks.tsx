"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTAS, HOW_IT_WORKS, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Proceso
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            De la solicitud a tu box funcionando.
          </h2>
        </div>

        <div className="space-y-0">
          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="absolute left-5 top-12 h-[calc(100%-2rem)] w-px bg-white/10" />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-mono text-primary">
                {item.step}
              </div>
              <div className="pt-1">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button href={SITE.whatsappPromoUrl} size="lg">
            {CTAS.primary}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
