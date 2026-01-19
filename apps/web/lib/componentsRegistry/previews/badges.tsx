/**
 * Badges Preview Component
 * Used in the component card on the homepage
 */
export const BadgesPreview = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-medium text-background">
      New
    </span>
    <span className="rounded-full border border-border/20 px-3 py-1 text-[10px] font-medium text-foreground">
      Beta
    </span>
    <span className="rounded-full bg-foreground/10 px-3 py-1 text-[10px] font-medium text-foreground/70">
      Soon
    </span>
  </div>
);
