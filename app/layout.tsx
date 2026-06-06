import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Profil Vermögensmanagement GmbH - Unabhängige Vermögensverwaltung Berlin",
  description:
    "Unabhängige Vermögensverwaltung in Berlin. Keine Provisionen, keine Interessenkonflikte. Persönliche Beratung für private und institutionelle Anleger seit 1998.",
  keywords:
    "Vermögensverwaltung Berlin, unabhängige Vermögensberatung, Finanzplanung Berlin, Stefan Affeld, Portfolioverwaltung Berlin",
  openGraph: {
    title: "Profil Vermögensmanagement GmbH",
    description: "Unabhängige Vermögensverwaltung in Berlin seit 1998.",
    url: "https://www.profilberlin.de",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.profilberlin.de",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
