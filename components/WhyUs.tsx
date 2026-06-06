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
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-beige-100">
            Was uns
            <br />
            <span className="section-heading-thin-light">
              unterscheidet.
            </span>
          </h2>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 gap-px border border-beige-200/20 bg-beige-200/20 md:grid-cols-2 lg:grid-cols-3">
        {WHY_US_ITEMS.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <RevealWrapper
              key={item.title}
              delay={(i % 3) * 0.1}
              className="bg-forest-800 p-8 transition-colors hover:bg-forest-700/50 md:p-11"
            >
              <div
                className="mb-6 flex h-10 w-10 items-center justify-center border border-beige-200/40"
                aria-hidden="true"
              >
                {Icon && <Icon className="h-[18px] w-[18px] stroke-forest-300" strokeWidth={1.5} />}
              </div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-beige-100">
                {item.title}
              </h3>
              <p className="text-[13px] font-normal leading-[1.8] tracking-normal text-beige-200/95">
                {item.text}
              </p>
            </RevealWrapper>
          );
        })}
      </div>
    </section>
  );
}
