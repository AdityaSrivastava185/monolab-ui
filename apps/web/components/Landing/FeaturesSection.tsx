import React from "react";
import { Copy, Paintbrush, Zap, Code2 } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Copy,
    title: "Copy & Paste",
    description:
      "No npm installs, no dependencies. Just copy the component code directly into your project and start using it.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Fully Customizable",
    description:
      "Every component lives in your codebase. Modify styles, behavior, and structure to match your exact needs.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Production Ready",
    description:
      "Built with accessibility in mind. Responsive, dark mode ready, and thoroughly tested for real-world use.",
  },
  {
    number: "04",
    icon: Code2,
    title: "TypeScript First",
    description:
      "Full TypeScript support with proper types. Get autocomplete and type safety out of the box.",
  },
];

export function FeaturesSection() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5">
            <Zap className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-xs font-medium text-muted-foreground">
              How it works
            </span>
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, yet powerful
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Get started in minutes. No learning curve, no complex setup.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative rounded-2xl border border-border/50 bg-background p-8 transition-all hover:border-border hover:shadow-lg"
            >
              {/* Number */}
              <span className="absolute right-6 top-6 text-4xl font-bold text-muted/50">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
