import { ComponentVariant } from "../types";

/**
 * Toggle Variants
 *
 * All toggle/switch component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const toggleVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Toggle",
    code: `<label className="relative inline-flex cursor-pointer items-center">
  <input type="checkbox" className="peer sr-only" />
  <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background peer-focus:ring-2 peer-focus:ring-foreground/20"></div>
</label>`,
    preview: (
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" defaultChecked />
        <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background peer-focus:ring-2 peer-focus:ring-foreground/20"></div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "with-label",
    name: "Toggle with Label",
    code: `<label className="inline-flex cursor-pointer items-center gap-3">
  <div className="relative">
    <input type="checkbox" className="peer sr-only" />
    <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
  </div>
  <span className="text-sm font-medium text-foreground">Enable notifications</span>
</label>`,
    preview: (
      <label className="inline-flex cursor-pointer items-center gap-3">
        <div className="relative">
          <input type="checkbox" className="peer sr-only" />
          <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
        </div>
        <span className="text-sm font-medium text-foreground">
          Enable notifications
        </span>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "label-left",
    name: "Toggle with Label Left",
    code: `<label className="inline-flex cursor-pointer items-center gap-3">
  <span className="text-sm font-medium text-foreground">Dark mode</span>
  <div className="relative">
    <input type="checkbox" className="peer sr-only" />
    <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
  </div>
</label>`,
    preview: (
      <label className="inline-flex cursor-pointer items-center gap-3">
        <span className="text-sm font-medium text-foreground">Dark mode</span>
        <div className="relative">
          <input type="checkbox" className="peer sr-only" defaultChecked />
          <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
        </div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "with-description",
    name: "Toggle with Description",
    code: `<label className="flex cursor-pointer items-start gap-3">
  <div className="relative mt-0.5">
    <input type="checkbox" className="peer sr-only" />
    <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
  </div>
  <div className="flex flex-col">
    <span className="text-sm font-medium text-foreground">Marketing emails</span>
    <span className="text-xs text-foreground/50">Receive emails about new products and features.</span>
  </div>
</label>`,
    preview: (
      <label className="flex cursor-pointer items-start gap-3">
        <div className="relative mt-0.5">
          <input type="checkbox" className="peer sr-only" />
          <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            Marketing emails
          </span>
          <span className="text-xs text-foreground/50">
            Receive emails about new products and features.
          </span>
        </div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "small",
    name: "Small Toggle",
    code: `<label className="relative inline-flex cursor-pointer items-center">
  <input type="checkbox" className="peer sr-only" />
  <div className="h-5 w-9 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
</label>`,
    preview: (
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" defaultChecked />
        <div className="h-5 w-9 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "large",
    name: "Large Toggle",
    code: `<label className="relative inline-flex cursor-pointer items-center">
  <input type="checkbox" className="peer sr-only" />
  <div className="h-8 w-14 rounded-full bg-border/30 transition-colors after:absolute after:left-[3px] after:top-[3px] after:h-[26px] after:w-[26px] after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
</label>`,
    preview: (
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-8 w-14 rounded-full bg-border/30 transition-colors after:absolute after:left-[3px] after:top-[3px] after:h-[26px] after:w-[26px] after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "disabled",
    name: "Disabled Toggle",
    code: `<label className="relative inline-flex cursor-not-allowed items-center opacity-50">
  <input type="checkbox" className="peer sr-only" disabled />
  <div className="h-6 w-11 rounded-full bg-border/30 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70"></div>
</label>`,
    preview: (
      <label className="relative inline-flex cursor-not-allowed items-center opacity-50">
        <input type="checkbox" className="peer sr-only" disabled />
        <div className="h-6 w-11 rounded-full bg-border/30 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70"></div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "disabled-checked",
    name: "Disabled Toggle (Checked)",
    code: `<label className="relative inline-flex cursor-not-allowed items-center opacity-50">
  <input type="checkbox" className="peer sr-only" disabled checked />
  <div className="h-6 w-11 rounded-full bg-foreground after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:translate-x-full after:rounded-full after:bg-background"></div>
</label>`,
    preview: (
      <label className="relative inline-flex cursor-not-allowed items-center opacity-50">
        <input
          type="checkbox"
          className="peer sr-only"
          disabled
          defaultChecked
        />
        <div className="h-6 w-11 rounded-full bg-foreground after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:translate-x-full after:rounded-full after:bg-background"></div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "with-icons",
    name: "Toggle with Icons",
    code: `<label className="relative inline-flex cursor-pointer items-center">
  <input type="checkbox" className="peer sr-only" />
  <div className="flex h-6 w-11 items-center rounded-full bg-border/30 transition-colors peer-checked:bg-foreground">
    <svg className="ml-1 h-3 w-3 text-foreground/50 peer-checked:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </div>
  <div className="absolute left-[2px] top-[2px] h-5 w-5 rounded-full bg-foreground/70 transition-all peer-checked:translate-x-full peer-checked:bg-background"></div>
</label>`,
    preview: (
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" defaultChecked />
        <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background">
          <svg
            className="absolute left-1 top-1 h-4 w-4 text-foreground/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            className="absolute right-1 top-1 h-4 w-4 text-background/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </label>
    ),
    state : "stateless"
  },
  {
    id: "card-toggle",
    name: "Card Toggle",
    code: `<label className="flex cursor-pointer items-center justify-between rounded-lg border border-border/20 bg-background p-4 transition-colors hover:bg-muted/50">
  <div className="flex flex-col">
    <span className="text-sm font-medium text-foreground">Auto-save</span>
    <span className="text-xs text-foreground/50">Save changes automatically</span>
  </div>
  <div className="relative">
    <input type="checkbox" className="peer sr-only" />
    <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
  </div>
</label>`,
    preview: (
      <label className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-border/20 bg-background p-4 transition-colors hover:bg-muted/50">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">Auto-save</span>
          <span className="text-xs text-foreground/50">
            Save changes automatically
          </span>
        </div>
        <div className="relative">
          <input type="checkbox" className="peer sr-only" defaultChecked />
          <div className="h-6 w-11 rounded-full bg-border/30 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
        </div>
      </label>
    ),
    state : "stateless"
  },
];
