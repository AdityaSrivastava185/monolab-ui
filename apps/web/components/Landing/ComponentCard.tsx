import Link from "next/link";
import { ComingSoonBadge } from "../ComingSoonBadge";

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
  /** Whether the component has variants built */
  hasVariants?: boolean;
  /** Column span for bento grid (1 or 2) */
  colSpan?: 1 | 2;
  /** Row span for bento grid (1 or 2) */
  rowSpan?: 1 | 2;
}

export function ComponentCard({
  slug,
  title,
  description,
  category,
  children,
  hasVariants,
  colSpan = 1,
  rowSpan = 1,
}: ComponentCardProps) {
  // Build dynamic grid classes based on colSpan and rowSpan
  const colSpanClass = colSpan === 2 ? "lg:col-span-2" : "col-span-1";
  const rowSpanClass = rowSpan === 2 ? "lg:row-span-2" : "row-span-1";

  return (
    <Link
      href={`/components/${slug}`}
      className={`group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border/30 bg-muted/30 transition-all duration-300 hover:border-border/60 hover:bg-muted/50 hover:shadow-xl ${colSpanClass} ${rowSpanClass}`}
    >
      {/* Badge Icon - Top Right */}
      <div className="absolute right-4 top-4 z-10">
        {!hasVariants ? <ComingSoonBadge variant="compact" /> : null}
      </div>

      {/* Preview Area - Takes most of the card */}
      <div className="flex flex-1 items-center justify-center p-8 transition-transform duration-300 group-hover:scale-[1.01]">
        <div className="scale-110">{children}</div>
      </div>

      {/* Title - Bottom with subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-5 pt-10">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{category}</p>
      </div>
    </Link>
  );
}
