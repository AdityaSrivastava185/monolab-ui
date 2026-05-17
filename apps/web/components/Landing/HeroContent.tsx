"use client";

import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroContent() {
  return (
    <div className="relative px-3 py-4 sm:px-4 sm:py-5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="flex w-full flex-col items-center gap-3 px-2 py-6 text-center sm:px-4 sm:py-8">
          <div
            className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 font-medium text-muted-foreground backdrop-blur-sm sm:px-4"
            style={{ fontSize: "clamp(0.7rem, 2.1vw, 0.8rem)" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-foreground/70" />
            <span className="truncate">Brought by the maker of monolabui</span>
            {/* <ArrowRight className="h-3.5 w-3.5" /> */}
          </div>

          <h1
            className="max-w-4xl text-balance font-semibold tracking-tight text-primary"
            style={{
              fontSize: "clamp(1.75rem, 7vw, 3.35rem)",
              lineHeight: "clamp(2rem, 7.5vw, 3.7rem)",
            }}
          >
            The Professional's Choice 
            <br />
            for Design System
          </h1>

          <p
            className="max-w-3xl text-pretty text-foreground"
            style={{
              fontSize: "clamp(0.92rem, 2.8vw, 1.2rem)",
              lineHeight: "clamp(1.35rem, 3.8vw, 1.8rem)",
            }}
          >
            A carefully crafted set of components and patterns for building
            high-quality product interfaces. Customize, extend, and make it your
            own.
          </p>

          <div className="mt-1 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/components"
              className="group inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground px-5 font-medium text-background transition-all hover:opacity-90 sm:w-auto"
              style={{ fontSize: "clamp(0.8rem, 2.3vw, 0.92rem)" }}
            >
              Start Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="https://github.com/AdityaSrivastava185/monolab-ui"
              target="_blank"
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border/60 bg-background/70 px-5 font-medium text-foreground transition-colors hover:bg-muted/50 sm:w-auto"
              style={{ fontSize: "clamp(0.8rem, 2.3vw, 0.92rem)" }}
            >
              <Github className="h-4 w-4" />
              Star on Github
            </Link>
          </div>

          <p
            className="text-muted-foreground"
            style={{ fontSize: "clamp(0.7rem, 2vw, 0.8rem)" }}
          >
            No sign-up required · Free forever · MIT License
          </p>
        </div>
      </div>
    </div>
  );
}
