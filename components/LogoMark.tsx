import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  showText?: boolean;
  href?: string;
  className?: string;
}

const sizes = {
  sm: {
    box: "h-[30px] w-[30px] border",
    circle: "h-[18px] w-[18px] border",
    letter: "text-[8px]",
    top: "text-[10px]",
    sub: "text-[8px]",
  },
  md: {
    box: "h-9 w-9 border-[1.5px]",
    circle: "h-[22px] w-[22px] border-[1.5px]",
    letter: "text-[9px]",
    top: "text-[11px]",
    sub: "text-[8px]",
  },
  lg: {
    box: "h-[100px] w-[100px] border",
    circle: "h-[66px] w-[66px] border",
    letter: "text-[11px]",
    top: "text-[11px]",
    sub: "text-[8px]",
  },
};

export default function LogoMark({
  size = "md",
  dark = false,
  showText = true,
  href = "/",
  className,
}: LogoMarkProps) {
  const s = sizes[size];

  const borderColor = dark
    ? "border-beige-200/25"
    : "border-forest-700";
  const letterColor = dark
    ? "text-beige-200/60"
    : "text-forest-700";
  const letterBg = dark ? "bg-forest-800" : "bg-beige-200";
  const topColor = dark ? "text-beige-200" : "text-forest-800";
  const subColor = dark ? "text-beige-200/30" : "text-mid";

  const content = (
    <div className={cn("flex items-center gap-3.5", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center",
          s.box,
          borderColor
        )}
        aria-hidden="true"
      >
        <div
          className={cn(
            "absolute rounded-full",
            s.circle,
            borderColor
          )}
        />
        <span
          className={cn(
            "relative z-10 px-px font-extrabold tracking-wide",
            s.letter,
            letterColor,
            letterBg
          )}
        >
          P
        </span>
      </div>
      {showText && (
        <div className="flex flex-col gap-px">
          <span
            className={cn(
              "font-bold uppercase tracking-nav",
              s.top,
              topColor
            )}
          >
            Profil
          </span>
          <span
            className={cn(
              "font-light uppercase tracking-[0.22em]",
              s.sub,
              subColor
            )}
          >
            Vermögensmanagement
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="no-underline"
        aria-label="Profil Vermögensmanagement — Startseite"
      >
        {content}
      </Link>
    );
  }

  return content;
}
