import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  variant?: "default" | "light";
  className?: string;
}

export default function SectionLabel({
  children,
  variant = "default",
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "mb-7 inline-flex items-center gap-2.5 text-[8px] font-bold uppercase tracking-label",
        variant === "light"
          ? "text-beige-200/30 before:bg-beige-200/20"
          : "text-forest-400 before:bg-forest-400",
        "before:h-px before:w-5 before:content-['']",
        className
      )}
    >
      — {children}
    </div>
  );
}
