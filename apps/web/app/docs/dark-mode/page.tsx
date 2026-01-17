import { CodeBlock } from "@/components/Docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DarkModePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Dark Mode
        </h1>
        <p className="text-lg text-foreground/60">
          Implement dark mode with CSS variables and a simple toggle.
        </p>
      </header>

      {/* How It Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
        <p className="text-foreground/70 leading-relaxed">
          Dark mode is handled through the{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
            .dark
          </code>{" "}
          class on the{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
            &lt;html&gt;
          </code>{" "}
          element. When present, CSS variables switch to their dark variants
          automatically.
        </p>
      </section>

      {/* CSS Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">CSS Setup</h2>
        <p className="text-foreground/70">
          Define both light and dark color schemes in your CSS:
        </p>
        <CodeBlock
          code={`/* Light mode (default) */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --primary: oklch(0.205 0 0);
  /* ... other variables */
}

/* Dark mode */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --primary: oklch(0.922 0 0);
  /* ... other variables */
}`}
          language="css"
          filename="globals.css"
        />
      </section>

      {/* Next.js with next-themes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Next.js Setup (Recommended)
        </h2>
        <p className="text-foreground/70">
          For Next.js projects, we recommend using{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
            next-themes
          </code>{" "}
          for seamless dark mode:
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            1. Install next-themes
          </h3>
          <CodeBlock
            code={`npm install next-themes`}
            language="bash"
            filename="Terminal"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            2. Create Theme Provider
          </h3>
          <CodeBlock
            code={`"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}`}
            language="tsx"
            filename="components/theme-provider.tsx"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            3. Wrap Your App
          </h3>
          <CodeBlock
            code={`import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
            language="tsx"
            filename="app/layout.tsx"
          />
        </div>
      </section>

      {/* Theme Toggle */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Theme Toggle Component
        </h2>
        <p className="text-foreground/70">
          Create a simple toggle button to switch between themes:
        </p>
        <CodeBlock
          code={`"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg p-2 hover:bg-foreground/10 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}`}
          language="tsx"
          filename="components/ThemeToggle.tsx"
        />
      </section>

      {/* Manual Implementation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Manual Implementation (Vanilla JS)
        </h2>
        <p className="text-foreground/70">
          If you&apos;re not using Next.js or prefer a simpler approach:
        </p>
        <CodeBlock
          code={`// Check for saved preference or system preference
function getTheme() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

// Apply theme
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}

// Toggle theme
function toggleTheme() {
  const current = document.documentElement.classList.contains("dark") 
    ? "dark" 
    : "light";
  setTheme(current === "dark" ? "light" : "dark");
}

// Initialize on page load
setTheme(getTheme());`}
          language="javascript"
          filename="theme.js"
        />
      </section>

      {/* Tailwind v4 Note */}
      <section className="space-y-4 rounded-xl border border-border/10 bg-card/50 p-6">
        <h2 className="text-xl font-semibold text-foreground">
          Tailwind CSS v4 Note
        </h2>
        <p className="text-foreground/70">
          If using Tailwind v4, add the custom dark variant to your CSS:
        </p>
        <CodeBlock
          code={`@custom-variant dark (&:is(.dark *));`}
          language="css"
        />
        <p className="text-sm text-foreground/50 mt-2">
          This enables the{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5">dark:</code>{" "}
          variant to work with the class-based approach.
        </p>
      </section>

      {/* Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tips</h2>
        <ul className="space-y-3 text-foreground/70">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-foreground">•</span>
            <span>
              Use{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                suppressHydrationWarning
              </code>{" "}
              on{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                &lt;html&gt;
              </code>{" "}
              to avoid hydration mismatch warnings
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-foreground">•</span>
            <span>
              Set{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                enableSystem
              </code>{" "}
              to respect user&apos;s OS preference
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-foreground">•</span>
            <span>
              Use{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                disableTransitionOnChange
              </code>{" "}
              to prevent flash during theme switch
            </span>
          </li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Next Steps</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#components"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            Browse Components
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-full border border-border/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Back to Docs
          </Link>
        </div>
      </section>
    </div>
  );
}
