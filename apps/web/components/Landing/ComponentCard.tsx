import Link from "next/link";

interface ComponentCardProps {
  /** Component slug for routing */
  slug: string;
  /** Display title */
  title: string;
  /** Short description */
  description: string;
  /** Component category */
  category: string;
  /** Preview content */
  children: React.ReactNode;
}

export function ComponentCard({
  slug,
  title,
  description,
  category,
  children,
}: ComponentCardProps) {
  return (
    <Link
      href={`/components/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/10 bg-muted transition-all hover:border-border/20 hover:shadow-lg"
    >
      {/* Preview Area */}
      <div className="flex min-h-35 items-center justify-center p-6">
        {children}
      </div>
      {/* Info */}
      <div className="border-t border-border/10 bg-card p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <span className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/60">
            {category}
          </span>
        </div>
        <p className="text-xs text-foreground/70">{description}</p>
      </div>
    </Link>
  );
}
