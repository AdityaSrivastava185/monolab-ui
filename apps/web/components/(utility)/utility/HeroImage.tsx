import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section className="relative w-full">
      <Image
        src="/hero-image.png"
        height={7000}
        width={7000}
        alt="hero-image"
        className="object-contain rounded-md"
        loading="eager"
      />
    </section>
  );
};

export default HeroImage;
