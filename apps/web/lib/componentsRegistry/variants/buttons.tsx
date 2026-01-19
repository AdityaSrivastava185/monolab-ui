import { ComponentVariant } from "../types";
import { AlignmentButtonsPreview } from "./AlignmentButtonsPreview";
import {
  ToggleGroupPreview,
  ButtonGroupPreview,
  BookmarkButtonPreview,
  LoadingButtonPreview,
  SplitButtonPreview,
} from "./ButtonPreviews";

/**
 * Button Variants
 *
 * All button component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const buttonVariants: ComponentVariant[] = [
  {
    id: "primary",
    name: "Primary Button",
    code: `<button className="rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
  Button
</button>`,
    preview: (
      <button className="rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
        Button
      </button>
    ),
  },
  {
    id: "secondary",
    name: "Secondary Button",
    code: `<button className="rounded-md bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80">
  Button
</button>`,
    preview: (
      <button className="rounded-md bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80">
        Button
      </button>
    ),
  },
  {
    id: "outline",
    name: "Outline Button",
    code: `<button className="rounded-full border border-border/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
  Button
</button>`,
    preview: (
      <button className="rounded-full border border-border/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
        Button
      </button>
    ),
  },
  {
    id: "icon-left",
    name: "Icon Left Button",
    code: `<button className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
    <path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
  </svg>
  Button
</button>`,
    preview: (
      <button className="inline-flex items-center gap-2 rounded-md border border-border/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        Button
      </button>
    ),
  },
  {
    id: "destructive",
    name: "Destructive Button",
    code: `<button className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
  Delete
</button>`,
    preview: (
      <button className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Delete
      </button>
    ),
  },
  {
    id: "bookmark",
    name: "Bookmark Button",
    code: `"use client";

import { useState } from "react";

export function BookmarkButton() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <button
      onClick={() => setBookmarked(!bookmarked)}
      className={\`rounded-md border border-border/20 p-2 transition-colors \${
        bookmarked
          ? "bg-muted text-foreground"
          : "text-foreground/60 hover:bg-muted hover:text-foreground"
      }\`}
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
}`,
    preview: <BookmarkButtonPreview />,
  },
  {
    id: "close",
    name: "Close Button",
    code: `<button className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80">
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
  Close
</button>`,
    preview: (
      <button className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Close
      </button>
    ),
  },
  {
    id: "ghost",
    name: "Ghost Button",
    code: `<button className="rounded-md px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground">
  Click me
</button>`,
    preview: (
      <button className="rounded-md px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground">
        Click me
      </button>
    ),
  },
  {
    id: "loading",
    name: "Loading Button",
    code: `"use client";

import { useState } from "react";

export function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={\`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors \${
        loading
          ? "bg-muted text-foreground/60 cursor-not-allowed"
          : "bg-foreground text-background hover:bg-foreground/90"
      }\`}
    >
      {loading ? (
        <>
          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </>
      ) : (
        "Click to Load"
      )}
    </button>
  );
}`,
    preview: <LoadingButtonPreview />,
  },
  {
    id: "alignment",
    name: "Alignment Buttons",
    code: `"use client";

import { useState } from "react";

type Alignment = "left" | "center" | "right" | "justify";

export function AlignmentButtons() {
  const [alignment, setAlignment] = useState<Alignment>("left");

  const alignmentClasses: Record<Alignment, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return (
    <div className="w-full max-w-xs space-y-4">
      {/* Alignment Buttons */}
      <div className="inline-flex rounded-md border border-border/20">
        <button
          onClick={() => setAlignment("left")}
          className={\`rounded-l-md p-2 transition-colors \${
            alignment === "left"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }\`}
          aria-label="Align left"
        >
          <AlignLeftIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => setAlignment("center")}
          className={\`border-x border-border/20 p-2 transition-colors \${
            alignment === "center"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }\`}
          aria-label="Align center"
        >
          <AlignCenterIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => setAlignment("right")}
          className={\`border-r border-border/20 p-2 transition-colors \${
            alignment === "right"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }\`}
          aria-label="Align right"
        >
          <AlignRightIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => setAlignment("justify")}
          className={\`rounded-r-md p-2 transition-colors \${
            alignment === "justify"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }\`}
          aria-label="Justify"
        >
          <AlignJustifyIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Demo Text */}
      <p className={\`text-sm text-foreground/70 transition-all \${alignmentClasses[alignment]}\`}>
        This text demonstrates the alignment. Click the buttons above to change how this paragraph is aligned.
      </p>
    </div>
  );
}`,
    preview: <AlignmentButtonsPreview />,
  },
  {
    id: "button-group",
    name: "Button Group",
    code: `"use client";

import { useState } from "react";

export function ButtonGroup() {
  const [selected, setSelected] = useState<"left" | "center" | "right">("left");

  return (
    <div className="inline-flex rounded-md border border-border/20">
      <button
        onClick={() => setSelected("left")}
        className={\`rounded-l-md px-4 py-2 text-sm transition-colors \${
          selected === "left"
            ? "bg-muted text-foreground"
            : "text-foreground/60 hover:bg-muted"
        }\`}
      >
        Left
      </button>
      <button
        onClick={() => setSelected("center")}
        className={\`border-x border-border/20 px-4 py-2 text-sm transition-colors \${
          selected === "center"
            ? "bg-muted text-foreground"
            : "text-foreground/60 hover:bg-muted"
        }\`}
      >
        Center
      </button>
      <button
        onClick={() => setSelected("right")}
        className={\`rounded-r-md px-4 py-2 text-sm transition-colors \${
          selected === "right"
            ? "bg-muted text-foreground"
            : "text-foreground/60 hover:bg-muted"
        }\`}
      >
        Right
      </button>
    </div>
  );
}`,
    preview: <ButtonGroupPreview />,
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    code: `"use client";

import { useState } from "react";

export function ToggleGroup() {
  const [selected, setSelected] = useState<"left" | "center" | "right">("left");

  return (
    <div className="inline-flex rounded-full border border-border/20 bg-muted p-1">
      <button
        onClick={() => setSelected("left")}
        className={\`rounded-full px-4 py-1.5 text-sm transition-colors \${
          selected === "left"
            ? "bg-foreground font-medium text-background"
            : "text-foreground/60 hover:text-foreground"
        }\`}
      >
        Left
      </button>
      <button
        onClick={() => setSelected("center")}
        className={\`rounded-full px-4 py-1.5 text-sm transition-colors \${
          selected === "center"
            ? "bg-foreground font-medium text-background"
            : "text-foreground/60 hover:text-foreground"
        }\`}
      >
        Center
      </button>
      <button
        onClick={() => setSelected("right")}
        className={\`rounded-full px-4 py-1.5 text-sm transition-colors \${
          selected === "right"
            ? "bg-foreground font-medium text-background"
            : "text-foreground/60 hover:text-foreground"
        }\`}
      >
        Right
      </button>
    </div>
  );
}`,
    preview: <ToggleGroupPreview />,
  },
  {
    id: "split-button",
    name: "Split Button",
    code: `"use client";

import { useState } from "react";

export function SplitButton() {
  const [count, setCount] = useState(8);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex rounded-md border border-border/20">
      <button
        onClick={() => setCount(count + 1)}
        className="inline-flex items-center gap-2 rounded-l-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted"
      >
        <TagIcon className="h-4 w-4" />
        Fork
      </button>
      <span className="border-x border-border/20 px-2 py-2 text-sm text-foreground/40">
        {count}
      </span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-r-md px-2 py-2 text-foreground/60 transition-colors hover:bg-muted"
      >
        <ChevronDownIcon className={\`h-4 w-4 transition-transform \${isOpen ? "rotate-180" : ""}\`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-32 rounded-md border border-border/20 bg-background py-1 shadow-lg">
          <button className="w-full px-3 py-1.5 text-left text-sm text-foreground/70 hover:bg-muted">
            Star
          </button>
          <button className="w-full px-3 py-1.5 text-left text-sm text-foreground/70 hover:bg-muted">
            Watch
          </button>
        </div>
      )}
    </div>
  );
}`,
    preview: <SplitButtonPreview />,
  },
  {
    id: "social-google",
    name: "Google Login",
    code: `<button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border/20 px-4 py-2 text-sm text-foreground/70 hover:bg-muted">
  <GoogleIcon className="h-4 w-4" />
  Login with Google
</button>`,
    preview: (
      <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border/20 px-4 py-2 text-sm text-foreground/70 hover:bg-muted">
        <svg className="h-4 w-4" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Login with Google
      </button>
    ),
  },
  {
    id: "social-github",
    name: "GitHub Login",
    code: `<button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border/20 px-4 py-2 text-sm text-foreground/70 hover:bg-muted">
  <GitHubIcon className="h-4 w-4" />
  Login with GitHub
</button>`,
    preview: (
      <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border/20 px-4 py-2 text-sm text-foreground/70 hover:bg-muted">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        Login with GitHub
      </button>
    ),
  },
];
