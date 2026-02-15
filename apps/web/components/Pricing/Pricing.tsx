import React from "react";
import FreemiumPlan from "@/components/Pricing/PricingPlanCards/FreemiumPlan";
import PremiumPlan from "@/components/Pricing/PricingPlanCards/PremiumPlan";

const Pricing = () => {
  return (
      <div className="my-24 flex flex-col items-center text-center gap-3 px-4">
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
              pricing
          </span>
          <h2 className="max-w-md text-balance text-2xl md:text-3xl font-semibold text-foreground/70">
              explore the Pricing plan that fits your needs
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-7">
              <FreemiumPlan/>
              <PremiumPlan/>
          </div>
      </div>
  );
};

export default Pricing;
