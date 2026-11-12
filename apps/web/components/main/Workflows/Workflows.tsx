import GridCards from "@/components/(utility)/utility/GridCards";
import Pattern from "@/components/(utility)/utility/Pattern";
import VerticalBorder from "@/components/(utility)/utility/VerticalBorder";
import Link from "next/link";
import React from "react";

const supportCarditems = [
    {
        title: "One file per component.",
        description:
            "Every component is a single, self-contained file — no packages to install, no config to maintain. Copy it, paste it, and it works.",
        buttonText: "Explore AI Strategy",
        url: "/",
    },
    {
        title: "Typed, tested, and Next.js-native.",
        description:
            "Full TypeScript support, built for Next.js, React, and Tailwind CSS. Clean props, predictable APIs, and code your team can read at a glance",
        buttonText: "Explore teams",
        url: "/",
    },
    {
        title: "Yours forever, zero lock-in.",
        description:
            "The code stops belonging to us the moment you copy it. No version upgrades, no breaking changes, no dependency drift — just components you fully control..",
        buttonText: "Explore Custom AI",
        url: "/",
    },
];

const Workflows = () => {
    return (
        <section className="w-full">
            <div className="container">
                <div className="grid h-full grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)]">
                    <div className="relative">
                        <Pattern />
                        <div className="absolute inset-y-0 left-0 z-10 w-px">
                            <VerticalBorder />
                        </div>
                        <div className="absolute inset-y-0 right-0 z-10 w-px">
                            <VerticalBorder />
                        </div>
                    </div>

                    <div className="px-4 xl:px-0 md:pt-10 md:pb-20 flex flex-col md:gap-15">
                        <div className="flex flex-col md:gap-3 md:max-w-lg xl:max-w-full px-4">
                            <h2 className="text-2xl sm:text-4xl xl:text-5xl text-balance text-center">Your developer team's advantage</h2>
                            <p className="text-sm sm:text-xl text-center">
                                Built for code ownership and velocity, optimized for modern developer workflows.
                            </p>
                        </div>
                        <GridCards />
                    </div>
                    <div className="relative">
                        <Pattern />
                        <div className="absolute inset-y-0 left-0 z-10 w-px">
                            <VerticalBorder />
                        </div>
                        <div className="absolute inset-y-0 right-0 z-10 w-px">
                            <VerticalBorder />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflows;
