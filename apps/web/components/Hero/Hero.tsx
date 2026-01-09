import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  Check,
  ChevronRight,
  ToggleRight,
  AlertCircle,
  LayoutTemplate,
} from "lucide-react";

const Hero = () => {
  return (
    <main className="relative px-4 sm:px-6">
      <div className="mx-auto w-full max-w-5xl pt-24 pb-32">
        {/* Tagline */}
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          By the makers of MonoLab
        </p>

        {/* Hero Title */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          A minimal layer for your codebase
        </h1>

        {/* Hero Description */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          MonoLab UI gives you a focused set of clean, accessible components
          that live in your codebase, not in a bundle. Copy the pieces you need,
          shape them to your product, and keep every line under your control.
        </p>

        {/* CTA Buttons */}
        <div className="mb-20 flex flex-wrap items-center gap-4">
          <Link
            href="/components"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore components
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Browse docs
          </Link>
        </div>

        {/* Component Boxes Grid - Headless UI Style */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Button Component */}
          <Link
            href="/components/button"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:border-white/20 "
          >
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-8">
              <button className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all group-hover:bg-indigo-400 group-hover:shadow-indigo-400/30">
                Button
              </button>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Button</span>
              <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/70" />
            </div>
          </Link>

          {/* Input Component */}
          <Link
            href="/components/input"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-white/20 "
          >
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-8">
              <div className="w-full max-w-[200px]">
                <label className="mb-1.5 block text-xs font-medium text-white/60">
                  Username
                </label>
                <div className="flex items-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/80">
                  <span className="text-white/40">@</span>
                  <span className="ml-1">johndoe</span>
                  <span className="ml-auto h-4 w-px animate-pulse bg-white/60" />
                </div>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Input</span>
              <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/70" />
            </div>
          </Link>

          {/* Select / Dropdown Component */}
          <Link
            href="/components/select"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-white/20 "
          >
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-8">
              <div className="w-full max-w-[180px]">
                <div className="flex items-center justify-between rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm">
                  <span className="text-white/80">Select option</span>
                  <ChevronDown className="h-4 w-4 text-white/40" />
                </div>
                {/* Dropdown preview */}
                <div className="mt-1 rounded-lg border border-white/20 bg-neutral-900 p-1 shadow-xl">
                  <div className="flex items-center gap-2 rounded-md bg-indigo-500/20 px-2.5 py-1.5 text-xs text-white">
                    <Check className="h-3 w-3 text-indigo-400" />
                    Option one
                  </div>
                  <div className="px-2.5 py-1.5 text-xs text-white/60">
                    Option two
                  </div>
                  <div className="px-2.5 py-1.5 text-xs text-white/60">
                    Option three
                  </div>
                </div>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Select</span>
              <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/70" />
            </div>
          </Link>

          {/* Accordion Component */}
          <Link
            href="/components/accordion"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-white/20 "
          >
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-4">
              <div className="w-full max-w-[220px] space-y-1">
                {/* Expanded item */}
                <div className="rounded-lg border border-white/20 bg-white/5">
                  <div className="flex items-center justify-between px-3 py-2 text-xs font-medium text-white">
                    What is your refund policy?
                    <ChevronDown className="h-3 w-3 rotate-180 text-white/40" />
                  </div>
                  <div className="border-t border-white/10 px-3 py-2 text-[10px] leading-relaxed text-white/50">
                    We'll refund you in full if you're unhappy.
                  </div>
                </div>
                {/* Collapsed item */}
                <div className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-white/60">
                  Do you offer support?
                  <ChevronDown className="h-3 w-3 text-white/30" />
                </div>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">
                Accordion
              </span>
              <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/70" />
            </div>
          </Link>

          {/* Switch Component */}
          <Link
            href="/components/switch"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-white/20 "
          >
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-8">
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/60">Enable feature</span>
                <div className="relative h-6 w-11 rounded-full bg-indigo-500 p-0.5 shadow-lg shadow-indigo-500/25">
                  <div className="h-5 w-5 translate-x-5 rounded-full bg-white shadow-sm transition-transform" />
                </div>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Switch</span>
              <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/70" />
            </div>
          </Link>

          {/* Checkbox Component */}
          <Link
            href="/components/checkbox"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:border-white/20 "
          >
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-8">
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-2.5">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-white/30 bg-indigo-500">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-white/80">Accept terms</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2.5">
                  <div className="h-4 w-4 rounded border border-white/30 bg-white/5" />
                  <span className="text-xs text-white/60">
                    Subscribe to newsletter
                  </span>
                </label>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Checkbox</span>
              <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/70" />
            </div>
          </Link>

          {/* Coming Soon - Alerts (Full Width) */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 opacity-60 sm:col-span-2 lg:col-span-2">
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-6">
              <div className="flex w-full max-w-[280px] items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <div>
                  <p className="text-xs font-medium text-amber-200">Warning</p>
                  <p className="mt-0.5 text-[10px] text-amber-200/70">
                    This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Alerts</span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/50">
                Coming soon
              </span>
            </div>
          </div>

          {/* Coming Soon - Home Pages */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 opacity-60">
            {/* Component Preview */}
            <div className="mb-6 flex flex-1 items-center justify-center py-6">
              <div className="flex h-20 w-28 flex-col rounded-lg border border-white/20 bg-white/5 p-2">
                <div className="mb-2 h-1.5 w-full rounded-full bg-white/20" />
                <div className="flex flex-1 gap-1">
                  <div className="h-full w-1/3 rounded bg-white/10" />
                  <div className="flex h-full flex-1 flex-col gap-1">
                    <div className="h-1 w-full rounded-full bg-white/15" />
                    <div className="h-1 w-3/4 rounded-full bg-white/10" />
                    <div className="h-1 w-1/2 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
            {/* Component Name */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">
                Home Pages
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/50">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
