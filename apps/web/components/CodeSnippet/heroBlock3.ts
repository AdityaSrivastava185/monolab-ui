export const heroBlock3Code = `

import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroBlock3 = () => {
  return (
    <div className="bg-background min-h-screen px-7 py-3">
      <div className="w-full md:max-w-7xl mx-auto">
        {/* Navbar Section */}
        <nav className="flex flex-row items-center justify-between w-full">
          <div id="logo" className="flex gap-7">
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
        <div className="my-20">
          <div className="border-1 border-purple-600 p-2 w-fit mx-auto flex items-center justify-center gap-2">
            <span className="bg-purple-600 text-purple-400 px-2 py-1">RECAP</span>
            <p className="text-center">The Age of Agent Ready Software</p>
          </div>
          <div className="max-w-4xl text-balance mx-auto text-[9.23vw] leading-10 md:text-6xl py-7">
            <h1 className="text-center">Realtime infrastructure for multiplayer apps and agents</h1>
          </div>
          <div className="md:max-w-4xl md:text-balance mx-auto md:text-xl pb-7">
            <p className="text-center text-muted-foreground">Liveblocks provides the infrastructure to handle concurrent edits on shared data, so people and AI agents can collaborate without breaking your app.</p>
          </div>
          <div className="flex md:flex-row items-center justify-center gap-3 md:gap-7">
            <div className="bg-foreground text-background px-4 py-2 rounded-md">
              <button className="cursor-pointer">Get started for free</button>
            </div>
            <div className="bg-muted text-foreground px-4 py-2 rounded-md">
              <button className="cursor-pointer hover:underline">Contact sales</button>
            </div>
          </div>
          <div className="w-full mx-auto my-10 ">
            <Image
              src="https://i.pinimg.com/1200x/92/21/6d/92216d078016acd8fc45ea51da435f6f.jpg"
              alt="Hero Image"
              width={7000}
              height={7000}
              className="rounded-xl"
            />
          </div>
          <div>
            <p className="text-center text-muted-foreground">Trusted by leading engineering, product, and design teams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock3;



`