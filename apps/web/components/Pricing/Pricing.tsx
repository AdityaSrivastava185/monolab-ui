import { useRouter } from "next/navigation";
import React from "react";

const Pricing = () => {
  const router = useRouter();
  return (
    <div className="my-24 flex flex-col items-center text-center gap-3 px-4">
      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
        Pricing
      </span>
      <div className="flex flex-col items-center text-center gap-3 px-4 ">
        <h2 className="max-w-md text-balance text-2xl md:text-3xl font-semibold text-foreground/70">
          explore the Pricing plan that fits your needs
        </h2>

        <div className="rounded-xl border border-border bg-muted/20 mt-7 p-6 text-foreground min-w-xs max-w-xs">
          <h3 className="text-2xl font-semibold mb-2 font-sans text-start">
            freemium plan
          </h3>
          <p className="text-sm text-foreground/60 mb-4 font-sans text-start max-w-xs">
            Start with our freemium plan and experience the power of our
            platform
          </p>

          <p className="text-sm text-foreground/60 mb-4 font-sans text-start max-w-xs">
            <span className="text-4xl text-foreground font-bold">$0 </span>
            /month
          </p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70 text-start">
            <li className="flex items-start gap-3">
              <span className="flex-none mt-0.5 h-4 w-4 text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="">All current components</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none mt-0.5 h-4 w-4 text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="">Copy-paste, single-file code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none mt-0.5 h-4 w-4 text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="">Regular new components & variants</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none mt-0.5 h-4 w-4 text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="">
                Production‑ready quality (responsive + dark mode ready)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none mt-0.5 h-4 w-4 text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="">Full usage rights + no sign‑up required</span>
            </li>
          </ul>
          <button
            className=" mt-7 w-full rounded-md border border-border/20 bg-foreground px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-muted hover:text-foreground font-semibold cursor-pointer"
            onClick={() => router.push("/components")}
          >
            Explore Instant Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
