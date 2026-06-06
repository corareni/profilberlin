import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum – Profil Vermögensmanagement GmbH",
  description: "Impressum und rechtliche Angaben der Profil Vermögensmanagement GmbH.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <article className="bg-beige-200 px-6 py-28 md:px-14">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-block text-[9px] font-semibold uppercase tracking-nav text-forest-600 transition-colors hover:text-forest-800"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="section-heading mb-12 text-[clamp(2rem,3vw,2.8rem)] text-forest-800">
          Impressum
        </h1>

        <div className="space-y-8 body-text-dark">
          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {COMPANY.name}
              <br />
              {COMPANY.address}
              <br />
              {COMPANY.city}
            </p>
            <p className="mt-4">
              Geschäftsführer: {COMPANY.manager}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-forest-600 hover:text-forest-800">
                {COMPANY.email}
              </a>
              <br />
              Website: {COMPANY.website}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Registereintrag
            </h2>
            <p>
              Eingetragen im Handelsregister
              <br />
              Registergericht: Amtsgericht Berlin-Charlottenburg
              <br />
              [Handelsregisternummer eintragen]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Aufsichtsbehörde
            </h2>
            <p>
              Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)
              <br />
              Graurheindorfer Str. 108, 53117 Bonn
              <br />
              <a
                href="https://www.bafin.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-600 hover:text-forest-800"
              >
                www.bafin.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Umsatzsteuer-ID
            </h2>
            <p>[USt-IdNr. eintragen]</p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Haftungshinweis
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-600 hover:text-forest-800"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
