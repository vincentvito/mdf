"use client";

import dynamic from "next/dynamic";

const SmoothScrollProvider = dynamic(
  () => import("@/components/providers/SmoothScrollProvider"),
  { ssr: false }
);
const AnimationProvider = dynamic(
  () => import("@/components/providers/AnimationProvider"),
  { ssr: false }
);
export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScrollProvider>
        <AnimationProvider>{children}</AnimationProvider>
      </SmoothScrollProvider>
    </>
  );
}
