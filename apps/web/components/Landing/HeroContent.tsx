"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function HeroContent() {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  return (
    <div className=" flex flex-col items-center gap-2 px-6 py-8 text-center md:py-16] xl:gap-4">
      {/* Top Label */}
      <p className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden text-secondary-foreground [a&]:hover:bg-secondary/90 bg-muted">
        brought by the makers of MonoLab UI
      </p>

      {/* Main Headline */}
      <h1 className="text-primary leading-tighter text-3xl font-bold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
        minimal-layer for your codebase and system
      </h1>

      {/* Subtitle */}
      <p className="text-foreground mx-auto md:max-w-2/5 text-sm sm:text-lg">
        monoLab UI gives you a focused set of clean, accessible components that
        live in your codebase, not in a bundle. Copy the pieces you need, shape
        them to your product, and keep every line under your control.
      </p>

      {/* CTA Row */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 mt-2">
        <button
          onClick={() =>
            router.push("https://github.com/AdityaSrivastava185/monolab-ui")
          }
          className="w-full md:w-auto group flex items-center gap-3 rounded-xl border border-border/30 bg-card/50 px-5 py-3 backdrop-blur-sm transition-all hover:border-border/50 hover:bg-card/80 cursor-pointer"
        >
          give star on github
        </button>

        <Link
          href="/docs"
          className="w-full md:w-auto rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
        >
          Quick Start
        </Link>
      </div>
    </div>
  );
}
