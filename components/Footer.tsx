import Link from "next/link";
import ProfilLogo from "./ProfilLogo";
import { COMPANY, FOOTER_SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-beige-200/20 bg-forest-900 px-6 py-16 md:px-14">
      <div className="grid grid-cols-1 gap-10 border-b border-beige-200/20 pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
        <div>
          <ProfilLogo variant="full" theme="light" size="sm" className="mb-5" />
          <p className="max-w-[300px] text-[13px] font-normal leading-[1.75] tracking-normal text-beige-200/90">
            Unabhängige Vermögensverwaltung für private und institutionelle
            Anleger. Seit {COMPANY.founded} in Berlin.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-beige-100">
            Navigation
          </h3>
          <nav className="flex flex-col gap-2.5" aria-label="Footer-Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="text-[13px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
            >
              Kontakt
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-beige-100">
            Leistungen
          </h3>
          <nav className="flex flex-col gap-2.5" aria-label="Leistungen">
            {FOOTER_SERVICES.map((service) => (
              <Link
                key={service}
                href="#leistungen"
                className="text-[13px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
              >
                {service}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-beige-100">
            Kontakt
          </h3>
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] font-normal tracking-normal text-beige-200/90">
              {COMPANY.address}
            </span>
            <span className="text-[13px] font-normal tracking-normal text-beige-200/90">
              {COMPANY.city}
            </span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-[13px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
            >
              {COMPANY.email}
            </a>
            <Link
              href="#kontakt"
              className="text-[13px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
        <p className="text-[12px] font-normal tracking-normal text-beige-200/85">
          © 2024 {COMPANY.name} · Alle Rechte vorbehalten
        </p>
        <nav className="flex gap-8" aria-label="Rechtliches">
          <Link
            href="/impressum"
            className="text-[12px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-[12px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
          >
            Datenschutz
          </Link>
          <Link
            href="/agb"
            className="text-[12px] font-normal tracking-normal text-beige-200/90 transition-colors hover:text-beige-100"
          >
            AGB
          </Link>
        </nav>
        <p className="text-right text-[12px] font-normal tracking-normal text-beige-200/85 md:text-right">
          Zugelassener Finanzportfolioverwalter · BaFin-reguliert
        </p>
      </div>
    </footer>
  );
}
