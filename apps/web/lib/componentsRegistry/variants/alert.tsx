import { ComponentVariant } from "../types";
import {
  BadgeCheck,
  TriangleAlertIcon,
  CircleXIcon,
  BookCopyIcon,
} from "lucide-react";

/**
 * Alert Variants
 *
 * All alert component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const alertVariants: ComponentVariant[] = [
  {
    id: "default",
    name: "Default Alert",
    code: `<div className="relative flex w-full items-start gap-3 rounded-lg border border-border bg-secondary/70 px-4 py-3 text-sm text-foreground">
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
            Heads up!
          </h3>
          <p className="text-sm text-muted-foreground">
            You can add components and dependencies to your app without
            requiring any CLI.
          </p>
        </div>
      </div>`,
    preview: (
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
            Heads up!
          </h3>
          <p className="text-sm text-muted-foreground">
            You can add components and dependencies to your app without
            requiring any CLI.
          </p>
        </div>
      </div>
    ),
    state: "stateless",
  },
  {
    id: "success",
    name: "Success Alert",
    code: `<div className="relative flex w-full items-start gap-3 rounded-lg border border-chart-2/30 bg-chart-2/10 px-4 py-3 text-sm text-secondary-foreground">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-chart-2">
          <BadgeCheck className={"text-secondary-foreground"} />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            Payment successful
          </h3>
          <p className="text-sm text-secondary-foreground">
            Your payment of $29.99 has been processed. A receipt has been sent
            to your email.
          </p>
        </div>
      </div>`,
    preview: (
      <div className="relative flex w-full items-start gap-3 rounded-lg border border-chart-2/30 bg-chart-2/10 px-4 py-3 text-sm text-secondary-foreground">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-chart-2">
          <BadgeCheck className={"text-secondary-foreground"} />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            Payment successful
          </h3>
          <p className="text-sm text-secondary-foreground">
            Your payment of $29.99 has been processed. A receipt has been sent
            to your email.
          </p>
        </div>
      </div>
    ),
    state: "stateless",
  },
  {
    id: "warning",
    name: "Warning Alert",
    code: `<div className="relative flex w-full items-start gap-3 rounded-lg border border-chart-3/30 bg-chart-3/10 px-4 py-3 text-sm text-secondary-foreground">
  <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-secondary-foreground">
   <TriangleAlertIcon />
</span>
  <div className="space-y-1">
    <h3 className="font-semibold leading-none tracking-tight">Subscription expiring</h3>
    <p className="text-sm text-secondary-foreground">
      Your subscription will expire in 3 days. Renew now to avoid service interruption.
    </p>
  </div>
</div>`,
    preview: (
      <div className="relative flex w-full items-start gap-3 rounded-lg border border-chart-3/30 bg-chart-3/10 px-4 py-3 text-sm text-secondary-foreground">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-secondary-foreground">
          <TriangleAlertIcon />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            Subscription expiring
          </h3>
          <p className="text-sm text-secondary-foreground">
            Your subscription will expire in 3 days. Renew now to avoid service
            interruption.
          </p>
        </div>
      </div>
    ),
    state: "stateless",
  },
  {
    id: "error",
    name: "Error Alert",
    code: `<div className="relative flex w-full items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-secondary-foreground">
  <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-secondary-foreground">
  <CircleXIcon/>
</span>
  <div className="space-y-1">
    <h3 className="font-semibold leading-none tracking-tight">Payment failed</h3>
    <p className="text-sm text-secondary-foreground">
      Your payment could not be processed. Please check your payment method and try again.
    </p>
  </div>
</div>`,
    preview: (
      <div className="relative flex w-full items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-secondary-foreground">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-secondary-foreground">
          <CircleXIcon />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            Payment failed
          </h3>
          <p className="text-sm text-secondary-foreground">
            Your payment could not be processed. Please check your payment
            method and try again.
          </p>
        </div>
      </div>
    ),
    state: "stateless",
  },
  {
    id: "info",
    name: "Info Alert",
    code: `<div className="relative flex w-full items-start gap-3 rounded-lg border border-chart-1/30 bg-chart-1/10 px-4 py-3 text-sm text-secondary-foreground">
  <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-secondary-foreground">
  <BookCopyIcon/>
</span>
  <div className="space-y-1">
    <h3 className="font-semibold leading-none tracking-tight">New feature available</h3>
    <p className="text-sm text-secondary-foreground">
      We&apos;ve added dark mode support. You can enable it in your account settings.
    </p>
  </div>
</div>`,
    preview: (
      <div className="relative flex w-full items-start gap-3 rounded-lg border border-chart-1/30 bg-chart-1/10 px-4 py-3 text-sm text-secondary-foreground">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-chart-1">
          <BookCopyIcon className={"text-secondary-foreground"} />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            New feature available
          </h3>
          <p className="text-sm text-secondary-foreground">
            We&apos;ve added dark mode support. You can enable it in your
            account settings.
          </p>
        </div>
      </div>
    ),
    state: "stateless",
  },
  {
    id: "destructive",
    name: "Destructive Alert",
    code: `<div className="relative flex w-full items-start gap-3 rounded-lg border border-destructive/60 bg-destructive/15 px-4 py-3 text-sm text-secondary-foreground">
  <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-destructive"><TriangleAlertIcon className = {"text-secondary-foreground"} /></span>
  <div className="space-y-1">
    <h3 className="font-semibold leading-none tracking-tight">Destructive action</h3>
    <p className="text-sm text-secondary-foreground">
      This action cannot be undone. Please confirm before proceeding.
    </p>
  </div>
</div>`,
    preview: (
      <div className="relative flex w-full items-start gap-3 rounded-lg border border-destructive/60 bg-destructive/15 px-4 py-3 text-sm text-secondary-foreground">
        <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-destructive">
          <TriangleAlertIcon className={"text-secondary-foreground"} />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">
            Destructive action
          </h3>
          <p className="text-sm text-secondary-foreground">
            This action cannot be undone. Please confirm before proceeding.
          </p>
        </div>
      </div>
    ),
    state: "stateless",
  },
];

export default alertVariants;
