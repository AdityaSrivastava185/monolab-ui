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
            title="Find what you need"
            description="Browse the component collection, explore examples, and find the right building blocks for your application."
          />
        </div>
        <SectionHeader
          className="border-surface relative flex h-full flex-col border col-span-1 items-start p-3 lg:p-8 gap-0"
          title="Make it yours"
          titleClassName="md:text-lg md:text-balance text-start text-lg"
          descriptionClassName="text-brand-gray-light text-balance text-start text-md"
          description="Copy the component directly into your project and customize its styles, props, and behavior to fit your needs."
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
            title="Build with confidence"
            titleClassName="md:text-lg md:text-balance text-start text-lg"
            descriptionClassName="text-md md:text-base text-brand-gray-light text-balance text-start"
            description="Integrate it into your existing codebase, combine it with other components, and keep building without changing your workflow."
          />
        </div>
      </div>
    </div>
  );
};

export default GridCards;
