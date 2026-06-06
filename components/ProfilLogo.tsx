import Link from "next/link";
import { cn } from "@/lib/utils";

const BRAND_GREEN = "#13543E";

interface ProfilLogoProps {
  variant?: "full" | "icon";
  theme?: "brand" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
}

function LogoIcon({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Single arc with open gap at top (300° arc, 60° gap centered at 12 o'clock) */}
      <path
        d="M 52 19.2 A 24 24 0 1 1 28 19.2"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text
        x="40"
        y="47"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="15.5"
        fontWeight="700"
        letterSpacing="0.13em"
      >
        PROFIL
      </text>
    </svg>
  );
}

function LogoFull({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 260 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Single arc with open gap at top (300° arc, 60° gap centered at 12 o'clock) */}
      <path
        d="M 150 15.4 A 40 40 0 1 1 110 15.4"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <text
        x="130"
        y="58"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="0.13em"
      >
        PROFIL
      </text>
      <text
        x="130"
        y="110"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="11"
        fontWeight="400"
        letterSpacing="0.3em"
      >
        VERMÖGENS
      </text>
      <text
        x="130"
        y="128"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="10"
        fontWeight="400"
        letterSpacing="0.2em"
      >
        MANAGEMENT · GmbH
      </text>
    </svg>
  );
}

const sizes = {
  icon: {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-24 w-24",
    xl: "h-40 w-40",
  },
  full: {
    sm: "h-12 w-auto min-w-[130px]",
    md: "h-14 w-auto min-w-[160px]",
    lg: "h-20 w-auto min-w-[220px]",
    xl: "h-28 w-auto min-w-[300px]",
  },
};

export default function ProfilLogo({
  variant = "full",
  theme = "brand",
  size = "md",
  href = "/",
  className,
}: ProfilLogoProps) {
  const color = theme === "light" ? "#faf7f2" : BRAND_GREEN;
  const sizeClass = sizes[variant][size];

  const logo =
    variant === "icon" ? (
      <LogoIcon color={color} className={cn(sizeClass, className)} />
    ) : (
      <LogoFull color={color} className={cn(sizeClass, className)} />
    );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0"
        aria-label="Profil Vermögensmanagement - Startseite"
      >
        {logo}
      </Link>
    );
  }

  return <div className={cn("inline-flex shrink-0", className)}>{logo}</div>;
}
