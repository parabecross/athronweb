"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ECOSYSTEM } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export function Ecosystem() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <SectionWrapper id="ecosistema" className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-orange-400/90 uppercase">
            El Ecosistema ATHRON
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Todo tu box, conectado en una sola plataforma.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Cada persona tiene exactamente las herramientas que necesita.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto mb-16 flex w-fit flex-col items-center"
          >
            <div className="glass-strong glow-primary relative rounded-2xl px-10 py-6 text-center shadow-glow-primary-lg">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent" />
              <p className="relative text-2xl font-bold tracking-tight text-white">
                {ECOSYSTEM.center.label}
              </p>
              <p className="relative mt-1 text-sm text-zinc-400">
                {ECOSYSTEM.center.sub}
              </p>
            </div>

            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-px bg-gradient-to-b from-orange-500/50 to-white/10"
            />
          </motion.div>

          {/* Connection lines (desktop) */}
          <svg
            className="pointer-events-none absolute top-[140px] left-1/2 hidden h-16 w-full max-w-3xl -translate-x-1/2 lg:block"
            viewBox="0 0 800 60"
            fill="none"
          >
            <motion.path
              d="M400 0 L400 30 L133 30 L133 60"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.path
              d="M400 0 L400 30 L400 30 L400 60"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.path
              d="M400 0 L400 30 L667 30 L667 60"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#f97316" stopOpacity="0.6" />
                <stop offset="1" stopColor="#ef4444" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Role columns */}
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {ECOSYSTEM.roles.map((role, roleIndex) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + roleIndex * 0.15 }}
              >
                <GlassCard className="p-6" hover>
                  <div className="mb-6 text-center">
                    <div
                      className={cn(
                        "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold",
                        role.id === "owner" && "bg-orange-600/10 text-orange-400",
                        role.id === "coach" && "bg-orange-500/10 text-orange-400",
                        role.id === "athlete" && "bg-orange-400/10 text-orange-300"
                      )}
                    >
                      {role.label.charAt(0)}
                    </div>
                    <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
                      {role.label}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {role.modules.map((mod) => {
                      const key = `${role.id}-${mod.name}`;
                      const isActive = activeModule === key;

                      return (
                        <div
                          key={mod.name}
                          className="relative"
                          onMouseEnter={() => setActiveModule(key)}
                          onMouseLeave={() => setActiveModule(null)}
                        >
                          <div
                            className={cn(
                              "cursor-default rounded-xl px-4 py-3 text-sm transition-all duration-300",
                              isActive
                                ? "bg-primary/10 text-white ring-1 ring-primary/20"
                                : "text-muted-foreground hover:bg-white/[0.04] hover:text-zinc-200"
                            )}
                          >
                            {mod.name}
                          </div>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute left-0 right-0 top-full z-20 mt-1 rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-xs text-zinc-400 shadow-xl"
                            >
                              {mod.desc}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
