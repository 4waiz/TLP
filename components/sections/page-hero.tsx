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
    <section className="container pt-10">
      <div className="luxury-panel grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid-fade grid-fade opacity-60" />
          <div className="relative z-10">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-brand-charcoal md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>
        </div>
        <div className="relative min-h-[360px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{ objectPosition: image.position ?? "center" }}
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
