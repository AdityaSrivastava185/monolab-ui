import {
  Building2,
  Check,
  Crown,
  Headphones,
  Infinity as InfinityIcon,
  Layers,
  Lock,
  Rocket,
  Snowflake,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  PricingCard,
  type PricingCardData,
} from "@/components/main/Pricing/PricingCard";
import Header from "@/components/Header/Header";

// Small helper so every icon gets the same size and class
const icon = (Icon: LucideIcon, strokeWidth = 2) => (
  <Icon size={24} strokeWidth={strokeWidth} className="preview-icon" />
);

// TODO: replace placeholder data with real plans
const pricingPlans: PricingCardData[] = [
  {
    id: "free",
    title: "Free",
    description: "Free components for everyday projects.",
    price: "$00",
    pricePeriod: "/mo",
    icon: icon(Snowflake),
    features: [
      { icon: icon(Check), text: "Test out ui's capabilities" },
      { icon: icon(Check), text: "Access on web and mobile" },
      { icon: icon(Layers), text: "Limited number of components" },
      { icon: icon(Check), text: "Basic seo features and theming" },
      { icon: icon(Check), text: "Limited variants" },
    ],
    buttonText: "Start Free",
    buttonIcon: icon(Sparkles, 1),
  },
  {
    id: "pro",
    title: "Pro",
    description: "Everything you need to ship production apps.",
    price: "$19",
    pricePeriod: "/mo",
    icon: icon(Zap),
    isPopular: true,
    popularLabel: "Popular",
    popularIcon: icon(Sparkles),
    features: [
      { icon: icon(Layers), text: "100+ components" },
      { icon: icon(Zap), text: "All variants unlocked" },
      { icon: icon(Check), text: "Advanced seo and theming" },
      { icon: icon(Headphones), text: "Email support" },
      { icon: icon(Rocket), text: "Early access to new components" },
    ],
    buttonText: "Go Pro",
    buttonIcon: icon(Sparkles, 1),
  },
  {
    id: "team",
    title: "Team",
    description: "Collaborate and share components with your team.",
    price: "$49",
    pricePeriod: "/mo",
    icon: icon(Users),
    features: [
      { icon: icon(Users), text: "Up to 10 team members" },
      { icon: icon(Layers), text: "Shared component library" },
      { icon: icon(Check), text: "Everything in Pro" },
      { icon: icon(Headphones), text: "Priority support" },
    ],
    buttonText: "Start Team",
    buttonIcon: icon(Sparkles, 1),
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Custom solutions for large organizations.",
    price: "Custom",
    pricePeriod: "",
    icon: icon(Building2),
    comingSoon: true,
    features: [
      { icon: icon(InfinityIcon), text: "Unlimited team members" },
      { icon: icon(Lock), text: "SSO and advanced security" },
      { icon: icon(Crown), text: "Dedicated account manager" },
      { icon: icon(Headphones), text: "24/7 support" },
    ],
    buttonText: "Contact Sales",
    buttonIcon: icon(Sparkles, 1),
  },
];

export default function PricingPage() {
  return (
    <div>
      <Header />
      <div className='container py-7'>
        <div className='flex flex-col gap-7 justify-center'>
          <div className='pb-7 border-b border-brand-gray-darker'>
            <h1 className='text-xl md:text-5xl'>Pricing</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} data={plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}