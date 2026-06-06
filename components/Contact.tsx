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
          <h2 className="section-heading text-[clamp(1.8rem,2.6vw,3.2rem)] text-forest-900">
            Sprechen
            <br />
            Sie mit
            <br />
            <span className="section-heading-thin-dark">uns.</span>
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
                <span className="min-w-[72px] pt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-forest-700">
                  {row.key}
                </span>
                <span className="whitespace-pre-line text-[14px] font-normal leading-[1.7] tracking-normal text-ink/90">
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
              src="https://maps.google.com/maps?q=S%C3%A4chsische+Stra%C3%9Fe+62,+10707+Berlin&output=embed"
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
            className="mb-8 border border-forest-500 bg-forest-700/10 px-6 py-4 text-[14px] font-normal leading-[1.8] text-forest-800"
            role="status"
          >
            Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </div>
        )}

        {status === "error" && (
          <div
            className="mb-8 border border-red-400 bg-red-50 px-6 py-4 text-[14px] font-normal leading-[1.8] text-red-900"
            role="alert"
          >
            Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es
            erneut oder schreiben Sie uns direkt an {COMPANY.email}.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" noValidate>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="vorname" className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/85">
                Vorname
              </label>
              <input
                id="vorname"
                type="text"
                placeholder="Max"
                className="border-b-2 border-beige-600 bg-transparent py-3 text-[14px] font-normal tracking-normal text-ink outline-none transition-colors focus:border-forest-700"
                aria-invalid={!!errors.vorname}
                {...register("vorname")}
              />
              {errors.vorname && (
                <span className="text-[12px] font-medium text-red-700">{errors.vorname.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nachname" className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/85">
                Nachname
              </label>
              <input
                id="nachname"
                type="text"
                placeholder="Mustermann"
                className="border-b-2 border-beige-600 bg-transparent py-3 text-[14px] font-normal tracking-normal text-ink outline-none transition-colors focus:border-forest-700"
                aria-invalid={!!errors.nachname}
                {...register("nachname")}
              />
              {errors.nachname && (
                <span className="text-[12px] font-medium text-red-700">{errors.nachname.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/85">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="ihre@email.de"
              className="border-b-2 border-beige-600 bg-transparent py-3 text-[14px] font-normal tracking-normal text-ink outline-none transition-colors focus:border-forest-700"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-[12px] font-medium text-red-700">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="telefon" className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/85">
              Telefon (optional)
            </label>
            <input
              id="telefon"
              type="tel"
              placeholder="+49 30 ..."
              className="border-b-2 border-beige-600 bg-transparent py-3 text-[14px] font-normal tracking-normal text-ink outline-none transition-colors focus:border-forest-700"
              {...register("telefon")}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="thema" className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/85">
              Thema
            </label>
            <select
              id="thema"
              className="cursor-pointer appearance-none border-b-2 border-beige-600 bg-transparent py-3 text-[14px] font-normal tracking-normal text-ink outline-none transition-colors focus:border-forest-700"
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
              <span className="text-[12px] font-medium text-red-700">{errors.thema.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="nachricht" className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/85">
              Nachricht (optional)
            </label>
            <textarea
              id="nachricht"
              rows={4}
              placeholder="Kurze Beschreibung Ihres Anliegens …"
              className="resize-none border-b-2 border-beige-600 bg-transparent py-3 text-[14px] font-normal tracking-normal text-ink outline-none transition-colors focus:border-forest-700"
              {...register("nachricht")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 self-start border-[1.5px] border-forest-800 bg-forest-800 px-10 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] text-beige-100 transition-colors hover:border-forest-700 hover:bg-forest-700 disabled:opacity-60"
            aria-label="Anfrage senden"
          >
            {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
          </button>

          <p className="text-[12px] font-normal tracking-normal text-ink/85">
            Das Erstgespräch ist kostenfrei und unverbindlich.
          </p>
          <p className="text-[12px] font-normal tracking-normal text-ink/85">
            Mit dem Absenden stimmen Sie unserer{" "}
            <Link href="/datenschutz" className="font-semibold text-forest-700 underline hover:text-forest-900">
              Datenschutzerklärung
            </Link>{" "}
            zu.
          </p>
        </form>
      </div>
    </section>
  );
}
