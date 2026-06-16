import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GradientCard({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-3xl bg-gradient-to-br from-border via-border to-border p-px transition-all duration-500 hover:from-accent-blue hover:via-accent-violet/60 hover:to-accent-violet",
        className
      )}
    >
      <div className={cn("h-full rounded-[calc(1.5rem-1px)] bg-surface p-8", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
