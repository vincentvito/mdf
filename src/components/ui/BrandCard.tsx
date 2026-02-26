import Image from "next/image";
import ParallaxImage from "./ParallaxImage";

interface BrandCardProps {
  name: string;
  description: string;
  image: string;
  logo: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function BrandCard({
  name,
  description,
  image,
  logo,
  imageAlt,
  reversed = false,
}: BrandCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <ParallaxImage
        src={image}
        alt={imageAlt}
        sizes="(max-width: 1024px) 100vw, 50vw"
        speed={0.15}
        className={`relative aspect-[3/2] rounded-lg ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      />
      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        <Image
          src={logo}
          alt={`${name} logo`}
          width={180}
          height={60}
          className="h-12 w-auto mb-6 brightness-0 invert"
        />
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-4">
          {name}
        </h3>
        <p className="text-white/70 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
}
