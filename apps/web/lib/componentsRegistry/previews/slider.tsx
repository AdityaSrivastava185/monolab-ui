/**
 * Slider Preview Component
 * Used in the component card on the homepage
 */
export const SliderPreview = () => (
  <div className="flex w-full flex-col items-center gap-2">
    <span className="text-lg font-light text-foreground">75%</span>
    <div className="h-1 w-full rounded-full bg-foreground/10">
      <div className="h-1 w-3/4 rounded-full bg-foreground" />
    </div>
  </div>
);
