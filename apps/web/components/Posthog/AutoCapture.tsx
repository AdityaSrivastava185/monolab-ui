"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { usePostHog } from "posthog-js/react";

/**
 * AutoCapture component
 * - Captures events for specific routes: /docs*, /components*, and the Quick Start (/docs)
 * - Also captures when the hash includes #components on the home page
 * - Debounces to avoid duplicate captures on hydration
 */
export default function AutoCapture() {
  const posthog = usePostHog();
  const pathname = usePathname();
  const lastCaptured = useRef<string | null>(null);

  useEffect(() => {
    if (!posthog) return;

    const shouldCapture = () => {
      if (!pathname) return false;
      // Capture docs and components sections
      if (pathname === "/docs" || pathname.startsWith("/docs/")) return true;
      if (pathname === "/components" || pathname.startsWith("/components/"))
        return true;
      // Quick Start is represented by /docs (handled above)
      // Also capture if on home and hash points to components
      if (pathname === "/" && typeof window !== "undefined") {
        const hash = window.location.hash || "";
        if (hash.includes("#components")) return true;
      }
      return false;
    };

    const captureIfNeeded = () => {
      try {
        const key = `${pathname}?hash=${typeof window !== "undefined" ? window.location.hash : ""}`;
        if (!shouldCapture()) return;
        if (lastCaptured.current === key) return; // avoid duplicates
        lastCaptured.current = key;

        posthog.capture("page_auto_capture", {
          path: pathname,
          hash: typeof window !== "undefined" ? window.location.hash : "",
          title: typeof document !== "undefined" ? document.title : undefined,
          source: "auto",
        });
      } catch (err) {
        // swallow errors to avoid breaking app
        // eslint-disable-next-line no-console
        console.warn("AutoCapture error:", err);
      }
    };

    // Capture immediately on mount / pathname change
    captureIfNeeded();

    // Also listen for hashchange to capture #components
    const onHashChange = () => {
      captureIfNeeded();
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [posthog, pathname]);

  return null;
}
