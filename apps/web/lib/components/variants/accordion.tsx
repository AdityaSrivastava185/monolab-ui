"use client";

import { ComponentVariant } from "../types";
import { useState } from "react";

/**
 * Accordion Variants
 *
 * All accordion component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */

// Simple Accordion
function SimpleAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "What is MonoLab UI?",
      content:
        "MonoLab UI is a modern, minimal component library built with React and Tailwind CSS. It provides copy-paste components for building beautiful interfaces.",
    },
    {
      title: "Is it free to use?",
      content:
        "Yes, MonoLab UI is completely free and open source. You can use it in personal and commercial projects without any attribution required.",
    },
    {
      title: "How do I install it?",
      content:
        "Simply copy the component code and paste it into your project. Make sure you have Tailwind CSS configured in your project.",
    },
  ];

  return (
    <div className="w-full max-w-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border/20">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            {item.title}
            <svg
              className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}
          >
            <p className="text-sm text-foreground/70">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Accordion with Icons
function AccordionWithIcons() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Getting Started",
      content:
        "Begin by installing the required dependencies and setting up your project configuration.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Configuration",
      content:
        "Customize the components by modifying the Tailwind configuration and CSS variables.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Customization",
      content:
        "All components are fully customizable. Modify colors, sizes, and behavior to match your brand.",
    },
  ];

  return (
    <div className="w-full max-w-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border/20">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center gap-3 py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            <span className="text-foreground/50">{item.icon}</span>
            <span className="flex-1">{item.title}</span>
            <svg
              className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}
          >
            <p className="pl-8 text-sm text-foreground/70">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Multiple Open Accordion
function MultipleOpenAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const items = [
    {
      title: "Section One",
      content:
        "This accordion allows multiple items to be open at the same time. Click on any header to toggle its content.",
    },
    {
      title: "Section Two",
      content:
        "Each section operates independently. Opening one section does not close another.",
    },
    {
      title: "Section Three",
      content:
        "This is useful when users need to compare content across different sections.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border/20">
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            {item.title}
            <svg
              className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200 ${openItems.includes(index) ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openItems.includes(index) ? "max-h-96 pb-4" : "max-h-0"}`}
          >
            <p className="text-sm text-foreground/70">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Bordered Accordion
function BorderedAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Account Settings",
      content:
        "Manage your account settings including email, password, and notification preferences.",
    },
    {
      title: "Privacy & Security",
      content:
        "Control your privacy settings and configure two-factor authentication.",
    },
    {
      title: "Billing Information",
      content: "View and update your payment methods and billing address.",
    },
  ];

  return (
    <div className="w-full max-w-md space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-border/20"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted ${openIndex === index ? "bg-muted" : ""}`}
          >
            {item.title}
            <svg
              className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <p className="border-t border-border/20 px-4 py-3 text-sm text-foreground/70">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Plus/Minus Icon Accordion
function PlusMinusAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "How do I create an account?",
      content:
        "Click the Sign Up button in the top right corner and fill in your details. You'll receive a confirmation email to verify your account.",
    },
    {
      title: "Can I change my plan later?",
      content:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
    },
  ];

  return (
    <div className="w-full max-w-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border/20">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            {item.title}
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border/30 text-foreground/50">
              {openIndex === index ? (
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}
          >
            <p className="text-sm text-foreground/70">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Flush Accordion (no borders, minimal)
function FlushAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Overview",
      content:
        "Get a high-level view of your project including recent activity, team members, and upcoming deadlines.",
    },
    {
      title: "Analytics",
      content:
        "Dive deep into your project metrics with detailed charts and reports.",
    },
    {
      title: "Team Members",
      content:
        "Manage your team, assign roles, and control access permissions.",
    },
  ];

  return (
    <div className="w-full max-w-md">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            {item.title}
            <svg
              className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 pb-3" : "max-h-0"}`}
          >
            <p className="text-sm text-foreground/70">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export const accordionVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Accordion",
    code: `const [openIndex, setOpenIndex] = useState<number | null>(0);

const items = [
  { title: "What is MonoLab UI?", content: "MonoLab UI is a modern component library..." },
  { title: "Is it free to use?", content: "Yes, MonoLab UI is completely free..." },
];

<div className="w-full max-w-md">
  {items.map((item, index) => (
    <div key={index} className="border-b border-border/20">
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground"
      >
        {item.title}
        <svg className={\`h-4 w-4 transition-transform \${openIndex === index ? "rotate-180" : ""}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={\`overflow-hidden transition-all \${openIndex === index ? "max-h-96 pb-4" : "max-h-0"}\`}>
        <p className="text-sm text-foreground/70">{item.content}</p>
      </div>
    </div>
  ))}
</div>`,
    preview: <SimpleAccordion />,
  },
  {
    id: "with-icons",
    name: "Accordion with Icons",
    code: `const items = [
  { icon: <InfoIcon />, title: "Getting Started", content: "Begin by installing..." },
  { icon: <SettingsIcon />, title: "Configuration", content: "Customize the components..." },
];

<button className="flex w-full items-center gap-3 py-4 text-left text-sm font-medium">
  <span className="text-foreground/50">{item.icon}</span>
  <span className="flex-1">{item.title}</span>
  <ChevronIcon />
</button>`,
    preview: <AccordionWithIcons />,
  },
  {
    id: "multiple-open",
    name: "Multiple Open Accordion",
    code: `const [openItems, setOpenItems] = useState<number[]>([0]);

const toggleItem = (index: number) => {
  setOpenItems((prev) =>
    prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  );
};

// Each item can be toggled independently
<button onClick={() => toggleItem(index)}>
  {item.title}
</button>
<div className={\`overflow-hidden transition-all \${openItems.includes(index) ? "max-h-96 pb-4" : "max-h-0"}\`}>
  {item.content}
</div>`,
    preview: <MultipleOpenAccordion />,
  },
  {
    id: "bordered",
    name: "Bordered Accordion",
    code: `<div className="w-full max-w-md space-y-2">
  {items.map((item, index) => (
    <div key={index} className="overflow-hidden rounded-lg border border-border/20">
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className={\`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium \${openIndex === index ? "bg-muted" : ""}\`}
      >
        {item.title}
        <ChevronIcon />
      </button>
      <div className={\`overflow-hidden transition-all \${openIndex === index ? "max-h-96" : "max-h-0"}\`}>
        <p className="border-t border-border/20 px-4 py-3 text-sm text-foreground/70">
          {item.content}
        </p>
      </div>
    </div>
  ))}
</div>`,
    preview: <BorderedAccordion />,
  },
  {
    id: "plus-minus",
    name: "Plus/Minus Accordion",
    code: `<button className="flex w-full items-center justify-between py-4 text-left text-sm font-medium">
  {item.title}
  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border/30">
    {openIndex === index ? (
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    ) : (
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )}
  </span>
</button>`,
    preview: <PlusMinusAccordion />,
  },
  {
    id: "flush",
    name: "Flush Accordion",
    code: `// Minimal accordion without borders
<div className="w-full max-w-md">
  {items.map((item, index) => (
    <div key={index}>
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
      >
        {item.title}
        <svg className={\`h-4 w-4 transition-transform \${openIndex === index ? "rotate-45" : ""}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className={\`overflow-hidden transition-all \${openIndex === index ? "max-h-96 pb-3" : "max-h-0"}\`}>
        <p className="text-sm text-foreground/70">{item.content}</p>
      </div>
    </div>
  ))}
</div>`,
    preview: <FlushAccordion />,
  },
];
