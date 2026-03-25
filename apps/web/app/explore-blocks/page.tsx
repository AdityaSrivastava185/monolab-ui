"use client";

import { Sparkles, ArrowRight, Github } from "lucide-react";
import react, { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import AuthExamplePage from "@/components/examples/authPageExample/AuthExamplePage";
import LoginFormWithInstructions from "@/components/LoginForm/LoginFormWithInstructions";
import { CopyButton } from "@/components/CopyButton";
import Image from "next/image";
import Link from "next/link";
import HeroBlock1 from "@/components/ExploreBlocksComponents/HeroBlocks/HeroBlock1/page";

// Component code snippets for copying
const COMPONENT_CODES = {
  loginForm: `"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

 const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", { email, password });
      onSubmit?.(email, password);
      setIsLoading(false);
      setEmail("")
      setPassword("")
    }, 500);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo/Brand */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-foreground">
            <Link href={"/"} className="text-background font-semibold text-lg">
              Acme Inc.
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Yoooo, welcome back!
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Your email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border/20 bg-[#1c1c1c] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border/20 bg-[#1c1c1c] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-colors"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/50 cursor-pointer"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/20"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-3 text-muted-foreground">Or</span>
          </div>
        </div>

        {/* Alternative Sign In Options */}
        <div className="space-y-3">
          {/* Magic Link */}
          <button
            type="button"
            className="w-full py-2.5 px-4 rounded-md border border-border/30 text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
          >
            Sign in using magic-link
          </button>

          {/* SSO */}
          <button
            type="button"
            className="w-full py-2.5 px-4 rounded-md border border-border/30 text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
          >
            Single sign-on (SSO)
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-center mx-auto text-muted-foreground max-w-xs">
          By signing in, you acknowledge that you read our{" "}
          <button className="text-foreground hover:underline focus:outline-none">
            Terms of Service
          </button>{" "}
          and{" "}
          <button className="text-foreground hover:underline focus:outline-none">
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginForm;`,
  authExample: `"use client";

import Link from "next/link";

const AuthExamplePage = () => {
  return (
    <div>
      <div id="component-container" className="w-full bg-card">
        <div className="flex justify-between h-full">
          <div className="flex flex-row w-full h-full">
            <div className="hidden min-h-screen h-full xl:max-w-[50%] w-full bg-secondary lg:flex  flex-col justify-between p-8">
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
  );
};

export default AuthExamplePage;`,
  loginFormWithInstructions: `"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

const LoginFormWithInstructions = () => {
  return (
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
  );
};

export default LoginFormWithInstructions;
`,
  heroBlock1: `
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


`,
};

const ExploreBlocks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const showcaseTabs = ["Login", "Hero"];

  return (
    <div className="rounded-2xl p-3 mx-auto w-full md:max-w-7xl 2xl:max-w-[1470]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="flex w-full flex-col items-center gap-3 px-2 py-6 text-center sm:px-4 sm:py-8">
          <div
            className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 font-medium text-muted-foreground backdrop-blur-sm sm:px-4"
            style={{ fontSize: "clamp(0.7rem, 2.1vw, 0.8rem)" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-foreground/70" />
            <span className="truncate">Brought by the maker of monolabui</span>
            {/* <ArrowRight className="h-3.5 w-3.5" /> */}
          </div>

          <h1
            className="max-w-4xl text-balance font-semibold tracking-tighter text-primary"
            style={{
              fontSize: "clamp(1.75rem, 7vw, 3.35rem)",
              lineHeight: "clamp(2rem, 7.5vw, 3.7rem)",
            }}
          >
            Building complete pages is just one click away with Blocks
          </h1>

          <p
            className="max-w-3xl text-pretty text-foreground"
            style={{
              fontSize: "clamp(0.92rem, 2.8vw, 1.2rem)",
              lineHeight: "clamp(1.35rem, 3.8vw, 1.8rem)",
            }}
          >
            A carefully crafted set of blocks and patterns for building
            high-quality pages having clean , responsive and minimal interfaces.
            Customize, extend, and make it your own.
          </p>
          <div className="mt-1 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/components"
              className="group inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground px-5 font-medium text-background transition-all hover:opacity-90 sm:w-auto"
              style={{ fontSize: "clamp(0.8rem, 2.3vw, 0.92rem)" }}
            >
              Start Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="https://github.com/AdityaSrivastava185/monolab-ui"
              target="_blank"
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border/60 bg-background/70 px-5 font-medium text-foreground transition-colors hover:bg-muted/50 sm:w-auto"
              style={{ fontSize: "clamp(0.8rem, 2.3vw, 0.92rem)" }}
            >
              <Github className="h-4 w-4" />
              Star on Github
            </Link>
          </div>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "clamp(0.7rem, 2vw, 0.8rem)" }}
          >
            No sign-up required · Free forever · MIT License
          </p>
        </div>
      </div>
      <div className="scroll-mt-24">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {showcaseTabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors ${
                index === activeTab
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="hidden md:block mt-5">
        {activeTab === 0 && (
          <div>
            {/* Login Form Preview */}
            <div className="my-7">
              <div className="flex items-center justify-end mb-2 gap-2">
                <span className="text-xs text-muted-foreground">Copy code</span>
                <CopyButton code={COMPONENT_CODES.loginForm} />
              </div>
              <div
                id="component-container"
                className="w-full bg-card rounded-lg overflow-hidden p-2"
              >
                <LoginForm />
              </div>
            </div>

            {/* Auth Example Page Preview */}
            <div className="mb-7">
              <div className="flex items-center justify-end mb-2 gap-2">
                <span className="text-xs text-muted-foreground">Copy code</span>
                <CopyButton code={COMPONENT_CODES.authExample} />
              </div>
              <div
                id="component-container"
                className="w-full bg-card rounded-lg overflow-hidden"
              >
                <AuthExamplePage />
              </div>
            </div>

            {/* Login Form With Instructions Preview */}
            <div className="mb-7">
              <div className="flex items-center justify-end mb-2 gap-2">
                <span className="text-xs text-muted-foreground">Copy code</span>
                <CopyButton code={COMPONENT_CODES.loginFormWithInstructions} />
              </div>
              <div
                id="component-container"
                className="w-full bg-card rounded-lg overflow-hidden"
              >
                <LoginFormWithInstructions />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden py-4">
        <div className="flex flex-col items-center justify-center gap-3">
          {activeTab === 0 && (
            <>
              <div className="bg-card p-1">
                <Image
                  src={"/login-form.png"}
                  height={700}
                  width={700}
                  alt="login form alt"
                  className="rounded-xl"
                />
              </div>
              <div className="bg-card p-1">
                <Image
                  src={"/login-form-with-image.png"}
                  height={700}
                  width={700}
                  alt="login form alt"
                  className="rounded-xl"
                />
              </div>
              <div className="bg-card p-1">
                <Image
                  src={"/login-form-with-instructions.png"}
                  height={700}
                  width={700}
                  alt="login form alt"
                  className="rounded-xl"
                />
              </div>
            </>
          )}
          {activeTab === 1 && (
            <div className="bg-card p-1 w-full">
              <Image
                src={"/heroblock1.png"}
                height={700}
                width={700}
                alt="hero block 1"
                className="rounded-xl w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex md:flex-col">
        {activeTab === 1 && (
          <>
            <div className="my-7">
              <div className="flex items-center justify-end mb-2 gap-2">
                <span className="text-xs text-muted-foreground">Copy code</span>
                <CopyButton code={COMPONENT_CODES.heroBlock1} />
              </div>
              <div
                id="component-container"
                className="w-full bg-card rounded-lg overflow-hidden p-2"
              >
                <HeroBlock1 />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreBlocks;
