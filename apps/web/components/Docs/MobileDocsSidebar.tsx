"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Usage", href: "/docs/usage" },
    ],
  },
  {
    title: "Customization",
    items: [
      { title: "Dark Mode", href: "/docs/dark-mode" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Buttons", href: "/components/buttons" },
      { title: "Inputs", href: "/components/inputs" },
      { title: "Toggle", href: "/components/toggle" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Select", href: "/components/select" },
      { title: "Dropdown", href: "/components/dropdown" },
      { title: "Accordion", href: "/components/accordion" },
      { title: "Cards", href: "/components/cards" },
      { title: "Badges", href: "/components/badges" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Modal", href: "/components/modal" },
      { title: "Slider", href: "/components/slider" },
    ],
  },
];

export function MobileDocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mb-6 lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border border-border/20 bg-card/50 px-4 py-3"
      >
        <span className="text-sm font-medium text-foreground">
          Documentation Menu
        </span>
        {isOpen ? (
          <X className="h-4 w-4 text-foreground/60" />
        ) : (
          <Menu className="h-4 w-4 text-foreground/60" />
        )}
      </button>

      {isOpen && (
        <nav className="mt-2 space-y-6 rounded-lg border border-border/20 bg-card/50 p-4">
          {docsNav.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-foreground/10 font-medium text-foreground"
                            : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}
