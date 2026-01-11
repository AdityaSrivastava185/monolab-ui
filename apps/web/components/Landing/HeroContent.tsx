export function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6">
      {/* Hero Title */}
      <h1 className="mb-4 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        A minimal layer
        <br />
        <span className="text-foreground/60">for your codebase</span>
      </h1>

      {/* Hero Description */}
      <p className="mb-10 max-w-md text-center text-sm text-foreground/70 md:text-base">
       MonoLab UI gives you a focused set of clean, accessible components that live in your codebase, not in a bundle. Copy the pieces you need, shape them to your product, and keep every line under your control.

      </p>

      {/* Product Card */}
      <ProductCard />
    </div>
  );
}

function ProductCard() {
  const scrollToComponents = () => {
    document
      .getElementById("components")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-md rounded-3xl bg-card p-6 shadow-2xl">
      <h2 className="mb-4 font-mono text-2xl font-bold tracking-tight text-foreground">
        monolab(ui)
      </h2>

      <div className="mb-4 space-y-2">
        <FeatureItem icon="components" text="50+ Components" />
        <FeatureItem icon="bolt" text="Copy & Paste Ready" />
        <FeatureItem icon="check" text="Zero Dependencies" />
      </div>

      <div className="flex items-center justify-between border-t border-border/10 pt-4">
        <span className="text-xs uppercase tracking-wider text-foreground/60">
          Tailwind CSS
        </span>
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-foreground" />
          <div className="h-8 w-8 rounded-full border-2 border-border/20 bg-card" />
        </div>
      </div>

      <button
        onClick={scrollToComponents}
        className="mt-4 w-full rounded-full bg-foreground py-3 text-sm font-medium uppercase tracking-wider text-background transition-transform hover:scale-[1.02]"
      >
        Browse Components
      </button>
    </div>
  );
}

interface FeatureItemProps {
  icon: "components" | "bolt" | "check";
  text: string;
}

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-foreground/60">
      {icon === "components" && (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        </svg>
      )}
      {icon === "bolt" && (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )}
      {icon === "check" && (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )}
      <span className="uppercase tracking-wider">{text}</span>
    </div>
  );
}
