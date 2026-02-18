/**
 * Accordion Preview Component
 * Used in the component card on the homepage
 */
export const AlertPreview = () => (
  <div className="w-full">
    <div className="relative flex w-full items-start gap-3 rounded-lg border border-border bg-secondary/70 px-4 py-3 text-sm text-foreground">
      <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-badge-info-icon lucide-badge-info"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <line x1="12" x2="12" y1="16" y2="12" />
          <line x1="12" x2="12.01" y1="8" y2="8" />
        </svg>
      </span>
      <div className="space-y-1">
        <h3 className="font-semibold leading-none tracking-tight">
          Welcome to alert
        </h3>
        <p className="text-sm text-muted-foreground">
          You can explore and add the alert variant.
        </p>
      </div>
    </div>
  </div>
);
