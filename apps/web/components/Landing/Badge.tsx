export function Badge() {
  return (
    <div className="absolute left-1/2 top-28 z-10 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-md">
        <span className="text-[10px] font-medium uppercase tracking-widest text-foreground/60">
          Tailwind CSS v4
        </span>
      </div>
    </div>
  );
}
