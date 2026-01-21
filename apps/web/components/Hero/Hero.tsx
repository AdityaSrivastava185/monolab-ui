"use client";

import { HeroContent, ComponentsSection, Footer } from "../Landing";
import { BackgroundVideo } from "../BackgroundVideo";

export function Hero() {
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
