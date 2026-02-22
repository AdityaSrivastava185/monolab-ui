import React from "react";
import FreemiumPlan from "@/components/Pricing/PricingPlanCards/FreemiumPlan";
import PremiumPlan from "@/components/Pricing/PricingPlanCards/PremiumPlan";
import Studio from "@/components/Pricing/PricingPlanCards/Studio";
import { CreditCard } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header - Cal.com style */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5">
            <CreditCard className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-xs font-medium text-muted-foreground">
              Simple pricing
            </span>
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose the plan that fits your needs
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Start free, upgrade when you need more. No hidden fees, no
            surprises.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          <FreemiumPlan />
          <PremiumPlan />
          <Studio />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
