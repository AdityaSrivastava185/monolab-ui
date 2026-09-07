import Link from "next/link";

interface HeroCTAProps {
  className?: string;
  style?: React.CSSProperties;
}

export function HeroCTA({ className, style }: HeroCTAProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className || ""}`} style={style}>
      <Link
        href="/components"
        className="group w-full sm:w-auto rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        View Components
        <svg
          className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
      <Link
        href="/blocks"
        className="group w-full sm:w-auto rounded-xl border border-border/20 bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-accent hover:border-border/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Explore Blocks
      </Link>
    </div>
  );
}