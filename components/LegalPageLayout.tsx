import Link from "next/link";
import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-forest-800">
        {title}
      </h2>
      <div className="space-y-4 body-text-dark">{children}</div>
    </section>
  );
}

export function Placeholder({ children }: { children: string }) {
  return (
    <span className="font-semibold text-red-700">{children}</span>
  );
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <article className="bg-beige-200 px-6 py-28 md:px-14">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-block text-[12px] font-semibold uppercase tracking-[0.12em] text-forest-700 transition-colors hover:text-forest-900"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="section-heading mb-8 text-[clamp(2rem,3vw,2.8rem)] text-forest-900">
          {title}
        </h1>

        <div className="space-y-10">{children}</div>
      </div>
    </article>
  );
}
