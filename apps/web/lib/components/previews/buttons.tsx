/**
 * Buttons Preview Component
 * Used in the component card on the homepage
 */
export const ButtonsPreview = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <button className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
      Primary
    </button>
    <button className="rounded-full border border-border/20 px-4 py-2 text-xs font-medium text-foreground">
      Secondary
    </button>
  </div>
);
