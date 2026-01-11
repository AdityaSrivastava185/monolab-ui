import { ComponentCard } from "./ComponentCard";
import { getAvailableComponents } from "@/lib/components/registry";

export function ComponentsSection() {
  const components = getAvailableComponents();

  return (
    <section id="components" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionHeader />

        {/* Components Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <ComponentCard
              key={component.slug}
              slug={component.slug}
              title={component.title}
              description={component.description}
              category={component.category}
            >
              {component.preview}
            </ComponentCard>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="rounded-full border border-border/20 px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background">
            View All Components
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/60">
        Components
      </p>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Everything you need
      </h2>
      <p className="mx-auto max-w-md text-sm text-foreground/70">
        Copy and paste these components into your project. No dependencies, just
        clean Tailwind CSS code.
      </p>
    </div>
  );
}
