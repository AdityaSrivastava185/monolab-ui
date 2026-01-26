import { type ReactNode } from "react";

export type BadgeVariant = "stateless" | "stateful";

export function Badge({
  children,
  variant = "stateless",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  const base =
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";

  const variantClasses: Record<BadgeVariant, string> = {
    stateless: "bg-muted text-foreground/90 border border-border/10",
    stateful: "bg-emerald-600 text-white",
  };

  return (
    <span className={`${base} ${variantClasses[variant]}`}>{children}</span>
  );
}

export default Badge;
