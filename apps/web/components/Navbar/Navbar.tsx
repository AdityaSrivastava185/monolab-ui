"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Grid3X3, Maximize2 } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Pill-shaped navbar container */}
      <nav className="flex items-center gap-2 rounded-full border border-border/20 bg-card/90 px-2 py-2 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-3 pr-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-xs font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-sm font-semibold text-foreground">
            MONOLAB-UI
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden h-5 w-px bg-border/30 md:block" />

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/docs"
            className="rounded-full px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/#components"
            className="rounded-full px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            Components
          </Link>
        </div>

        {/* Right side icons */}
        <div className="hidden items-center gap-1 md:flex">
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground">
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mt-2 rounded-2xl border border-border/20 bg-card/95 p-4 backdrop-blur-md shadow-lg md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/docs"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="/#components"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Components
            </Link>
            <Link
              href="/docs/installation"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Installation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
