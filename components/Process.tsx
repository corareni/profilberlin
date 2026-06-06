import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import LogoMark from "./LogoMark";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section
      id="ansatz"
      className="scroll-section grid min-h-[60vh] grid-cols-1 bg-forest-900 md:grid-cols-[3fr_1fr]"
    >
      <div className="border-beige-200/5 px-6 py-16 md:border-r md:px-14 md:py-28">
        <RevealWrapper>
          <SectionLabel variant="light">Unser Ansatz</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-beige-200">
            Wie wir
            <br />
            <span className="section-heading-thin text-beige-200/[0.28]">
              arbeiten.
            </span>
          </h2>
        </RevealWrapper>

        <div className="mt-12 flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <RevealWrapper
              key={step.number}
              delay={i * 0.1}
              className="grid grid-cols-[52px_1fr] gap-6 border-b border-beige-200/[0.04] py-8 last:border-b-0"
            >
              <span
                className="text-[2rem] font-extrabold leading-none tracking-[-0.03em] text-beige-200/[0.04]"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div>
                <h3 className="mb-2 text-[8px] font-bold uppercase tracking-[0.25em] text-beige-200/55">
                  {step.title}
                </h3>
                <p className="text-[11px] font-light leading-[1.95] tracking-wide text-beige-200/30">
                  {step.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      <div className="hidden flex-col items-center justify-center gap-10 px-8 py-16 text-center md:flex">
        <RevealWrapper>
          <LogoMark size="lg" dark showText={false} href="" />
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="text-[8px] font-semibold uppercase leading-[1.9] tracking-[0.22em] text-beige-200/20">
            Vermögensmanagement
            <br />
            mit Berliner
            <br />
            Charakter
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
