export const heroBlock1Code = `
  import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBlock1 = () => {
  return (
    <div className="bg-foreground w-full min-h-screen">
      <div className=" flex justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 mx-auto md:max-w-7xl 2xl:max-w-[1176]">
          <div>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-7">
                  <div
                    id="logo"
                    className="bg-background text-foreground px-4 py-2 rounded-xl"
                  >
                    <p className="">Acme Inc.</p>
                  </div>
                  <div
                    id="navbar-list"
                    className="hidden md:flex gap-7 list-none text-muted text-sm"
                  >
                    <div>
                      <li>
                        <Link href={"/"}>Creative</Link>
                      </li>
                    </div>
                    <div>
                      <li>
                        <Link href={"/"}>Agents</Link>
                      </li>
                    </div>
                    <div>
                      <li>
                        <Link href={"/"}>API</Link>
                      </li>
                    </div>
                    <div>
                      <li>
                        <Link href={"/"}>Resource</Link>
                      </li>
                    </div>
                    <div>
                      <li>
                        <Link href={"/"}>Enterprise</Link>
                      </li>
                    </div>
                    <div>
                      <li>
                        <Link href={"/"}>Pricing</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    href={"/"}
                    className=" bg-foreground px-4 rounded-xl py-2 text-sm font-medium text-background border-2 border-border transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href={"/"}
                    className=" bg-background px-4 rounded-xl py-2 text-sm font-medium text-foreground transition-colors"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-between md:pt-20 pt-10">
            <div className="flex flex-col gap-3 items-center justify-center">
              <h1 className="text-background max-w-md text-balance md:text-5xl">
                Bringing technology to life
              </h1>
              <div className="flex flex-row items-center gap-2 w-full">
                <Link
                  href={"/"}
                  className=" bg-foreground p-4 px-5 rounded-full text-sm font-medium text-background border border-muted-foreground transition-colors"
                >
                  Sign up
                </Link>
                <Link
                  href={"/"}
                  className=" bg-background p-4 rounded-full text-sm font-medium text-foreground transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <h2 className="text-background max-w-[600px]">
              Powering the best enterprises, creators, and developers. From
              ElevenAgents for customer experience, ElevenCreative for content
              creation, to the leading AI voice generator.
            </h2>
          </div>
          <div className="relative w-full bg-[#f5f2f0] p-4 rounded-2xl">
            <Image
              src={"https://i.pinimg.com/1200x/8c/6d/c7/8c6dc760d6f8818849a2d57a08362170.jpg"}
              alt="hero-block-1-image"
              className="w-full h-auto object-contain rounded-2xl"
              width={1176}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1176px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock1;


`;
