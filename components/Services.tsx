import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="leistungen" className="scroll-section bg-beige-200 px-6 py-16 md:px-14 md:py-28">
      <div className="mb-16 grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-16">
        <div>
          <RevealWrapper>
            <SectionLabel>Unsere Leistungen</SectionLabel>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-forest-900">
              Integriertes
              <br />
              <span className="section-heading-thin-dark">
                Vermögens-
                <br />
                management
              </span>
            </h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2}>
          <p className="body-text-dark max-w-[420px]">
            Wir bieten ein vollständiges Spektrum an Vermögensdienstleistungen
            - von der strategischen Allokation bis zur taktischen Steuerung,
            stets abgestimmt auf Ihre persönliche Lebenssituation, Ihre Ziele
            und Ihren Zeithorizont.
          </p>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 gap-px border border-beige-500 bg-beige-500 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <RevealWrapper
            key={service.number}
            delay={(i % 3) * 0.1}
            className="bg-beige-200 p-8 transition-colors hover:bg-beige-100 md:p-10"
          >
            <span
              className="mb-6 block text-[2.5rem] font-thin leading-none tracking-[-0.03em] text-beige-500"
              aria-hidden="true"
            >
              {service.number}
            </span>
            <h3 className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-forest-700">
              {service.title}
            </h3>
            <p className="text-[13px] font-normal leading-[1.75] tracking-normal text-ink/90">
              {service.description}
            </p>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
