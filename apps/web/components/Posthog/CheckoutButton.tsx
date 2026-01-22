"use client";

import React from "react";
import { usePostHog } from "posthog-js/react";

export default function CheckoutButton({ amount = 99 }: { amount?: number }) {
  const posthog = usePostHog();

  function handlePurchase() {
    if (posthog) {
      posthog.capture("purchase_completed", { amount });
    } else {
      // PostHog not initialized yet (safeguard for server-side rendering)
      console.warn("posthog is not available yet");
    }
  }

  return (
    <button
      onClick={handlePurchase}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
      type="button"
    >
      Complete purchase
    </button>
  );
}
