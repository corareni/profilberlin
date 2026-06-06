import Link from "next/link";
import { cn } from "@/lib/utils";

const BRAND_GREEN = "#13543E";

interface ProfilLogoProps {
  variant?: "full" | "icon";
  theme?: "brand" | "light";
  size?: "sm" | "md" | "lg";
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
      {/* Large arc: upper-right (49°) CW through bottom to upper-left (131°) */}
      <path
        d="M 55.7 21.9 A 24 24 0 1 1 24.3 21.9"
        fill="none"
        stroke={color}
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      {/* Small top arc: upper-left (119°) CW through 12-o'clock to upper-right (61°) */}
      <path
        d="M 28.4 19 A 24 24 0 0 1 51.6 19"
        fill="none"
        stroke={color}
        strokeWidth="3.8"
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
      {/* Large arc: upper-right (49°) CW through bottom to upper-left (131°) */}
      <path
        d="M 156.2 19.8 A 40 40 0 1 1 103.8 19.8"
        fill="none"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {/* Small top arc: upper-left (119°) CW through 12-o'clock to upper-right (61°) */}
      <path
        d="M 110.6 15 A 40 40 0 0 1 149.4 15"
        fill="none"
        stroke={color}
        strokeWidth="5.5"
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
  },
  full: {
    sm: "h-12 w-auto min-w-[130px]",
    md: "h-14 w-auto min-w-[160px]",
    lg: "h-20 w-auto min-w-[220px]",
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
