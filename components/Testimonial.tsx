import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";

export default function Testimonial() {
  return (
    <section className="grid grid-cols-1 items-center gap-12 border-y border-beige-400 bg-beige-300 px-6 py-16 md:grid-cols-[1fr_2fr] md:gap-24 md:px-14 md:py-24">
      <div>
        <RevealWrapper>
          <SectionLabel>Mandanten</SectionLabel>
          <h2 className="section-heading text-[1.4rem] text-forest-800 md:text-[clamp(1.4rem,2vw,1.8rem)]">
            Vertrauen durch
            <br />
            <span className="section-heading-thin text-forest-800/30">
              Ergebnisse.
            </span>
          </h2>
        </RevealWrapper>
      </div>

      <RevealWrapper delay={0.1}>
        <blockquote className="text-[clamp(1.4rem,2.2vw,2.2rem)] font-light leading-[1.6] tracking-wide text-forest-800">
          „Was mich überzeugt hat:{" "}
          <strong className="font-bold">
            kein Verkaufsgespräch, keine Empfehlung mit versteckten
            Interessen
          </strong>
          . Stefan Affeld hat unsere Situation wirklich verstanden — und eine
          Strategie entwickelt, die zu uns passt, nicht zu einem
          Produktportfolio.&ldquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <div
            className="flex h-11 w-11 items-center justify-center border-[1.5px] border-beige-500 bg-forest-700"
            aria-hidden="true"
          >
            <span className="text-xs font-bold text-beige-200/60">MK</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest-700">
              M. Kessler
            </p>
            <p className="mt-0.5 text-[8px] font-light tracking-wide text-mid">
              Privatmandant · Unternehmer, Berlin
            </p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
