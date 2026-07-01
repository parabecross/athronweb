import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  variant?: "mark" | "wordmark" | "full";
  className?: string;
  priority?: boolean;
}

function LogoMark({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <div className={cn("relative h-9 w-9 shrink-0", className)}>
      <Image
        src="/logo-full.png"
        alt=""
        width={200}
        height={200}
        priority={priority}
        aria-hidden
        className="h-full w-full object-contain object-center"
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
        className={cn("h-auto w-36 object-contain sm:w-44", className)}
      />
    );
  }

  return (
    <div className={cn("flex min-w-0 items-center gap-2", className)}>
      <LogoMark priority={priority} />
      <span className="truncate text-base font-semibold tracking-[0.1em] text-foreground sm:text-lg sm:tracking-[0.12em]">
        ATHRON
      </span>
    </div>
  );
}
