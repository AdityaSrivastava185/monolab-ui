/**
 * Modal Preview Component
 * Used in the component card on the homepage
 */
export const ModalPreview = () => (
  <div className="w-full rounded-lg border border-border/10 bg-card p-3 shadow-lg">
    <div className="mb-2 flex items-center justify-between">
      <div className="h-2 w-12 rounded bg-foreground/20" />
      <span className="text-foreground/60">×</span>
    </div>
    <div className="h-2 w-full rounded bg-foreground/10" />
    <div className="mt-3 flex justify-end gap-2">
      <div className="h-4 w-12 rounded bg-foreground/10" />
      <div className="h-4 w-12 rounded bg-foreground" />
    </div>
  </div>
);
