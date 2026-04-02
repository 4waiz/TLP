"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { media } from "@/config/site-media";

const pillars = [
  { label: "Youth leadership", href: "/services" },
  { label: "Corporate growth", href: "/services" },
  { label: "Education partnerships", href: "/services" },
];

export function HeroHome() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [1, 1] : [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [0, 0] : [0, -40]);

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      ref={sectionRef}
      className="relative -mt-[92px] min-h-[100dvh] overflow-hidden bg-brand-charcoal"
    >
      {/* Full-screen background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale, y: imgY }}>
        <Image
          src="/icon/hero.jpeg"
          alt="Pakistani mountain landscape representing The Leap Pakistan."
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-brand-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/40 to-transparent" />

      {/* Subtle brand color glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-gold/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-emerald/6 blur-[100px]" />
      </div>

      {/* Content — centered, overlaid */}
      <motion.div
        className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Spacer for header */}
        <div className="h-24" />

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="mx-auto mt-8 max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        >
          Every step is{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-gold">leadership</span>
            <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-brand-gold/25 md:h-4" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg md:mt-8 md:text-xl"
        >
          The Leap Pakistan builds premium youth programmes, education partnerships,
          and corporate experiences that move people from intention to impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10"
        >
          <Button asChild size="lg" variant="secondary" className="shadow-brand-gold">
            <Link href="/contact">
              Plan your next programme
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/30"
          >
            <Link href="/services">Explore our services</Link>
          </Button>
        </motion.div>

        {/* Pillar pills */}
        <motion.div
          {...fadeUp(0.65)}
          className="mt-10 flex flex-wrap justify-center gap-3 md:mt-12"
        >
          {pillars.map((pillar) => (
            <Link
              key={pillar.label}
              href={pillar.href}
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/40 hover:bg-brand-gold/15 hover:text-brand-gold"
            >
              {pillar.label}
            </Link>
          ))}
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.8)}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Scroll to explore
          </span>
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom color bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-1.5" style={{ background: "linear-gradient(90deg, #D4900A 0%, #1D9E75 35%, #0C447C 65%, #791F1F 100%)" }} />
    </section>
  );
}
