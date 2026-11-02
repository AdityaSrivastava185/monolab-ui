import React from "react";
import SectionHeader from "./SectionHeader";

const GridCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="border-surface relative flex h-full flex-col border col-span-1">
          <div className="pointer-events-none absolute inset-0 z-10 select-none">
            <div className="absolute bg-primary -left-[7px] -top-[7px] w-3.5 h-3.5 rounded-sm"></div>
            <div className="absolute bg-yellow-400 -right-[7px] -top-[7px] w-3.5 h-3.5 rounded-sm"></div>
            <div className="absolute bg-orange-400 -left-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
            <div className="absolute bg-yellow-600 -right-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
          </div>
          <SectionHeader
            className="flex flex-1 gap-0 flex-col items-start p-3 lg:p-8"
            titleClassName="text-start text-lg md:text-balance md:text-lg"
            descriptionClassName="text-accent-light/70 md:text-balance text-start text-md"
            title="Preview deployments for every branch"
            description="Create a pull request, get a preview URL to view and share before deploying to productions"
          />
        </div>
        <SectionHeader
          className="border-surface relative flex h-full flex-col border col-span-1 items-start p-3 lg:p-8 gap-0"
          title="Support for all frameworks and rendering mode"
          titleClassName="md:text-lg md:text-balance text-start text-lg"
          descriptionClassName="text-accent-light/70 text-balance text-start text-md"
          description="Server-side rendered (SSR), Incremental Static Regeneration (ISR),
              Static Site Generation (SSG), client-side rendered."
        />
        <div className="border-surface relative flex h-full flex-col border col-span-1">
          <div className="pointer-events-none absolute inset-0 z-10 select-none">
            <div className="absolute bg-red-400 -left-[7px] -top-[7px] w-3.5 h-3.5 rounded-sm"></div>
            <div className="absolute bg-red-400 -right-[7px] -top-[7px] w-3.5 h-3.5  rounded-sm"></div>
            <div className="absolute bg-red-500 -left-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
            <div className="absolute bg-red-600 -right-[7px] -bottom-[7px] w-3.5 h-3.5  rounded-sm"></div>
          </div>
          <SectionHeader
            className="flex flex-1 gap-0 flex-col items-start p-3 lg:p-8"
            title="HTML, JS and CSS caching"
            titleClassName="md:text-lg md:text-balance text-start text-lg"
            descriptionClassName="text-md md:text-base text-accent-light/70 text-balance text-start"
            description="Every request for a static asset goes through Edgeform's Tiered
              Cache for the fastest possible performance."
          />
        </div>
      </div>
    </div>
  );
};

export default GridCards;
