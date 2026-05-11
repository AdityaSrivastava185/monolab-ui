
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroBlock2 = () => {
  return (
    <div className="bg-background min-h-screen mx-7 my-3">
      <div className="w-full md:max-w-7xl mx-auto">
        {/* Navbar Section */}
        <nav className="flex flex-row items-center justify-between w-full">
          <div id="logo" className="hidden md:flex gap-7">
            <h1>Acme Inc.</h1>
            <div className="hidden md:flex items-center gap-7">
              <Link href={"/"} className="hover:underline">
                Product
              </Link>
              <Link href={"/"} className="hover:underline">
                Resource
              </Link>
              <Link href={"/"} className="hover:underline">
                Docs
              </Link>
              <Link href={"/"} className="hover:underline">
                Pricing
              </Link>
            </div>
          </div>
          <div
            id="nav-items-list-container"
            className="flex items-center justify-center"
          >
            <div className="flex items-center justify-center gap-7 pl-7">
              <div>
                <Link href={"/"}>Sign in</Link>
              </div>
              <div className="bg-foreground py-2 rounded-xl text-background px-3 text-sm">
                <Link href={"/"}>Get started</Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
      </div>
    </div>
  );
};

export default HeroBlock2;

