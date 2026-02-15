import React from "react";
import FreemiumPlan from "@/components/Pricing/PricingPlanCards/FreemiumPlan";
import PremiumPlan from "@/components/Pricing/PricingPlanCards/PremiumPlan";

const Pricing = () => {
  return (
    <div className="my-24 flex flex-col items-center text-center gap-3 px-4">
      <span className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden text-secondary-foreground [a&]:hover:bg-secondary/90 bg-muted">
        pricing
      </span>
      <h2 className="max-w-xl mx-auto text-primary leading-tighter text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
        explore the Pricing plan that fits your needs
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-7">
        <FreemiumPlan />
        <PremiumPlan />
      </div>
    </div>
  );
};

export default Pricing;
