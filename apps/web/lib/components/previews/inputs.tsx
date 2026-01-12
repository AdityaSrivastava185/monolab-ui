/**
 * Inputs Preview Component
 * Used in the component card on the homepage
 */
export const InputsPreview = () => (
  <div className="flex w-full flex-col gap-2">
    <input
      type="text"
      placeholder="Enter email..."
      className="w-full rounded-lg border border-border/10 bg-muted px-3 py-2 text-xs text-foreground placeholder:text-foreground/50 focus:outline-none"
    />
    <input
      type="text"
      defaultValue="john@email.com"
      className="w-full rounded-lg border border-border/20 px-3 py-2 text-xs text-foreground focus:outline-none"
    />
  </div>
);
