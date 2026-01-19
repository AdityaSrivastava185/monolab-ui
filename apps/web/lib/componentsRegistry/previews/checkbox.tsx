/**
 * Checkbox Preview Component
 * Used in the component card on the homepage
 */
export const CheckboxPreview = () => (
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2">
      <div className="flex h-4 w-4 items-center justify-center rounded border-2 border-border bg-foreground">
        <svg
          className="h-2.5 w-2.5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-xs text-foreground/70">Selected</span>
    </label>
    <label className="flex items-center gap-2">
      <div className="h-4 w-4 rounded border-2 border-border/20" />
      <span className="text-xs text-foreground/60">Unselected</span>
    </label>
  </div>
);
