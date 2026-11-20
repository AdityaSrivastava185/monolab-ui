import FeaturesCard from "@/components/(utility)/utility/FeaturesCard";
import IconList from "@/components/(utility)/utility/IconsList";
import React from "react";


const useCases = [
  {
    title: "Skip the setup tax.",
    description:
      "No installs, no config, no providers. Find what you need, copy it, and paste it straight into your project — a single file that just works.",
    image: "/images/image-1.png",
    imageAlt: "Copying a component into a project",
    // tags: ["ZERO DEPENDENCIES", "COPY-PASTE", "NEXT.JS READY", "TAILWIND CSS"],
  },
  {
    title: "Own every line you ship.",
    description:
      "The code stops being ours the moment you copy it. No version lock, no upstream breaking changes, no abstraction you can't open and change.",
    image: "/images/image-2.png",
    imageAlt: "Full code ownership",
    // tags: ["FULL OWNERSHIP", "NO LOCK-IN", "READABLE SOURCE"],
  },
  {
    title: "Stop rebuilding the basics.",
    description:
      "Buttons, dialogs, forms, and feedback states are solved problems. Spend your time on product decisions, not on rewriting primitives for the hundredth time.",
    image: "/images/image-1.png",
    imageAlt: "Reusing solved problems",
    // tags: ["SAVE HOURS", "REUSABLE PRIMITIVES", "CONSISTENT API"],
  },
  {
    title: "Go from prototype to production.",
    description:
      "Every component is typed, styled, and built for real workloads — so the screen you sketch on Friday is the screen you ship on Monday.",
    image: "/images/image-1.png",
    imageAlt: "From prototype to production",
    // tags: ["TYPESCRIPT", "PRODUCTION READY", "PREDICTABLE APIS"],
  },
  {
    title: "Keep your codebase clean.",
    description:
      "Components arrive as self-contained files your team can review, refactor, and version like any other code. No black boxes, no hidden styles.",
    image: "/images/image-1.png",
    imageAlt: "A clean, reviewable codebase",
    // tags: ["READABLE CODE", "SELF-CONTAINED", "COMPOSABLE"],
  },
  {
    title: "Stay on brand by default.",
    description:
      "Clean ink-and-paper defaults restyle to your design system with a few CSS variables — consistent UI without fighting a styling engine.",
    image: "/images/image-1.png",
    imageAlt: "Staying on brand",
    // tags: ["DESIGN TOKENS", "THEMING", "VARIANTS", "DARK MODE"],
  },
];
const Features = () => {
  return (
    <div className="container border-y border-brand-gray-darker">
      <section className="w-full md:px-10 section pt-20">
        <div className="mx-auto w-full max-w-432">
          <div className="grid grid-cols-1 md:grid-cols-10">
            {/* ================= LEFT SIDE ================= */}
            <div className="hidden md:col-span-2 md:block">
              <div className="sticky top-0 flex h-dvh flex-col justify-between px-4 py-20">
                <div />
                <IconList />
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="col-span-1 border-surface-dark md:col-span-8 md:border-x">
              {useCases.map((item) => (
                <FeaturesCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
