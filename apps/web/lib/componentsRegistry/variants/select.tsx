"use client";

import { ComponentVariant } from "../types";
import { useState, useRef, useEffect } from "react";

/**
 * Select Variants
 *
 * All select component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */

// Simple Select
function SimpleSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const options = ["Apple", "Banana", "Orange", "Mango", "Grape"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-full max-w-[200px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
      >
        <span className={selected ? "text-foreground" : "text-foreground/50"}>
          {selected || "Select an option"}
        </span>
        <svg
          className={`h-4 w-4 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
        <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border/20 bg-background py-1 shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${selected === option ? "text-foreground" : "text-foreground/70"}`}
            >
              {option}
              {selected === option && (
                <svg
                  className="h-4 w-4 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Select with Label
function SelectWithLabel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const options = ["React", "Vue", "Angular", "Svelte"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-[200px]">
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        Framework
      </label>
      <div ref={selectRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
        >
          <span className={selected ? "text-foreground" : "text-foreground/50"}>
            {selected || "Select framework"}
          </span>
          <svg
            className={`h-4 w-4 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
          <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border/20 bg-background py-1 shadow-lg">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${selected === option ? "text-foreground" : "text-foreground/70"}`}
              >
                {option}
                {selected === option && (
                  <svg
                    className="h-4 w-4 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Searchable Select
function SearchableSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const options = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "India",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div ref={selectRef} className="relative w-full max-w-[200px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
      >
        <span className={selected ? "text-foreground" : "text-foreground/50"}>
          {selected || "Select country"}
        </span>
        <svg
          className={`h-4 w-4 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
        <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border/20 bg-background shadow-lg">
          <div className="border-b border-border/20 p-2">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-md border border-border/20 bg-background px-3 py-1.5 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none"
            />
          </div>
          <div className="max-h-48 overflow-auto py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${selected === option ? "text-foreground" : "text-foreground/70"}`}
                >
                  {option}
                  {selected === option && (
                    <svg
                      className="h-4 w-4 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <p className="px-4 py-2 text-sm text-foreground/50">
                No results found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Multi Select
function MultiSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);

  const options = ["Design", "Development", "Marketing", "Sales", "Support"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
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

  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected((prev) => prev.filter((o) => o !== option));
  };

  return (
    <div ref={selectRef} className="relative w-full max-w-[250px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-[42px] w-full flex-wrap items-center gap-1 rounded-md border border-border/20 bg-background px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
      >
        {selected.length > 0 ? (
          selected.map((option) => (
            <span
              key={option}
              className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs"
            >
              {option}
              <button
                onClick={(e) => removeOption(option, e)}
                className="text-foreground/50 hover:text-foreground"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))
        ) : (
          <span className="px-2 text-foreground/50">Select departments</span>
        )}
        <svg
          className={`ml-auto h-4 w-4 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
        <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border/20 bg-background py-1 shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted"
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
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Select with Groups
function SelectWithGroups() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const groups = {
    Fruits: ["Apple", "Banana", "Orange"],
    Vegetables: ["Carrot", "Broccoli", "Spinach"],
    Dairy: ["Milk", "Cheese", "Yogurt"],
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-full max-w-[200px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
      >
        <span className={selected ? "text-foreground" : "text-foreground/50"}>
          {selected || "Select item"}
        </span>
        <svg
          className={`h-4 w-4 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
        <div className="absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border/20 bg-background py-1 shadow-lg">
          {Object.entries(groups).map(([group, items], idx) => (
            <div key={group}>
              {idx > 0 && (
                <div className="my-1 border-t border-border/20"></div>
              )}
              <div className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground/50">
                {group}
              </div>
              {items.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${selected === option ? "text-foreground" : "text-foreground/70"}`}
                >
                  {option}
                  {selected === option && (
                    <svg
                      className="h-4 w-4 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Disabled Select
function DisabledSelect() {
  return (
    <div className="w-full max-w-[200px]">
      <button
        disabled
        className="flex w-full cursor-not-allowed items-center justify-between rounded-md border border-border/10 bg-muted px-4 py-2 text-sm text-foreground/50"
      >
        <span>Select option</span>
        <svg
          className="h-4 w-4 text-foreground/30"
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
    </div>
  );
}

// Native Select
function NativeSelect() {
  return (
    <div className="w-full max-w-[200px]">
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        Country
      </label>
      <select className="w-full appearance-none rounded-md border border-border/20 bg-background px-4 py-2 pr-10 text-sm text-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20">
        <option value="">Select country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </select>
    </div>
  );
}

export const selectVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Select",
    code: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState<string | null>(null);
const options = ["Apple", "Banana", "Orange", "Mango", "Grape"];

<div className="relative w-full max-w-[200px]">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="flex w-full items-center justify-between rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
  >
    <span className={selected ? "text-foreground" : "text-foreground/50"}>
      {selected || "Select an option"}
    </span>
    <svg className={\`h-4 w-4 text-foreground/50 transition-transform \${isOpen ? "rotate-180" : ""}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  {isOpen && (
    <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border/20 bg-background py-1 shadow-lg">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => { setSelected(option); setIsOpen(false); }}
          className="flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-muted"
        >
          {option}
          {selected === option && <CheckIcon />}
        </button>
      ))}
    </div>
  )}
</div>`,
    preview: <SimpleSelect />,
  },
  {
    id: "with-label",
    name: "Select with Label",
    code: `<div className="w-full max-w-[200px]">
  <label className="mb-1.5 block text-sm font-medium text-foreground">
    Framework
  </label>
  <div ref={selectRef} className="relative">
    {/* Select button and dropdown */}
  </div>
</div>`,
    preview: <SelectWithLabel />,
  },
  {
    id: "searchable",
    name: "Searchable Select",
    code: `const [search, setSearch] = useState("");
const filteredOptions = options.filter((option) =>
  option.toLowerCase().includes(search.toLowerCase())
);

{isOpen && (
  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border/20 bg-background shadow-lg">
    <div className="border-b border-border/20 p-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full rounded-md border border-border/20 bg-background px-3 py-1.5 text-sm"
      />
    </div>
    <div className="max-h-48 overflow-auto py-1">
      {filteredOptions.map((option) => (
        <button key={option} onClick={() => { setSelected(option); setIsOpen(false); setSearch(""); }}>
          {option}
        </button>
      ))}
    </div>
  </div>
)}`,
    preview: <SearchableSelect />,
  },
  {
    id: "multi-select",
    name: "Multi Select",
    code: `const [selected, setSelected] = useState<string[]>([]);

const toggleOption = (option: string) => {
  setSelected((prev) =>
    prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
  );
};

<button className="flex min-h-[42px] w-full flex-wrap items-center gap-1 rounded-md border border-border/20 bg-background px-2 py-1.5">
  {selected.length > 0 ? (
    selected.map((option) => (
      <span key={option} className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs">
        {option}
        <button onClick={(e) => removeOption(option, e)}>×</button>
      </span>
    ))
  ) : (
    <span className="px-2 text-foreground/50">Select departments</span>
  )}
</button>`,
    preview: <MultiSelect />,
  },
  {
    id: "with-groups",
    name: "Select with Groups",
    code: `const groups = {
  Fruits: ["Apple", "Banana", "Orange"],
  Vegetables: ["Carrot", "Broccoli", "Spinach"],
  Dairy: ["Milk", "Cheese", "Yogurt"],
};

{Object.entries(groups).map(([group, items], idx) => (
  <div key={group}>
    {idx > 0 && <div className="my-1 border-t border-border/20"></div>}
    <div className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground/50">
      {group}
    </div>
    {items.map((option) => (
      <button key={option} onClick={() => { setSelected(option); setIsOpen(false); }}>
        {option}
      </button>
    ))}
  </div>
))}`,
    preview: <SelectWithGroups />,
  },
  {
    id: "disabled",
    name: "Disabled Select",
    code: `<button
  disabled
  className="flex w-full cursor-not-allowed items-center justify-between rounded-md border border-border/10 bg-muted px-4 py-2 text-sm text-foreground/50"
>
  <span>Select option</span>
  <svg className="h-4 w-4 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</button>`,
    preview: <DisabledSelect />,
  },
  {
    id: "native",
    name: "Native Select",
    code: `<div className="w-full max-w-[200px]">
  <label className="mb-1.5 block text-sm font-medium text-foreground">
    Country
  </label>
  <select className="w-full appearance-none rounded-md border border-border/20 bg-background px-4 py-2 pr-10 text-sm text-foreground focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20">
    <option value="">Select country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
</div>`,
    preview: <NativeSelect />,
  },
];
