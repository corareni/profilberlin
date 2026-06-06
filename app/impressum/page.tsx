import type { Metadata } from "next";
import LegalPageLayout, { LegalSection, Placeholder } from "@/components/LegalPageLayout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum – Profil Vermögensmanagement GmbH",
  description: "Impressum und rechtliche Angaben der Profil Vermögensmanagement GmbH gemäß § 5 DDG.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <p className="body-text-dark">
        Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
      </p>

      <LegalSection title="Anbieter">
        <p>
          {COMPANY.name}
          <br />
          {COMPANY.address}
          <br />
          {COMPANY.city}
          <br />
          Deutschland
        </p>
        <p>
          Vertreten durch den Geschäftsführer:
          <br />
          {COMPANY.manager}
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon: <Placeholder>[BITTE EINTRAGEN — Telefonnummer ist nach § 5 DDG faktisch Pflicht für schnelle Kontaktaufnahme]</Placeholder>
          <br />
          E-Mail:{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-semibold text-forest-700 underline hover:text-forest-900">
            {COMPANY.email}
          </a>
          <br />
          Website: {COMPANY.website}
        </p>
      </LegalSection>

      <LegalSection title="Registereintrag">
        <p>
          Eingetragen im Handelsregister
          <br />
          Registergericht: Amtsgericht Charlottenburg (Berlin)
          <br />
          Registernummer: HRB <Placeholder>[BITTE EINTRAGEN]</Placeholder>
        </p>
      </LegalSection>

      <LegalSection title="Umsatzsteuer-Identifikationsnummer">
        <p>
          gemäß § 27a Umsatzsteuergesetz:
          <br />
          DE <Placeholder>[BITTE EINTRAGEN]</Placeholder>
        </p>
      </LegalSection>

      <LegalSection title="Wirtschafts-Identifikationsnummer">
        <p>
          gemäß § 139c Abgabenordnung:
          <br />
          <Placeholder>[Falls bereits zugeteilt — sonst weglassen]</Placeholder>
        </p>
      </LegalSection>

      <LegalSection title="Zuständige Aufsichtsbehörde">
        <p>
          Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)
          <br />
          Graurheindorfer Straße 108
          <br />
          53117 Bonn
          <br />
          Telefon: +49 (0)228 / 4108-0
          <br />
          E-Mail: poststelle@bafin.de
          <br />
          Internet:{" "}
          <a href="https://www.bafin.de" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            www.bafin.de
          </a>
        </p>
      </LegalSection>

      <LegalSection title="BaFin-Institutsnummer / Erlaubnis">
        <p>
          <Placeholder>[BITTE EINTRAGEN — Ihre BaFin-Institutsnummer]</Placeholder>
          <br />
          Erlaubnis nach § 15 Wertpapierinstitutsgesetz (WpIG) bzw. § 32 Kreditwesengesetz (KWG)
          zur Erbringung der Finanzportfolioverwaltung und Anlageberatung.
        </p>
      </LegalSection>

      <LegalSection title="Berufsrechtliche Regelungen">
        <ul className="list-disc space-y-2 pl-5">
          <li>Wertpapierinstitutsgesetz (WpIG)</li>
          <li>Kreditwesengesetz (KWG)</li>
          <li>Wertpapierhandelsgesetz (WpHG)</li>
          <li>Geldwäschegesetz (GwG)</li>
        </ul>
        <p>
          Einsehbar unter:{" "}
          <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            www.gesetze-im-internet.de
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Berufsbezeichnung">
        <p>Wertpapierinstitut (verliehen in der Bundesrepublik Deutschland)</p>
      </LegalSection>

      <LegalSection title="Berufshaftpflichtversicherung">
        <p>
          <Placeholder>[BITTE EINTRAGEN — Name und Anschrift des Versicherers]</Placeholder>
          <br />
          Geltungsbereich: Deutschland / Europa
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind gesetzlich verpflichtet, an Streitbeilegungsverfahren der
          Schlichtungsstelle bei der Bundesanstalt für Finanzdienstleistungsaufsicht
          (BaFin) teilzunehmen.
        </p>
        <p>
          Schlichtungsstelle bei der BaFin
          <br />
          Bundesanstalt für Finanzdienstleistungsaufsicht
          <br />
          Referat ZR 3
          <br />
          Graurheindorfer Straße 108
          <br />
          53117 Bonn
          <br />
          Internet:{" "}
          <a href="https://www.bafin.de/schlichtungsstelle" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            www.bafin.de/schlichtungsstelle
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Hinweis zur Online-Streitbeilegung (Art. 14 ODR-VO)">
        <p>
          Die EU-Kommission hat eine Plattform zur Online-Streitbeilegung (OS)
          unter{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            https://ec.europa.eu/consumers/odr/
          </a>{" "}
          bereitgestellt.
        </p>
        <p className="text-[13px] text-ink/80">
          (Anmerkung: Die OS-Verlinkungspflicht wurde 2025 abgeschafft, der
          Hinweis ist jedoch weiterhin unschädlich und teilweise üblich.)
        </p>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          {COMPANY.manager}
          <br />
          {COMPANY.address}
          <br />
          {COMPANY.city}
        </p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss — Inhalt des Onlineangebotes">
        <p>
          Wir übernehmen keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit
          oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen
          die {COMPANY.name}, welche sich auf Schäden materieller oder ideeller Art
          beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen
          Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern
          unsererseits kein nachweislich vorsätzliches oder grob fahrlässiges
          Verschulden vorliegt.
        </p>
        <p>
          Die Informationen auf dieser Website stellen weder eine individuelle
          Anlageberatung noch ein Angebot zum Kauf oder Verkauf von
          Finanzinstrumenten dar.
        </p>
      </LegalSection>

      <LegalSection title="Verweise und Links">
        <p>
          Bei direkten oder indirekten Verweisen auf fremde Webseiten („Links“), die
          außerhalb unseres Verantwortungsbereiches liegen, würde eine
          Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem
          wir von den Inhalten Kenntnis haben und es uns technisch möglich und
          zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
        </p>
      </LegalSection>

      <LegalSection title="Urheber- und Kennzeichenrecht">
        <p>
          Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
          geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
          Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten
          der jeweiligen eingetragenen Eigentümer. Das Copyright für veröffentlichte,
          von uns selbst erstellte Inhalte bleibt allein bei der {COMPANY.name}.
        </p>
      </LegalSection>

      <p className="text-[13px] font-medium text-ink/80">
        Stand: <Placeholder>[Monat Jahr]</Placeholder>
      </p>
    </LegalPageLayout>
  );
}
