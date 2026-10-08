import { BlockCard } from "./BlockCard";

// Block previews
const HeroBlock = () => (
  <div className="flex h-full w-full flex-col items-center justify-center text-center p-8">
    <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">The product development system for teams</h1>
    <p className="mb-6 max-w-xl text-muted-foreground">Purpose-built for planning and building products. Designed for the AI era.</p>
    <div className="flex gap-3">
      <button className="rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Get Started
      </button>
      <button className="rounded-md border border-border/20 bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent">
        View Demo
      </button>
    </div>
  </div>
);

const FooterBlock = () => (
  <div className="flex h-full w-full flex-col p-8">
    <div className="mb-8 grid gap-8 sm:grid-cols-3">
      <div>
        <h4 className="mb-4 text-lg font-semibold text-foreground">MonoLab</h4>
        <p className="text-sm text-muted-foreground">Installation-free components for modern React applications.</p>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-semibold text-foreground">Resources</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">Components</a></li>
          <li><a href="#" className="hover:text-foreground">Blocks</a></li>
          <li><a href="#" className="hover:text-foreground">Documentation</a></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-semibold text-foreground">Connect</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">GitHub</a></li>
          <li><a href="#" className="hover:text-foreground">Twitter</a></li>
          <li><a href="#" className="hover:text-foreground">Discord</a></li>
        </ul>
      </div>
    </div>
    <div className="flex items-center justify-between border-t border-border/10 pt-4">
      <p className="text-sm text-muted-foreground">&copy; 2024 MonoLab. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
      </div>
    </div>
  </div>
);

const LoginBlock = () => (
  <div className="flex h-full w-full items-center justify-center p-8">
    <div className="w-full max-w-md rounded-xl border border-border/10 bg-card p-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to your MonoLab account</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="flex h-10 w-full rounded-md border border-border/20 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground" htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" className="flex h-10 w-full rounded-md border border-border/20 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
        <button type="submit" className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Sign in</button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">Don&apos;t have an account? <a href="#" className="text-primary hover:underline">Sign up</a></p>
    </div>
  </div>
);

const PricingBlock = () => (
  <div className="flex h-full w-full items-center justify-center p-8">
    <div className="grid gap-6 max-w-4xl w-full sm:grid-cols-3">
      {[
        { name: "Starter", price: "$0", description: "Perfect for side projects", features: ["Up to 5 components", "Community support", "MIT License"] },
        { name: "Pro", price: "$29/mo", description: "For professional teams", features: ["Unlimited components", "Priority support", "Private blocks", "Team collaboration"] },
        { name: "Enterprise", price: "Custom", description: "For large organizations", features: ["Everything in Pro", "Dedicated support", "Custom components", "SLA guarantee", "On-premise option"] },
      ].map((plan) => (
        <div key={plan.name} className="flex flex-col rounded-xl border border-border/10 bg-card p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-foreground">{plan.price}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className={`w-full rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
            plan.name === "Pro" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border/20 bg-background text-foreground hover:bg-accent"
          }`}>
            {plan.name === "Pro" ? "Get Started" : "Choose Plan"}
          </button>
        </div>
      ))}
    </div>
  </div>
);

const blocks = [
  {
    name: "Hero Section",
    description: "A striking hero with headline, subtext, and dual CTAs. Perfect for landing pages.",
    preview: <HeroBlock />,
    tags: ["Landing", "Marketing", "Hero"],
  },
  {
    name: "Footer",
    description: "Complete footer with navigation, social links, and copyright. Responsive and accessible.",
    preview: <FooterBlock />,
    tags: ["Layout", "Navigation", "Footer"],
  },
  {
    name: "Login Page",
    description: "Clean authentication form with validation states. Ready for your auth provider.",
    preview: <LoginBlock />,
    tags: ["Auth", "Forms", "Page"],
  },
  {
    name: "Pricing Table",
    description: "Three-tier pricing with feature comparison. Highlights the recommended plan.",
    preview: <PricingBlock />,
    tags: ["Marketing", "Pricing", "Conversion"],
  },
];

export function BlocksShowcase() {
  return (
    <section className="py-24 bg-background" aria-labelledby="blocks-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 id="blocks-heading" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Complete sections, not just components
          </h2>
          <p className="text-lg text-muted-foreground">
            Production-ready page sections you can drop into any project. Each block is a complete, self-contained UI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {blocks.map((block) => (
            <BlockCard key={block.name} {...block} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">Need more page sections?</p>
          <a
            href="/blocks"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Explore all blocks
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}