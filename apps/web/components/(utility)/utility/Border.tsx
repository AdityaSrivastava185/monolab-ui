import React from "react";

const Border = () => {
  return (
    <div className="w-full h-px">
      <svg
        className="block w-full h-full"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="#262626"
          strokeWidth="1"
          strokeDasharray="1 0.7"
        />
      </svg>
      <svg
        className="block w-full h-full"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="#262626"
          strokeWidth="1"
          strokeDasharray="1 0.7"
        />
      </svg>
    </div>
  );
};

export default Border;
