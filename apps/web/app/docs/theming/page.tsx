import { CodeBlock } from "@/components/Docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ThemingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Theming
        </h1>
        <p className="text-lg text-foreground/60">
          Customize colors and styles to match your brand using CSS variables.
        </p>
      </header>

      {/* How Theming Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
        <p className="text-foreground/70 leading-relaxed">
          MonoLab UI uses CSS custom properties (variables) for theming. All
          components reference these variables, so changing them updates your
          entire UI instantly.
        </p>
      </section>

      {/* Color System */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Color System</h2>
        <p className="text-foreground/70">
          The color system is based on semantic naming. Each color has a
          purpose:
        </p>

        <div className="overflow-hidden rounded-xl border border-border/10">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border/10 bg-card/50">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">
                  Variable
                </th>
                <th className="px-4 py-3 font-medium text-foreground">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/10">
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --background
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Page background
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --foreground
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Primary text color
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --card
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Card backgrounds
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --primary
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Primary actions, buttons
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --secondary
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Secondary elements
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --muted
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Subtle backgrounds
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --accent
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Highlights, hover states
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --destructive
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Error states, delete actions
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --border
                </td>
                <td className="px-4 py-3 text-foreground/60">
                  Borders and dividers
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground/80">
                  --ring
                </td>
                <td className="px-4 py-3 text-foreground/60">Focus rings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Customizing Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Customizing Colors
        </h2>
        <p className="text-foreground/70">
          To change your theme, modify the CSS variables in your{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
            globals.css
          </code>
          :
        </p>
        <CodeBlock
          code={`:root {
  /* Change to your brand colors */
  --primary: oklch(0.6 0.2 250);        /* Blue */
  --primary-foreground: oklch(1 0 0);    /* White text on primary */
  
  /* Adjust other colors as needed */
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.1 0 0);
  --accent: oklch(0.9 0.05 250);
}

.dark {
  --primary: oklch(0.7 0.15 250);
  --primary-foreground: oklch(0.1 0 0);
  
  --background: oklch(0.12 0 0);
  --foreground: oklch(0.95 0 0);
  --accent: oklch(0.25 0.05 250);
}`}
          language="css"
          filename="globals.css"
        />
      </section>

      {/* OKLCH Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Understanding OKLCH
        </h2>
        <p className="text-foreground/70 leading-relaxed">
          We use OKLCH color format for better perceptual uniformity. The format
          is:
        </p>
        <CodeBlock
          code={`oklch(lightness chroma hue)

/* Examples */
oklch(0.7 0.15 250)    /* L=70%, C=0.15, H=250° (blue) */
oklch(0.5 0.2 30)      /* L=50%, C=0.2, H=30° (orange) */
oklch(0.9 0 0)         /* L=90%, C=0, neutral gray */`}
          language="css"
          filename="OKLCH Format"
        />
        <div className="rounded-xl border border-border/10 bg-card/50 p-4">
          <p className="text-sm text-foreground/60">
            <strong className="text-foreground">Tip:</strong> You can also use
            hex, rgb, or hsl colors. Just be consistent across your variables.
          </p>
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Border Radius
        </h2>
        <p className="text-foreground/70">
          Control the roundness of components with the{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
            --radius
          </code>{" "}
          variable:
        </p>
        <CodeBlock
          code={`:root {
  --radius: 0.625rem;  /* Default: 10px */
  
  /* These are auto-calculated */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

/* Sharp corners */
:root {
  --radius: 0.25rem;  /* 4px */
}

/* Fully rounded */
:root {
  --radius: 1rem;  /* 16px */
}`}
          language="css"
          filename="globals.css"
        />
      </section>

      {/* Example Themes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Example Themes
        </h2>

        {/* Blue Theme */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">Blue Theme</h3>
          <CodeBlock
            code={`:root {
  --primary: oklch(0.55 0.2 250);
  --primary-foreground: oklch(1 0 0);
  --accent: oklch(0.9 0.05 250);
  --ring: oklch(0.55 0.2 250);
}

.dark {
  --primary: oklch(0.65 0.18 250);
  --primary-foreground: oklch(0.1 0 0);
  --accent: oklch(0.25 0.08 250);
}`}
            language="css"
          />
        </div>

        {/* Green Theme */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">Green Theme</h3>
          <CodeBlock
            code={`:root {
  --primary: oklch(0.55 0.18 145);
  --primary-foreground: oklch(1 0 0);
  --accent: oklch(0.9 0.05 145);
  --ring: oklch(0.55 0.18 145);
}

.dark {
  --primary: oklch(0.65 0.16 145);
  --primary-foreground: oklch(0.1 0 0);
  --accent: oklch(0.25 0.08 145);
}`}
            language="css"
          />
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Next Steps</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/dark-mode"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            Dark Mode Setup
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
