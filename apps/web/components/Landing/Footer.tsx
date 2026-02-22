import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  const links = {
    product: [
      { name: "Components", href: "/components" },
      { name: "Documentation", href: "/docs" },
      { name: "Changelog", href: "/changelog" },
    ],
    resources: [
      {
        name: "GitHub",
        href: "https://github.com/AdityaSrivastava185/monolab-ui",
      },
      {
        name: "Contributing",
        href: "https://github.com/AdityaSrivastava185/monolab-ui/blob/main/CONTRIBUTING.md",
      },
    ],
  };

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-lg font-semibold text-foreground">
              monolab/ui
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              A minimal layer of clean, accessible components for your codebase.
              Copy what you need, keep full control.
            </p>
            {/* Social Links */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/AdityaSrivastava185/monolab-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-medium text-foreground">Product</h3>
            <ul className="mt-3 space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-medium text-foreground">Resources</h3>
            <ul className="mt-3 space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} monolab/ui. MIT License.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by the makers of monolab/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
