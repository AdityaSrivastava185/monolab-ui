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
    items: [{ title: "Dark Mode", href: "/docs/dark-mode" }],
  },
  {
    title: "Components",
    items: [
      { title: "alert", href: "/components/alert" },
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
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 overflow-y-auto border-r border-border/40 pr-6 pt-8 lg:block">
      <nav className="space-y-6">
        {docsNav.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-muted/60 font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
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
