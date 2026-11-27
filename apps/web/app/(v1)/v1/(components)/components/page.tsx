import Header from "@/components/Header/Header"
import { Link, ArrowRight } from "lucide-react"
import React from "react"
import ComponentCard from "@/components/(utility)/utility/ComponentCard"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <div className="border border-brand-gray-darker">
        <div className="container px-3 py-10 md:px-7 md:py-20">
          <p className="py-2 text-sm text-brand-gray-light">
            PRODUCT/COMPONENTS
          </p>

          <div className="flex max-w-2xl flex-col gap-5">
            <h1 className="text-6xl">
              Welcome to Monolab's Components
            </h1>

            <p className="max-w-xl text-xl text-brand-gray-light/90">
              All your components in one place - select, copy, paste and build
              design system
            </p>

            <div>
              <input
                type="text"
                className="w-full rounded-md border border-brand-gray-darker px-4 py-2"
                placeholder="Search components"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recently Released */}
      <div className="container py-10">
        <p className="w-fit rounded-md bg-brand-gray-darker/70 px-2 py-1">
          RECENTLY RELEASED COMPONENTS
        </p>
      </div>

      {/* Components Grid */}
      <div className="container">
        <div className="grid grid-cols-1 border border-brand-gray-darker md:grid-cols-2 xl:grid-cols-3">

          {/* Featured Card - Spans 2 Columns */}
          <div className="h-auto border-b border-r border-brand-gray-darker p-4 md:p-10 xl:col-span-2 xl:h-[640px]">
            <article className="grid h-full grid-cols-1 border border-brand-gray-darker md:grid-cols-2">

              {/* Content */}
              <div className="flex flex-col justify-between bg-brand-gray-dark/80">
                <div className="flex flex-col items-start gap-3 p-6 md:p-8">
                  <span className="w-fit rounded-md bg-brand-gray-darker/70 px-3 py-1 text-xs">
                    PRODUCT
                  </span>

                  <h2 className="text-4xl">
                    Le Chonk brings the brains. Studio puts it to work.
                  </h2>

                  <p className="text-2xl text-brand-gray-light">
                    Build and deploy enterprise agents, workflows and apps
                    faster, with control over your models, data and
                    infrastructure.
                  </p>
                </div>

                {/* Footer */}
                <div className="grid grid-cols-2 border-t border-brand-gray-darker text-xs text-brand-gray-light">
                  <div className="border-r border-brand-gray-darker p-3">
                    <p className="text-xl">November 5, 2026</p>
                  </div>

                  <Link
                    href="#"
                    className="flex items-center justify-between p-3"
                  >
                    View Component
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[280px] md:min-h-0">
                <Image
                  src="/images/hero-poster.avif"
                  fill
                  alt="Featured component"
                  className="object-cover"
                />
              </div>
            </article>
          </div>

          {/* Regular Card 1 */}
          <div className="border-b border-r border-brand-gray-darker p-4 md:p-10">
            <ComponentCard
              category="RESEARCH"
              title="Le Chonk: Built for Coders, Trusted by Defenders."
              description="We release the weights of Le Chonk, advancing the frontier of open models in agentic coding and cybersecurity."
              date="October 29, 2026"
            />
          </div>

          {/* Regular Card 2 */}
          <div className="border-b border-r border-brand-gray-darker p-4 md:p-10">
            <ComponentCard
              category="COMPANY"
              title="Mistral Advances AI for Engineering with NVIDIA"
              description="Mistral is collaborating with NVIDIA to develop a new generation of AI-native engineering workflows powered by NVIDIA accelerated computing."
              date="October 21, 2026"
            />
          </div>

          {/* Regular Card 3 */}
          <div className="border-b border-r border-brand-gray-darker p-4 md:p-10">
            <ComponentCard
              category="RESEARCH"
              title="Voxtral 3"
              description="Build agents that can listen, reason, speak, and act, with Voxtral 3."
              date="October 20, 2026"
            />
          </div>

          {/* Regular Card 4 */}
          <div className="border-b border-r border-brand-gray-darker p-4 md:p-10">
            <ComponentCard
              category="RESEARCH"
              title="Introducing Timestral"
              description="State-of-the-art probabilistic forecasts with just 209M parameters, outperforming larger models on CPU."
              date="October 15, 2026"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
export default page;