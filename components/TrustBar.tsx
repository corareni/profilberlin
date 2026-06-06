"use client";

import RevealWrapper from "./RevealWrapper";
import { TRUST_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-b border-beige-400 bg-beige-100 px-6 py-9 md:gap-8 md:px-14">
      {TRUST_STATS.map((stat, i) => (
        <div key={stat.label} className="flex flex-1 items-center justify-center gap-6 md:gap-8">
          {i > 0 && (
            <div
              className="hidden h-10 w-px shrink-0 bg-beige-400 md:block"
              aria-hidden="true"
            />
          )}
          <RevealWrapper delay={i * 0.1} className="flex flex-1 flex-col items-center gap-1.5 text-center">
            <span className="text-[1.6rem] font-extrabold tracking-[-0.03em] text-forest-700">
              {stat.number}
            </span>
            <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-mid">
              {stat.label}
            </span>
          </RevealWrapper>
        </div>
      ))}
    </div>
  );
}
