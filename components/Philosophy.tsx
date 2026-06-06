import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import { PHILOSOPHY_VALUES, COMPANY } from "@/lib/constants";

export default function Philosophy() {
  return (
    <section
      id="philosophie"
      className="scroll-section grid min-h-[80vh] grid-cols-1 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center border-beige-500 bg-beige-300 px-6 py-16 md:border-r md:px-14 md:py-28">
        <RevealWrapper>
          <SectionLabel>Unsere Philosophie</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-forest-900">
            Kapital
            <br />
            schützen.
            <span className="section-heading-thin-dark block">
              Zukunft
              <br />
              gestalten.
            </span>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="body-text-dark mt-6 max-w-[400px]">
            Als unabhängige Vermögensverwaltung stehen wir ausschließlich im
            Interesse unserer Mandanten. Keine Provisionen, keine
            Interessenkonflikte - nur klare, langfristig orientierte Beratung
            auf Basis tiefer Marktkenntnis und jahrzehntelanger Erfahrung.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.3}>
          <p className="body-text-dark mt-4 max-w-[400px]">
            Unser Ansatz ist ganzheitlich: Wir betrachten nicht einzelne
            Positionen, sondern Ihr gesamtes Vermögen - und entwickeln daraus
            eine Strategie, die zu Ihrer Lebenssituation passt.
          </p>
        </RevealWrapper>
      </div>

      <div className="flex flex-col justify-between bg-forest-700 px-6 py-16 md:px-14 md:py-28">
        <RevealWrapper>
          <blockquote className="border-l-2 border-forest-300 pl-6 text-[1.15rem] font-normal leading-[1.75] tracking-normal text-beige-100">
            „Kapitalerhalt ist keine Bescheidenheit -
            <br />
            es ist die höchste Form von Verantwortung
            <br />
            gegenüber unseren Mandanten.&ldquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-[12px] font-bold uppercase tracking-nav text-beige-100">
              {COMPANY.manager}
            </p>
            <p className="mt-1 text-[11px] font-normal tracking-wide text-beige-200/90">
              {COMPANY.managerRole} · {COMPANY.name}
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="mt-auto pt-12">
          <ul className="flex flex-col">
            {PHILOSOPHY_VALUES.map((value) => (
              <li
                key={value}
                className="group flex items-center justify-between border-b border-beige-200/20 py-[1.1rem] first:border-t first:border-beige-200/20"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-beige-100 transition-colors group-hover:text-beige-50">
                  {value}
                </span>
                <span
                  className="text-sm text-beige-200/80 transition-colors group-hover:text-beige-100"
                  aria-hidden="true"
                >
                  →
                </span>
              </li>
            ))}
          </ul>
        </RevealWrapper>
      </div>
    </section>
  );
}
