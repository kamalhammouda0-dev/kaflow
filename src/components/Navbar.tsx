"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/LogoMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/gratis-scan", label: "Gratis Scan" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <nav
        className={cn(
          "mx-auto flex h-16 max-w-5xl items-center justify-between rounded-2xl px-4 transition-all duration-300 md:px-6",
          scrolled
            ? "border border-border bg-background/95 shadow-lg shadow-black/[0.04] backdrop-blur-md"
            : "border border-transparent bg-background/40 backdrop-blur-sm"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight">
          <LogoMark className="h-9 w-9" />
          <span>
            KA <span className="text-gradient">Flow</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative py-1 transition-colors hover:text-foreground",
                  pathname === link.href ? "text-foreground" : "text-muted"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-flow rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/gratis-scan"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-flow px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-blue/20 transition-transform hover:scale-[1.03]"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Gratis scan
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-4 p-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-foreground" : "text-muted"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/gratis-scan"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-flow px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Gratis scan aanvragen
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
