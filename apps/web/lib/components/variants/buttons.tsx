import { ComponentVariant } from "../types";

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
    code: `<button className="rounded-md border border-border/20 p-2 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground">
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
</button>`,
    preview: (
      <button className="rounded-md border border-border/20 p-2 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground">
        <svg
          className="h-5 w-5"
          fill="none"
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
    ),
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
    code: `<button className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-foreground/60" disabled>
  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
  Loading...
</button>`,
    preview: (
      <button className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-foreground/60">
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
      </button>
    ),
  },
  {
    id: "alignment",
    name: "Alignment Buttons",
    code: `<div className="inline-flex rounded-md border border-border/20">
  <button className="rounded-l-md bg-muted p-2 text-foreground">
    <AlignLeftIcon className="h-4 w-4" />
  </button>
  <button className="border-x border-border/20 p-2 text-foreground/60 hover:bg-muted">
    <AlignCenterIcon className="h-4 w-4" />
  </button>
  <button className="border-r border-border/20 p-2 text-foreground/60 hover:bg-muted">
    <AlignRightIcon className="h-4 w-4" />
  </button>
  <button className="rounded-r-md p-2 text-foreground/60 hover:bg-muted">
    <AlignJustifyIcon className="h-4 w-4" />
  </button>
</div>`,
    preview: (
      <div className="inline-flex rounded-md border border-border/20">
        <button className="rounded-l-md bg-muted p-2 text-foreground">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm0 12h10v2H3v-2zm0-6h18v2H3v-2z" />
          </svg>
        </button>
        <button className="border-x border-border/20 p-2 text-foreground/60 hover:bg-muted">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm4 12h10v2H7v-2zm-4-6h18v2H3v-2z" />
          </svg>
        </button>
        <button className="border-r border-border/20 p-2 text-foreground/60 hover:bg-muted">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm8 12h10v2H11v-2zm-8-6h18v2H3v-2z" />
          </svg>
        </button>
        <button className="rounded-r-md p-2 text-foreground/60 hover:bg-muted">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5h18v2H3V5zm0 12h18v2H3v-2zm0-6h18v2H3v-2z" />
          </svg>
        </button>
      </div>
    ),
  },
  {
    id: "button-group",
    name: "Button Group",
    code: `<div className="inline-flex rounded-md border border-border/20">
  <button className="rounded-l-md px-4 py-2 text-sm text-foreground/60 hover:bg-muted">
    Left
  </button>
  <button className="border-x border-border/20 px-4 py-2 text-sm text-foreground/60 hover:bg-muted">
    Center
  </button>
  <button className="rounded-r-md px-4 py-2 text-sm text-foreground/60 hover:bg-muted">
    Right
  </button>
</div>`,
    preview: (
      <div className="inline-flex rounded-md border border-border/20">
        <button className="rounded-l-md px-4 py-2 text-sm text-foreground/60 hover:bg-muted">
          Left
        </button>
        <button className="border-x border-border/20 px-4 py-2 text-sm text-foreground/60 hover:bg-muted">
          Center
        </button>
        <button className="rounded-r-md px-4 py-2 text-sm text-foreground/60 hover:bg-muted">
          Right
        </button>
      </div>
    ),
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    code: `<div className="inline-flex rounded-full border border-border/20 bg-muted p-1">
  <button className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background">
    Left
  </button>
  <button className="px-4 py-1.5 text-sm text-foreground/60 hover:text-foreground">
    Center
  </button>
  <button className="px-4 py-1.5 text-sm text-foreground/60 hover:text-foreground">
    Right
  </button>
</div>`,
    preview: (
      <div className="inline-flex rounded-full border border-border/20 bg-muted p-1">
        <button className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background">
          Left
        </button>
        <button className="px-4 py-1.5 text-sm text-foreground/60 hover:text-foreground">
          Center
        </button>
        <button className="px-4 py-1.5 text-sm text-foreground/60 hover:text-foreground">
          Right
        </button>
      </div>
    ),
  },
  {
    id: "split-button",
    name: "Split Button",
    code: `<div className="inline-flex rounded-md border border-border/20">
  <button className="inline-flex items-center gap-2 rounded-l-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted">
    <TagIcon className="h-4 w-4" />
    Fork
  </button>
  <span className="border-x border-border/20 px-2 py-2 text-sm text-foreground/40">
    8
  </span>
  <button className="rounded-r-md px-2 py-2 text-foreground/60 hover:bg-muted">
    <ChevronDownIcon className="h-4 w-4" />
  </button>
</div>`,
    preview: (
      <div className="inline-flex rounded-md border border-border/20">
        <button className="inline-flex items-center gap-2 rounded-l-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted">
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
          8
        </span>
        <button className="rounded-r-md px-2 py-2 text-foreground/60 hover:bg-muted">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    ),
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
