"use client";

import {
  AthleteDashboard,
  CoachDashboard,
  OwnerDashboard,
} from "@/components/mockups/DashboardMockup";
import { MacBookFrame } from "@/components/mockups/MacBookFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const personas = [
  {
    role: "Dueño del Box",
    description:
      "Visión completa de tu negocio. Métricas, ingresos y control total desde un solo lugar.",
    component: OwnerDashboard,
    accent: "from-orange-600/10 to-transparent",
  },
  {
    role: "Coach",
    description:
      "Gestiona clases, registra asistencia y da seguimiento a cada atleta sin complicaciones.",
    component: CoachDashboard,
    accent: "from-orange-500/10 to-transparent",
  },
  {
    role: "Atleta",
    description:
      "Reserva clases, consulta tu ranking y visualiza tu progreso desde cualquier dispositivo.",
    component: AthleteDashboard,
    accent: "from-orange-400/10 to-transparent",
  },
];

export function Personas() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¿Quién usa ATHRON?
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <GlassCard className="overflow-hidden">
                <div
                  className={`bg-gradient-to-b ${persona.accent} p-6 pb-0`}
                >
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {persona.role}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {persona.description}
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <MacBookFrame className="scale-[0.95]">
                    {(() => {
                      const View = persona.component;
                      return <View />;
                    })()}
                  </MacBookFrame>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
