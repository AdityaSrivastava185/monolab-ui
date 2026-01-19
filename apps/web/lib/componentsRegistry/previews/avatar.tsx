/**
 * Avatar Preview Component
 * Used in the component card on the homepage
 */
export const AvatarPreview = () => (
  <div className="flex items-center gap-2">
    <div className="h-10 w-10 rounded-full bg-foreground" />
    <div className="h-10 w-10 rounded-full bg-foreground/60" />
    <div className="h-10 w-10 rounded-full bg-foreground/30" />
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-border/20">
      <span className="text-xs text-foreground/60">+</span>
    </div>
  </div>
);
