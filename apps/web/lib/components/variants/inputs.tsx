import { ComponentVariant } from "../types";

/**
 * Input Variants
 *
 * All input component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const inputVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Input",
    code: `<input
  type="text"
  placeholder="Enter text..."
  className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
/>`,
    preview: (
      <input
        type="text"
        placeholder="Enter text..."
        className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
      />
    ),
  },
  {
    id: "with-label",
    name: "Input with Label",
    code: `<div className="flex flex-col gap-1.5">
  <label htmlFor="email" className="text-sm font-medium text-foreground">
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
</div>`,
    preview: (
      <div className="flex w-full flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
      </div>
    ),
  },
  {
    id: "required",
    name: "Required Input",
    code: `<div className="flex flex-col gap-1.5">
  <label htmlFor="name" className="text-sm font-medium text-foreground">
    Full Name <span className="text-red-500">*</span>
  </label>
  <input
    id="name"
    type="text"
    required
    placeholder="John Doe"
    className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
</div>`,
    preview: (
      <div className="flex w-full flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
      </div>
    ),
  },
  {
    id: "with-helper-text",
    name: "Input with Helper Text",
    code: `<div className="flex flex-col gap-1.5">
  <label htmlFor="username" className="text-sm font-medium text-foreground">
    Username
  </label>
  <input
    id="username"
    type="text"
    placeholder="johndoe"
    className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
  <p className="text-xs text-foreground/50">
    Your username must be 3-20 characters long.
  </p>
</div>`,
    preview: (
      <div className="flex w-full flex-col gap-1.5">
        <label
          htmlFor="username"
          className="text-sm font-medium text-foreground"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="johndoe"
          className="w-full rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
        <p className="text-xs text-foreground/50">
          Your username must be 3-20 characters long.
        </p>
      </div>
    ),
  },
  {
    id: "error",
    name: "Input with Error",
    code: `<div className="flex flex-col gap-1.5">
  <label htmlFor="email-error" className="text-sm font-medium text-foreground">
    Email
  </label>
  <input
    id="email-error"
    type="email"
    defaultValue="invalid-email"
    className="w-full rounded-md border border-red-500 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/20"
  />
  <p className="text-xs text-red-500">
    Please enter a valid email address.
  </p>
</div>`,
    preview: (
      <div className="flex w-full flex-col gap-1.5">
        <label
          htmlFor="email-error"
          className="text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="email-error"
          type="email"
          defaultValue="invalid-email"
          className="w-full rounded-md border border-red-500 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/20"
        />
        <p className="text-xs text-red-500">
          Please enter a valid email address.
        </p>
      </div>
    ),
  },
  {
    id: "disabled",
    name: "Disabled Input",
    code: `<input
  type="text"
  disabled
  placeholder="Disabled input"
  className="w-full cursor-not-allowed rounded-md border border-border/10 bg-muted px-4 py-2 text-sm text-foreground/50 placeholder:text-foreground/30"
/>`,
    preview: (
      <input
        type="text"
        disabled
        placeholder="Disabled input"
        className="w-full cursor-not-allowed rounded-md border border-border/10 bg-muted px-4 py-2 text-sm text-foreground/50 placeholder:text-foreground/30"
      />
    ),
  },
  {
    id: "with-icon-left",
    name: "Input with Icon (Left)",
    code: `<div className="relative">
  <svg
    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
  <input
    type="text"
    placeholder="Search..."
    className="w-full rounded-md border border-border/20 bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
</div>`,
    preview: (
      <div className="relative w-full">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border border-border/20 bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
      </div>
    ),
  },
  {
    id: "with-icon-right",
    name: "Input with Icon (Right)",
    code: `<div className="relative">
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full rounded-md border border-border/20 bg-background py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
  <svg
    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
</div>`,
    preview: (
      <div className="relative w-full">
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-md border border-border/20 bg-background py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "password",
    name: "Password Input",
    code: `<div className="relative">
  <input
    type="password"
    placeholder="Enter password"
    className="w-full rounded-md border border-border/20 bg-background py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
  <button
    type="button"
    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
  >
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  </button>
</div>`,
    preview: (
      <div className="relative w-full">
        <input
          type="password"
          placeholder="Enter password"
          defaultValue="password123"
          className="w-full rounded-md border border-border/20 bg-background py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>
    ),
  },
  {
    id: "textarea",
    name: "Textarea",
    code: `<textarea
  placeholder="Enter your message..."
  rows={4}
  className="w-full resize-none rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
/>`,
    preview: (
      <textarea
        placeholder="Enter your message..."
        rows={3}
        className="w-full resize-none rounded-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
      />
    ),
  },
  {
    id: "with-prefix",
    name: "Input with Prefix",
    code: `<div className="flex">
  <span className="inline-flex items-center rounded-l-md border border-r-0 border-border/20 bg-muted px-3 text-sm text-foreground/60">
    https://
  </span>
  <input
    type="text"
    placeholder="example.com"
    className="w-full rounded-r-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
</div>`,
    preview: (
      <div className="flex w-full">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-border/20 bg-muted px-3 text-sm text-foreground/60">
          https://
        </span>
        <input
          type="text"
          placeholder="example.com"
          className="w-full rounded-r-md border border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
      </div>
    ),
  },
  {
    id: "with-suffix",
    name: "Input with Suffix",
    code: `<div className="flex">
  <input
    type="number"
    placeholder="0.00"
    className="w-full rounded-l-md border border-r-0 border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
  <span className="inline-flex items-center rounded-r-md border border-border/20 bg-muted px-3 text-sm text-foreground/60">
    USD
  </span>
</div>`,
    preview: (
      <div className="flex w-full">
        <input
          type="number"
          placeholder="0.00"
          className="w-full rounded-l-md border border-r-0 border-border/20 bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
        <span className="inline-flex items-center rounded-r-md border border-border/20 bg-muted px-3 text-sm text-foreground/60">
          USD
        </span>
      </div>
    ),
  },
];
