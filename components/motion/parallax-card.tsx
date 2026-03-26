"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import type { MediaAsset } from "@/config/site-media";

export function ParallaxCard({
  image,
  className,
}: {
  image: MediaAsset;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -18]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative overflow-hidden rounded-[2rem] ${className ?? ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        style={{ objectPosition: image.position ?? "center" }}
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    </motion.div>
  );
}
