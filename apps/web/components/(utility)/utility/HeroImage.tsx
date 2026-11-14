import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageProps {
  src: string;
}

const HeroImage = ({ src }: ImageProps) => {
  return (
    <section className="relative w-full">
      <div className="w-full border border-brand-gray-dark">
        <div className={cn("bg-background-secondary p-0 md:p-2 lg:p-5")}>
          <Image
            src={src}
            width={1700}
            height={800}
            alt="hero image"
            className="h-[350px] w-full object-cover sm:h-[420px] md:h-auto lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;