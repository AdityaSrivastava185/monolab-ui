import React from "react";

const ToolsStacks = () => {
  return (
    <section className="my-24 flex flex-col items-center text-center gap-3 px-4">
      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
        tools & stacks
      </span>

      <h2 className="text-2xl md:text-3xl font-semibold text-foreground/70">
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
