import { ComponentCard } from "./ComponentCard";
import { getAvailableComponents } from "@/lib/componentsRegistry/registry";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="relative w-full overflow-hidden px-5 py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <SectionHeader count={allComponents.length} />

        {/* Bento Grid - 4 columns on lg */}
        <div className="relative mt-8 grid w-full grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
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

        {/* Explore All Link */}
        <Link
          href="/components"
          className="group mt-5 flex items-center justify-center gap-1 text-sm font-semibold transition-all ease-in-out hover:opacity-60"
        >
          Explore all components
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
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
        <h2 className="max-w-lg px-5 text-[28px] font-semibold leading-[28px] tracking-tighter md:text-[38px] md:leading-[42px]">
          Refined components,
        </h2>
        <h2 className="max-w-lg px-5 text-[28px] font-semibold leading-[28px] tracking-tighter md:text-[38px] md:leading-[42px]">
          Zero Overhead
        </h2>
        <p className="text-sm tracking-tight text-foreground/60 md:text-base">
          <span className="block ">
            Copy-paste components with no extra packages.
          </span>
          <span className="block max-w-3/4 mx-auto">
            Drop them into your Next.js + Tailwind projects or pair them with
            your projects
          </span>
        </p>
      </div>
    </div>
  );
}
