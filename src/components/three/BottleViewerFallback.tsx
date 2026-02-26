"use client";

import Image from "next/image";
import { HERO_MODEL_FALLBACK } from "@/lib/constants";

export function BottleLoadingSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-accent/10 animate-pulse" />
    </div>
  );
}

export function BottleStaticFallback() {
  return (
    <div className="w-full h-full relative">
      <Image
        src={HERO_MODEL_FALLBACK}
        alt="Milano Drinks Factory craft bottle"
        fill
        className="object-contain drop-shadow-[0_20px_40px_rgba(200,168,124,0.25)]"
        sizes="(max-width: 1024px) 80vw, 40vw"
      />
    </div>
  );
}
