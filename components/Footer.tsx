import Link from "next/link";
import LogoMark from "./LogoMark";
import { COMPANY, FOOTER_SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-beige-200/5 bg-forest-900 px-6 py-16 md:px-14">
      <div className="grid grid-cols-1 gap-10 border-b border-beige-200/5 pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
        <div>
          <LogoMark size="sm" dark showText className="mb-5" />
          <p className="max-w-[280px] text-[11px] font-light leading-[1.9] tracking-wide text-beige-200/20">
            Unabhängige Vermögensverwaltung für private und institutionelle
            Anleger. Seit {COMPANY.founded} in Berlin.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-[8px] font-bold uppercase tracking-[0.3em] text-beige-200/30">
            Navigation
          </h3>
          <nav className="flex flex-col gap-2.5" aria-label="Footer-Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/60"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="text-[11px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/60"
            >
              Kontakt
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-[8px] font-bold uppercase tracking-[0.3em] text-beige-200/30">
            Leistungen
          </h3>
          <nav className="flex flex-col gap-2.5" aria-label="Leistungen">
            {FOOTER_SERVICES.map((service) => (
              <Link
                key={service}
                href="#leistungen"
                className="text-[11px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/60"
              >
                {service}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-[8px] font-bold uppercase tracking-[0.3em] text-beige-200/30">
            Kontakt
          </h3>
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-light tracking-wide text-beige-200/20">
              {COMPANY.address}
            </span>
            <span className="text-[11px] font-light tracking-wide text-beige-200/20">
              {COMPANY.city}
            </span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-[11px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/60"
            >
              {COMPANY.email}
            </a>
            <Link
              href="#kontakt"
              className="text-[11px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/60"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
        <p className="text-[9px] font-light tracking-wide text-beige-200/15">
          © 2024 {COMPANY.name} · Alle Rechte vorbehalten
        </p>
        <nav className="flex gap-8" aria-label="Rechtliches">
          <Link
            href="/impressum"
            className="text-[9px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/50"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-[9px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/50"
          >
            Datenschutz
          </Link>
          <Link
            href="#"
            className="text-[9px] font-light tracking-wide text-beige-200/20 transition-colors hover:text-beige-200/50"
          >
            AGB
          </Link>
        </nav>
        <p className="text-right text-[9px] font-light tracking-wide text-beige-200/10 md:text-right">
          Zugelassener Finanzportfolioverwalter · BaFin-reguliert
        </p>
      </div>
    </footer>
  );
}
