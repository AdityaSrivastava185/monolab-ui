import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Monolabui Studio | Product Design and Frontend Studio",
  description:
    "Monolabui Studio helps startups design, ship, and scale high-quality web products faster with design systems, frontend engineering, and launch support.",
  keywords: [
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
    title: "Monolabui Studio | Product Design and Frontend Studio",
    description:
      "A focused product studio for teams building polished digital products from concept to launch.",
    url: "/",
    siteName: "Monolabui Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monolabui Studio | Product Design and Frontend Studio",
    description:
      "Design systems, frontend builds, and product execution for modern software teams.",
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
