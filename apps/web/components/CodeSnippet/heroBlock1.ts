export const heroBlock1Code = `
 
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBlock1 = () => {
  return (
    <div className="bg-foreground w-full min-h-screen">
      <div className="flex justify-center px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-full space-y-10 sm:space-y-12 md:max-w-7xl 2xl:max-w-[1176]">
          <header>
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4 sm:gap-7">
                <div
                  id="logo"
                  className="shrink-0 rounded-xl bg-background px-3 py-2 text-foreground sm:px-4"
                >
                  <p>Acme Inc.</p>
                </div>
                <div
                  id="navbar-list"
                  className="hidden list-none gap-7 text-sm text-muted md:flex"
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
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <Link
                  href={"/"}
                  className="rounded-xl border-2 border-border bg-foreground px-3 py-2 text-sm font-medium text-background transition-colors sm:px-4"
                >
                  Login
                </Link>
                <Link
                  href={"/"}
                  className="rounded-xl bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors sm:px-4"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </header>

          <section className="flex w-full flex-col gap-8 pt-6 md:flex-row md:items-center md:justify-between md:pt-20">
            <div className="contents md:flex md:flex-col md:gap-3">
              <h1 className="order-1 w-full max-w-md text-balance text-5xl text-background sm:text-5xl md:text-5xl">
                Bringing technology to life
              </h1>
              <div className="order-3 flex flex-row flex-wrap items-center gap-3 md:order-2">
                <Link
                  href={"/"}
                  className="rounded-full border border-muted-foreground bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors sm:py-4"
                >
                  Sign up
                </Link>
                <Link
                  href={"/"}
                  className="rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors sm:py-4"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <h2 className="order-2 max-w-[600px] text-lg tracking-tight leading-7 text-background sm:text-lg md:order-0">
              Powering the best enterprises, creators, and developers. From
              ElevenAgents for customer experience, ElevenCreative for content
              creation, to the leading AI voice generator.
            </h2>
          </section>

          <div className="relative w-full overflow-hidden rounded-2xl bg-[#f5f2f0] p-3 sm:p-4">
            <Image
              src={
                "https://i.pinimg.com/1200x/8c/6d/c7/8c6dc760d6f8818849a2d57a08362170.jpg"
              }
              alt="hero-block-1-image"
              className="h-auto w-full rounded-2xl object-contain"
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
