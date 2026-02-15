import React from "react";

const ToolsStacks = () => {
  return (
    <section className="my-24 flex flex-col items-center text-center gap-3 px-4">
      <p className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden text-secondary-foreground [a&]:hover:bg-secondary/90 bg-muted">
        tools and stacks
      </p>

      <h2 className="text-primary leading-tighter text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
        tools & stacks
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-2">
        <span className="text-base md:text-lg font-medium text-foreground">
          tailwind CSS
        </span>
        <span className="text-base md:text-lg font-medium text-foreground">
          next.js
        </span>
        <span className="text-base md:text-lg font-medium text-foreground">
          claude
        </span>
        <span className="text-base md:text-lg font-medium text-foreground">
          motion.dev
        </span>
      </div>
    </section>
  );
};

export default ToolsStacks;
