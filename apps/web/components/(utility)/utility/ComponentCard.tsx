import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


type ComponentCardProps = {
  category: string
  title: string
  description: string
  date: string
}

const ComponentCard = ({
  category,
  title,
  description,
  date,
}: ComponentCardProps) => {
  return (
    <article className="flex h-full flex-col border border-brand-gray-darker md:w-[470px] mx-auto bg-brand-gray-dark/80">

      {/* Image */}
      <div className="relative h-48 shrink-0">
        <Image
          src="/images/hero-poster.avif"
          fill
          alt={title}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-start gap-3 p-6">
        <span className="w-fit rounded-md bg-brand-gray-darker/70 px-3 py-1 text-xs">
          {category}
        </span>

        <h2 className="text-3xl">
          {title}
        </h2>

        <p className="text-xl text-brand-gray-light">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-2 border-t border-brand-gray-darker text-xs text-brand-gray-light">
        <div className="border-r border-brand-gray-darker p-3">
         <p className="text-xl"> {date}</p>
        </div>

        <Link
          href="/v1/components/button"
          className="flex items-center justify-between p-3 text-xl"
        >
          View Component
          <ArrowRight size={16} />
        </Link>
      </div>

    </article>
  )
}
export default ComponentCard;