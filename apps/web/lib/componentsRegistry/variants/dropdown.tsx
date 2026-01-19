"use client";

import { ComponentVariant } from "../types";
import { useState, useRef, useEffect } from "react";

/**
 * Dropdown Variants
 *
 * All dropdown component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */

// Simple Dropdown Component
function SimpleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        Options
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Edit
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Duplicate
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Archive
          </button>
          <div className="my-1 border-t border-border/20"></div>
          <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-muted">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

// Dropdown with Icons
function DropdownWithIcons() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        Actions
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </button>
          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Duplicate
          </button>
          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            Archive
          </button>
          <div className="my-1 border-t border-border/20"></div>
          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-500 hover:bg-muted">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

// Icon Button Dropdown (3 dots)
function IconButtonDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 w-40 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            View
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Edit
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Share
          </button>
          <div className="my-1 border-t border-border/20"></div>
          <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-muted">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

// User Menu Dropdown
function UserMenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-muted"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
          JD
        </div>
        <svg
          className={`h-4 w-4 text-foreground/70 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <div className="border-b border-border/20 px-4 py-3">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-foreground/50">john@example.com</p>
          </div>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Profile
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Settings
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Billing
          </button>
          <div className="my-1 border-t border-border/20"></div>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

// Dropdown with Checkboxes
function DropdownWithCheckboxes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(["status"]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        Columns
        {selected.length > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 text-xs text-background">
            {selected.length}
          </span>
        )}
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          {["status", "email", "amount", "date"].map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground hover:bg-muted"
            >
              <div
                className={`flex h-4 w-4 items-center justify-center rounded border ${selected.includes(option) ? "border-foreground bg-foreground" : "border-border/30 bg-background"}`}
              >
                {selected.includes(option) && (
                  <svg
                    className="h-3 w-3 text-background"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="capitalize">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Nested Dropdown
function NestedDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSubMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        Menu
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            New File
          </button>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Open
          </button>
          <div
            className="relative"
            onMouseEnter={() => setSubMenuOpen(true)}
            onMouseLeave={() => setSubMenuOpen(false)}
          >
            <button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
              Share
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {subMenuOpen && (
              <div className="absolute left-full top-0 z-50 ml-1 w-40 rounded-md border border-border/20 bg-background py-1 shadow-lg">
                <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
                  Email
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
                  Message
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
                  Copy Link
                </button>
              </div>
            )}
          </div>
          <div className="my-1 border-t border-border/20"></div>
          <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
            Settings
          </button>
        </div>
      )}
    </div>
  );
}

export const dropdownVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Dropdown",
    code: `const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

return (
  <div ref={dropdownRef} className="relative inline-block">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      Options
      <svg className={\`h-4 w-4 transition-transform \${isOpen ? "rotate-180" : ""}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-border/20 bg-background py-1 shadow-lg">
        <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Edit</button>
        <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Duplicate</button>
        <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Archive</button>
        <div className="my-1 border-t border-border/20"></div>
        <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-muted">Delete</button>
      </div>
    )}
  </div>
);`,
    preview: <SimpleDropdown />,
  },
  {
    id: "with-icons",
    name: "Dropdown with Icons",
    code: `<button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
  Edit
</button>`,
    preview: <DropdownWithIcons />,
  },
  {
    id: "icon-button",
    name: "Icon Button Dropdown",
    code: `<button
  onClick={() => setIsOpen(!isOpen)}
  className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
>
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
</button>`,
    preview: <IconButtonDropdown />,
  },
  {
    id: "user-menu",
    name: "User Menu Dropdown",
    code: `<button
  onClick={() => setIsOpen(!isOpen)}
  className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-muted"
>
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
    JD
  </div>
  <svg className={\`h-4 w-4 text-foreground/70 transition-transform \${isOpen ? "rotate-180" : ""}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</button>
{isOpen && (
  <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-md border border-border/20 bg-background py-1 shadow-lg">
    <div className="border-b border-border/20 px-4 py-3">
      <p className="text-sm font-medium text-foreground">John Doe</p>
      <p className="text-xs text-foreground/50">john@example.com</p>
    </div>
    <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Profile</button>
    <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Settings</button>
    <div className="my-1 border-t border-border/20"></div>
    <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Sign out</button>
  </div>
)}`,
    preview: <UserMenuDropdown />,
  },
  {
    id: "with-checkboxes",
    name: "Dropdown with Checkboxes",
    code: `const [selected, setSelected] = useState<string[]>(["status"]);

const toggleOption = (option: string) => {
  setSelected((prev) =>
    prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
  );
};

<button className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground">
  Columns
  {selected.length > 0 && (
    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 text-xs text-background">
      {selected.length}
    </span>
  )}
</button>`,
    preview: <DropdownWithCheckboxes />,
  },
  {
    id: "nested",
    name: "Nested Dropdown",
    code: `<div
  className="relative"
  onMouseEnter={() => setSubMenuOpen(true)}
  onMouseLeave={() => setSubMenuOpen(false)}
>
  <button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
    Share
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
  {subMenuOpen && (
    <div className="absolute left-full top-0 z-50 ml-1 w-40 rounded-md border border-border/20 bg-background py-1 shadow-lg">
      <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Email</button>
      <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">Message</button>
    </div>
  )}
</div>`,
    preview: <NestedDropdown />,
  },
];
