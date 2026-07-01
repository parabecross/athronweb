"use client";

import { Logo } from "@/components/ui/Logo";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROBLEMS } from "@/lib/constants";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Phase = "problems" | "clear" | "athron";

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [phase, setPhase] = useState<Phase>("problems");
  const [visibleProblems, setVisibleProblems] = useState<number[]>([]);

  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    PROBLEMS.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleProblems((prev) => [...prev, i]);
        }, i * 600)
      );
    });

    timers.push(
      setTimeout(() => setPhase("clear"), PROBLEMS.length * 600 + 1200),
      setTimeout(() => setPhase("athron"), PROBLEMS.length * 600 + 2000)
    );

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <SectionWrapper className="overflow-hidden">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-20 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Administrar un box no debería sentirse complicado.
        </h2>

        <div className="relative flex min-h-[280px] items-center justify-center">
          <AnimatePresence mode="wait">
            {phase === "problems" && (
              <motion.div
                key="problems"
                exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                {PROBLEMS.map((problem, i) => (
                  <motion.span
                    key={problem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      visibleProblems.includes(i)
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="rounded-full border border-red-500/20 bg-red-500/5 px-5 py-2.5 text-sm text-red-300/80"
                  >
                    {problem}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {phase === "clear" && (
              <motion.div
                key="clear"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-zinc-600"
              >
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              </motion.div>
            )}

            {phase === "athron" && (
              <motion.div
                key="athron"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <Logo variant="full" className="mx-auto w-36 sm:w-44" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
