/**
 * Accordion Preview Component
 * Used in the component card on the homepage
 */
export const AccordionPreview = () => (
  <div className="w-full">
    <div className="flex items-center justify-between border-b border-border/10 py-2">
      <span className="text-xs font-medium text-foreground">Section 1</span>
      <span className="text-foreground/60">−</span>
    </div>
    <div className="py-2 text-[10px] text-foreground/70">
      Content goes here...
    </div>
    <div className="flex items-center justify-between border-b border-border/10 py-2">
      <span className="text-xs font-medium text-foreground">Section 2</span>
      <span className="text-foreground/60">+</span>
    </div>
  </div>
);
