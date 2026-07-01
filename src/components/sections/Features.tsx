"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";

export function Features() {
  return (
    <SectionWrapper id="funciones">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Funcionalidades
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Todo lo que tu box necesita hoy.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada función resuelve un problema real de operación diaria.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <GlassCard hover className="h-full p-5">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-medium text-white">{feature.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.benefit}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
