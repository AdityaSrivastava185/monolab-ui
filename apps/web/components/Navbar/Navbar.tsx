"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "UI Blocks", href: "/components" },
  { name: "Templates", href: "/templates" },
  { name: "Docs", href: "/docs" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground">
            MonoLab UI
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <Link
            href="https://github.com/AdityaSrivastava185/monolab-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Image
              src="/icons8-github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-80"
            />
            <span className="hidden text-sm font-medium sm:inline">GitHub</span>
          </Link>

          {/* Sign In */}
          <Link
            href="/login"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Sign in
          </Link>

          {/* CTA */}
          <Link
            href="/components"
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get full access
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
