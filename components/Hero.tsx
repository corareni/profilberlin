"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import ProfilLogo from "./ProfilLogo";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative grid min-h-screen grid-cols-1 overflow-hidden bg-forest-800 pt-[68px] md:grid-cols-2">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col justify-center border-beige-200/10 px-6 py-16 pb-28 md:border-r md:px-14 md:py-24 md:pb-32">
        <motion.div
          {...fadeUp(0.1)}
          className="mb-10 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-forest-300"
        >
          <span className="h-px w-[30px] bg-forest-300" aria-hidden="true" />
          Unabhängige Vermögensverwaltung · Berlin
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="section-heading mb-1 text-[clamp(2.8rem,4.2vw,5rem)] leading-[0.97] text-beige-100"
        >
          Ihr
          <br />
          Vermögen.
          <span className="section-heading-thin-light block text-[0.85em] leading-[1.1] tracking-wide">
            Unsere
            <br />
            Verantwortung.
          </span>
        </motion.h1>

        <motion.div
          {...fadeUp(0.4)}
          className="my-8 h-px w-10 bg-forest-400"
          aria-hidden="true"
        />

        <motion.p
          {...fadeUp(0.55)}
          className="body-text-light mb-12 max-w-[420px]"
        >
          Seit über zwei Jahrzehnten betreuen wir private und institutionelle
          Anleger mit einem klaren Prinzip: langfristiges Denken, individuelle
          Lösungen, konsequentes Handeln - ohne Interessenkonflikte.
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-wrap items-center gap-8"
        >
          <Link href="#kontakt" className="btn-primary" aria-label="Gespräch vereinbaren">
            Gespräch vereinbaren
          </Link>
          <Link href="#leistungen" className="btn-ghost" aria-label="Unsere Leistungen ansehen">
            Unsere Leistungen
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 hidden flex-col items-center justify-center px-6 md:flex md:px-14">
        <motion.div {...fadeUp(0.3)} className="flex flex-col items-center">
          <ProfilLogo variant="icon" theme="light" size="xl" href="" />
          <p className="mt-12 text-center text-[12px] font-semibold uppercase leading-[2.1] tracking-[0.18em] text-beige-200/90">
            Vermögensmanagement
            <br />
            mit Berliner
            <br />
            Charakter
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-wrap items-center gap-6 overflow-x-auto border-t border-beige-200/15 bg-forest-700 px-6 py-4 md:gap-10 md:px-14">
        {[
          COMPANY.name,
          `${COMPANY.manager} · ${COMPANY.managerRole}`,
          `${COMPANY.address} · ${COMPANY.city}`,
          `Unabhängig seit ${COMPANY.founded}`,
        ].map((item, i, arr) => (
          <div key={item} className="flex shrink-0 items-center gap-6 md:gap-10">
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-beige-200/85">
              {item}
            </span>
            {i < arr.length - 1 && (
              <span
                className="h-[3px] w-[3px] shrink-0 rounded-full bg-forest-300"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
