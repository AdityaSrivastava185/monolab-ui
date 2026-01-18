interface FloatingTagProps {
  label: string;
  position: string;
  delay?: string;
}

export function FloatingTag({
  label,
  position,
  delay = "0s",
}: FloatingTagProps) {
  return (
    <div
      className={`absolute hidden md:flex ${position} animate-float items-center rounded-full border border-border/30 bg-card px-4 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-border/50 hover:shadow-xl`}
      style={{ animationDelay: delay }}
    >
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}
