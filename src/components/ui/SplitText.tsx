"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "blockquote";
  splitBy?: "chars" | "words";
  staggerDelay?: number;
  scrub?: boolean;
}

export default function SplitText({
  children,
  className = "",
  as: Tag = "span",
  splitBy = "words",
  staggerDelay = 0.03,
  scrub = false,
}: SplitTextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current as HTMLElement | null;
    if (reduced || !container) return;

    gsap.registerPlugin(ScrollTrigger);

    const elements = container.querySelectorAll(".split-unit");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: scrub ? "top 30%" : undefined,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : "play none none none",
      },
    });

    tl.fromTo(
      elements,
      { opacity: 0, y: 20, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, [children, reduced, staggerDelay, scrub]);

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  const units =
    splitBy === "chars"
      ? children.split("").map((char, i) => (
          <span
            key={i}
            className="split-unit inline-block"
            style={{ perspective: "400px" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))
      : children.split(" ").map((word, i) => (
          <span
            key={i}
            className="split-unit inline-block mr-[0.25em]"
            style={{ perspective: "400px" }}
          >
            {word}
          </span>
        ));

  return (
    <Tag
      ref={containerRef}
      className={`${className} overflow-hidden`}
    >
      {units}
    </Tag>
  );
}
