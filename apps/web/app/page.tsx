import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Monolab UI | Component Library",
  description:
    "Monolab UI is a modern component library for building clean, optimized, polished, and production-ready web interfaces faster.",
  keywords: [
    "Monolab UI",
    "component library",
    "UI components",
    "frontend engineering",
    "design system",
    "web UI library",
    "React components",
    "Next.js components",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monolab UI | Component Library",
    description:
      "Monolab UI is a modern component library for building clean, optimized, polished, and production-ready web interfaces faster.",
    url: "/",
    siteName: "Monolab UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monolab UI | Component Library",
    description:
      "Monolab UI is a modern component library for building clean, optimized, polished, and production-ready web interfaces faster.",
  },
};


const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen h-full w-full">
      <p>THE LIBRARY IS UNDER-REVAMPING</p>
    </div>
  );
};

export default page;
