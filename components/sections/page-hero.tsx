import Image from "next/image";

import type { MediaAsset } from "@/config/site-media";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: MediaAsset;
  breadcrumbs?: { title: string; href?: string }[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="container pt-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-charcoal lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div className="relative min-w-0 p-8 md:p-12 lg:p-16">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-brand-emerald/8 blur-3xl" />
          </div>
          <div className="relative z-10">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} className="text-white/60" /> : null}
            <p className="eyebrow mt-2 border-brand-gold/25 bg-brand-gold/12 text-brand-gold">
              {eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {description}
            </p>
          </div>
        </div>
        {/* Right image */}
        <div className="relative min-h-[360px] min-w-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{ objectPosition: image.position ?? "center" }}
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/60 to-transparent lg:bg-gradient-to-r lg:from-brand-charcoal/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
        </div>
        {/* Bottom color bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1.5" style={{ background: "linear-gradient(90deg, #D4900A 0%, #1D9E75 35%, #0C447C 65%, #791F1F 100%)" }} />
      </div>
    </section>
  );
}
