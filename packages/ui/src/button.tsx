// packages/ui/src/button.tsx
"use client";

import React, { forwardRef } from "react";

type Variant = "solid" | "outline" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  className?: string;
};

/** Tiny classnames helper — copyable and dependency-free */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Map size -> paddings and text sizes */
const sizeClasses: Record<Size, string> = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

/** Map variant -> neutral styles (light + dark) */
const variantClasses: Record<Variant, string> = {
  solid:
    // neutral dark bg with white text; in dark mode uses white bg with black text
    "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100",
  outline:
    "border border-neutral-200 text-foreground hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800",
  ghost:
    "bg-transparent text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800",
  subtle:
    "bg-neutral-50 text-foreground hover:bg-neutral-100 dark:bg-neutral-900/70 dark:text-foreground dark:hover:bg-neutral-800",
};

/** Base classes applied to every button */
const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-transform transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

/** Focus ring tuned for light/dark */
const focusClasses =
  "focus-visible:ring-neutral-300 dark:focus-visible:ring-neutral-600 focus-visible:ring-offset-background";

/** Subtle active/tap scale for micro-interaction (works without Framer Motion) */
const interactionClasses = "active:scale-95 hover:scale-[1.02]";

/** Small accessible spinner */
function Spinner({ size = 16 }: { size?: number }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="4"
      />
      <path
        d="M22 12a10 10 0 00-10-10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Button
 *
 * - Defaults: variant = 'solid', size = 'md'
 * - Accessible: uses <button>, supports disabled and loading (aria-busy)
 * - Copy/paste friendly: single file, no external deps
 *
 * Usage: <Button onClick={...}>Click me</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "solid", size = "md", className, children, loading = false, disabled, ...rest },
  ref
) {
  const isDisabled = disabled || loading;

  const classes = cn(
    baseClasses,
    focusClasses,
    interactionClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const spinnerSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;

  return (
    <button
      ref={ref}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled ? true : undefined}
      aria-busy={loading ? true : undefined}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="sr-only">Loading</span>
          <Spinner size={spinnerSize} />
          {/* keep text visible for context but marked inert for clarity */}
          <span aria-hidden="true" className="opacity-90">
            {children}
          </span>
        </span>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;

/* Notes:
- If you want Framer Motion micro-interactions, replace the <button> root with a motion.button
  and add an onTap/whileHover scale. Example (not included to avoid adding a required dependency):

  import { motion } from 'framer-motion';
  const MotionButton = motion(button);
  <MotionButton whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }} ... />

- The color tokens (neutral-*) use Tailwind default palette. To theme, modify Tailwind config or
  override with className (e.g. className="bg-primary text-primary-foreground").
*/