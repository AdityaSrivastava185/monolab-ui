interface FloatingCardProps {
  children: React.ReactNode;
  position: string;
  title?: string;
  subtitle?: string;
  hoverRotate?: "left" | "right" | "none";
}

export function FloatingCard({
  children,
  position,
  title,
  subtitle,
  hoverRotate = "none",
}: FloatingCardProps) {
  const rotateClass =
    hoverRotate === "left"
      ? "hover:-rotate-1"
      : hoverRotate === "right"
        ? "hover:rotate-1"
        : "";

  return (
    <div
      className={`absolute z-10 transition-transform duration-300 hover:scale-105 ${rotateClass} ${position}`}
    >
      {children}
      {title && (
        <p className="mt-3 text-center text-xs font-semibold text-foreground/70">
          {title}
        </p>
      )}
      {subtitle && (
        <p className="text-center text-[10px] uppercase tracking-widest text-foreground/60">
          {subtitle}
        </p>
      )}
    </div>
  );
}
