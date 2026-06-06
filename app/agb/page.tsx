import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AGB - Profil Vermögensmanagement GmbH",
  description:
    "Allgemeine Geschäftsbedingungen der Profil Vermögensmanagement GmbH.",
  robots: { index: true, follow: true },
};

export default function AGBPage() {
  return (
    <LegalPageLayout title="Allgemeine Geschäftsbedingungen">
      <p className="body-text-dark">
        der {COMPANY.name}
        <br />
        Stand: Juni 2026
      </p>

      <p className="rounded border border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-[1.7] text-ink/90">
        Hinweis: Diese AGB sind eine Vorlage und ersetzen keine individuelle
        Rechtsberatung. Lassen Sie die Texte vor Veröffentlichung von einem auf
        IT-/Finanzaufsichtsrecht spezialisierten Anwalt prüfen.
      </p>

      <LegalSection title="§ 1 Geltungsbereich">
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten
          für alle Geschäftsbeziehungen zwischen der {COMPANY.name},{" "}
          {COMPANY.address}, {COMPANY.city} (nachfolgend „Profil VM“) und ihren
          Mandanten (nachfolgend „Mandant“).
        </p>
        <p>
          (2) Ergänzend gelten die individuellen Vertragsvereinbarungen
          (insbesondere Vermögensverwaltungsvertrag, Anlageberatungsvertrag,
          Anlagerichtlinien). Im Falle von Widersprüchen gehen die individuellen
          Vertragsvereinbarungen diesen AGB vor.
        </p>
        <p>
          (3) Abweichende Bedingungen des Mandanten werden nur dann Vertragsbestandteil,
          wenn Profil VM ihnen ausdrücklich schriftlich zustimmt.
        </p>
      </LegalSection>

      <LegalSection title="§ 2 Aufsichtsrechtliche Stellung">
        <p>
          (1) Profil VM ist ein durch die Bundesanstalt für Finanzdienstleistungsaufsicht
          (BaFin) gemäß § 15 Wertpapierinstitutsgesetz (WpIG) zugelassenes
          Wertpapierinstitut.
        </p>
        <p>
          (2) Die Erlaubnis umfasst insbesondere die Erbringung der
          Finanzportfolioverwaltung (§ 2 Abs. 2 Satz 1 Nr. 9 WpIG) und der
          Anlageberatung (§ 2 Abs. 2 Satz 1 Nr. 4 WpIG).
        </p>
      </LegalSection>

      <LegalSection title="§ 3 Leistungen">
        <p>
          (1) Profil VM erbringt Dienstleistungen im Bereich der
          Finanzportfolioverwaltung, Anlageberatung, Vermögensplanung und
          Risikoanalyse sowie damit verbundene Dienstleistungen.
        </p>
        <p>
          (2) Konkrete Art, Umfang und Bedingungen der Leistungen werden in
          einem individuellen Vermögensverwaltungs- bzw. Anlageberatungsvertrag
          geregelt.
        </p>
        <p>
          (3) Profil VM ist berechtigt, sich zur Erbringung der Leistungen
          qualifizierter Dritter zu bedienen.
        </p>
      </LegalSection>

      <LegalSection title="§ 4 Vergütung">
        <p>
          (1) Die Vergütung erfolgt ausschließlich honorarbasiert nach den im
          jeweiligen Einzelvertrag vereinbarten Konditionen.
        </p>
        <p>
          (2) Profil VM erhält keine Provisionen oder andere geldwerte Vorteile
          von Produktanbietern (provisionsfreie Beratung).
        </p>
        <p>
          (3) Etwaige durch Dritte (z. B. Depotbank) erhobene Gebühren trägt
          der Mandant.
        </p>
      </LegalSection>

      <LegalSection title="§ 5 Pflichten des Mandanten">
        <p>
          (1) Der Mandant ist verpflichtet, Profil VM alle für die Erbringung
          der Leistung erforderlichen Informationen vollständig und wahrheitsgemäß
          zur Verfügung zu stellen, insbesondere zu seinen Kenntnissen und
          Erfahrungen, seinen finanziellen Verhältnissen und Anlagezielen
          (§ 64 WpHG).
        </p>
        <p>
          (2) Wesentliche Veränderungen seiner Lebens- oder Vermögenssituation
          sind Profil VM unverzüglich mitzuteilen.
        </p>
      </LegalSection>

      <LegalSection title="§ 6 Risikohinweise">
        <p>
          (1) Jede Form der Vermögensanlage ist mit Risiken verbunden. Insbesondere
          können Wertschwankungen und Verluste bis hin zum Totalverlust des
          eingesetzten Kapitals nicht ausgeschlossen werden.
        </p>
        <p>
          (2) Aus der vergangenen Wertentwicklung von Finanzinstrumenten kann
          nicht auf zukünftige Erträge geschlossen werden.
        </p>
        <p>
          (3) Eine detaillierte Risikoaufklärung erfolgt vor Vertragsschluss
          gemäß den aufsichtsrechtlichen Vorgaben (WpHG, DelegVO 2017/565).
        </p>
      </LegalSection>

      <LegalSection title="§ 7 Verschwiegenheit und Datenschutz">
        <p>
          (1) Profil VM verpflichtet sich, alle im Rahmen der Geschäftsbeziehung
          erlangten Kenntnisse über persönliche und geschäftliche Verhältnisse
          des Mandanten streng vertraulich zu behandeln (Bankgeheimnis und
          Berufsverschwiegenheit).
        </p>
        <p>
          (2) Die Verarbeitung personenbezogener Daten erfolgt nach Maßgabe der
          geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO.
          Einzelheiten ergeben sich aus der separaten{" "}
          <a href="/datenschutz" className="font-semibold text-forest-700 underline hover:text-forest-900">
            Datenschutzerklärung
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="§ 8 Haftung">
        <p>
          (1) Profil VM haftet uneingeschränkt für Schäden aus der Verletzung des
          Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf
          Vorsatz oder grober Fahrlässigkeit beruhen.
        </p>
        <p>
          (2) Für leicht fahrlässig verursachte Schäden haftet Profil VM nur,
          soweit eine wesentliche Vertragspflicht (Kardinalpflicht) verletzt
          wurde, und nur in Höhe des bei Vertragsschluss vorhersehbaren
          typischen Schadens.
        </p>
        <p>
          (3) Eine weitergehende Haftung ist - soweit gesetzlich zulässig -
          ausgeschlossen.
        </p>
        <p>
          (4) Die Regelungen dieses Paragraphen gelten nicht im Anwendungsbereich
          zwingender gesetzlicher Haftungsregelungen (z. B. nach dem
          Produkthaftungsgesetz).
        </p>
      </LegalSection>

      <LegalSection title="§ 9 Laufzeit und Beendigung">
        <p>
          (1) Die Laufzeit der Geschäftsbeziehung sowie etwaige Kündigungsfristen
          ergeben sich aus dem jeweiligen Einzelvertrag.
        </p>
        <p>
          (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
          bleibt für beide Parteien unberührt.
        </p>
      </LegalSection>

      <LegalSection title="§ 10 Verbraucherstreitbeilegung">
        <p>
          (1) Profil VM ist gesetzlich verpflichtet, an Streitbeilegungsverfahren
          vor der Schlichtungsstelle bei der BaFin teilzunehmen.
        </p>
        <p>
          (2) Schlichtungsstelle:
          <br />
          Schlichtungsstelle bei der Bundesanstalt für Finanzdienstleistungsaufsicht
          (BaFin), Graurheindorfer Str. 108, 53117 Bonn
          <br />
          <a href="https://www.bafin.de/schlichtungsstelle" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            www.bafin.de/schlichtungsstelle
          </a>
        </p>
      </LegalSection>

      <LegalSection title="§ 11 Anwendbares Recht / Gerichtsstand">
        <p>
          (1) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland
          unter Ausschluss des UN-Kaufrechts.
        </p>
        <p>
          (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im
          Zusammenhang mit der Geschäftsbeziehung ist - soweit gesetzlich zulässig -
          Berlin. Gegenüber Verbrauchern gilt diese Vereinbarung nur, soweit der
          Mandant nach Vertragsschluss seinen Wohnsitz oder gewöhnlichen Aufenthalt
          ins Ausland verlegt oder sein Wohnsitz oder gewöhnlicher Aufenthalt im
          Zeitpunkt der Klageerhebung unbekannt ist.
        </p>
      </LegalSection>

      <LegalSection title="§ 12 Schlussbestimmungen">
        <p>
          (1) Änderungen oder Ergänzungen dieser AGB bedürfen der Textform.
          Dies gilt auch für die Änderung dieser Textformklausel.
        </p>
        <p>
          (2) Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise
          unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen
          Bestimmungen hiervon unberührt. An die Stelle der unwirksamen
          Bestimmung tritt diejenige wirksame Regelung, die dem mit der
          unwirksamen Bestimmung wirtschaftlich verfolgten Zweck am nächsten
          kommt.
        </p>
      </LegalSection>

      <p className="body-text-dark">
        {COMPANY.name}
        <br />
        {COMPANY.address}, {COMPANY.city}
        <br />
        Geschäftsführer: {COMPANY.manager}
        <br />
        Stand: Juni 2026
      </p>
    </LegalPageLayout>
  );
}
