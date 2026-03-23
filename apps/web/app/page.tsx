import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Monolabui Studio | The AI-Native Web Studio",
  description:
    "Monolabui Studio combine AI tools with our proprietary MonoLab UI Library to deliver clean , optimized , polished and finished products in few days—at software margins.",
  keywords: [
    "Components Library",
    "Monolabui Studio",
    "product studio",
    "frontend engineering",
    "design system studio",
    "web product design",
    "startup product development",
    "UI UX studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monolabui Studio | The AI-Native Web Studio",
    description:
      "Monolabui Studio combine AI tools with our proprietary MonoLab UI Library to deliver clean , optimized , polished and finished products in few days—at software margins.",
    url: "/",
    siteName: "Monolabui Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monolabui Studio | The AI-Native Web Studio",
    description:
      "Monolabui Studio combine AI tools with our proprietary MonoLab UI Library to deliver clean , optimized , polished and finished products in few days—at software margins.Design systems, frontend builds, and product execution for modern software teams.",
  },
};


const page = () => {
  return (
    <div>
      <Hero/>
    </div>
  );
};

export default page;
