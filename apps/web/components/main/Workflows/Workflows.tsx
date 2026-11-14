import GridCards from "@/components/(utility)/utility/GridCards";
import PatternContainer from "@/components/(utility)/utility/PatternContainer";
import SectionHeader from "@/components/(utility)/utility/SectionHeader";
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
                <PatternContainer>
                    <div className="flex flex-col gap-8 px-4 py-7 sm:gap-10 sm:py-16 md:gap-15 md:pt-10 md:pb-20 xl:px-0">

                        <SectionHeader title=" Your developer team's advantage" description="Built for code ownership and velocity, optimized for modern developer workflows." />
                        <GridCards />
                    </div>
                </PatternContainer>
            </div>
        </section>
    );
};

export default Workflows;