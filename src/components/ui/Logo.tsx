import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  variant?: "mark" | "wordmark" | "full";
  className?: string;
  priority?: boolean;
}

function LogoMark({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <div
      className={cn(
        "relative h-9 w-9 shrink-0 overflow-hidden rounded-lg",
        className
      )}
    >
      <Image
        src="/logo-full.png"
        alt=""
        width={200}
        height={200}
        priority={priority}
        aria-hidden
        className="absolute left-1/2 top-0 h-[220%] w-[220%] max-w-none -translate-x-1/2 object-cover object-top"
      />
    </div>
  );
}

export function Logo({ variant = "wordmark", className, priority = false }: LogoProps) {
  if (variant === "mark") {
    return <LogoMark className={className} priority={priority} />;
  }

  if (variant === "full") {
    return (
      <Image
        src="/logo-full.png"
        alt="ATHRON — Train. Track. Progress."
        width={320}
        height={320}
        priority={priority}
        className={cn("h-auto w-44 sm:w-52", className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark priority={priority} />
      <span className="text-lg font-semibold tracking-[0.12em] text-foreground">
        ATHRON
      </span>
    </div>
  );
}
