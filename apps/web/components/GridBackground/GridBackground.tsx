"use client";

import React from "react";

/**
 * GridBackground
 *
 * A production-ready grid pattern overlay inspired by Tailwind Plus.
 * Renders a subtle CSS grid in dark mode with gradient fade at edges.
 */
export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial gradient fade at corners/edges for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_hsl(var(--background))_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_transparent_0%,_hsl(var(--background))_70%)]" />

      {/* Accent glow (optional subtle color pop) */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-white/[0.03] blur-3xl" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GridBackground;
