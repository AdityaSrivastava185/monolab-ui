"use client";

import { HeroContent, ComponentsSection, Footer } from "../Landing";
import { BackgroundVideo } from "../BackgroundVideo";

const metadata = {
  title: "MonoLab UI - A minimal layer for your codebase",
  description: "A set of clean , accessible components that live in your codebase.",
  keywords: ["monolab ui","react components","component library","ui components","design system","nextjs components"],
  author:"Monolab ui",
}

export function Hero(){
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <BackgroundVideo />
        {/* Center Content */}
        <div className="relative z-10">
          <HeroContent />
        </div>
      </section>

      {/* Components Section */}
      <ComponentsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Hero;
