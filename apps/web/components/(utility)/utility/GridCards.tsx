import React from "react";
import SectionHeader from "./SectionHeader";

const GridCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="border-surface relative flex h-full flex-col border col-span-1">
          <div className="pointer-events-none absolute inset-0 z-10 select-none">
            <div className="absolute bg-brand-gray-darker -left-[7px] -top-[7px] w-3.5 h-3.5 rounded-sm"></div>
            <div className="absolute bg-brand-gray-darker -right-[7px] -top-[7px] w-3.5 h-3.5 rounded-sm"></div>
            <div className="absolute bg-brand-gray-darker -left-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
            <div className="absolute bg-brand-gray-darker -right-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
          </div>
          <SectionHeader
            className="flex flex-1 gap-0 flex-col items-start p-3 lg:p-8"
            titleClassName="text-start text-lg md:text-balance md:text-lg"
            descriptionClassName="text-brand-gray-light md:text-balance text-start text-md"
            title="One file per component"
            description="Every component is a single, self-contained file — no packages to install, no config to maintain. Copy it, paste it, and it works."
          />
        </div>
        <SectionHeader
          className="border-surface relative flex h-full flex-col border col-span-1 items-start p-3 lg:p-8 gap-0"
          title="Typed, tested, and Next.js-native"
          titleClassName="md:text-lg md:text-balance text-start text-lg"
          descriptionClassName="text-brand-gray-light text-balance text-start text-md"
          description="Full TypeScript support, built for Next.js, React, and Tailwind CSS. Clean props, predictable APIs, and code your team can read at a glance."
        />
        <div className="border-surface relative flex h-full flex-col border col-span-1">
          <div className="pointer-events-none absolute inset-0 z-10 select-none">
            <div className="absolute bg-brand-gray-darker -left-[7px] -top-[7px] w-3.5 h-3.5 rounded-sm"></div>
            <div className="absolute bg-brand-gray-darker -right-[7px] -top-[7px] w-3.5 h-3.5  rounded-sm"></div>
            <div className="absolute bg-brand-gray-darker -left-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
            <div className="absolute bg-brand-gray-darker -right-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
          </div>
          <SectionHeader
            className="flex flex-1 gap-0 flex-col items-start p-3 lg:p-8"
            title="Yours forever, zero lock-in"
            titleClassName="md:text-lg md:text-balance text-start text-lg"
            descriptionClassName="text-md md:text-base text-brand-gray-light text-balance text-start"
            description="The code stops belonging to us the moment you copy it. No version upgrades, no breaking changes, no dependency drift — just components you fully control."
          />
        </div>
      </div>
    </div>
  );
};

export default GridCards;
