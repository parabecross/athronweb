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
        "relative mx-auto w-full min-w-0",
        isIphone ? "max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]" : "max-w-[210px] sm:max-w-[250px] lg:max-w-[270px]",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60",
          isIphone ? "rounded-[2rem] p-2 sm:rounded-[2.5rem] sm:p-3" : "rounded-[1.5rem] p-2 sm:rounded-[1.75rem]"
        )}
      >
        {isIphone && (
          <div className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-6 sm:w-24" />
        )}
        <div
          className={cn(
            "overflow-hidden bg-[#0a0a0a]",
            isIphone ? "rounded-[1.5rem] sm:rounded-[2rem]" : "rounded-[1.25rem] sm:rounded-[1.5rem]"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
