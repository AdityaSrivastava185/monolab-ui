"use client";

interface ComingSoonBadgeProps {
  /**
   * "compact" - Just the badge (for homepage cards)
   * "full" - Badge + helper description (for component detail pages)
   */
  variant?: "compact" | "full";
}

export function ComingSoonBadge({ variant = "full" }: ComingSoonBadgeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4">
      <div className="relative">
        {/* Glowing effect - light blue */}
        <div className="absolute -inset-1 rounded-full bg-sky-400 opacity-60 blur-sm animate-pulse" />

        {/* Badge */}
        <span className="relative inline-flex items-center gap-2 rounded-full bg-sidebar-primary px-3 py-1.5 text-xs font-medium text-sidebar-primary-foreground border border-sky-400/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
          </span>
          Coming Soon
        </span>
      </div>

      {/* Helper description - only shown on detail pages (full variant) */}
      {variant === "full" && (
        <div className="text-center max-w-sm space-y-2">
          <p className="text-sm text-foreground/60">
            We&apos;re currently developing the variants for this component.
          </p>
          <p className="text-xs text-foreground/40">
            Thank you for your patience — keep building! 🚀
          </p>
        </div>
      )}
    </div>
  );
}
