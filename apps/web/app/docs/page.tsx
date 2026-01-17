import Link from "next/link";
import { ArrowRight, Copy, Palette, Zap } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Introduction
        </h1>
        <p className="text-lg text-foreground/60">
          A minimal, copy-paste component library for React. No dependencies, no
          complexity—just beautiful components you own.
        </p>
      </header>

      {/* Philosophy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Philosophy</h2>
        <p className="text-foreground/70 leading-relaxed">
          MonoLab UI is not a traditional component library. Instead of
          installing packages and dealing with dependency hell, you simply{" "}
          <strong className="text-foreground">copy the code</strong> into your
          project. This gives you:
        </p>
        <ul className="mt-4 space-y-3 text-foreground/70">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-xs">
              ✓
            </span>
            <span>
              <strong className="text-foreground">Full ownership</strong> —
              Modify components however you need
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-xs">
              ✓
            </span>
            <span>
              <strong className="text-foreground">Zero dependencies</strong> —
              No breaking changes from updates
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-xs">
              ✓
            </span>
            <span>
              <strong className="text-foreground">Lightweight</strong> — Only
              include what you actually use
            </span>
          </li>
        </ul>
      </section>

      {/* Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Features</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={<Copy className="h-5 w-5" />}
            title="Copy & Paste"
            description="Browse, find what you need, and copy directly into your codebase."
          />
          <FeatureCard
            icon={<Palette className="h-5 w-5" />}
            title="Fully Themeable"
            description="CSS variables make customization effortless. Dark mode included."
          />
          <FeatureCard
            icon={<Zap className="h-5 w-5" />}
            title="Modern Stack"
            description="Built with React 19, TypeScript, and Tailwind CSS v4."
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Next.js 16",
            "Lucide Icons",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/20 bg-card px-3 py-1 text-sm text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Quick Start</h2>
        <p className="text-foreground/70">
          Ready to add beautiful components to your project?
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            Installation Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#components"
            className="inline-flex items-center gap-2 rounded-full border border-border/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Browse Components
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border/10 bg-card/50 p-5">
      <div className="mb-3 inline-flex rounded-lg bg-foreground/5 p-2 text-foreground/70">
        {icon}
      </div>
      <h3 className="mb-1 font-medium text-foreground">{title}</h3>
      <p className="text-sm text-foreground/50">{description}</p>
    </div>
  );
}
