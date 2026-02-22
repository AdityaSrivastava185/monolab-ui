"use client";

import { useState } from "react";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative px-6 py-16 lg:py-24">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Side - Content */}
        <div className="flex flex-col gap-6">
          {/* Top Badge */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-xs font-medium text-muted-foreground">
              Open Source UI Components
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            The minimal layer for your codebase
            
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg lg:text-xl">
            A focused set of clean, accessible components that live in your
            codebase. Copy what you need, shape it to your product, and keep
            every line under your control.
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex flex-col gap-4 w-full">
            <Link
              href="/components"
              className="w-full group flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start Building with Components
              <ArrowRight
                className={`h-4 w-4 transition-transform duration-200 ${isHovered ? "translate-x-0.5" : ""}`}
              />
            </Link>

            <Link
              href="https://github.com/AdityaSrivastava185/monolab-ui"
              target="_blank"
              className="w-full group flex items-center justify-center gap-2 rounded-full border border-border/50 bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-border hover:bg-muted/50"
            >
              <Github className="h-4 w-4" />
              View and Star on GitHub
            </Link>
          </div>

          {/* Trust indicators */}
          <p className="text-xs text-muted-foreground">
            No sign-up required · Free forever · MIT License
          </p>
        </div>

        {/* Right Side - Components Preview Image */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full">
            <Image
              src="/hero-image.png"
              alt="MonoLab UI Components Preview"
              width={1000}
              height={750}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
