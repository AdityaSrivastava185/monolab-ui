
"use client";

import Image from "next/image";
import { useState } from "react";
import PatternContainer from "@/components/(utility)/utility/PatternContainer";
import SectionHeader from "@/components/(utility)/utility/SectionHeader";
import { GetStartedStepProps } from "@/types/GetStarted.type";

const steps: GetStartedStepProps[] = [
    {
        id: "choose-components",
        title: "Choose your components.",
        description:
            "Explore the MonoLab UI library and discover components that fit your project. From buttons and inputs to complex interface patterns, find the right building blocks to get started quickly.",
        image: "/images/image-1.png",
        imageAlt: "Explore MonoLab UI components",
    },
    {
        id: "deep-customization",
        title: "Deep customization.",
        description:
            "Make every component your own. Customize styles, colors, spacing, and behavior to match your application's design system while keeping the flexibility of reusable components.",
        image: "/images/image-1.png",
        imageAlt: "Customize MonoLab UI components",
    },
    {
        id: "build-and-ship",
        title: "Build and ship.",
        description:
            "Bring your ideas to life with reusable components built for real-world applications. Integrate them into your workflow and spend more time building meaningful products.",
        image: "/images/image-1.png",
        imageAlt: "Build applications with MonoLab UI",
    },
];

const GetStarted = () => {
    const [activeStepId, setActiveStepId] = useState<string>(steps[0]!.id);

    // Get the currently active step
    const activeStep = steps.find(
        (step) => step.id === activeStepId
    )!;

    return (
        <div className="container">
            <PatternContainer>
                <div className="pb-20">
                    <SectionHeader
                        className="py-20"
                        title="Get Started with MonolabUI"
                        description="Everything you need to bring MonoLab UI into your next project. Pick a component, add it to your codebase, and make it yours."
                        descriptionClassName="md:max-w-2xl md:text-balance md:mx-auto"
                    />

                    <section className="w-full text-foreground border-y border-brand-gray-darker ">
                        <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2">

                            {/* LEFT CONTENT */}
                            <div className="border-r border-brand-gray-darker h-full w-full">
                                <div className="flex flex-col">
                                    {steps.map((step) => {
                                        const isActive = activeStepId === step.id;

                                        return (
                                            <button
                                                key={step.id}
                                                onClick={() => setActiveStepId(step.id)}
                                                aria-expanded={isActive}
                                                className={`relative w-full border-b border-brand-gray-darker px-8 py-10 text-left transition-colors duration-300 md:px-10 ${isActive
                                                    ? "bg-[#19191c]"
                                                    : "bg-transparent hover:bg-white/[0.03]"
                                                    }`}
                                            >
                                                {/* Active indicator */}
                                                {isActive && (
                                                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#ffb000]" />
                                                )}

                                                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                                                    {step.title}
                                                </h3>

                                                {/* Active description */}
                                                <div
                                                    className={`grid transition-all duration-500 ease-in-out ${isActive
                                                        ? "mt-5 grid-rows-[1fr] opacity-100"
                                                        : "mt-0 grid-rows-[0fr] opacity-0"
                                                        }`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <p className="max-w-2xl text-sm leading-6 text-foreground/70 md:text-base md:leading-7">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden p-6 lg:min-h-0 ">

                                <div className="relative aspect-square w-full max-w-[780px] overflow-hidden border-t border-brand-gray-darker">

                                    {/* Dynamic image based on active ID */}
                                    <Image
                                        key={activeStep.id}
                                        src={activeStep.image}
                                        alt={activeStep.imageAlt}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-opacity duration-500"
                                    />

                                    {/* Optional subtle overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-black/10" />

                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </PatternContainer>
        </div>
    );
};

export default GetStarted;
