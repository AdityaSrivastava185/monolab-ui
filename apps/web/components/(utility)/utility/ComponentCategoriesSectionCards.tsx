import Image from "next/image";
import React from "react";
import { ComponentCategoriesProps } from "@/types/ComponentCategoriesSectionCards.type";
import Link from "next/link";

const ComponentCategoriesSectionCard = ({
  title,
  description,
  buttonText,
  image,
  imageAlt = "content image",
  tags,
}: ComponentCategoriesProps) => {
  return (
    <div className="">
      {/* Header */}
      <div className="border-y border-surface-dark">
        <div className="flex flex-col md:flex-row min-h-26 w-full md:items-center md:justify-between px-4 py-6 md:px-6">
          <div className="py-2">
            <p className="text-3xl lg:text-5xl">{title}</p>
          </div>

          <div className="group w-full md:w-fit md:p-1 border border-transparent rounded-md md:rounded-full transition-all duration-300 hover:border-dashed hover:border-primary">
            <Link href={""} className="flex items-center justify-between gap-3 rounded-md md:rounded-full bg-primary-dark px-4 py-3 text-lg w-full md:w-fit transition-colors duration-300 group-hover:bg-primary">

              <span className="text-md lg:text-base">{buttonText}</span>

              <span className="text-lg">
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
                  className="lucide lucide-chevrons-right preview-icon"
                >
                  <path d="m6 17 5-5-5-5" />
                  <path d="m13 17 5-5-5-5" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-6 md:px-6">
        <p className="text-lg md:text-xl">{description}</p>
      </div>

      {/* Image + Tags */}
      <div className="px-4 md:px-6">
        <Image
          src={image}
          width={1700}
          height={1200}
          alt={imageAlt}
          className="h-auto w-full object-contain"
        />

        <div className="flex flex-wrap gap-2 py-6">
          {tags.map((item) => (
            <span
              key={item}
              className="bg-tag-background px-2 py-1 font-mono uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentCategoriesSectionCard;
