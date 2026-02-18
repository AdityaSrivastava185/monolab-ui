import React from "react";
import CheckoutButton from "@/components/Posthog/CheckoutButton";

export default function PosthogDocsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          PostHog Integration
        </h1>
        <p className="text-base text-muted-foreground">
          This page demonstrates how to capture events with PostHog using the
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">
            usePostHog
          </code>
          hook in client components. Make sure you set{" "}
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">
            NEXT_PUBLIC_POSTHOG_KEY
          </code>{" "}
          and{" "}
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">
            NEXT_PUBLIC_POSTHOG_HOST
          </code>{" "}
          in your environment.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Example: Checkout Button
        </h2>
        <p className="text-muted-foreground">
          Click the button below to capture a{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            purchase_completed
          </code>{" "}
          event with an amount payload.
        </p>

        <div className="rounded-md border border-border bg-muted/30 p-4">
          <CheckoutButton amount={99} />
        </div>
      </section>
    </div>
  );
}