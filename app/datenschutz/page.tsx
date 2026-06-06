import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Profil Vermögensmanagement GmbH",
  description:
    "Datenschutzerklärung der Profil Vermögensmanagement GmbH gemäß DSGVO.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 body-text-dark">
          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              {COMPANY.manager}
              <br />
              {COMPANY.name}
              <br />
              {COMPANY.address}
              <br />
              {COMPANY.city}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-forest-600 hover:text-forest-800">
                {COMPANY.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Wir erheben und verarbeiten personenbezogene Daten nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie
              unserer Inhalte und Leistungen erforderlich ist. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung bzw. vorvertragliche Maßnahmen) sowie Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren
              Bereitstellung unserer Website).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular (Vorname, Nachname, E-Mail-Adresse,
              Telefonnummer, Thema, Nachricht) zur Bearbeitung der Anfrage und
              für den Fall von Anschlussfragen bei uns gespeichert. Die
              Übermittlung erfolgt über den Dienst Formspree (Formspree Inc.,
              USA). Die Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden
              gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung
              nicht mehr erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten
              personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung
              unrichtiger Daten (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO),
              auf Einschränkung der Verarbeitung (Art. 18 DSGVO), auf
              Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch gegen
              die Verarbeitung (Art. 21 DSGVO). Zur Ausübung Ihrer Rechte
              wenden Sie sich bitte an{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-forest-600 hover:text-forest-800">
                {COMPANY.email}
              </a>
              .
            </p>
            <p className="mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden keine
              personenbezogenen Daten zu Marketing- oder Analysezwecken durch
              Cookies erhoben.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              6. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf
              der Website werden automatisch Informationen (z. B. IP-Adresse,
              Browsertyp, Uhrzeit des Zugriffs) in Server-Logfiles gespeichert.
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-600 hover:text-forest-800"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
              7. Kontakt für Datenschutzanfragen
            </h2>
            <p>
              Bei Fragen zum Datenschutz erreichen Sie uns unter:{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-forest-600 hover:text-forest-800">
                {COMPANY.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
