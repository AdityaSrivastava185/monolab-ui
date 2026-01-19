"use client";

import {
  HeroContent,
  ComponentsSection,
  Footer,
} from "../Landing";
import { BackgroundVideo } from "../BackgroundVideo";

export function Hero() {
  return (
    <main className="bg-background">
      <BackgroundVideo />
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Center Content */}
        <HeroContent />
      </section>

      {/* Components Section */}
      <ComponentsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Hero;
