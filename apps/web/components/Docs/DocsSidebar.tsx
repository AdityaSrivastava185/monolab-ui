"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border/10 py-12 pr-8 lg:block">
      <nav className="space-y-8">
        {docsNav.map((section) => (
          <div key={section.title}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/40">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-foreground/5 font-medium text-foreground"
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
    </aside>
  );
}
