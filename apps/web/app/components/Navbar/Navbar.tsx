"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Docs", href: "/docs" },
  { name: "Components", href: "/components" },
  { name: "Create", href: "/create" },
];

export function Navbar() {
  return (
    <nav className="">
      <div className="hidden md:flex md:items-center md:justify-between max-w-4xl lg:max-w-3xl mx-auto py-7">
        <div className="flex items-center justify-between w-full bg-accent-foreground p-4 rounded-3xl">
          <div className="flex items-center justify-center gap-10">
            <div>
              <h1 className="font-bold text-xl font-sans text-accent">
                MonoLab-UI
              </h1>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <Link href="#" className="text-md text-accent">
                  Components
                </Link>
              </div>
              <div>
                <Link href="#" className="text-md text-accent">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 bg-background px-2 py-1 rounded-md">
            <Link
              href="https://github.com/AdityaSrivastava185/monolab-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/70 transition-colors"
            >
              <Image
                src="/icons8-github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
              <div className="flex items-center">
                <span className="text-sm font-medium text-foreground">104k</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
