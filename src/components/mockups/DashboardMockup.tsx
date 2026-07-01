"use client";

import { Logo } from "@/components/ui/Logo";
import { FLOATING_CARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const icons: Record<string, React.ReactNode> = {
  calendar: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  card: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  trophy: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-2.25 3.502" />
    </svg>
  ),
  check: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chart: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

const positions = [
  "top-8 -left-16",
  "top-24 -right-12",
  "bottom-32 -left-20",
  "bottom-16 -right-16",
  "top-1/2 -right-24",
];

function DashboardUI() {
  return (
    <div className="flex min-h-[360px] min-w-0 text-[11px] sm:min-h-[420px]">
      {/* Sidebar */}
      <aside className="hidden w-44 shrink-0 border-r border-white/5 bg-card p-4 sm:block">
        <div className="mb-6 flex items-center gap-2">
          <Logo variant="mark" className="h-7 w-7" />
          <span className="font-semibold tracking-wide text-white">ATHRON</span>
        </div>
        <nav className="space-y-1">
          {["Dashboard", "Clases", "Reservas", "Atletas", "Membresías", "Ranking"].map(
            (item, i) => (
              <div
                key={item}
                className={cn(
                  "rounded-lg px-3 py-2 text-muted-foreground transition-colors",
                  i === 0 && "bg-primary/10 text-primary"
                )}
              >
                {item}
              </div>
            )
          )}
        </nav>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1 overflow-hidden p-4 sm:p-5">
        <div className="mb-5 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-zinc-500">Buenos días</p>
            <h3 className="truncate text-base font-semibold text-white">CrossFit Centro</h3>
          </div>
          <div className="w-fit shrink-0 rounded-full bg-orange-500/10 px-3 py-1 text-[10px] text-orange-400">
            12 clases hoy
          </div>
        </div>

        {/* Stats row */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { label: "Atletas activos", value: "47", change: "+3" },
            { label: "Asistencia hoy", value: "89%", change: "+5%" },
            { label: "Reservas", value: "156", change: "Esta semana" },
            { label: "Membresías", value: "42", change: "Activas" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
            >
              <p className="text-zinc-500">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
              <p className="text-[10px] text-green-400">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="grid gap-3 lg:grid-cols-5">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:col-span-3">
            <p className="mb-3 font-medium text-white">Asistencia semanal</p>
            <div className="flex h-28 items-end gap-2">
              {[65, 78, 82, 71, 89, 45, 92].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm bg-gradient-to-t from-orange-700/50 to-orange-400/90"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[9px] text-zinc-600">
                    {["L", "M", "X", "J", "V", "S", "D"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:col-span-2">
            <p className="mb-3 font-medium text-white">Próximas clases</p>
            <div className="space-y-2">
              {[
                { time: "07:00", name: "WOD AM", spots: "18/20" },
                { time: "09:00", name: "Open Gym", spots: "8/15" },
                { time: "17:30", name: "WOD PM", spots: "20/20" },
              ].map((cls) => (
                <div
                  key={cls.time}
                  className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                >
                  <div>
                    <span className="text-zinc-500">{cls.time}</span>
                    <span className="ml-2 text-white">{cls.name}</span>
                  </div>
                  <span className="text-zinc-500">{cls.spots}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-glow-primary-lg">
        <DashboardUI />
      </div>

      {/* Floating cards */}
      {FLOATING_CARDS.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + card.delay, duration: 0.6 }}
          className={cn(
            "absolute z-10 hidden lg:block",
            positions[i]
          )}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            }}
            className="glass-strong flex items-center gap-2.5 rounded-xl px-4 py-3 shadow-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icons[card.icon]}
            </div>
            <span className="text-sm font-medium text-white">{card.label}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function OwnerDashboard() {
  return (
    <div className="min-h-[320px] p-4 text-[10px]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold text-white">Dashboard Ejecutivo</span>
        <span className="text-zinc-500">Mar 2026</span>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
          { label: "Ingresos", value: "$48,200" },
          { label: "Retención", value: "94%" },
          { label: "Nuevos", value: "12" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <p className="text-zinc-500">{s.label}</p>
            <p className="text-sm font-semibold text-white">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
        <p className="mb-2 text-zinc-400">Métricas del mes</p>
        <div className="flex h-20 items-end gap-1">
          {[40, 55, 48, 72, 65, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-orange-700/40 to-orange-400/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CoachDashboard() {
  return (
    <div className="min-h-[320px] p-4 text-[10px]">
      <div className="mb-4">
        <span className="font-semibold text-white">Clase de hoy</span>
        <p className="text-zinc-500">WOD — 17:30 · 20 atletas</p>
      </div>
      <div className="mb-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
        <p className="mb-1 font-medium text-white">For Time</p>
        <p className="text-zinc-400">21-15-9 Thrusters · Pull-ups</p>
      </div>
      <p className="mb-2 text-zinc-500">Asistencia</p>
      <div className="space-y-1.5">
        {["Ana G.", "Carlos M.", "Diego R.", "Elena V.", "Fernando L."].map(
          (name, i) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5"
            >
              <span className="text-white">{name}</span>
              <div
                className={cn(
                  "h-4 w-4 rounded-full border",
                  i < 4
                    ? "border-green-500/50 bg-green-500/20"
                    : "border-zinc-600"
                )}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function AthleteDashboard() {
  return (
    <div className="min-h-[320px] p-4 text-[10px]">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-sm font-bold text-white">
          JM
        </div>
        <div>
          <p className="font-semibold text-white">Juan Martínez</p>
          <p className="text-zinc-500">Membresía Elite</p>
        </div>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center">
          <p className="text-lg font-bold text-white">#4</p>
          <p className="text-zinc-500">Ranking</p>
        </div>
        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center">
          <p className="text-lg font-bold text-white">87</p>
          <p className="text-zinc-500">Clases</p>
        </div>
      </div>
      <p className="mb-2 text-zinc-500">Reservar clase</p>
      <div className="space-y-1.5">
        {[
          { time: "07:00", name: "WOD AM", available: true },
          { time: "09:00", name: "Open Gym", available: true },
          { time: "17:30", name: "WOD PM", available: false },
        ].map((cls) => (
          <div
            key={cls.time}
            className={cn(
              "flex items-center justify-between rounded-md px-2 py-2",
              cls.available ? "bg-primary/10" : "bg-white/[0.02] opacity-50"
            )}
          >
            <div>
              <span className="text-white">{cls.time}</span>
              <span className="ml-2 text-zinc-400">{cls.name}</span>
            </div>
            {cls.available && (
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[9px] text-orange-400">
                Reservar
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PWAScreen() {
  return (
    <div className="min-h-[420px] p-3 text-[11px] sm:p-4">
      <div className="mb-6 flex flex-col items-center pt-8 text-center">
        <Logo variant="mark" className="mb-3 h-14 w-14 rounded-2xl" />
        <p className="font-semibold tracking-wide text-white">ATHRON</p>
        <p className="text-muted-foreground">CrossFit Centro</p>
      </div>
      <div className="space-y-2">
        {["Reservar clase", "Mi perfil", "Ranking", "Progreso"].map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3",
              i === 0 ? "brand-gradient text-white" : "bg-white/[0.05] text-white"
            )}
          >
            <div className="h-2 w-2 rounded-full bg-current opacity-40" />
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-3">
        <p className="text-zinc-500">Próxima clase</p>
        <p className="mt-1 font-medium text-white">WOD — Hoy 17:30</p>
      </div>
    </div>
  );
}
