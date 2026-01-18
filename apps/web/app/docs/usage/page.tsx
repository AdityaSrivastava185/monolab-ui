import { CodeBlock } from "@/components/Docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UsagePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Usage
        </h1>
        <p className="text-lg text-foreground/60">
          Learn how to use MonoLab UI components in your project.
        </p>
      </header>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
        <p className="text-foreground/70 leading-relaxed">
          MonoLab UI is a copy-paste component library. Unlike traditional
          packages, you don&apos;t install components—you copy them directly
          into your codebase. This gives you complete control and zero
          dependency overhead.
        </p>
      </section>

      {/* Step by Step */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Step by Step</h2>

        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              1
            </span>
            <h3 className="text-xl font-medium text-foreground">
              Browse Components
            </h3>
          </div>
          <p className="text-foreground/70">
            Visit the{" "}
            <Link
              href="/#components"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              components page
            </Link>{" "}
            and find the component variant you need.
          </p>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              2
            </span>
            <h3 className="text-xl font-medium text-foreground">
              Copy the Code
            </h3>
          </div>
          <p className="text-foreground/70">
            Hover over any component variant and click the copy button in the
            top-right corner. The complete component code will be copied to your
            clipboard.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              3
            </span>
            <h3 className="text-xl font-medium text-foreground">
              Create a Component File
            </h3>
          </div>
          <p className="text-foreground/70">
            Create a new file in your components directory and paste the code:
          </p>
          <CodeBlock
            code={`// components/ui/Button.tsx
"use client"; // if using Next.js App Router with interactivity

export function Button({ children, variant = "default", ...props }) {
  // Paste component code here
}`}
            language="tsx"
            filename="components/ui/Button.tsx"
          />
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              4
            </span>
            <h3 className="text-xl font-medium text-foreground">
              Import and Use
            </h3>
          </div>
          <p className="text-foreground/70">
            Import the component wherever you need it:
          </p>
          <CodeBlock
            code={`import { Button } from "@/components/ui/Button";

export default function MyPage() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}`}
            language="tsx"
            filename="app/page.tsx"
          />
        </div>
      </section>

      {/* File Organization */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Recommended File Structure
        </h2>
        <p className="text-foreground/70">
          We recommend organizing your components like this:
        </p>
        <CodeBlock
          code={`your-project/
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       ├── Accordion.tsx
│       └── ...
├── lib/
│   └── utils.ts       # cn() utility function
└── app/
    └── globals.css    # CSS variables`}
          language="plaintext"
          filename="Project Structure"
        />
      </section>

      {/* Customization */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Customizing Components
        </h2>
        <p className="text-foreground/70 leading-relaxed">
          Since you own the code, you can modify anything. Common customizations
          include:
        </p>
        <ul className="mt-4 space-y-3 text-foreground/70">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
            <span>
              <strong className="text-foreground">Colors</strong> — Change CSS
              variables or Tailwind classes
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
            <span>
              <strong className="text-foreground">Sizing</strong> — Adjust
              padding, font sizes, and dimensions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
            <span>
              <strong className="text-foreground">Animations</strong> — Add or
              modify transitions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
            <span>
              <strong className="text-foreground">Behavior</strong> — Change
              props, add features, or simplify
            </span>
          </li>
        </ul>
      </section>

      {/* Tips */}
      <section className="space-y-4 rounded-xl border border-border/10 bg-card/50 p-6">
        <h2 className="text-xl font-semibold text-foreground">💡 Pro Tips</h2>
        <ul className="space-y-3 text-foreground/70">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-foreground">•</span>
            <span>
              Keep a{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                utils.ts
              </code>{" "}
              file with the{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                cn()
              </code>{" "}
              function—most components use it
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-foreground">•</span>
            <span>
              Components with interactivity need{" "}
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
                &quot;use client&quot;
              </code>{" "}
              in Next.js App Router
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-foreground">•</span>
            <span>
              You can combine multiple variants into a single component with
              props
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
            className="inline-flex items-center gap-2 rounded-full border border-border/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Browse Components
          </Link>
        </div>
      </section>
    </div>
  );
}
