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
      viewBox="0 0 80 74"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ring center at (40, 32), r=22. Text sits at ring bottom, not centered. */}
      <path
        d="M 49.6 12.2 A 22 22 0 1 1 30.4 12.2"
        fill="none"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <text
        x="40"
        y="53"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="16"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        PROFIL
      </text>
    </svg>
  );
}

function LogoFull({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 220 130"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ring center at (110, 40), r=35. Text sits at ring bottom. */}
      <path
        d="M 125.4 8.5 A 35 35 0 1 1 94.6 8.5"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <text
        x="110"
        y="73"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        PROFIL
      </text>
      <text
        x="110"
        y="100"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="0.28em"
      >
        VERMÖGENS
      </text>
      <text
        x="110"
        y="116"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="8"
        fontWeight="400"
        letterSpacing="0.18em"
      >
        MANAGEMENT · GmbH
      </text>
    </svg>
  );
}

const sizes = {
  icon: {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-24 w-auto",
    xl: "h-40 w-auto",
  },
  full: {
    sm: "h-10 w-auto",
    md: "h-12 w-auto",
    lg: "h-20 w-auto",
    xl: "h-28 w-auto",
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
