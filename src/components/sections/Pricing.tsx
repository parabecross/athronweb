"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTAS, PLANS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <SectionWrapper id="planes">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elige el plan ideal para tu box.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span className="brand-gradient rounded-full px-4 py-1 text-xs font-medium text-white">
                    Más elegido
                  </span>
                </div>
              )}

              <GlassCard
                className={cn(
                  "flex h-full flex-col p-8",
                  plan.popular &&
                    "border-primary/20 bg-primary/5 shadow-glow-primary-lg"
                )}
                hover
              >
                <div className="mb-8">
                  <h3 className="mb-4 text-sm font-medium tracking-widest text-zinc-400 uppercase">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-semibold tracking-tight text-white">
                      ${plan.price.toLocaleString("es-MX")}
                    </span>
                    <span className="text-zinc-500">MXN / mes</span>
                  </div>
                </div>

                <ul className="mb-6 space-y-2 border-b border-white/5 pb-6">
                  {plan.limits.map((limit) => (
                    <li
                      key={limit}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <CheckIcon />
                      {limit}
                    </li>
                  ))}
                </ul>

                <ul className="mb-8 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <CheckIcon green />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={SITE.whatsappPromoUrl}
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {CTAS.primary}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-muted-foreground"
        >
          Durante la etapa piloto puedes solicitar acceso promocional a ATHRON
          Elite por 30 días.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Button href={SITE.whatsappPromoUrl} variant="secondary">
            {CTAS.try}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function CheckIcon({ green }: { green?: boolean }) {
  return (
    <svg
      className={cn("h-4 w-4 shrink-0", green ? "text-green-500/80" : "text-zinc-500")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
