import React, { useState } from "react";
import { PricingPlanProps } from "@/types/pricing.types";
import { Check, ArrowRight, Zap } from "lucide-react";

const Studio = () => {
  const [showToast, setShowToast] = useState(false);
  const StudioPricingPlan: PricingPlanProps = {
    pricingType: "Studio",
    pricingDescription: "Custom solutions for your startup or business",
    price: 500,
    monthOrYear: "project",
    features: [
      "Custom component development",
      "Full website design & build",
      "Figma designs included",
      "Source code ownership",
      "Dedicated support",
    ],
    cta: "Contact Us",
  };

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-border/50 bg-gradient-to-b from-muted/30 to-background p-6 transition-all hover:border-border hover:shadow-lg">
      {/* Enterprise Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
          <Zap className="h-3 w-3" />
          Enterprise
        </div>
      </div>

      {/* Plan Header */}
      <div className="mb-6 mt-2">
        <h3 className="text-xl font-semibold text-foreground">
          {StudioPricingPlan.pricingType}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {StudioPricingPlan.pricingDescription}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">
          ${StudioPricingPlan.price}
        </span>
        <span className="text-muted-foreground">+</span>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {StudioPricingPlan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 flex-none text-foreground" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={handleClick}
        className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
      >
        {StudioPricingPlan.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
      </button>

      {/* Toast */}
      {showToast && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
              <Check className="h-4 w-4 text-background" />
            </div>
            <p className="text-sm text-foreground">
              Studio services coming soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studio;
