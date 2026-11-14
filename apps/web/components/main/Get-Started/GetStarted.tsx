
"use client";

import Image from "next/image";
import { useState } from "react";
import PatternContainer from "@/components/(utility)/utility/PatternContainer";
import SectionHeader from "@/components/(utility)/utility/SectionHeader";
import { GetStartedStepProps } from "@/types/GetStarted.type";

const steps: GetStartedStepProps[] = [
    {
        id: 1,
        title: "Choose your components.",
        description:
            "Explore the MonoLab UI library and discover components that fit your project. From buttons and inputs to complex interface patterns, find the right building blocks to get started quickly.",
        image: "/images/image-1.png",
        imageAlt: "Explore MonoLab UI components",
    },
    {
        id: 2,
        title: "Deep customization.",
        description:
            "Make every component your own. Customize styles, colors, spacing, and behavior to match your application's design system while keeping the flexibility of reusable components.",
        image: "/images/image-1.png",
        imageAlt: "Customize MonoLab UI components",
    },
    {
        id: 3,
        title: "Build and ship.",
        description:
            "Bring your ideas to life with reusable components built for real-world applications. Integrate them into your workflow and spend more time building meaningful products.",
        image: "/images/image-1.png",
        imageAlt: "Build applications with MonoLab UI",
    },
];

const GetStarted = () => {
    const [activeStepId, setActiveStepId] = useState<number>(1);

    const activeStep = steps.find(
        (step) => step.id === activeStepId
    );

    return (
        <div className="container">
            <PatternContainer>
                <div className="pb-12 md:pb-20">
                    <SectionHeader
                        className="py-12 md:py-20"
                        title="Get Started with MonolabUI"
                        description="Everything you need to bring MonoLab UI into your next project. Pick a component, add it to your codebase, and make it yours."
                        descriptionClassName="md:max-w-2xl md:text-balance md:mx-auto"
                    />

                    <section className="w-full text-foreground border-y border-brand-gray-darker">

                        {/* MOBILE ACCORDION */}
                        <div className="flex flex-col lg:hidden">
                            {steps.map((step) => {
                                const isActive = activeStepId === step.id;

                                return (
                                    <div
                                        key={step.id}
                                        className="border-b border-brand-gray-darker last:border-b-0"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setActiveStepId(
                                                isActive ? 0 : step.id
                                            )}
                                            aria-expanded={isActive}
                                            className={`flex w-full items-center justify-between gap-4 px-5 py-6 text-left transition-colors duration-300 sm:px-8 ${isActive
                                                    ? "bg-[#19191c]"
                                                    : "bg-transparent"
                                                }`}
                                        >
                                            <span className="text-lg font-medium tracking-tight sm:text-xl">
                                                {step.title}
                                            </span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={`shrink-0 transition-transform duration-300 ${isActive
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                    }`}
                                            >
                                                <path d="m7 6 5 5 5-5" />
                                                <path d="m7 13 5 5 5-5" />
                                            </svg>
                                        </button>

                                        {/* Accordion content */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isActive
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-col gap-5 px-5 pb-6 sm:px-8">
                                                    <p className="text-sm leading-6 text-foreground/70">
                                                        {step.description}
                                                    </p>

                                                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-gray-darker bg-background-secondary">
                                                        <Image
                                                            src={step.image}
                                                            alt={step.imageAlt}
                                                            fill
                                                            sizes="100vw"
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* DESKTOP LAYOUT */}
                        <div className="hidden min-h-[650px] grid-cols-2 lg:grid">
                            {/* LEFT CONTENT */}
                            <div className="h-full w-full border-r border-brand-gray-darker">
                                <div className="flex flex-col">
                                    {steps.map((step) => {
                                        const isActive = activeStepId === step.id;

                                        return (
                                            <button
                                                key={step.id}
                                                type="button"
                                                onClick={() => setActiveStepId(step.id)}
                                                aria-expanded={isActive}
                                                className={`relative w-full border-b border-brand-gray-darker px-8 py-10 text-left transition-colors duration-300 md:px-10 ${isActive
                                                        ? "bg-[#19191c]"
                                                        : "bg-transparent hover:bg-white/[0.03]"
                                                    }`}
                                            >
                                                {isActive && (
                                                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#ffb000]" />
                                                )}

                                                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                                                    {step.title}
                                                </h3>

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
                            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden p-2 md:p-4 2xl:p-6 lg:min-h-0">
                                <div className="relative aspect-square w-full max-w-[780px] overflow-hidden">
                                    {activeStep && (
                                        <Image
                                            key={activeStep.id}
                                            src={activeStep.image}
                                            alt={activeStep.imageAlt}
                                            fill
                                            priority
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-opacity duration-500"
                                        />
                                    )}
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
