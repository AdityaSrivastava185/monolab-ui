"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const docsNav = [
	{
		title: "Getting Started",
		items: [
			{ title: "Introduction", href: "/docs" },
			{ title: "Installation", href: "/docs/installation" },
			{ title: "Usage", href: "/docs/usage" },
		],
	},
	{
		title: "Customization",
		items: [
			{ title: "Dark Mode", href: "/docs/dark-mode" },
		],
	},
	{
		title: "Components",
		items: [
			{ title: "Buttons", href: "/components/buttons" },
			{ title: "Inputs", href: "/components/inputs" },
			{ title: "Toggle", href: "/components/toggle" },
			{ title: "Checkbox", href: "/components/checkbox" },
			{ title: "Select", href: "/components/select" },
			{ title: "Dropdown", href: "/components/dropdown" },
			{ title: "Accordion", href: "/components/accordion" },
			{ title: "Cards", href: "/components/cards" },
			{ title: "Badges", href: "/components/badges" },
			{ title: "Avatar", href: "/components/avatar" },
			{ title: "Tabs", href: "/components/tabs" },
			{ title: "Modal", href: "/components/modal" },
			{ title: "Slider", href: "/components/slider" },
		],
	},
];

export function MobileDocsSidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className="mb-6 lg:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between rounded-md border border-border bg-background px-4 py-2 text-sm"
			>
				<span className="font-medium text-foreground">
					Documentation
				</span>
				{isOpen ? (
					<X className="h-4 w-4 text-muted-foreground" />
				) : (
					<Menu className="h-4 w-4 text-muted-foreground" />
				)}
			</button>

			{isOpen && (
				<nav className="mt-3 space-y-6 rounded-md border border-border bg-muted/30 p-4">
					{docsNav.map((section) => (
						<div key={section.title}>
							<h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
								{section.title}
							</h4>
							<ul className="space-y-1">
								{section.items.map((item) => {
									const isActive = pathname === item.href;
									return (
										<li key={item.href}>
											<Link
												href={item.href}
												onClick={() => setIsOpen(false)}
												className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
													isActive
														? "bg-muted/60 font-medium text-foreground"
														: "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
												}`}
											>
												{item.title}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</nav>
			)}
		</div>
	);
}