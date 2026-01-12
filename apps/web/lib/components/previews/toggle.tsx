/**
 * Toggle Preview Component
 * Used in the component card on the homepage
 */
export const TogglePreview = () => (
  <div className="flex items-center gap-3">
    <div className="relative h-6 w-10 rounded-full bg-foreground">
      <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-card" />
    </div>
    <span className="text-xs text-foreground/60">Enabled</span>
  </div>
);
