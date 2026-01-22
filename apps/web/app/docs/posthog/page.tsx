import React from "react";
import CheckoutButton from "@/components/Posthog/CheckoutButton";

export default function PosthogDocsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">PostHog Integration</h1>
        <p className="text-foreground/70">
          This page demonstrates how to capture events with PostHog using the
          <code className="mx-1 rounded bg-foreground/10 px-1 py-0.5 text-sm">
            usePostHog
          </code>
          hook in client components. Make sure you set{" "}
          <code className="mx-1 rounded bg-foreground/10 px-1 py-0.5 text-sm">
            NEXT_PUBLIC_POSTHOG_KEY
          </code>{" "}
          and{" "}
          <code className="mx-1 rounded bg-foreground/10 px-1 py-0.5 text-sm">
            NEXT_PUBLIC_POSTHOG_HOST
          </code>{" "}
          in your environment.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example: Checkout Button</h2>
        <p className="text-foreground/70">
          Click the button below to capture a{" "}
          <code className="rounded bg-foreground/10 px-1 py-0.5 text-sm">
            purchase_completed
          </code>{" "}
          event with an amount payload.
        </p>

        <div>
          <CheckoutButton amount={99} />
        </div>
      </section>
    </div>
  );
}
