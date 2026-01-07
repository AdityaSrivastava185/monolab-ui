import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "@/components/Hero/Hero";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
