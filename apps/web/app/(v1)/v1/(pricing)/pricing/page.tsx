import {
  BadgeCheck,
  Building2,
  Check,
  Component,
  Cpu,
  Crown,
  Headphones,
  Infinity,
  Infinity as InfinityIcon,
  Layers,
  LayoutGrid,
  LineSquiggle,
  Lock,
  MessageSquare,
  PencilIcon,
  Rocket,
  ScanSearch,
  Sigma,
  Snowflake,
  Sparkles,
  Target,
  Users,
  UserStarIcon,
  Waypoints,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  PricingCard,
  type PricingCardData,
} from "@/components/main/Pricing/PricingCard";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Small helper so every icon gets the same size and class
const icon = (Icon: LucideIcon, strokeWidth = 2) => (
  <Icon size={24} strokeWidth={strokeWidth} className="preview-icon" />
);

// TODO: replace placeholder data with real plans
const pricingPlans: PricingCardData[] = [
  {
    id: "free",
    title: "Free",
    description: "The complete component library. Copy everything, forever.",
    price: "$0",
    pricePeriod: "/mo",
    icon: icon(Snowflake),
    features: [
      { icon: icon(Component), text: "Full catalogue of components" },
      { icon: icon(Target), text: "Unlimited projects, unlimited copies" },
      { icon: icon(Cpu), text: "TypeScript + Tailwind CSS, zero dependencies" },
      { icon: icon(LineSquiggle), text: "Dark mode and design tokens" },
      { icon: icon(PencilIcon), text: "Weekly updates, public changelog" },
    ],
    buttonText: "Browse Components",
    buttonIcon: icon(Layers, 2),
  },
  {
    id: "pro",
    title: "Pro",
    description: "Full-page blocks and the design kit behind them.",
    price: "$10",
    pricePeriod: "/mo",
    icon: icon(BadgeCheck),
    isPopular: true,
    popularLabel: "Popular",
    popularIcon: icon(Crown),
    features: [
      { icon: icon(Snowflake), text: "Everything in Free" },
      { icon: icon(LayoutGrid), text: "40+ page blocks: heroes, pricing, dashboards" },
      { icon: icon(Sigma), text: "Figma kit matching every component" },
      { icon: icon(Rocket), text: "Early access to new components" },
      { icon: icon(Headphones), text: "Priority GitHub support" },
    ],
    buttonText: "Get Pro",
    buttonIcon: icon(BadgeCheck, 2),
  },
  {
    id: "team",
    title: "Team",
    description: "Shared tokens and theming for teams that ship together.",
    price: "$49",
    pricePeriod: "/mo",
    icon: icon(Users),
    features: [
      { icon: icon(Users), text: "Up to 10 team seats" },
      { icon: icon(Waypoints), text: "Shared theme tokens and brand presets" },
      { icon: icon(Layers), text: "Team onboarding session" },
      { icon: icon(BadgeCheck), text: "Everything in Pro" },
    ],
    buttonText: "Start Team",
    buttonIcon: icon(Users, 2),
    comingSoon: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Design engineering support for large organizations.",
    price: "Custom",
    pricePeriod: "",
    icon: icon(Building2),
    features: [
      { icon: icon(UserStarIcon), text: "Custom component development" },
      { icon: icon(ScanSearch), text: "Security and code review" },
      { icon: icon(Infinity), text: "Unlimited team members" },
      { icon: icon(MessageSquare), text: "Dedicated Slack channel" },
    ],
    buttonText: "Contact Us",
    buttonIcon: icon(Building2, 2),
    comingSoon: true,
  },
];
export default function PricingPage() {
  return (
    <div>
      <Header />
      <div className='container py-7'>
        <div className='flex flex-col gap-4 md:gap-7 justify-center'>
          <div className='py-10 md:py-0 md:pb-7 border-b border-brand-gray-darker'>
            <h1 className='text-5xl text-center md:text-start'>Pricing</h1>
          </div>
          <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-y-5 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-5 lg:grid-cols-4 lg:gap-y-0 px-5 md:px-10">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} data={plan} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
