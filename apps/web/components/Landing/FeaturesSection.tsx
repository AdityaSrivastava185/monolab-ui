import React from "react";
import {
  Zap,
  Copy,
  Paintbrush,
  Code2,
  ChevronRight,
  Check,
  Terminal,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Copy & Paste",
    description:
      "No npm installs, no dependencies. Just copy the component code directly into your project and start using it.",
  },
  {
    number: "02",
    title: "Fully Customizable",
    description:
      "Every component lives in your codebase. Modify styles, behavior, and structure to match your exact needs.",
  },
  {
    number: "03",
    title: "Production Ready",
    description:
      "Built with TypeScript & accessibility in mind. Responsive, dark mode ready, and thoroughly tested.",
  },
];

// Copy Code Illustration
function CopyCodeIllustration() {
  return (
    <div className="relative flex h-48 items-center justify-center">
      {/* Outer ring */}
      <div className="absolute h-44 w-44 rounded-full border border-dashed border-zinc-700/50" />
      {/* Middle ring */}
      <div className="absolute h-32 w-32 rounded-full border border-dashed border-zinc-700/30" />
      {/* Inner ring */}
      <div className="absolute h-20 w-20 rounded-full border border-dashed border-zinc-700/20" />

      {/* Center MonoLab badge */}
      <div className="z-10 flex h-14 w-28 items-center justify-center rounded-lg bg-zinc-800 shadow-lg">
        <span className="text-sm font-medium text-zinc-200">MonoLab</span>
      </div>

      {/* Copy icon - top right */}
      <div className="absolute -top-1 right-12 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 shadow-md">
        <Copy className="h-4 w-4 text-emerald-400" />
      </div>

      {/* Code icon - top left */}
      <div className="absolute left-10 top-6 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 shadow-md">
        <Code2 className="h-4 w-4 text-blue-400" />
      </div>

      {/* Check icon - bottom */}
      <div className="absolute bottom-2 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-lg bg-zinc-800 shadow-md">
        <Check className="h-4 w-4 text-green-400" />
      </div>
    </div>
  );
}

// Customization Illustration
function CustomizationIllustration() {
  const variants = [
    { name: "Default", color: "bg-white", active: false },
    { name: "Primary", color: "bg-blue-500", active: true },
    { name: "Success", color: "bg-emerald-500", active: true },
  ];

  return (
    <div className="flex flex-col gap-3 px-3 py-4">
      {variants.map((variant, idx) => (
        <div key={idx} className="flex items-center gap-3 text-xs">
          {/* Toggle */}
          <div
            className={`h-5 w-9 rounded-full p-0.5 ${variant.active ? "bg-zinc-600" : "bg-zinc-800"}`}
          >
            <div
              className={`h-4 w-4 rounded-full transition-transform ${variant.active ? "translate-x-4 bg-white" : "translate-x-0 bg-zinc-600"}`}
            />
          </div>
          {/* Variant name */}
          <span className="w-16 text-zinc-400">{variant.name}</span>
          {/* Color preview */}
          <div className="flex items-center gap-2">
            <div
              className={`h-6 w-6 rounded ${variant.color} border border-zinc-700`}
            />
            <div className="flex gap-1">
              <div className="h-6 w-12 rounded border border-zinc-700 bg-zinc-800/50" />
              <div className="h-6 w-8 rounded border border-zinc-700 bg-zinc-800/50" />
            </div>
            <Paintbrush className="h-3 w-3 text-zinc-500" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Production Ready Illustration
function ProductionReadyIllustration() {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Terminal header */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-500/70" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <div className="h-2 w-2 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 text-[10px] text-zinc-500">terminal</span>
      </div>

      {/* Code preview */}
      <div className="flex flex-col gap-1.5 rounded-lg bg-zinc-800/50 p-3 font-mono text-[10px]">
        <div className="flex items-center gap-2">
          <Terminal className="h-3 w-3 text-zinc-500" />
          <span className="text-zinc-500">$</span>
          <span className="text-emerald-400">npx tsc --noEmit</span>
        </div>
        <div className="text-zinc-400">✓ No TypeScript errors</div>
        <div className="flex items-center gap-2 pt-1">
          <Terminal className="h-3 w-3 text-zinc-500" />
          <span className="text-zinc-500">$</span>
          <span className="text-blue-400">npm run lint</span>
        </div>
        <div className="text-zinc-400">✓ All checks passed</div>
      </div>

      {/* Feature badges */}
      <div className="flex flex-wrap justify-center gap-2">
        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
          TypeScript
        </span>
        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
          A11y
        </span>
        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
          Dark Mode
        </span>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const illustrations: Array<() => React.JSX.Element> = [
    CopyCodeIllustration,
    CustomizationIllustration,
    ProductionReadyIllustration,
  ];

  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5">
            <Zap className="h-3.5 w-3.5 text-zinc-400" />
            <span className="text-xs font-medium text-zinc-400">
              How it works
            </span>
          </div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building UIs made simple
          </h2>
          <p className="max-w-xl text-base text-zinc-400 sm:text-lg">
            A focused set of clean, accessible components that live in your
            codebase. Copy what you need, shape it to your product.
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex flex-col gap-4">
            <a
              href="/components"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              Browse Components
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="/docs"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Read Docs
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Illustration = illustrations[index]!;
            return (
              <div
                key={feature.number}
                className="group relative flex flex-col rounded-2xl border border-border bg-gradient-to-b from-muted/30 to-background p-6 transition-all hover:border-zinc-700"
              >
                {/* Number Badge */}
                <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-md bg-zinc-800 text-xs font-medium text-zinc-400">
                  {feature.number}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>

                {/* Illustration */}
                <div className="mt-auto rounded-xl border border-zinc-800 bg-zinc-900/50">
                  <Illustration />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
