import GridCards from "@/components/(utility)/utility/GridCards";
import HeroImage from "@/components/(utility)/utility/HeroImage";
import Pattern from "@/components/(utility)/utility/Pattern";
import SectionHeader from "@/components/(utility)/utility/SectionHeader";
import VerticalBorder from "@/components/(utility)/utility/VerticalBorder"
import FrontendBadge from "@/components/FrontendBadge";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PatternContainer from "@/components/(utility)/utility/PatternContainer";

const Hero = () => {
  return (
    <div className="container">
      <section>
        <PatternContainer>
          <div className="flex flex-col items-center gap-10 inner-container">
            <div className="relative flex items-center justify-center h-36 w-72">
              <Pattern />
              <div className="flex items-center justify-center gap-2 border-1 border-primary border-dashed p-2 bg-brand-transparent rounded-full">
                <span>
                  <FrontendBadge />
                </span>
                <p className="text-primary">NEW COMPONENTS</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right preview-icon"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <SectionHeader
                title="Build and deploy beautiful interfaces faster with MonoLab UI components"
                description="Bring any Next.js project, copy the component you need, and paste it straight into your codebase -- a single TypeScript file styled with Tailwind CSS, with zero dependencies and nothing to install. The code is yours completely"
                titleClassName="text-2xl"
                descriptionClassName="text-md"
              />
            </div>

            <div className="p-1 border transition-all duration-300 border-transparent rounded-full hover:border hover:border-dashed hover:border-primary">
              <button className="bg-primary text-foreground px-5 py-3 rounded-full cursor-pointer">Start building for free</button>
            </div>

            <HeroImage src="/images/image-1.png"/>
          </div>
        </PatternContainer>
      </section>

    </div>
  );
};

export default Hero;
