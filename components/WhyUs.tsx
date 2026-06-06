import {
  BarChart2,
  CheckCircle,
  Clock,
  LayoutGrid,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import { WHY_US_ITEMS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Shield,
  Clock,
  Users,
  BarChart2,
  LayoutGrid,
  CheckCircle,
};

export default function WhyUs() {
  return (
    <section className="bg-forest-800 px-6 py-16 md:px-14 md:py-28">
      <div className="mb-16">
        <RevealWrapper>
          <SectionLabel variant="light">Warum Profil</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-beige-200">
            Was uns
            <br />
            <span className="section-heading-thin text-beige-200/[0.28]">
              unterscheidet.
            </span>
          </h2>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 gap-px border border-beige-200/5 bg-beige-200/5 md:grid-cols-2 lg:grid-cols-3">
        {WHY_US_ITEMS.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <RevealWrapper
              key={item.title}
              delay={(i % 3) * 0.1}
              className="bg-forest-800 p-8 transition-colors hover:bg-beige-200/[0.02] md:p-11"
            >
              <div
                className="mb-6 flex h-10 w-10 items-center justify-center border border-beige-200/[0.12]"
                aria-hidden="true"
              >
                {Icon && <Icon className="h-[18px] w-[18px] stroke-forest-400" strokeWidth={1.5} />}
              </div>
              <h3 className="mb-4 text-[8px] font-bold uppercase tracking-[0.25em] text-beige-200/60">
                {item.title}
              </h3>
              <p className="text-[11px] font-light leading-[2] tracking-wide text-beige-200/30">
                {item.text}
              </p>
            </RevealWrapper>
          );
        })}
      </div>
    </section>
  );
}
