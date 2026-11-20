import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) => {
  return (
    <section>
      <div className={cn("flex flex-col gap-4", className)}>
        <h3
          className={cn("text-center md:text-balance text-2xl md:text-5xl px-2 md:px-0", titleClassName)}
        >
          {title}
        </h3>
        <p className={cn("text-center text-md md:text-lg md:text-balance px-2 md:px-0", descriptionClassName)}>
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};

export default SectionHeader;
