import React from "react";

const Pattern = () => {
  return (
    <div>
      <svg
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <pattern
          id="pattern-left"
          x="0"
          y="0"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="6" cy="6" r="0.75" fill="#262626" />
        </pattern>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-left)"
        />
      </svg>
    </div>
  );
};

export default Pattern;
