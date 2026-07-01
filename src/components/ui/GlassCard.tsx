import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        hover && "transition-all duration-500 hover:bg-white/[0.06] hover:border-white/15",
        className
      )}
    >
      {children}
    </div>
  );
}
