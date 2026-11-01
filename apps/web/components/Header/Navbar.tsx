import Link from "next/link";
import React from "react";

const navItems = [
  "Blocks",
  "Components",
  "Labs",
  "Docs",
  "Changelog",
  "Github"
];

const Logo = "MonolabUI"
const description = ""

const navItemClass = "px-5 py-3";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="section">
        <div className="max-w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center divide-x divide-surface-dark">
              <div className={navItemClass}>
                <h1>{Logo}</h1>
              </div>

              <div className="hidden xl:flex divide-x divide-surface-dark border-r border-surface-dark">
                {navItems.map((item) => (
                  <div key={item} className={navItemClass}>
                    <Link href="/">{item}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="items-center divide-x divide-surface-dark flex">
              <Link
                className={`${navItemClass} border-l border-surface-dark hidden md:block`}
                href=""
              >
                Get in touch
              </Link>

              <Link
                className={`${navItemClass} bg-primary text-foreground flex gap-2 items-center justify-center`}
                href=""
              >
                Start Building
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right preview-icon"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
