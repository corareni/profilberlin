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
        "mb-7 inline-flex items-center gap-2.5 text-label",
        variant === "light"
          ? "text-beige-200 before:bg-beige-200/80"
          : "text-forest-600 before:bg-forest-600",
        "before:h-px before:w-5 before:content-['']",
        className
      )}
    >
      - {children}
    </div>
  );
}
