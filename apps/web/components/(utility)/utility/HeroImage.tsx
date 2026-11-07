import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  src: string
}

const HeroImage = ({src}: ImageProps) => {
  return (
    <section className="relative w-full">
      <div className="w-full border border-brand-gray-dark">
        <div className={cn(`bg-background-secondary p-5 md:p-2`)}>
          <Image
            src={src}
            width={1700}
            height={800}
            alt="hero image"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
