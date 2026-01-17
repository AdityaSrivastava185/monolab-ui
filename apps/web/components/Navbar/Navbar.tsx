"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Left - Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/docs"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/#components"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Components
          </Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-mono text-sm font-bold tracking-tight text-foreground">
            MONOLAB (UI)
          </span>
        </Link>

        {/* Right - CTA */}
        <Link
          href="/docs"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border/10 bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/docs"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="/#components"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Components
            </Link>
            <Link
              href="/docs/installation"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Installation
            </Link>
            <Link
              href="/docs/theming"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Theming
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
