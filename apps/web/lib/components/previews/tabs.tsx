/**
 * Tabs Preview Component
 * Used in the component card on the homepage
 */
export const TabsPreview = () => (
  <div className="w-full">
    <div className="flex border-b border-border/10">
      <div className="border-b-2 border-border px-3 py-2 text-xs font-medium text-foreground">
        Tab 1
      </div>
      <div className="px-3 py-2 text-xs text-foreground/60">Tab 2</div>
      <div className="px-3 py-2 text-xs text-foreground/60">Tab 3</div>
    </div>
    <div className="py-3 text-[10px] text-foreground/70">Tab content...</div>
  </div>
);
