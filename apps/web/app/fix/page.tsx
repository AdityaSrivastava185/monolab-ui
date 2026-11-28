"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

const HeroBlock2 = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     console.log("Login attempt:", { email, password });
  //     onSubmit?.(email, password);
  //     setIsLoading(false);
  //     setEmail("")
  //     setPassword("")
  //   }, 500);
  // };
  return (
    <>
     {/* hero block one page example code */}
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
      {/* hero block two page code exmaple */}
      <div className="bg-background min-h-screen mx-7 my-3">
        <div className="w-full md:max-w-7xl mx-auto">
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
      {/* hero block three code example */}
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
      {/* login page variant one code */}
       {/* Login page varaint two code */}
      <div>
        <div id="component-container" className="w-full bg-card p-2">
          <div className="flex justify-between h-full">
            <div className="flex flex-row w-full h-full">
              <div className="hidden bg-secondary lg:flex  flex-col justify-between p-8">
                <div>
                  <div className="flex gap-2">
                    <Link
                      href={"/"}
                      className="bg-foreground h-fit w-fit px-3 py-2 rounded-xl"
                    >
                      <p className="text-background font-semibold">Acme Inc.</p>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-2">
                    <p className="text-sm text-foreground leading-relaxed max-w-xl">
                      A carefully crafted set of components and patterns for
                      building high-quality product interfaces. Customize, extend,
                      and make it your own.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <Link
                      href="#"
                      className="text-ring hover:text-foreground transition"
                    >
                      About
                    </Link>
                    <Link
                      href="#"
                      className="text-ring hover:text-foreground transition"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="#"
                      className="text-ring hover:text-foreground transition"
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3 flex items-center justify-center  bg-background p-8">
                <div className="w-full max-w-md p-8">
                  {/* Heading */}
                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                      Register or login
                    </h1>
                    <p className="text-sm text-ring">
                      To keep up things easy , please login with your credentials
                      and hit continue
                    </p>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="space-y-3 mb-8">
                    <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black py-3 rounded-lg transition font-medium text-sm">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Sign in with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-foreground hover:bg-gray-100 text-background py-3 rounded-lg transition font-medium text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github-icon lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Sign in with github
                    </button>
                  </div>

                  <div className="text-center w-full">
                    <span className="text-muted-foreground">or</span>
                  </div>

                  {/* Email Input */}
                  <div className="my-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-foreground"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        placeholder="***********"
                        className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  </div>

                  {/* Forgot Password Link */}
                  <div className="text-right mb-5">
                    <Link
                      href="#"
                      className="text-sm text-ring hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 my-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">
                        Recieve features updates and hiring tips
                      </span>
                      <span className="text-xs text-ring">
                        Receive emails about new products and features.Get ocassional insights , new feature releases and hiring updates at monolabui and monoverse
                      </span>
                    </div>
                    <div className="relative mt-0.5">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-secondary  transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
                    </div>
                  </label>

                  {/* Sign In Button */}
                  <button className="w-full bg-foreground hover:bg-secondary hover:text-foreground text-background font-semibold py-3 rounded-lg transition mb-4 cursor-pointer">
                    Sign In
                  </button>

                  {/* Register Link */}
                  <div>
                    <p className="text-sm text-ring">
                      Don't have an account?{" "}
                      <Link
                        href="#"
                        className="text-foreground hover:underline transition font-medium"
                      >
                        Register Now
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login form with instruction code example */}
      <div>
        <div id="component-container" className="w-full bg-card p-2">
          <div className="flex justify-between h-full">
            <div className="flex flex-row w-full h-full">
              <div className="hidden min-h-screen h-full xl:max-w-[50%] w-full lg:flex flex-col justify-end p-8 relative overflow-hidden bg-[url('https://i.pinimg.com/736x/65/e4/01/65e4010fc0f48a6d1d75aba13b5278f1.jpg')] bg-no-repeat bg-cover">
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="flex flex-row w-full items-center justify-between md:gap-7 2xl:gap-20">
                  <div className="text-4xl tracking-tight font-semibold py-7 max-w-[220px]">
                    <p>Get Started With Us</p>
                  </div>
                  <div className="text-lg font-medium tracking-tighter text-balance text-right max-w-[220px]">
                    <p>Complete those easy steps to complete your user profile</p>
                  </div>
                </div>
                <div>
                  <div className="hidden md:flex flex-row items-center justify-between">
                    <div className="max-w-[10rem] w-full rounded-xl border border-border bg-foreground text-background p-6">
                      <p className="text-xl text-balance tracking-tight leading-tight">
                        Register your account
                      </p>
                    </div>

                    <div className="max-w-[10rem] w-full rounded-xl border border-foreground/20 bg-transparent backdrop-blur-xl text-foreground p-6 hover:bg-foreground/15 transition">
                      <p className="text-xl text-balance tracking-tight leading-tight">
                        Setup your profile details
                      </p>
                    </div>
                    <div className="max-w-[10rem]  w-full rounded-xl bg-tranparent backdrop-blur-xl border border-foreground/20  text-foreground hover:bg-foreground/15 transition p-6">
                      <p className="text-xl text-balance tracking-tight leading-tight">
                        Start using for free
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3 flex items-center justify-center  bg-background p-8">
                <div className="w-full max-w-md p-8">
                  {/* Heading */}
                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                      Register or login
                    </h1>
                    <p className="text-sm text-ring">
                      To keep up things easy , please login with your credentials
                      and hit continue
                    </p>
                  </div>

                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black py-3 rounded-lg transition font-medium text-sm">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Sign in with Google
                    </button>
                  </div>

                  <div className="text-center w-full my-3">
                    <span className="text-muted-foreground">or</span>
                  </div>

                  {/* firstname */}

                  <div className="flex flex-row w-full items-center justify-center gap-3 md:gap-7">
                    <div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Firstname
                        </label>
                        <input
                          id="firstname"
                          type="text"
                          placeholder="First Name"
                          className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Lastname
                        </label>
                        <input
                          id="lastname"
                          type="text"
                          placeholder="Last Name"
                          className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="my-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-foreground"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        placeholder="***********"
                        className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  </div>

                  {/* Forgot Password Link */}
                  <div className="text-right mb-5">
                    <Link href="#" className="text-sm text-ring hover:underline">
                      Forgot Password?
                    </Link>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 my-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">
                        Recieve features updates and hiring tips
                      </span>
                      <span className="text-xs text-ring">
                        Receive emails about new products and features.Get
                        ocassional insights , new feature releases and hiring
                        updates at monolabui and monoverse
                      </span>
                    </div>
                    <div className="relative mt-0.5">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-secondary  transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
                    </div>
                  </label>

                  {/* Sign In Button */}
                  <button className="w-full bg-foreground hover:bg-secondary hover:text-foreground text-background font-semibold py-3 rounded-lg transition mb-4 cursor-pointer">
                    Sign In
                  </button>

                  {/* Register Link */}
                  <div>
                    <p className="text-sm text-ring">
                      Don't have an account?{" "}
                      <Link
                        href="#"
                        className="text-foreground hover:underline transition font-medium"
                      >
                        Register Now
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{/* <div className="w-full min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"> */}
      // <div className="w-full max-w-sm space-y-8">
        {/* Logo/Brand */}
        // <div className="flex justify-center">
        //   <div className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-foreground">
        //     <Link href={"/"} className="text-background font-semibold text-lg">
        //       Acme Inc.
        //     </Link>
        //   </div>
        // </div>

        {/* Header */}
        // <div className="space-y-2 text-center">
        //   <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
        //     Yoooo, welcome back!
        //   </h1>
        //   <p className="text-sm text-muted-foreground">
        //     Sign in to your account to continue
        //   </p>
        // </div>

        {/* Form */}
        // <form onSubmit={handleSubmit} className="space-y-6">
        //   {/* Email Field */}
        //   <div className="space-y-2">
        //     <label
        //       htmlFor="email"
        //       className="block text-sm font-medium text-foreground"
        //     >
        //       Your email
        //     </label>
        //     <div className="relative">
        //       <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        //       <input
        //         id="email"
        //         type="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         placeholder="you@example.com"
        //         required
        //         className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border/20 bg-[#1c1c1c] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-colors"
        //       />
        //     </div>
        //   </div>

        //   {/* Password Field */}
        //   <div className="space-y-2">
        //     <label
        //       htmlFor="password"
        //       className="block text-sm font-medium text-foreground"
        //     >
        //       Password
        //     </label>
        //     <div className="relative">
        //       <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        //       <input
        //         id="password"
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //         placeholder="••••••••"
        //         required
        //         className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border/20 bg-[#1c1c1c] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-colors"
        //       />
        //     </div>
        //   </div>

        //   {/* Sign In Button */}
        //   <button
        //     type="submit"
        //     disabled={isLoading}
        //     className="w-full py-2.5 px-4 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/50 cursor-pointer"
        //   >
        //     {isLoading ? "Signing in..." : "Sign in"}
        //   </button>
        // </form>

        {/* Divider */}
        // <div className="relative">
        //   <div className="absolute inset-0 flex items-center">
        //     <div className="w-full border-t border-border/20"></div>
        //   </div>
        //   <div className="relative flex justify-center text-xs uppercase">
        //     <span className="bg-background px-3 text-muted-foreground">Or</span>
        //   </div>
        // </div>

        {/* Alternative Sign In Options */}
        // <div className="space-y-3">
        //   {/* Magic Link */}
        //   <button
        //     type="button"
        //     className="w-full py-2.5 px-4 rounded-md border border-border/30 text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
        //   >
        //     Sign in using magic-link
        //   </button>

        //   {/* SSO */}
        //   <button
        //     type="button"
        //     className="w-full py-2.5 px-4 rounded-md border border-border/30 text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
        //   >
        //     Single sign-on (SSO)
        //   </button>
        // </div>

        {/* Footer Text */}
        // <p className="text-xs text-center mx-auto text-muted-foreground max-w-xs">
        //   By signing in, you acknowledge that you read our{" "}
        //   <button className="text-foreground hover:underline focus:outline-none">
        //     Terms of Service
        //   </button>{" "}
        //   and{" "}
        //   <button className="text-foreground hover:underline focus:outline-none">
        //     Privacy Policy
        //   </button>
        //   .
        // </p>
    //   </div>
    // </div>



export default HeroBlock2;

