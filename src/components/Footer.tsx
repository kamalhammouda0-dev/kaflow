import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { SITE } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-flow py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg">
              <LogoMark className="h-9 w-9" />
              <span>
                KA <span className="text-gradient">Flow</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Websites op maat en AI-agents voor ZZP&apos;ers en MKB.
              Gevestigd in Heteren, Gelderland, actief in heel Nederland.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold text-sm mb-4">Navigatie</p>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/diensten" className="hover:text-foreground transition-colors">Diensten</Link></li>
              <li><Link href="/gratis-scan" className="hover:text-foreground transition-colors">Gratis Scan</Link></li>
              <li><Link href="/over-ons" className="hover:text-foreground transition-colors">Over ons</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-sm mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:Kamalhammouda0@gmail.com" className="hover:text-foreground transition-colors">
                  Kamalhammouda0@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Heteren, Gelderland
              </li>
            </ul>
            <Link
              href="/gratis-scan"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gradient"
            >
              Vraag een gratis scan aan
              <ArrowUpRight className="h-3.5 w-3.5 text-accent-violet" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} KA Flow. Alle rechten voorbehouden. KvK: {SITE.kvk}</p>
          <p>Actief in heel Nederland.</p>
        </div>
      </div>
    </footer>
  );
}
