"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const securityPoints = [
  {
    title: "Multi-Box SaaS",
    description:
      "ATHRON fue desarrollado como una plataforma SaaS Multi-Box. Cada box mantiene sus datos completamente aislados.",
  },
  {
    title: "Roles seguros",
    description:
      "Permisos granulares para dueños, administradores, coaches y atletas. Cada rol accede solo a lo que necesita.",
  },
  {
    title: "Infraestructura escalable",
    description:
      "Arquitectura en la nube preparada para crecer contigo, desde un box hasta múltiples ubicaciones.",
  },
  {
    title: "Panel Super Admin",
    description:
      "Control centralizado para gestionar múltiples boxes con total independencia de datos.",
  },
];

export function Security() {
  return (
    <SectionWrapper id="seguridad">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Seguridad
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cada box trabaja de forma completamente independiente.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {securityPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard hover className="h-full p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <svg
                    className="h-5 w-5 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
