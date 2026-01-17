"use client";

import { useState } from "react";

type Alignment = "left" | "center" | "right" | "justify";

export function AlignmentButtonsPreview() {
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
          className={`rounded-l-md p-2 transition-colors ${
            alignment === "left"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }`}
          aria-label="Align left"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm0 12h10v2H3v-2zm0-6h18v2H3v-2z" />
          </svg>
        </button>
        <button
          onClick={() => setAlignment("center")}
          className={`border-x border-border/20 p-2 transition-colors ${
            alignment === "center"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }`}
          aria-label="Align center"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm4 12h10v2H7v-2zm-4-6h18v2H3v-2z" />
          </svg>
        </button>
        <button
          onClick={() => setAlignment("right")}
          className={`border-r border-border/20 p-2 transition-colors ${
            alignment === "right"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }`}
          aria-label="Align right"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm8 12h10v2H11v-2zm-8-6h18v2H3v-2z" />
          </svg>
        </button>
        <button
          onClick={() => setAlignment("justify")}
          className={`rounded-r-md p-2 transition-colors ${
            alignment === "justify"
              ? "bg-muted text-foreground"
              : "text-foreground/60 hover:bg-muted"
          }`}
          aria-label="Justify"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm0 12h18v2H3v-2zm0-6h18v2H3v-2z" />
          </svg>
        </button>
      </div>

      {/* Demo Text */}
      <p
        className={`text-sm text-foreground/70 transition-all ${alignmentClasses[alignment]}`}
      >
        This text demonstrates the alignment , Click the buttons above to change
        how this paragraph is aligned.
      </p>
    </div>
  );
}
