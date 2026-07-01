"use client";

import { PWAScreen } from "@/components/mockups/DashboardMockup";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const steps = [
  { step: "01", text: "Agregar a pantalla principal." },
  { step: "02", text: "Abrir." },
  { step: "03", text: "Listo." },
];

export function PWA() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium tracking-widest text-zinc-500 uppercase">
              ATHRON como App
            </p>
            <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tu box siempre contigo.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-400">
              No necesitas descargar nada. ATHRON puede instalarse directamente
              desde el navegador como una aplicación.
            </p>

            <div className="space-y-4">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-mono text-zinc-500">
                    {item.step}
                  </span>
                  <span className="text-zinc-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PhoneFrame variant="iphone">
                <PWAScreen />
              </PhoneFrame>
              <p className="mt-4 text-center text-xs text-zinc-500">iPhone</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <PhoneFrame variant="android">
                <PWAScreen />
              </PhoneFrame>
              <p className="mt-4 text-center text-xs text-zinc-500">Android</p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
