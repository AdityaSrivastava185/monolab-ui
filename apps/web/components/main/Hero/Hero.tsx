import HeroImage from "@/components/(utility)/utility/HeroImage";
import Pattern from "@/components/(utility)/utility/Pattern";
import SectionHeader from "@/components/(utility)/utility/SectionHeader";
import FrontendBadge from "@/components/FrontendBadge";
import React from "react";
import PatternContainer from "@/components/(utility)/utility/PatternContainer";
import Button from "@/components/(utility)/utility/ui/Button";

const Hero = () => {
  return (
    <div className="container">
      <section>
        <PatternContainer>
          <div className="flex flex-col md:items-center gap-10 inner-container">
            <div className="relative flex md:items-center md:justify-center lg:h-36 lg:w-72">
              <Pattern />
              <div className="flex md:items-center md:justify-center gap-2 border-1 border-primary border-dashed p-2 bg-brand-transparent rounded-full mt-10 lg:mt-0 ml-4 md:ml-0">
                <span>
                  <FrontendBadge />
                </span>
                <p className="text-sm md:text-base text-primary">NEW COMPONENTS</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right preview-icon"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
              </div>
            </div>
            <div className="max-w-xs text-balance md:max-w-5xl mx-auto">
              <SectionHeader
                title="Build and deploy beautiful interfaces faster with MonoLab UI components"
                description="Bring any Next.js project, copy the component you need, and paste it straight into your codebase -- a single TypeScript file styled with Tailwind CSS, with zero dependencies and nothing to install. The code is yours completely"
                titleClassName="text-3xl leading-tight md:leading-none text-balance text-start md:text-center "
                descriptionClassName="text-start md:text-center text-lg md:text-md"
              />
            </div>

            <Button
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right preview-icon"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>}>
              Start building for free
            </Button>

            <HeroImage src="/images/orange-bg.png" />
          </div>
        </PatternContainer>
      </section>

    </div>
  );
};

export default Hero;
