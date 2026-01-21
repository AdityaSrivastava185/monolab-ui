import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "@/components/Hero/Hero";

const page = () => {
  return (
    <>
      <div className="md:m-7 m-4">
        {/* <Navbar /> */}
        <Hero />
      </div>
    </>
  );
};

export default page;
