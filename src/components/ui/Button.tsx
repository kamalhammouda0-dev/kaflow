import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-flow text-white shadow-lg shadow-accent-blue/20 hover:shadow-xl hover:shadow-accent-violet/30 hover:-translate-y-0.5",
        variant === "secondary" &&
          "border border-border bg-surface text-foreground hover:border-foreground/30 hover:-translate-y-0.5",
        variant === "dark" &&
          "bg-white text-dark-bg hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-violet/20",
        className
      )}
    >
      {children}
    </Link>
  );
}
