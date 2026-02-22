import React from "react";
import { useRouter } from "next/navigation";
import { PricingPlanProps } from "@/types/pricing.types";
import { Check, ArrowRight } from "lucide-react";

const FreemiumPlan = () => {
  const router = useRouter();
  const freemiumPricingPlan: PricingPlanProps = {
    pricingType: "Free",
    pricingDescription:
      "Perfect for getting started with high-quality components",
    price: 0,
    monthOrYear: "month",
    features: [
      "All current components",
      "Copy-paste, single file code",
      "Regular new components",
      "Dark mode & responsive",
      "MIT License",
    ],
    cta: "Get Started",
  };

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-border/50 bg-background p-6 transition-all hover:border-border hover:shadow-lg">
      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          {freemiumPricingPlan.pricingType}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {freemiumPricingPlan.pricingDescription}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">
          ${freemiumPricingPlan.price}
        </span>
        <span className="text-muted-foreground">/month</span>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {freemiumPricingPlan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 flex-none text-foreground" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => router.push("/components")}
        className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background py-3 text-sm font-medium text-foreground transition-all hover:bg-muted cursor-pointer"
      >
        {freemiumPricingPlan.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
      </button>
    </div>
  );
};

export default FreemiumPlan;
