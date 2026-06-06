"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SectionLabel from "./SectionLabel";
import RevealWrapper from "./RevealWrapper";
import { COMPANY, CONTACT_TOPICS } from "@/lib/constants";

const contactSchema = z.object({
  vorname: z.string().min(1, "Vorname ist erforderlich"),
  nachname: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  telefon: z.string().optional(),
  thema: z.string().min(1, "Bitte wählen Sie ein Thema"),
  nachricht: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      vorname: "",
      nachname: "",
      email: "",
      telefon: "",
      thema: "",
      nachricht: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      reset();
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="scroll-section grid grid-cols-1 bg-beige-300 md:grid-cols-2"
    >
      <div className="border-beige-400 px-6 py-16 md:border-r md:px-14 md:py-28">
        <RevealWrapper>
          <SectionLabel>Kontakt</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-forest-800">
            Sprechen
            <br />
            Sie mit
            <br />
            <span className="section-heading-thin text-forest-800/30">uns.</span>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="body-text-dark mt-4 max-w-[340px]">
            Wir freuen uns auf ein unverbindliches Erstgespräch — persönlich in
            Berlin oder per Videokonferenz.
          </p>
        </RevealWrapper>

        <div className="mt-10 flex flex-col gap-7">
          {[
            { key: "Adresse", value: `${COMPANY.address}\n${COMPANY.city}` },
            {
              key: "Inhaber",
              value: `${COMPANY.manager}\n${COMPANY.managerRole}`,
            },
            { key: "Firma", value: COMPANY.name },
            { key: "E-Mail", value: COMPANY.email },
          ].map((row, i) => (
            <RevealWrapper key={row.key} delay={0.2 + i * 0.05}>
              <div className="flex gap-6">
                <span className="min-w-[60px] pt-0.5 text-[7px] font-bold uppercase tracking-[0.32em] text-forest-400">
                  {row.key}
                </span>
                <span className="whitespace-pre-line text-[11.5px] font-light leading-[1.7] tracking-wide text-mid">
                  {row.value}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.4} className="mt-10">
          <div className="relative h-[180px] overflow-hidden border border-beige-400">
            <iframe
              title="Standort Profil Vermögensmanagement GmbH"
              src="https://maps.google.com/maps?q=Riehlstra%C3%9Fe+3,+14057+Berlin&output=embed"
              className="h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </RevealWrapper>
      </div>

      <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-28">
        <RevealWrapper>
          <SectionLabel>Erstgespräch vereinbaren</SectionLabel>
        </RevealWrapper>

        {status === "success" && (
          <div
            className="mb-8 border border-forest-400 bg-forest-700/10 px-6 py-4 text-[11px] font-light leading-[2] text-forest-700"
            role="status"
          >
            Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </div>
        )}

        {status === "error" && (
          <div
            className="mb-8 border border-red-300 bg-red-50 px-6 py-4 text-[11px] font-light leading-[2] text-red-800"
            role="alert"
          >
            Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es
            erneut oder schreiben Sie uns direkt an {COMPANY.email}.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" noValidate>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="vorname" className="text-[7px] font-bold uppercase tracking-[0.32em] text-dim">
                Vorname
              </label>
              <input
                id="vorname"
                type="text"
                placeholder="Max"
                className="border-b border-beige-500 bg-transparent py-3 text-[11.5px] font-light tracking-wide text-ink outline-none transition-colors focus:border-forest-600"
                aria-invalid={!!errors.vorname}
                {...register("vorname")}
              />
              {errors.vorname && (
                <span className="text-[10px] text-red-600">{errors.vorname.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nachname" className="text-[7px] font-bold uppercase tracking-[0.32em] text-dim">
                Nachname
              </label>
              <input
                id="nachname"
                type="text"
                placeholder="Mustermann"
                className="border-b border-beige-500 bg-transparent py-3 text-[11.5px] font-light tracking-wide text-ink outline-none transition-colors focus:border-forest-600"
                aria-invalid={!!errors.nachname}
                {...register("nachname")}
              />
              {errors.nachname && (
                <span className="text-[10px] text-red-600">{errors.nachname.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[7px] font-bold uppercase tracking-[0.32em] text-dim">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="ihre@email.de"
              className="border-b border-beige-500 bg-transparent py-3 text-[11.5px] font-light tracking-wide text-ink outline-none transition-colors focus:border-forest-600"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-[10px] text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="telefon" className="text-[7px] font-bold uppercase tracking-[0.32em] text-dim">
              Telefon (optional)
            </label>
            <input
              id="telefon"
              type="tel"
              placeholder="+49 30 ..."
              className="border-b border-beige-500 bg-transparent py-3 text-[11.5px] font-light tracking-wide text-ink outline-none transition-colors focus:border-forest-600"
              {...register("telefon")}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="thema" className="text-[7px] font-bold uppercase tracking-[0.32em] text-dim">
              Thema
            </label>
            <select
              id="thema"
              className="cursor-pointer appearance-none border-b border-beige-500 bg-transparent py-3 text-[11.5px] font-light tracking-wide text-ink outline-none transition-colors focus:border-forest-600"
              aria-invalid={!!errors.thema}
              defaultValue=""
              {...register("thema")}
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {CONTACT_TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            {errors.thema && (
              <span className="text-[10px] text-red-600">{errors.thema.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="nachricht" className="text-[7px] font-bold uppercase tracking-[0.32em] text-dim">
              Nachricht (optional)
            </label>
            <textarea
              id="nachricht"
              rows={4}
              placeholder="Kurze Beschreibung Ihres Anliegens …"
              className="resize-none border-b border-beige-500 bg-transparent py-3 text-[11.5px] font-light tracking-wide text-ink outline-none transition-colors focus:border-forest-600"
              {...register("nachricht")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 self-start border-[1.5px] border-forest-700 bg-forest-700 px-10 py-3.5 text-[8px] font-bold uppercase tracking-[0.25em] text-beige-200 transition-colors hover:border-forest-600 hover:bg-forest-600 disabled:opacity-60"
            aria-label="Anfrage senden"
          >
            {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
          </button>

          <p className="text-[9px] font-light tracking-wide text-dim">
            Das Erstgespräch ist kostenfrei und unverbindlich.
          </p>
          <p className="text-[9px] font-light tracking-wide text-dim">
            Mit dem Absenden stimmen Sie unserer{" "}
            <Link href="/datenschutz" className="text-forest-600 underline hover:text-forest-700">
              Datenschutzerklärung
            </Link>{" "}
            zu.
          </p>
        </form>
      </div>
    </section>
  );
}
