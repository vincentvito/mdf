"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  imageAlt,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const reduced = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || isTouchDevice || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setRotateX(-y * 8);
      setRotateY(x * 8);
    },
    [reduced, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  const cardContent = (
    <>
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-primary mb-2">
          {title}
        </h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </div>
    </>
  );

  if (reduced || isTouchDevice) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {cardContent}
    </motion.div>
  );
}
