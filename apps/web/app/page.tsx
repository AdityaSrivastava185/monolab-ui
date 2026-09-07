import type { Metadata } from "next";

import { BlocksShowcase } from "@/components/blocks-showcase";


export const metadata: Metadata = {
  title: "MonoLab UI | Installation-Free Component Library",
  description:
    "MonoLab is a design lab delivering copy-paste ready components for Next.js, React, and TypeScript. No npm install, no node_modules, no lock-in. Just clean, accessible code you own.",
  keywords: [
    "MonoLab UI",
    "component library",
    "React components",
    "Next.js components",
    "TypeScript components",
    "copy paste components",
    "design system",
    "UI components",
    "Tailwind CSS components",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MonoLab UI | Installation-Free Component Library",
    description:
      "Copy-paste ready components for modern React. No npm install. Fully customizable.",
    url: "/",
    siteName: "MonoLab UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonoLab UI | Installation-Free Component Library",
    description:
      "Copy-paste ready components for modern React. No npm install. Fully customizable.",
  },
};

export default function HomePage() {
  return (
    <>
     
      <main className="min-h-screen">
        
      </main>
      
    </>
  );
}