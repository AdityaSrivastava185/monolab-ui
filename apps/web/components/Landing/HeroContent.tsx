"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export function HeroContent() {
  const [copied, setCopied] = useState(false);
  const router = useRouter();


  return (
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6">
      {/* Top Label */}
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
        Brought by the makers of MonoLab UI
      </p>

      {/* Main Headline */}
      <h1 className="mb-2 text-center text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
        MINIMAL-LAYER
      </h1>
      <h1 className="mb-6 text-center text-5xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
        FOR YOUR CODEBASE
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl mx-auto text-center mb-12 text-sm font-medium uppercase tracking-[0.15em] text-primary/80">
        MonoLab UI gives you a focused set of clean, accessible components that live in your codebase, not in a bundle. Copy the pieces you need, shape them to your product, and keep every line under your control.
      </p>

      {/* CTA Row */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* Install Command */}
        <button
          onClick={() => router.push("https://github.com/AdityaSrivastava185/monolab-ui")}
          className="group flex items-center gap-3 rounded-full border border-border/30 bg-card/50 px-5 py-3 backdrop-blur-sm transition-all hover:border-border/50 hover:bg-card/80"
        >
          <code className="text-sm text-foreground/70">
            <span className="text-foreground/50">npx</span> give a star
            <span className="text-primary">/github</span>
          </code>
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-foreground/60" />
          )}
        </button>

        {/* Quick Start Button */}
        <Link
          href="/docs"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
        >
          Quick Start
        </Link>
      </div>
    </div>
  );
}
