"use client";

import { HeroContent, ComponentsSection, Footer } from "../Landing";
import InsipiredLegends from "../InspiredLegends/InsipiredLegends";
import ToolsStacks from "../ToolsStacks/ToolsStacks";
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
      <section className="relative mt-24">
        <div className="relative z-10">
          <HeroContent />
        </div>
      </section>
      {/* Components Section */}
      <ComponentsSection />

      {/* Inspired Legends */}
      <InsipiredLegends />

      {/* Tools and Stacks */}
      <ToolsStacks />

      {/* Pricing plans */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Hero;
