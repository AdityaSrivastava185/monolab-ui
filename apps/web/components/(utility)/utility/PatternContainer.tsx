import React from "react";
import Pattern from "./Pattern";
import VerticalBorder from "./VerticalBorder";
import { patternContainerProps } from "@/types/PatternContainer.type";

const PatternContainer = ({ children }: patternContainerProps) => {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)]">
      {/* Left decorative section */}
      <div className="relative hidden lg:block">
        <Pattern />

        <div className="absolute inset-y-0 left-0 z-10 w-px">
          <VerticalBorder />
        </div>

        <div className="absolute inset-y-0 right-0 z-10 w-px">
          <VerticalBorder />
        </div>
      </div>

      {/* Main content */}
      <div className="min-w-0">
        {children}
      </div>

      {/* Right decorative section */}
      <div className="relative hidden lg:block">
        <Pattern />

        <div className="absolute inset-y-0 left-0 z-10 w-px">
          <VerticalBorder />
        </div>

        <div className="absolute inset-y-0 right-0 z-10 w-px">
          <VerticalBorder />
        </div>
      </div>
    </div>
  );
};

export default PatternContainer;