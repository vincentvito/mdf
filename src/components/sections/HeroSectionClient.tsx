"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import heroImage from "../../../public/images/hero-bg.jpg";

interface HeroSectionClientProps {
  translations: {
    heading: string;
    subheading: string;
    cta: string;
    scrollDown: string;
    imageAlt: string;
  };
}

export default function HeroSectionClient({
  translations: t,
}: HeroSectionClientProps) {
  const ease = [0.21, 0.47, 0.32, 0.98] as const;
  const reduced = useReducedMotion();

  return (
    <>
      {/* ── Background image ── */}
      <Image
        src={heroImage}
        alt={t.imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={75}
        placeholder="blur"
      />

      {/* ── Dark overlay for text readability ── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Centered content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 pt-20 pb-8 lg:pt-20 lg:pb-12">
        <div className="max-w-3xl text-center mx-auto">
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.05] mb-6"
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            {t.heading}
          </motion.h1>
          <motion.p
            className="text-white/80 text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-10 font-body leading-relaxed"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            {t.subheading}
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton>
              <Button href="#services">{t.cta}</Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="#services" aria-label={t.scrollDown}>
          <svg
            className="w-6 h-6 text-white/60 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </motion.div>
    </>
  );
}
