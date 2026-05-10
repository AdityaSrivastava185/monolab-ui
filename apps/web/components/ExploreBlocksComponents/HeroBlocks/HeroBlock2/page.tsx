import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroBlock2 = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="w-full md:max-w-7xl mx-auto py-7">
        {/* Navbar Section */}
        <nav className="flex flex-row items-center justify-between w-full">
          <div id="logo">
            <h1>Acme Inc.</h1>
          </div>
          <div
            id="nav-items-list-container"
            className="flex items-center justify-center"
          >
            <div className="hidden md:flex items-center gap-7 border-border border-r-2 pr-7 text-muted-foreground">
              <Link href={"/"} className="hover:text-foreground">
                Product
              </Link>
              <Link href={"/"} className="hover:text-foreground">
                Resource
              </Link>
              <Link href={"/"} className="hover:text-foreground">
                Customer
              </Link>
              <Link href={"/"} className="hover:text-foreground">
                Pricing
              </Link>
              <Link href={"/"} className="hover:text-foreground">
                Now
              </Link>
              <Link href={"/"} className="hover:text-foreground">
                Contact
              </Link>
            </div>
            <div className="flex items-center justify-center gap-7 pl-7">
              <div>
                <Link href={"/"}>Log in</Link>
              </div>
              <div className="bg-foreground py-2 rounded-xl text-background px-3 text-sm">
                <Link href={"/"}>Sign up</Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <div>
          <div className=" mt-30 md:mt-60 max-w-80 md:max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-sans font-medium">
              The product development system for teams and agents
            </h1>
          </div>
          <div className="mt-5 md:mt-9 w-full flex flex-row items-center justify-between">
            <p className="text-muted-foreground max-w-80 md:max-w-2xl">
              Purpose-built for planning and building products. Designed for the
              AI era.
            </p>
            <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-chart-4/20 flex items-center justify-center">
                <div className=" h-2 w-2 bg-chart-4 rounded-full"></div>
              </div>
              <p className="text-foreground">Issue tracking is dead</p>
              <Link className="text-muted-foreground" href={"/"}>acme.app/next</Link>
            </div>
          </div>
        </div>
        {/* Hero Image Section */}
        <div className="w-[170%] md:w-full mx-auto mt-10 md:my-20 relative overflow-hidden h-80 sm:h-96 md:h-auto md:overflow-visible">
          <Image
            src="/linear-image.png"
            alt="Hero Image"
            width={7000}
            height={7000}
            className="max-w-none md:static md:h-auto md:w-full md:max-w-full md:rounded-xl"
          />
        </div>
        {/* Description Section  */}
        <div className=" w-full mt-7 md:my-20">
          <div className="w-full max-w-3xl ">
            <h2 className="text-[##8a8f98] text-lg md:text-2xl font-sans">A new species of product tool. <span className="text-ring">Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock2;
