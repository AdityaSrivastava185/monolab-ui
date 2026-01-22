"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import AutoCapture from "@/components/Posthog/AutoCapture";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      autocapture: true, // capture clicks/forms automatically
      capture_pageview: true, // capture pageviews automatically
      // other options: persistence, cross_subdomain_cookie, etc.
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      {children}
      <AutoCapture />
    </PHProvider>
  );
}
