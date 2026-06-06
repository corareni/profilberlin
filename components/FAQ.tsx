"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-section grid grid-cols-1 gap-12 bg-beige-200 px-6 py-16 md:grid-cols-[1fr_2fr] md:gap-24 md:px-14 md:py-28">
      <div>
        <RevealWrapper>
          <SectionLabel>FAQ</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-forest-800">
            Häufige
            <br />
            <span className="section-heading-thin text-forest-800/30">
              Fragen.
            </span>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="body-text-dark mt-6">
            Antworten auf die wichtigsten Fragen rund um unabhängige
            Vermögensverwaltung und unsere Arbeitsweise.
          </p>
        </RevealWrapper>
      </div>

      <div className="flex flex-col">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="border-b border-beige-400 first:border-t"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-[11px] font-semibold tracking-wide text-forest-800">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center border border-beige-500 transition-all duration-300",
                    isOpen && "rotate-45 border-forest-700 bg-forest-700"
                  )}
                  aria-hidden="true"
                >
                  <span
                    className={cn(
                      "text-sm leading-none text-forest-600",
                      isOpen && "text-beige-200"
                    )}
                  >
                    +
                  </span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[11px] font-light leading-[2] tracking-wide text-mid">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
