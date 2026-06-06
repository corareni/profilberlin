import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

export default function Testimonial() {
  return (
    <section className="grid grid-cols-1 items-center gap-12 border-y border-beige-500 bg-beige-300 px-6 py-16 md:grid-cols-[1fr_2fr] md:gap-24 md:px-14 md:py-24">
      <div>
        <RevealWrapper>
          <SectionLabel>Mandanten</SectionLabel>
          <h2 className="section-heading text-[1.5rem] text-forest-900 md:text-[clamp(1.5rem,2vw,2rem)]">
            Vertrauen durch
            <br />
            <span className="section-heading-thin-dark">
              Ergebnisse.
            </span>
          </h2>
        </RevealWrapper>
      </div>

      <RevealWrapper delay={0.1}>
        <blockquote className="text-[clamp(1.35rem,2vw,2rem)] font-normal leading-[1.65] tracking-normal text-forest-900">
          „Was mich überzeugt hat:{" "}
          <strong className="font-bold">
            kein Verkaufsgespräch, keine Empfehlung mit versteckten
            Interessen
          </strong>
          . Stefan Affeld hat unsere Situation wirklich verstanden - und eine
          Strategie entwickelt, die zu uns passt, nicht zu einem
          Produktportfolio.&ldquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <div
            className="flex h-11 w-11 items-center justify-center border-[1.5px] border-beige-500 bg-forest-700"
            aria-hidden="true"
          >
            <span className="text-sm font-bold text-beige-100">MK</span>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-forest-800">
              M. Kessler
            </p>
            <p className="mt-0.5 text-[11px] font-normal tracking-wide text-ink/85">
              Privatmandant · Unternehmer, Berlin
            </p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
