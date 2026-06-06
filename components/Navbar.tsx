"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["philosophie", "leistungen", "ansatz", "faq", "kontakt"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-[200] flex h-[68px] items-center justify-between border-b border-beige-200/20 bg-forest-900 px-6 shadow-[0_2px_12px_rgba(7,21,16,0.35)] md:px-14"
        aria-label="Hauptnavigation"
      >
        <LogoMark dark showText />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "nav-link",
                  activeSection === link.id
                    ? "text-beige-100"
                    : "text-beige-200 hover:text-beige-50"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#kontakt"
              className="nav-link border-[1.5px] border-beige-200/60 px-[1.4rem] py-2 text-beige-100 transition-all hover:border-beige-100 hover:bg-forest-700"
              aria-label="Gespräch vereinbaren"
            >
              Gespräch vereinbaren
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-beige-100 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex flex-col bg-forest-900 px-8 pt-24 md:hidden"
            role="dialog"
            aria-label="Mobilmenü"
          >
            <button
              type="button"
              className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center text-beige-100"
              onClick={closeMobile}
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" />
            </button>

            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="text-lg font-semibold uppercase tracking-nav text-beige-100 transition-colors hover:text-beige-50"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
              >
                <Link
                  href="#kontakt"
                  onClick={closeMobile}
                  className="inline-block border border-beige-200/60 px-6 py-3 text-sm font-semibold uppercase tracking-nav text-beige-100"
                  aria-label="Gespräch vereinbaren"
                >
                  Gespräch vereinbaren
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
