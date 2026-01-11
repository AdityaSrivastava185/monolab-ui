import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getComponentBySlug,
  getAllComponentSlugs,
} from "@/lib/components/registry";
import { Navbar } from "@/components/Navbar/Navbar";

/**
 * Generate static params for all component pages
 * This enables static generation for all component routes
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

      <main className="mx-auto max-w-4xl px-6 py-24">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-foreground/60">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/#components"
                className="transition-colors hover:text-foreground"
              >
                Components
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{component.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
              {component.category}
            </span>
            <span className="text-xs text-foreground/40">
              v{component.version}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {component.title}
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            {component.longDescription}
          </p>
        </header>

        {/* Tags */}
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {component.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/20 px-3 py-1 text-xs text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Preview */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Preview
          </h2>
          <div className="flex min-h-48 items-center justify-center rounded-2xl border border-border/10 bg-card p-8">
            {component.preview}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="rounded-2xl border border-border/10 bg-muted p-8 text-center">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Code Examples Coming Soon
          </h3>
          <p className="text-sm text-foreground/60">
            Full code examples with copy functionality will be available in the
            next update.
          </p>
        </section>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/#components"
            className="inline-flex items-center gap-2 rounded-full border border-border/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Components
          </Link>
        </div>
      </main>
    </div>
  );
}
