import Link from "next/link";
import React from "react";

const footerItems = [
    {
        title: "Explore",
        items: [
            { name: "Getting Started", href: "/" },
            { name: "Customization", href: "/" },
            { name: "Usage Guide", href: "/" },
        ],
    },
    {
        title: "Resources and Components",
        items: [
            { name: "Documentation", href: "/" },
            { name: "Installation", href: "/" },
            { name: "Examples", href: "/" },
            { name: "Changelog", href: "/" },
            { name: "Buttons & Actions", href: "/" },
            { name: "Forms & Inputs", href: "/" },
            { name: "Layouts & Surfaces", href: "/" },
            { name: "Overlays & Dialogs", href: "/" },
        ],
    },
    {
        title: "Community",
        items: [
            { name: "GitHub", href: "/" },
            { name: "Contribute", href: "/" },
            { name: "Report an Issue", href: "/" },
        ],
    },
];

const FooterItems = () => {
    return (
        <div>
            {/* Footer links */}
            <div className="container">
                <section className="section">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {footerItems.map((section) => (
                            <div
                                key={section.title}
                                className="py-10 border-b border-surface-dark sm:border-x sm:border-b lg:border-x lg:border-b-0"
                            >
                                <div className="p-5 sm:p-6 md:p-7">
                                    <div className="pb-3">
                                        <p className="text-xl text-muted md:text-xl">
                                            {section.title}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-start gap-2 md:text-md">
                                        {section.items.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="transition-colors duration-200 hover:text-primary"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Bottom footer */}
            <div className="border border-surface-dark">
                <div className="container flex flex-col gap-5 border-x border-surface-dark p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:p-7">
                    {/* Source */}
                    <div className="text-lg">
                        <span>
                            Built for developers, inspired by{" "}
                            <Link
                                href="https://ui.shadcn.com/"
                                className="text-primary transition-colors hover:text-primary/80"
                            >
                                shadcn/ui
                            </Link>
                        </span>
                    </div>

                    {/* Legal / brand links */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 md:justify-end md:text-base">
                        <Link href="/" className="hover:text-primary">
                            MonoLab UI
                        </Link>

                        <Link href="/" className="hover:text-primary">
                            GitHub
                        </Link>

                        <Link href="/" className="hover:text-primary">
                            Privacy Policy
                        </Link>

                        <Link href="/" className="hover:text-primary">
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterItems;