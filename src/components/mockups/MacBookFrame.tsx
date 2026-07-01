"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface MacBookFrameProps {
  children: ReactNode;
  className?: string;
}

export function MacBookFrame({ children, className }: MacBookFrameProps) {
  return (
    <div className={cn("relative mx-auto w-full min-w-0 max-w-4xl overflow-hidden", className)}>
      <div className="rounded-t-xl bg-zinc-800 p-1.5 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500/80" />
          <div className="ml-2 min-w-0 flex-1 truncate rounded-md bg-zinc-900/80 px-3 py-1 text-[10px] text-zinc-500">
            app.athron.mx
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-[#0c0c0c]">{children}</div>
      </div>
      <div className="mx-auto mt-0 h-3 w-[92%] max-w-full rounded-b-xl bg-zinc-700" />
      <div className="mx-auto mt-0.5 h-1 w-24 max-w-[40%] rounded-full bg-zinc-600" />
    </div>
  );
}
