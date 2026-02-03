import { getAvailableComponents } from "@/lib/componentsRegistry/registry";
import Link from "next/link";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Components | MonoLab UI",
  description: "Browse all available components in MonoLab UI",
};

export default function ComponentsPage() {
  const components = getAvailableComponents();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Header */}
      <header className="px-6 pb-6 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Minimal Accessibilities
            </h1>
            <span className="text-sm text-foreground/40">
              [{components.length}]
            </span>
          </div>
          <p className="max-w-md mt-2 text-sm text-foreground/50">
            Collection of minimal components that focus on essential interactions and accessibility and are easy to integrate into your projects.
          </p>
        </div>
      </header>

      {/* Components Grid */}
      <main className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((component) => (
              <ComponentGridCard
                key={component.slug}
                slug={component.slug}
                title={component.title}
                comingSoon={component.comingSoon}
              >
                {component.preview}
              </ComponentGridCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

interface ComponentGridCardProps {
  slug: string;
  title: string;
  hasVariants?: boolean;
  children: React.ReactNode;
  comingSoon?: boolean;
}

function ComponentGridCard({
  slug,
  title,
  comingSoon,
  children,
}: ComponentGridCardProps) {
  return (
    <Link
      href={`/components/${slug}`}
      className="group relative flex aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-border/10 bg-card transition-all duration-300 hover:border-border/20 hover:bg-card/80"
    >
      <div className="absolute right-3 top-3 z-10">
        {comingSoon && <ComingSoonBadge variant="compact" />}
      </div>

      {/* Preview Area */}
      <div className="flex flex-1 items-center justify-center p-8 transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="scale-100">{children}</div>
      </div>

      {/* Footer with Title and ID */}
      <div className="flex items-center justify-between border-t border-border/10 bg-background/30 px-4 py-3">
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span className="text-xs text-foreground/40">{slug}</span>
      </div>
    </Link>
  );
}
