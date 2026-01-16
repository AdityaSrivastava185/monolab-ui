"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Select Preview Component
 *
 * This is the preview shown on the homepage card.
 * It's a simplified version to demonstrate the component.
 */
export function SelectPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>("React");
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
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <div ref={selectRef} className="relative w-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-md border border-border/20 bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-muted"
        >
          <span className={selected ? "text-foreground" : "text-foreground/50"}>
            {selected || "Select..."}
          </span>
          <svg
            className={`h-3 w-3 text-foreground/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-xs transition-colors hover:bg-muted ${selected === option ? "text-foreground" : "text-foreground/70"}`}
              >
                {option}
                {selected === option && (
                  <svg
                    className="h-3 w-3 text-foreground"
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
      <p className="text-xs text-foreground/50">Framework Select</p>
    </div>
  );
}
