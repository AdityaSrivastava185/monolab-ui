import ComponentCategoriesSectionCard from "@/components/(utility)/utility/ComponentCategoriesSectionCards";
import PatternContainer from "@/components/(utility)/utility/PatternContainer";
import IconList from "@/components/(utility)/utility/IconsList";
import React from "react";


const componentCategories = [
    {
        title: "Buttons & actions.",
        description:
            "Build consistent interactions with carefully crafted buttons, icon buttons, and action elements designed for modern applications.",
        buttonText: "Explore Buttons",
        image: "/images/image-1.png",
        imageAlt: "Buttons and actions",
        tags: [
            "BUTTON VARIANTS",
            "ICON BUTTONS",
            "INTERACTIVE STATES",
            "ACCESSIBILITY",
            "CUSTOM STYLING",
        ],
    },

    {
        title: "Forms & inputs.",
        description:
            "Create intuitive form experiences with flexible input fields, selection controls, and components built for seamless data entry.",
        buttonText: "Explore Forms",
        image: "/images/image-1.png",
        imageAlt: "Forms and inputs",
        tags: [
            "INPUT FIELDS",
            "SELECT MENUS",
            "CHECKBOXES",
            "FORM VALIDATION",
            "USER INTERACTION",
        ],
    },

    {
        title: "Layouts & surfaces.",
        description:
            "Structure your interfaces with reusable layouts, cards, containers, and flexible building blocks that bring consistency to every screen.",
        buttonText: "Explore Layouts",
        image: "/images/image-1.png",
        imageAlt: "Layouts and surfaces",
        tags: [
            "CARDS",
            "CONTAINERS",
            "RESPONSIVE LAYOUTS",
            "FLEXIBLE GRIDS",
            "COMPOSITION",
        ],
    },

    {
        title: "Overlays & dialogs.",
        description:
            "Handle focused interactions with thoughtfully designed dialogs, modals, popovers, and contextual elements.",
        buttonText: "Explore Overlays",
        image: "/images/image-1.png",
        imageAlt: "Overlays and dialogs",
        tags: [
            "DIALOGS",
            "MODALS",
            "POPOVERS",
            "TOOLTIPS",
            "FOCUS MANAGEMENT",
        ],
    },

    {
        title: "Navigation systems.",
        description:
            "Help users move through your applications with intuitive navigation patterns, menus, tabs, and structured navigation elements.",
        buttonText: "Explore Navigation",
        image: "/images/image-1.png",
        imageAlt: "Navigation systems",
        tags: [
            "NAVIGATION MENUS",
            "TABS",
            "DROPDOWNS",
            "BREADCRUMBS",
            "MOBILE NAVIGATION",
        ],
    },

    {
        title: "Feedback & indicators.",
        description:
            "Make application states clear with meaningful feedback components that communicate progress, status, and user actions.",
        buttonText: "Explore Feedback",
        image: "/images/image-1.png",
        imageAlt: "Feedback and indicators",
        tags: [
            "TOAST NOTIFICATIONS",
            "ALERTS",
            "BADGES",
            "LOADING STATES",
            "STATUS INDICATORS",
        ],
    },
];


const ComponentCategories = () => {
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
                            {componentCategories.map((item) => (
                                <ComponentCategoriesSectionCard key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentCategories;
