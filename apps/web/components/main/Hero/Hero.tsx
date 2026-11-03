import GridCards from "@/components/(utility)/utility/GridCards";
import HeroImage from "@/components/(utility)/utility/HeroImage";
import Pattern from "@/components/(utility)/utility/Pattern";
import SectionHeader from "@/components/(utility)/utility/SectionHeader";
import VerticalBorder from "@/components/(utility)/utility/VerticalBorder"
import FrontendBadge from "@/components/FrontendBadge";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container">
      <section className="">
        <div className="grid h-full grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)]">
          <div className="relative">
            <Pattern />
            <div className="absolute inset-y-0 left-0 z-10 w-px">
              <VerticalBorder />
            </div>
            <div className="absolute inset-y-0 right-0 z-10 w-px">
              <VerticalBorder />
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 inner-container">
            <div className="relative flex items-center justify-center h-36 w-72">
              <Pattern />
              <div className="flex items-center justify-center gap-2 border-1 border-primary border-dashed p-2 bg-brand-transparent">
                <span>
                  <FrontendBadge />
                </span>
                <p className="text-primary">NEW COMPONENTS</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right preview-icon"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
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

            <button className="bg-primary text-foreground px-5 py-3 rounded-full">Start building for free</button>

            <div className="w-full border-y border-brand-gray-dark">
        <div className="container bg-background-secondary p-5 md:p-2">
          <Image
            src="/images/image-1.png"
            width={1700}
            height={800}
            alt="hero image"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
          </div>

          <div className="relative">
            <Pattern />

            <div className="absolute inset-y-0 left-0 z-10 w-px">
              <VerticalBorder />
            </div>

            <div className="absolute inset-y-0 right-0 z-10 w-px">
              <VerticalBorder />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
