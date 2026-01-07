import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-[20px] font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          A minimal layer for your codebase
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed sm:text-xl">
          MonoLab UI gives you a focused set of clean, accessible components
          that live in your codebase, not in a bundle. Copy the pieces you need,
          shape them to your product, and keep every line under your control.
        </p>
      </div>
    </section>
  );
};

export default Hero;
