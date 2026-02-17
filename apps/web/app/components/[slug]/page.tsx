import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getComponentBySlug,
  getAllComponentSlugs,
} from "@/lib/componentsRegistry/registry";
import { Navbar } from "@/components/Navbar/Navbar";
import { VariantsGrid } from "@/components/VariantsGrid";

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
    <div className="min-h-screen">
      {/* <Navbar /> */}

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-primary leading-tighter text-3xl font-bold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter ">
            {component.title}
          </h1>
          <p className="text-foreground mx-auto max-w-4xl text-sm text-balance sm:text-lg">
            {component.longDescription}
          </p>
        </header>

        {/* Variants Grid */}
        {/* Choose sensible defaults for column counts per component */}
        <VariantsGrid
          variants={component.variants || []}
          gridCols={component.preferredGrid || { base: 1, md: 2, lg: 3 }}
        />

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <h2 className="mb-3 text-2xl font-medium text-foreground md:text-3xl">
            Didn&apos;t find what you were looking for?
          </h2>
          <p className="text-foreground mx-auto max-w-4xl text-sm text-balance sm:text-lg">
            Explore the original Origin UI or contribute by
            <br />
            suggesting new components and improvements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#components"
              className="rounded-full border border-border/20 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Browse Components
            </Link>
            <Link
              href="https://github.com/AdityaSrivastava185/monolab-ui"
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
