"use client";

import { useRef, useEffect, useCallback } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface ParallaxValues {
  x: number;
  y: number;
}

export function useMouseParallax(strength: number = 15) {
  const values = useRef<ParallaxValues>({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || isTouch.current) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      values.current = { x: nx * strength, y: ny * strength };
    },
    [reduced, strength]
  );

  useEffect(() => {
    if (reduced || isTouch.current) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, reduced]);

  return values;
}
