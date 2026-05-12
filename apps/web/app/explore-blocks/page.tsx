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
import { loginFormCode } from "@/components/CodeSnippet/loginForm";
import { authExampleCode } from "@/components/CodeSnippet/authExample";
import { loginFormWithInstructionsCode } from "@/components/CodeSnippet/loginFormWithInstructions";
import { heroBlock1Code } from "@/components/CodeSnippet/heroBlock1";
import { heroBlock2Code } from "@/components/CodeSnippet/heroBlock2";
import HeroBlock2 from "@/components/ExploreBlocksComponents/HeroBlocks/HeroBlock2/page";
import HeroBlock3 from "@/components/ExploreBlocksComponents/HeroBlocks/HeroBlock3/page";
import { heroBlock3Code } from "@/components/CodeSnippet/heroBlock3";

// Component code snippets for copying
const COMPONENT_CODES = {
  loginForm: loginFormCode,
  authExample: authExampleCode,
  loginFormWithInstructions: loginFormWithInstructionsCode,
  heroBlock1: heroBlock1Code,
  heroBlock2 : heroBlock2Code,
  heroBlock3 : heroBlock3Code,
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
      <div className="scroll-mt-24 w-full">
        <div className="w-fit flex items-center gap-2 overflow-x-auto bg-zinc-800 p-2 rounded-xl mx-auto">
          {showcaseTabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors  ${
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
            <>
            <div className="bg-card p-1 w-full">
              <Image
                src={"/heroblock1.png"}
                height={700}
                width={700}
                alt="hero block 1"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="bg-card p-1 w-full">
              <Image
                src={"/heroBlock2.png"}
                height={700}
                width={700}
                alt="hero block 2"
                className="rounded-xl w-full h-auto"
              />
            </div>
            </>
          )}
        </div>
      </div>
      {/* desktop view */}
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
            <div className="my-7">
              <div className="flex items-center justify-end mb-2 gap-2">
                <span className="text-xs text-muted-foreground">Copy code</span>
                <CopyButton code={COMPONENT_CODES.heroBlock2} />
              </div>
              <div
                id="component-container"
                className="w-full bg-card rounded-lg overflow-hidden p-2"
              >
                <HeroBlock2/>
              </div>
            </div>
            <div className="my-7">
              <div className="flex items-center justify-end mb-2 gap-2">
                <span className="text-xs text-muted-foreground">Copy code</span>
                <CopyButton code={COMPONENT_CODES.heroBlock3} />
              </div>
              <div
                id="component-container"
                className="w-full bg-card rounded-lg overflow-hidden p-2"
              >
                <HeroBlock3/>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreBlocks;
