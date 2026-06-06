import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Profil Vermögensmanagement GmbH",
  description:
    "Datenschutzerklärung der Profil Vermögensmanagement GmbH gemäß DSGVO.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <LegalSection title="1. Datenschutz auf einen Blick">
        <p>
          <strong>Allgemeine Hinweise</strong>
          <br />
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können. Ausführliche Informationen zum Thema
          Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <p>
          <strong>Datenerfassung auf dieser Website</strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Webseitenbetreiber.
          Dessen Kontaktdaten können Sie dem nachfolgenden Abschnitt „Hinweis zur
          verantwortlichen Stelle“ dieser Datenschutzerklärung entnehmen.
        </p>
        <p>
          Wir erfassen Daten, die Sie uns aktiv mitteilen (z. B. durch Eingabe in
          unser Kontaktformular). Andere Daten werden automatisch beim Besuch der
          Website durch unsere IT-Systeme erfasst (z. B. IP-Adresse, Browsertyp).
        </p>
      </LegalSection>

      <LegalSection title="2. Verantwortliche Stelle (Art. 4 Nr. 7 DSGVO)">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          {COMPANY.name}
          <br />
          Vertreten durch den Geschäftsführer {COMPANY.manager}
          <br />
          {COMPANY.address}
          <br />
          {COMPANY.city}
          <br />
          Deutschland
        </p>
        <p>
          Telefon:{" "}
          <a href={`tel:${COMPANY.phone}`} className="font-semibold text-forest-700 underline hover:text-forest-900">
            {COMPANY.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-semibold text-forest-700 underline hover:text-forest-900">
            {COMPANY.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="3. Datenschutzbeauftragter">
        <p>
          Wir haben keinen Datenschutzbeauftragten benannt, da wir die gesetzlichen
          Voraussetzungen hierfür nicht erfüllen (§ 38 BDSG).
        </p>
        <p className="text-[13px] text-ink/80">
          (Bei Finanzdienstleistern ist die Benennung eines Datenschutzbeauftragten
          häufig sinnvoll. Falls Sie einen DSB haben, ergänzen Sie hier Name,
          Anschrift und E-Mail: datenschutz@profilberlin.de)
        </p>
      </LegalSection>

      <LegalSection title="4. Ihre Rechte (Art. 15 - 21 DSGVO)">
        <p>Sie haben jederzeit das Recht:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>unentgeltlich Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten (Art. 15 DSGVO);</li>
          <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO);</li>
          <li>die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO);</li>
          <li>die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO);</li>
          <li>der Datenverarbeitung zu widersprechen (Art. 21 DSGVO);</li>
          <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO);</li>
          <li>eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO);</li>
          <li>sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).</li>
        </ul>
        <p>
          Die zuständige Aufsichtsbehörde für uns ist:
          <br />
          Berliner Beauftragte für Datenschutz und Informationsfreiheit
          <br />
          Alt-Moabit 59-61
          <br />
          10555 Berlin
          <br />
          Telefon: +49 (0)30 / 13889-0
          <br />
          E-Mail: mailbox@datenschutz-berlin.de
          <br />
          Internet:{" "}
          <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            www.datenschutz-berlin.de
          </a>
        </p>
        <p>
          Anfragen zur Ausübung Ihrer Rechte richten Sie bitte an:{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-semibold text-forest-700 underline hover:text-forest-900">
            {COMPANY.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="5. Datenerfassung auf dieser Website">
        <p>
          <strong>5.1 Server-Logfiles</strong>
          <br />
          Der Provider der Seiten erhebt und speichert automatisch Informationen in
          sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt.
          Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem,
          Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
          IP-Adresse (anonymisiert).
        </p>
        <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
          technisch fehlerfreien Darstellung und der Sicherheit unserer Website).
        </p>
        <p>
          Speicherdauer: 7 Tage; danach Löschung, sofern keine Sicherheitsvorfälle
          eine längere Speicherung erfordern.
        </p>

        <p>
          <strong>5.2 Kontaktformular</strong>
          <br />
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert.
        </p>
        <p>Erhobene Daten:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Vorname und Nachname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (freiwillig)</li>
          <li>Thema der Anfrage</li>
          <li>Inhalt Ihrer Nachricht</li>
        </ul>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf den
          Abschluss eines Vertrages oder die Durchführung vorvertraglicher Maßnahmen
          gerichtet ist; ergänzend Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes
          Interesse an der effektiven Bearbeitung von Anfragen).
        </p>
        <p>
          Speicherdauer: Wir verarbeiten Ihre Daten so lange, wie dies zur
          Bearbeitung Ihrer Anfrage erforderlich ist. Im Falle einer
          Vertragsanbahnung bzw. eines Vertragsschlusses gelten die gesetzlichen
          Aufbewahrungspflichten (insb. § 257 HGB, § 147 AO - bis zu 10 Jahre).
        </p>
        <p>
          Verschlüsselung: Die Übertragung der Formulardaten erfolgt verschlüsselt
          über das TLS-Protokoll (https).
        </p>

        <p>
          <strong>5.3 Formspree (Auftragsverarbeiter Kontaktformular)</strong>
          <br />
          Wir nutzen für den Versand und die Verarbeitung der Kontaktformulardaten
          den Dienst Formspree, betrieben durch:
        </p>
        <p>
          Formspree Inc.
          <br />
          1611 Telegraph Ave, Suite 1200
          <br />
          Oakland, CA 94612, USA
        </p>
        <p>
          Die über das Formular übermittelten Daten werden auf Servern von Formspree
          gespeichert und an unsere E-Mail-Adresse weitergeleitet.
        </p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.</p>
        <p>
          Datenübertragung in die USA: Formspree ist ein US-Anbieter. Die
          Datenübertragung erfolgt auf Grundlage der EU-Standardvertragsklauseln
          (SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO. Wir haben mit Formspree einen
          Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen.
        </p>
        <p>
          Datenschutzerklärung von Formspree:{" "}
          <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            https://formspree.io/legal/privacy-policy/
          </a>
        </p>
      </LegalSection>

      <LegalSection title="6. Hosting">
        <p>Wir hosten unsere Website bei:</p>
        <p>
          Vercel Inc.
          <br />
          340 S Lemon Ave #4133
          <br />
          Walnut, CA 91789, USA
        </p>
        <p>
          Vercel verarbeitet im Rahmen der Bereitstellung der Website Logdaten
          (insb. IP-Adresse, abgerufene URL, Datum/Uhrzeit, Browsertyp). Die
          Verarbeitung erfolgt zur Bereitstellung der Website (Art. 6 Abs. 1
          lit. b DSGVO) und im berechtigten Interesse einer zuverlässigen
          Darstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Eine Datenübertragung in die USA findet statt. Diese erfolgt auf
          Grundlage der Standardvertragsklauseln der EU-Kommission gemäß
          Art. 46 Abs. 2 lit. c DSGVO. Wir haben mit Vercel einen Vertrag zur
          Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen (abrufbar unter:{" "}
          <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            https://vercel.com/legal/dpa
          </a>
          ).
        </p>
        <p>
          Datenschutzerklärung von Vercel:{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 underline hover:text-forest-900">
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
        <p className="text-[13px] text-ink/80">
          Hinweis: Trotz Standardvertragsklauseln kann ein Restrisiko bestehen,
          da US-Behörden grundsätzlich Zugriff auf bei US-Anbietern gespeicherte
          Daten verlangen können (Schrems II / US CLOUD Act).
        </p>
      </LegalSection>

      <LegalSection title="7. Schriftarten (Google Fonts)">
        <p>
          Wir binden die Schriftart Montserrat lokal auf unserem Server ein. Es
          findet hierbei keine Datenübertragung an Google statt.
        </p>
      </LegalSection>

      <LegalSection title="8. SSL-/TLS-Verschlüsselung">
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
          vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von „http://“ auf „https://“ wechselt.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies">
        <p>
          Diese Website verwendet keine Tracking-Cookies und keine Cookies für
          Marketing-Zwecke. Es werden lediglich technisch notwendige Cookies
          gesetzt, soweit dies für den Betrieb der Website erforderlich ist
          (z. B. Session-Cookies).
        </p>
        <p>
          Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (für unbedingt erforderliche
          Cookies ist keine Einwilligung nötig).
        </p>
        <p className="text-[13px] text-ink/80">
          Falls Sie später Analyse-Tools einbauen (z. B. Vercel Analytics, Plausible,
          Matomo), müssen Sie diesen Abschnitt entsprechend erweitern und ggf. einen
          Cookie-Banner integrieren.
        </p>
      </LegalSection>

      <LegalSection title="10. Besondere Hinweise für Mandanten (Vertragsverhältnis)">
        <p>
          Sofern Sie als Mandant in eine Vertragsbeziehung mit uns eintreten,
          verarbeiten wir darüber hinausgehend personenbezogene Daten zur
          Erfüllung des Vermögensverwaltungs- bzw. Anlageberatungsvertrages
          (Art. 6 Abs. 1 lit. b DSGVO) sowie zur Erfüllung gesetzlicher
          Verpflichtungen, insbesondere nach:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Wertpapierhandelsgesetz (WpHG)</li>
          <li>Geldwäschegesetz (GwG) - Identifizierungspflichten</li>
          <li>Abgabenordnung (AO) - steuerliche Aufbewahrungspflichten</li>
          <li>Kreditwesengesetz (KWG) und Wertpapierinstitutsgesetz (WpIG)</li>
        </ul>
        <p>
          Die Datenverarbeitung im Rahmen bestehender Mandatsverhältnisse wird
          Ihnen gesondert in unseren Mandanten-Datenschutzhinweisen erläutert.
        </p>
      </LegalSection>

      <LegalSection title="11. Aktualität und Änderungen dieser Datenschutzerklärung">
        <p>
          Diese Datenschutzerklärung hat den Stand Juni 2026.
        </p>
        <p>
          Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
          gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
          Datenschutzerklärung anzupassen. Die jeweils aktuelle Datenschutzerklärung
          kann jederzeit auf der Website unter{" "}
          <a href="/datenschutz" className="font-semibold text-forest-700 underline hover:text-forest-900">
            www.profilberlin.de/datenschutz
          </a>{" "}
          von Ihnen abgerufen und ausgedruckt werden.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
