import Header from "@/components/Header/Header"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import PatternContainer from "@/components/(utility)/utility/PatternContainer"
import Pattern from "@/components/(utility)/utility/Pattern"
import FrontendBadge from "@/components/FrontendBadge"
import HeroImage from "@/components/(utility)/utility/HeroImage"
import SectionHeader from "@/components/(utility)/utility/SectionHeader"
import Button from "@/components/(utility)/utility/ui/Button"

const ComponentList = [
  {
    id: 1,
    title: "Button",
    url: "/v1/components/button",
    description: "Solid, ghost and secondary actions with one shared API."
  },
  {
    id: 2,
    title: "Input",
    url: "/v1/components/input",
    description: "A quiet text field with a hairline border and brand focus ring."
  },
  {
    id: 3,
    title: "Badge",
    url: "/v1/components/badge",
    description: "Mono-spaced status pills for counts, states and metadata."
  },
  {
    id: 4,
    title: "Card",
    url: "/v1/components/card",
    description: "A bordered surface for grouped content — no shadows."
  },
  {
    id: 5,
    title: "Tabs",
    url: "/v1/components/tabs",
    description: "Switch between views without leaving the page."
  },
  {
    id: 6,
    title: "Accordion",
    url: "/v1/components/accordion",
    description: "Expandable sections for FAQs and dense docs."
  },
  {
    id: 7,
    title: "Modal",
    url: "/v1/components/modal",
    description: "A focused dialog that captures attention, not scroll."
  },
  {
    id: 8,
    title: "Tooltip",
    url: "/v1/components/tooltip",
    description: "Small context on hover, without moving the layout."
  },
  {
    id: 9,
    title: "Dropdown",
    url: "/v1/components/dropdown",
    description: "A compact menu for actions and navigation."
  },
  {
    id: 10,
    title: "Table",
    url: "/v1/components/table",
    description: "Dense data rows separated by hairline dividers."
  },
  {
    id: 11,
    title: "Toast",
    url: "/v1/components/toast",
    description: "Brief feedback that appears and dismisses itself."
  },
  {
    id: 12,
    title: "Avatar",
    url: "/v1/components/avatar",
    description: "People and entities, represented in one small circle."
  },
  {
    id: 13,
    title: "Checkbox",
    url: "/v1/components/checkbox",
    description: "Binary input with a brand-orange check."
  },
  {
    id: 14,
    title: "Switch",
    url: "/v1/components/switch",
    description: "A two-state toggle for settings and preferences."
  },

]

const page = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="">
        <div className="pt-20 xl:pt-0 xl:h-[27rem]">
          <div className="container h-full">
            <div
              className="
              flex h-full w-full flex-col items-start justify-end
              xl:flex-row xl:items-end xl:justify-between
              xl:gap-7
              xl:border xl:border-brand-gray-darker
            "
            >
              {/* Left */}
              <div className="w-full xl:px-10">
                <p className="text-brand-gray-light">PRODUCT / COMPONENTS</p>

                <h1 className="py-3 text-2xl md:max-w-3xl xl:max-w-fit md:text-balance leading-tight sm:text-5xl xl:pt-7 xl:text-6xl">
                  Every component. 
                  <br />
                  One paste away.
                </h1>
              </div>

              {/* Right */}
              <div
                className="
                w-full border-brand-gray-darker
                xl:h-full xl:max-w-[30%]
                xl:border-l xl:border-t-0
                xl:px-10 xl:pt-0
                xl:flex xl:items-end
              "
              >
                <div className="flex w-full flex-col gap-7 pb-7">
                  <p className="text-sm leading-relaxed sm:text-xl md:max-w-xl xl:max-w-full">
                    Typed, accessible and dark-mode-ready building components. Pick a component, review the live preview and source, then copy it straight into your codebase — no install, no config.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-7 border-x border-brand-gray-darker container">
        <p className="w-fit rounded-md bg-brand-gray-darker/70 px-2 py-1">
          RECENTLY RELEASED COMPONENTS
        </p>
      </div>

      <div className="container mx-auto px-7 border border-brand-gray-darker py-7">
        {/* <div className="overflow-hidden">
          {ComponentList.map((item) => (
            <div
              key={item.id}
              className={`group border-b border-brand-gray-darker last:border-b-0 transition-all duration-300 ease-in-out hover:bg-brand-gray-darker/50 cursor-pointer`}
            >
              <Link
                className="flex flex-row items-center justify-between px-4 py-3"
                href={item.url}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center justify-center gap-[2px]">
                    <div>[</div>
                    <div className="h-2 w-2 mt-1 rounded-full group-hover:bg-primary transition-all duration-300 ease-in-out "></div>
                    <div>
                      ]
                    </div>
                  </div>
                  # {item.title}
                </div>

                <div className="border border-brand-gray-darker rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M13 17v-6H7" />
                    <path d="M3 15.33V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H8.67" />
                    <path d="m4 20 9-9" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ">
          {
            ComponentList.map((item) => (
              <Link href={item.url} key={item.id} className="">
                <div className="border border-brand-gray-darker/70 hover:border-dashed hover:border-primary transition-all duration-300 ease-in-out p-10 flex flex-col items-start justify-between gap-7  min-h-96 group cursor-pointer bg-brand-gray-darker/20 rounded-2xl">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-2xl">{item.title}</p>
                    </div>

                  </div>
                  <p className="text-foreground/70 text-xl group-hover:text-primary">{item.description}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

    </div>
  )
}
export default page;