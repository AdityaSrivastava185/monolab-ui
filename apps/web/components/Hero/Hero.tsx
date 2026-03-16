"use client";

import Image from "next/image";
import { HeroContent, Footer } from "../Landing";
import Pricing from "../Pricing/Pricing";
import ExamplesSection from "../examples/Example";

export function Hero() {
  return (
    <main className="px-3 pb-6 pt-3 sm:px-5 sm:pt-5 lg:px-8">
      <section className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden">
          <HeroContent />
        </div>

        <section className="mt-8 w-full rounded-xl bg-card/80 p-2 md:hidden">
          <div
            className="relative overflow-hidden rounded-xl"
            style={{ height: "clamp(24rem, 78vw, 36rem)" }}
          >
            <Image
              src="/hero-image.png"
              alt="Monolab UI preview"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ transform: "scale(1.1)", objectPosition: "50% center" }}
              priority
            />
          </div>
        </section>

        <section className="mx-auto mt-8 hidden w-full max-w-7xl sm:mt-10 md:block">
          <ExamplesSection />
        </section>

        <section className="mx-auto mt-10 w-full max-w-7xl sm:mt-14">
          <Pricing />
        </section>

        <section className="mx-auto mt-8 w-full max-w-7xl sm:mt-10">
          <Footer />
        </section>
      </section>
    </main>
  );
}

export default Hero;
