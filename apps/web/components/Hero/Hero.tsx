"use client";

import {
  HeroContent,
  ComponentsSection,
  FeaturesSection,
  Footer,
} from "../Landing";
import InsipiredLegends from "../InspiredLegends/InsipiredLegends";
import Pricing from "../Pricing/Pricing";

const metadata = {
  title: "MonoLab UI - A minimal layer for your codebase",
  description:
    "A set of clean , accessible components that live in your codebase.",
  keywords: [
    "monolab ui",
    "react components",
    "component library",
    "ui components",
    "design system",
    "nextjs components",
  ],
  author: "Monolab ui",
};

export function Hero() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative md:max-w-6xl lg:max-w-7xl mx-auto border-x border-border p-2 md:p-7">
        <div className="relative z-10 bg-secondary/20 rounded-2xl">
          <HeroContent />
        </div>
        {/* Components Section */}
      <ComponentsSection />
      {/* How it Works / Features */}
      <FeaturesSection />
      {/* Inspired Legends */}
      <InsipiredLegends />
       {/* Pricing plans */}
      <Pricing />
      {/* Footer */}
      <Footer />
      </section>
    </main>
  );
}

export default Hero;
