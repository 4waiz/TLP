"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { media } from "@/config/site-media";

const pillars = [
  { label: "Youth leadership", color: "bg-brand-emerald", text: "text-white" },
  { label: "Corporate growth", color: "bg-brand-navy", text: "text-white" },
  { label: "Education partnerships", color: "bg-brand-gold", text: "text-brand-charcoal" },
];

export function HeroHome() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="container pt-8">
      {/* Outer hero panel */}
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-charcoal">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={media.heroMain.src}
            alt={media.heroMain.alt}
            fill
            className="object-cover opacity-30"
            style={{ objectPosition: media.heroMain.position ?? "center" }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
        </div>

        {/* Decorative branded orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-gold/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-brand-emerald/12 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-brand-burgundy/10 blur-3xl" />
        </div>

        <div className="relative z-10 grid gap-8 p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-16">
          {/* LEFT: content */}
          <div className="flex flex-col justify-center">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
                <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse-glow" />
                Now shaping Pakistan&apos;s leadership landscape
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              className="mt-7 hero-title text-balance text-white"
            >
              Every step is{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-gold">leadership</span>
                <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-brand-gold/20" />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.22)}
              className="mt-6 max-w-xl text-lg leading-8 text-white/75"
            >
              The Leap Pakistan builds premium youth programmes, education partnerships,
              and corporate experiences that move people from intention to impact.
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
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
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
              >
                <Link href="/services">Explore our services</Link>
              </Button>
            </motion.div>

            {/* Pillar badges */}
            <motion.div
              {...fadeUp(0.42)}
              className="mt-10 flex flex-wrap gap-3"
            >
              {pillars.map((pillar) => (
                <span
                  key={pillar.label}
                  className={`rounded-full ${pillar.color} ${pillar.text} px-5 py-3 text-sm font-bold tracking-wide`}
                >
                  {pillar.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: visual grid */}
          <motion.div
            {...fadeUp(0.2)}
            className="grid gap-4 lg:grid-cols-[1fr_0.5fr]"
          >
            {/* Main image card */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] lg:min-h-[520px]">
              <Image
                src={media.heroMain.src}
                alt={media.heroMain.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: media.heroMain.position ?? "center" }}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </div>
            </div>

            {/* Side column */}
            <div className="grid gap-4">
              {/* Stats card */}
              <div className="flex flex-col justify-center rounded-[1.75rem] bg-brand-navy p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                  Signature focus
                </p>
                <p className="mt-4 font-display text-3xl font-extrabold text-white">
                  5+
                </p>
                <p className="text-sm text-white/70">Years building impact</p>
                <div className="mt-4 h-1 w-full rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-brand-gold" />
                </div>
              </div>

              {/* Secondary image */}
              <div className="relative min-h-[200px] overflow-hidden rounded-[1.75rem] lg:min-h-[260px]">
                <Image
                  src={media.heroSecondary.src}
                  alt={media.heroSecondary.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: media.heroSecondary.position ?? "center" }}
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom color bar */}
        <div className="relative z-10 h-1.5">
          <div className="h-full w-full" style={{ background: "linear-gradient(90deg, #D4900A 0%, #1D9E75 35%, #0C447C 65%, #791F1F 100%)" }} />
        </div>
      </div>
    </section>
  );
}
