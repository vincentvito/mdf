"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({
  src,
  alt,
  fill = true,
  sizes = "100vw",
  className = "",
  speed = 0.2,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current || !imageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(imageRef.current, { scale: 1 + speed });

    const tween = gsap.to(imageRef.current, {
      yPercent: -speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [reduced, speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={imageRef} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
