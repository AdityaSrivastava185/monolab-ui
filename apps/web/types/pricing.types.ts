
export interface PricingPlanProps {
    pricingType : string,
    pricingDescription : string,
    price : number,
    monthOrYear : string,
    features : string[],
    cta : string | "coming soon"
}