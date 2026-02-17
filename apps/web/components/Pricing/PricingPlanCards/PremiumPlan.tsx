import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PricingPlanProps } from "@/types/pricing.types";
import { Check, ChevronRight } from "lucide-react";

const PremiumPlan = () => {
  const router = useRouter();
  const [premiumPlanPopupOpen, setPremiumPlanPopupOpen] = useState(false);
  const premiumPricingPlan: PricingPlanProps = {
    pricingType: "premium plan",
    pricingDescription:
      "Start with our freemium plan and experience the power of our platform",
    price: 200,
    monthOrYear: "month",
    features: [
      "access to all premium and current components",
      "copy-paste , single file code (free + premium)",
      "regular new components and variants",
      "access to premium website templates",
      "full usage rights",
    ],
    cta: "coming soon",
  };
  const handlePremiumPlanPopup = () => {
    setPremiumPlanPopupOpen(true);
    setTimeout(() => {
      setPremiumPlanPopupOpen(false);
    }, 3000);
  };
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4">
      <div className="rounded-xl bg-muted/20 mt-7 p-6 text-foreground min-w-xs max-w-xs">
        <h3 className="text-2xl font-semibold mb-2 font-sans text-start">
          {premiumPricingPlan.pricingType}
        </h3>
        <p className="text-sm text-foreground/60 mb-4 font-sans text-start max-w-xs">
          {premiumPricingPlan.pricingDescription}
        </p>

        <p className="text-sm text-foreground/60 mb-4 font-sans text-start max-w-xs">
          <span className="text-4xl text-foreground font-bold">
            ${premiumPricingPlan.price}{" "}
          </span>
          /month
        </p>
        <ul className="mt-4 space-y-3 text-sm text-foreground/70 text-start">
          {premiumPricingPlan &&
            premiumPricingPlan.features.length > 0 &&
            premiumPricingPlan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
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
                <span className="">{feature}</span>
              </li>
            ))}
        </ul>
        <button
          className=" mt-7 w-full rounded-md border border-border/20 bg-foreground px-4 py-2 text-sm text-muted transition-colors hover:bg-muted hover:text-foreground font-semibold cursor-pointer"
          onClick={handlePremiumPlanPopup}
        >
          {premiumPricingPlan.cta}
        </button>
        {premiumPlanPopupOpen && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 hidden md:block">
            <div className="flex items-center gap-3 bg-background text-accent-foreground border border-border rounded-xl px-4 py-3 shadow-lg min-w-fit">
              <div className="flex items-center justify-center size-8 bg-accent-foreground border border-border rounded-xl">
                <Check className="size-4 text-background" />
              </div>

              <p className="text-sm text-accent-foreground flex-1">
                the pricing plan will soon be coming
              </p>

              <ChevronRight className="size-4 text-accent-foreground" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumPlan;
