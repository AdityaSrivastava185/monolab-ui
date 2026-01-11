"use client";

import { useState } from "react";
import {
  Badge,
  HeroContent,
  IconsPreview,
  VideoPreview,
  CardsPreview,
  TogglePreview,
  SliderPreview,
  MobilePreview,
  ButtonsPreview,
  NavigationPreview,
  InputsPreview,
  CheckboxPreview,
  AccordionPreview,
  ComponentStackPreview,
  ComponentsSection,
  Footer,
} from "../Landing";

export function Hero() {
  const [toggleOn, setToggleOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(60);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  return (
    <main className="bg-background">
      {/* Hero Section - Contains scattered components */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Floating badge top center */}
        <Badge />

        {/* Left Side Floating Previews */}
        <IconsPreview />
        <VideoPreview />
        <CardsPreview />
        <TogglePreview
          isOn={toggleOn}
          onToggle={() => setToggleOn(!toggleOn)}
        />
        <SliderPreview value={sliderValue} onChange={setSliderValue} />
        <MobilePreview />

        {/* Center Content */}
        <HeroContent />

        {/* Right Side Floating Previews */}
        <ButtonsPreview />
        <NavigationPreview />
        <InputsPreview />
        <CheckboxPreview
          isChecked={checkboxChecked}
          onToggle={() => setCheckboxChecked(!checkboxChecked)}
        />
        <AccordionPreview
          isOpen={accordionOpen}
          onToggle={() => setAccordionOpen(!accordionOpen)}
        />
        <ComponentStackPreview />
      </section>

      {/* Components Section */}
      <ComponentsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Hero;
