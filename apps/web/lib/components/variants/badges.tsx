import { ComponentVariant } from "../types";

/**
 * Badge Variants
 *
 * All badge component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const badgeVariants: ComponentVariant[] = [
  {
    id: "default",
    name: "Default Badge",
    code: `<span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
  Badge
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
        Badge
      </span>
    ),
  },
  {
    id: "secondary",
    name: "Secondary Badge",
    code: `<span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
  Badge
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
        Badge
      </span>
    ),
  },
  {
    id: "outline",
    name: "Outline Badge",
    code: `<span className="inline-flex items-center rounded-full border border-border/30 px-2.5 py-0.5 text-xs font-medium text-foreground">
  Badge
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full border border-border/30 px-2.5 py-0.5 text-xs font-medium text-foreground">
        Badge
      </span>
    ),
  },
  {
    id: "success",
    name: "Success Badge",
    code: `<span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
  Success
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
        Success
      </span>
    ),
  },
  {
    id: "warning",
    name: "Warning Badge",
    code: `<span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-500">
  Warning
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-500">
        Warning
      </span>
    ),
  },
  {
    id: "error",
    name: "Error Badge",
    code: `<span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-500">
  Error
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-500">
        Error
      </span>
    ),
  },
  {
    id: "info",
    name: "Info Badge",
    code: `<span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500">
  Info
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500">
        Info
      </span>
    ),
  },
  {
    id: "with-dot",
    name: "Badge with Dot",
    code: `<span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
  Active
</span>`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
        Active
      </span>
    ),
  },
  {
    id: "with-icon",
    name: "Badge with Icon",
    code: `<span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Verified
</span>`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
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
            d="M5 13l4 4L19 7"
          />
        </svg>
        Verified
      </span>
    ),
  },
  {
    id: "removable",
    name: "Removable Badge",
    code: `<span className="inline-flex items-center gap-1 rounded-full bg-muted pl-2.5 pr-1 py-0.5 text-xs font-medium text-foreground">
  Filter
  <button className="rounded-full p-0.5 hover:bg-foreground/10">
    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</span>`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted py-0.5 pl-2.5 pr-1 text-xs font-medium text-foreground">
        Filter
        <button className="rounded-full p-0.5 hover:bg-foreground/10">
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
    ),
  },
  {
    id: "pill",
    name: "Pill Badge",
    code: `<span className="inline-flex items-center rounded-md bg-foreground px-2 py-0.5 text-xs font-medium text-background">
  New
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-md bg-foreground px-2 py-0.5 text-xs font-medium text-background">
        New
      </span>
    ),
  },
  {
    id: "count",
    name: "Count Badge",
    code: `<span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 text-xs font-medium text-background">
  9+
</span>`,
    preview: (
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 text-xs font-medium text-background">
        9+
      </span>
    ),
  },
  {
    id: "status-online",
    name: "Online Status",
    code: `<span className="inline-flex items-center gap-1.5 text-xs text-foreground/70">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
  </span>
  Online
</span>`,
    preview: (
      <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Online
      </span>
    ),
  },
  {
    id: "status-offline",
    name: "Offline Status",
    code: `<span className="inline-flex items-center gap-1.5 text-xs text-foreground/70">
  <span className="h-2 w-2 rounded-full bg-foreground/30"></span>
  Offline
</span>`,
    preview: (
      <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-foreground/30"></span>
        Offline
      </span>
    ),
  },
  {
    id: "status-busy",
    name: "Busy Status",
    code: `<span className="inline-flex items-center gap-1.5 text-xs text-foreground/70">
  <span className="h-2 w-2 rounded-full bg-red-500"></span>
  Busy
</span>`,
    preview: (
      <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-red-500"></span>
        Busy
      </span>
    ),
  },
  {
    id: "large",
    name: "Large Badge",
    code: `<span className="inline-flex items-center rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">
  Large Badge
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">
        Large Badge
      </span>
    ),
  },
  {
    id: "gradient",
    name: "Gradient Badge",
    code: `<span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2.5 py-0.5 text-xs font-medium text-white">
  Pro
</span>`,
    preview: (
      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2.5 py-0.5 text-xs font-medium text-white">
        Pro
      </span>
    ),
  },
  {
    id: "badge-group",
    name: "Badge Group",
    code: `<div className="flex flex-wrap gap-2">
  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">React</span>
  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">TypeScript</span>
  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">Tailwind</span>
</div>`,
    preview: (
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
          React
        </span>
        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
          TypeScript
        </span>
        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
          Tailwind
        </span>
      </div>
    ),
  },
  {
    id: "notification",
    name: "Notification Badge",
    code: `<div className="relative inline-flex">
  <button className="rounded-md border border-border/20 p-2">
    <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  </button>
  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
    3
  </span>
</div>`,
    preview: (
      <div className="relative inline-flex">
        <button className="rounded-md border border-border/20 p-2">
          <svg
            className="h-5 w-5 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
          3
        </span>
      </div>
    ),
  },
];
