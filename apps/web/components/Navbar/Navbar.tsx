"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Left - Menu */}
        <button className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeWidth="1.5" d="M4 6h16M4 12h16" />
          </svg>
        </button>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-mono text-sm font-bold tracking-tight text-foreground">
            MONOLAB (UI)
          </span>
        </Link>

        {/* Right - CTA */}
        <Link
          href="/components"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
