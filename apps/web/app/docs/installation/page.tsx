import { CodeBlock } from "@/components/Docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Installation
        </h1>
        <p className="text-base text-muted-foreground">
          Set up your project to use MonoLab UI components in minutes.
        </p>
      </header>

      {/* Prerequisites */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Prerequisites
        </h2>
        <p className="text-muted-foreground">
          MonoLab UI components are designed for modern Nextjs projects. Make
          sure you have:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
            Nextjs
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
            Tailwind CSS v4 (or v3 with minor adjustments)
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
            TypeScript
          </li>
        </ul>
      </section>

      {/* Step 1: Tailwind Setup */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted/40 text-sm font-semibold text-foreground">
            1
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Install Tailwind CSS
          </h2>
        </div>
        <p className="text-muted-foreground">
          If you haven&apos;t already, set up Tailwind CSS in your project:
        </p>
        <span className="text-muted-foreground">Visit - </span>{" "}
        <Link
          href="https://tailwindcss.com/docs/installation/framework-guides"
          className="text-foreground underline underline-offset-4"
        >
          Tailwind Official Installation Documentation
        </Link>
      </section>

      {/* Step 2: CSS Variables */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted/40 text-sm font-semibold text-foreground">
            2
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Add CSS Variables
          </h2>
        </div>
        <CodeBlock
          code={`@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.556 0 0);
}`}
          language="css"
          filename="globals.css"
        />
      </section>

      {/* Step 3: Utility Functions */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted/40 text-sm font-semibold text-foreground">
            3
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Add Utility Functions
          </h2>
        </div>
        <p className="text-muted-foreground">
          Create a utility file for className merging. Install dependencies
          first:
        </p>
        <CodeBlock
          code={`npm install clsx tailwind-merge`}
          language="bash"
          filename="Terminal"
        />
        <p className="text-muted-foreground">Then create the utility:</p>
        <CodeBlock
          code={`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
          language="typescript"
          filename="lib/utils.ts"
        />
      </section>

      {/* Step 4: Icons (Optional) */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted/40 text-sm font-semibold text-foreground">
            4
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Install Icons (Optional)
          </h2>
        </div>
        <p className="text-muted-foreground">
          Many components use Lucide icons. Install them if you want icon
          support:
        </p>
        <CodeBlock
          code={`npm install lucide-react`}
          language="bash"
          filename="Terminal"
        />
      </section>

      {/* Done */}
      <section className="space-y-4 rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="text-xl font-semibold text-foreground">
          You&apos;re Ready! 🎉
        </h2>
        <p className="text-muted-foreground">
          Your project is now set up to use MonoLab UI components. Browse the
          components, find what you need, and copy the code directly into your
          project.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/docs/usage"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Learn How to Use
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#components"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
          >
            Browse Components
          </Link>
        </div>
      </section>
    </div>
  );
}
