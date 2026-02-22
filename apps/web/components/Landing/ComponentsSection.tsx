import { ComponentCard } from "./ComponentCard";
import { getAvailableComponents } from "@/lib/componentsRegistry/registry";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

// Define bento grid layout pattern
// Each item specifies: colSpan (1 or 2), rowSpan (1 or 2) for lg screens
type BentoSize = {
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
};

const bentoLayout: BentoSize[] = [
  { colSpan: 1, rowSpan: 1 }, // 0
  { colSpan: 2, rowSpan: 1 }, // 1
  { colSpan: 1, rowSpan: 2 }, // 2
  { colSpan: 2, rowSpan: 1 }, // 3
  { colSpan: 1, rowSpan: 1 }, // 4
  { colSpan: 2, rowSpan: 1 }, // 5
  { colSpan: 2, rowSpan: 2 }, // 6
  { colSpan: 2, rowSpan: 1 }, // 7
  { colSpan: 1, rowSpan: 1 }, // 8
  { colSpan: 1, rowSpan: 1 }, // 9
  { colSpan: 2, rowSpan: 1 }, // 10
  { colSpan: 1, rowSpan: 1 }, // 11
  { colSpan: 1, rowSpan: 1 }, // 12
  { colSpan: 2, rowSpan: 1 }, // 13
];

export function ComponentsSection() {
  const allComponents = getAvailableComponents();
  // Show only first 7 components on landing page
  const components = allComponents.slice(0, 7);

  const getBentoSize = (index: number): BentoSize => {
    return (
      bentoLayout[index % bentoLayout.length] ?? { colSpan: 1, rowSpan: 1 }
    );
  };

  return (
    <section
      id="components"
      className="relative w-full overflow-hidden py-16 "
    >
      <div className="mx-auto">
        {/* Section Header - Cal.com style */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5">
            <Layers className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-xs font-medium text-muted-foreground">
              {allComponents.length}+ components
            </span>
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Refined components, zero overhead
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Copy-paste components with no extra packages. Drop them into your
            Next.js + Tailwind projects.
          </p>
        </div>

        {/* Bento Grid - 4 columns on lg */}
        <div className="relative grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {components.map((component, index) => {
            const size = getBentoSize(index);
            return (
              <ComponentCard
                key={component.slug}
                slug={component.slug}
                title={component.title}
                description={component.description}
                category={component.category}
                hasVariants={
                  Array.isArray(component.variants) &&
                  component.variants.length > 0
                }
                colSpan={size.colSpan}
                rowSpan={size.rowSpan}
              >
                {component.preview}
              </ComponentCard>
            );
          })}
        </div>

        {/* Explore All Link - Cal.com style button */}
        <div className="mt-12 flex items-center justify-center">
          <Link
            href="/components"
            className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            Explore all components
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Count Badge */}
      <div className="rounded-lg bg-muted px-3 py-1">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/60">
          {count}+ AND COUNTING
        </p>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-primary leading-tighter text-xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-4xl xl:tracking-tighter max-w-4xl">
          refined components , zero overhead
        </h2>
        <p className="text-foreground mx-auto max-w-4xl text-base text-balance sm:text-lg">
          <span className="">
            copy-paste components with no extra packages.drop them into your
            Next.js + Tailwind projects or pair them with your projects
          </span>
        </p>
      </div>
    </div>
  );
}
