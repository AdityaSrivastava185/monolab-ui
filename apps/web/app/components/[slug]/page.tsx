import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getComponentBySlug,
  getAllComponentSlugs,
} from "@/lib/components/registry";
import { Navbar } from "@/components/Navbar/Navbar";
import { CopyButton } from "@/components/CopyButton";

/**
 * Generate static params for all component pages
 */
export async function generateStaticParams() {
  const slugs = getAllComponentSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    return {
      title: "Component Not Found | monolab(ui)",
    };
  }

  return {
    title: `${component.title} | monolab(ui)`,
    description: component.longDescription,
    keywords: component.tags,
  };
}

interface ComponentPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            {component.title}
          </h1>
          <p className="mx-auto max-w-2xl text-base text-foreground/50 md:text-lg">
            {component.longDescription}
          </p>
        </header>

        {/* Variants Grid */}
        {component.variants && component.variants.length > 0 ? (
          <div className="grid grid-cols-1 border-t border-border/10 md:grid-cols-2 lg:grid-cols-3">
            {component.variants.map((variant, index) => (
              <VariantCell
                key={variant.id}
                index={index}
                totalCount={component.variants?.length ?? 0}
                code={variant.code}
              >
                {variant.preview}
              </VariantCell>
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 items-center justify-center rounded-2xl border border-border/10 bg-card">
            <p> The variants are under development </p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <h2 className="mb-3 text-2xl font-medium text-foreground md:text-3xl">
            Didn&apos;t find what you were looking for?
          </h2>
          <p className="mx-auto max-w-md text-sm text-foreground/40">
            Explore the original Origin UI or contribute by
            <br />
            suggesting new components and improvements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#components"
              className="rounded-full border border-border/20 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Browse Components
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Contribute
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

/**
 * Individual variant cell with borders
 */
function VariantCell({
  children,
  index,
  totalCount,
  code,
}: {
  children: React.ReactNode;
  index: number;
  totalCount: number;
  code: string;
}) {
  const cols = 3;
  const isRightEdgeLg = (index + 1) % cols === 0;
  const isRightEdgeMd = (index + 1) % 2 === 0;

  return (
    <div
      className={`
        group relative flex min-h-32 items-center justify-center p-8
        border-b border-border/10
        md:border-r md:border-border/10
        ${isRightEdgeMd ? "md:border-r-0" : ""}
        lg:border-r lg:border-border/10
        ${isRightEdgeLg ? "lg:border-r-0" : ""}
        transition-colors hover:bg-card/50
      `}
    >
      {children}
      {/* Copy button */}
      <CopyButton
        code={code}
        className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </div>
  );
}
