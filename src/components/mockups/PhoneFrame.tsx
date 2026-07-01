"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  variant?: "iphone" | "android";
  className?: string;
}

export function PhoneFrame({
  children,
  variant = "iphone",
  className,
}: PhoneFrameProps) {
  const isIphone = variant === "iphone";

  return (
    <div
      className={cn(
        "relative mx-auto",
        isIphone ? "w-[280px]" : "w-[270px]",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60",
          isIphone ? "rounded-[2.5rem] p-3" : "rounded-[1.75rem] p-2"
        )}
      >
        {isIphone && (
          <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        )}
        <div
          className={cn(
            "overflow-hidden bg-[#0a0a0a]",
            isIphone ? "rounded-[2rem]" : "rounded-[1.5rem]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
