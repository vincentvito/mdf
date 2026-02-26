"use client";

import SplitText from "./SplitText";

interface SectionHeadingProps {
  children: string;
  light?: boolean;
}

export default function SectionHeading({
  children,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <SplitText
        as="h2"
        splitBy="words"
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {children}
      </SplitText>
      <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
    </div>
  );
}
