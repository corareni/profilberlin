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
      <path
        d="M14 40 A26 26 0 0 1 34 18"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M66 40 A26 26 0 0 0 46 18"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M14 40 A26 26 0 0 0 34 62"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M66 40 A26 26 0 0 1 46 62"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x="40"
        y="46"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="13"
        fontWeight="800"
        letterSpacing="0.1em"
      >
        PROFIL
      </text>
    </svg>
  );
}

function LogoFull({ color, className }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 260 110"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 48 A56 56 0 0 1 82 18"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M236 48 A56 56 0 0 0 178 18"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M24 52 A56 56 0 0 0 82 82"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M236 52 A56 56 0 0 1 178 82"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text
        x="130"
        y="54"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="30"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        PROFIL
      </text>
      <text
        x="130"
        y="82"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="0.34em"
      >
        VERMÖGENS
      </text>
      <text
        x="130"
        y="100"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-montserrat), Montserrat, sans-serif"
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="0.2em"
      >
        MANAGEMENT • GmbH
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
    sm: "h-10 w-auto min-w-[120px]",
    md: "h-12 w-auto min-w-[150px]",
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
