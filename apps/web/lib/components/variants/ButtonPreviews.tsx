"use client";

import { useState } from "react";

export function ToggleGroupPreview() {
  const [selected, setSelected] = useState<"left" | "center" | "right">("left");

  return (
    <div className="inline-flex rounded-full border border-border/20 bg-muted p-1">
      <button
        onClick={() => setSelected("left")}
        className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
          selected === "left"
            ? "bg-foreground font-medium text-background"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        Left
      </button>
      <button
        onClick={() => setSelected("center")}
        className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
          selected === "center"
            ? "bg-foreground font-medium text-background"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        Center
      </button>
      <button
        onClick={() => setSelected("right")}
        className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
          selected === "right"
            ? "bg-foreground font-medium text-background"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        Right
      </button>
    </div>
  );
}

export function ButtonGroupPreview() {
  const [selected, setSelected] = useState<"left" | "center" | "right">("left");

  return (
    <div className="inline-flex rounded-md border border-border/20">
      <button
        onClick={() => setSelected("left")}
        className={`rounded-l-md px-4 py-2 text-sm transition-colors ${
          selected === "left"
            ? "bg-muted text-foreground"
            : "text-foreground/60 hover:bg-muted"
        }`}
      >
        Left
      </button>
      <button
        onClick={() => setSelected("center")}
        className={`border-x border-border/20 px-4 py-2 text-sm transition-colors ${
          selected === "center"
            ? "bg-muted text-foreground"
            : "text-foreground/60 hover:bg-muted"
        }`}
      >
        Center
      </button>
      <button
        onClick={() => setSelected("right")}
        className={`rounded-r-md px-4 py-2 text-sm transition-colors ${
          selected === "right"
            ? "bg-muted text-foreground"
            : "text-foreground/60 hover:bg-muted"
        }`}
      >
        Right
      </button>
    </div>
  );
}

export function BookmarkButtonPreview() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <button
      onClick={() => setBookmarked(!bookmarked)}
      className={`rounded-md border border-border/20 p-2 transition-colors ${
        bookmarked
          ? "bg-muted text-foreground"
          : "text-foreground/60 hover:bg-muted hover:text-foreground"
      }`}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <svg
        className="h-5 w-5"
        fill={bookmarked ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
}

export function LoadingButtonPreview() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
        loading
          ? "bg-muted text-foreground/60 cursor-not-allowed"
          : "bg-foreground text-background hover:bg-foreground/90"
      }`}
    >
      {loading ? (
        <>
          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        "Click to Load"
      )}
    </button>
  );
}

export function SplitButtonPreview() {
  const [count, setCount] = useState(8);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex rounded-md border border-border/20">
      <button
        onClick={() => setCount(count + 1)}
        className="inline-flex items-center gap-2 rounded-l-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        Fork
      </button>
      <span className="border-x border-border/20 px-2 py-2 text-sm text-foreground/40">
        {count}
      </span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-r-md px-2 py-2 text-foreground/60 transition-colors hover:bg-muted"
      >
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-32 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="w-full px-3 py-1.5 text-left text-sm text-foreground/70 hover:bg-muted"
          >
            Star
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="w-full px-3 py-1.5 text-left text-sm text-foreground/70 hover:bg-muted"
          >
            Watch
          </button>
        </div>
      )}
    </div>
  );
}
