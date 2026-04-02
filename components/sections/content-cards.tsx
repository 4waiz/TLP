import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

import type { MediaAsset } from "@/config/site-media";
import { Button } from "@/components/ui/button";

export function ServiceCard({
  title,
  eyebrow,
  description,
  image,
  bullets,
}: {
  title: string;
  eyebrow: string;
  description: string;
  image: MediaAsset;
  bullets: string[];
}) {
  return (
    <article className="group luxury-panel flex h-full flex-col transition-all duration-300 hover:shadow-luxe hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="color-bar mb-4" />
        <p className="badge-emerald text-xs">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          {bullets.map((bullet, index) => (
            <li key={bullet} className="flex items-start gap-3">
              <span
                className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{
                  backgroundColor:
                    index % 3 === 0
                      ? "#1D9E75"
                      : index % 3 === 1
                        ? "#D4900A"
                        : "#791F1F",
                }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function EventCard({
  title,
  type,
  date,
  city,
  excerpt,
  image,
  slug,
}: {
  title: string;
  type: string;
  date: string;
  city: string;
  excerpt: string;
  image: MediaAsset;
  slug: string;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-soft backdrop-blur transition-all duration-500 hover:shadow-luxe hover:-translate-y-2">
      <div className="relative h-72 shrink-0 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-brand-navy/20 to-transparent" />
        {/* Floating date badge */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-brand-burgundy shadow-lg backdrop-blur-sm">
          <Calendar className="h-3.5 w-3.5" />
          {date}
        </div>
        {/* Type badge */}
        <div className="absolute left-4 top-4">
          <span className="badge-emerald">{type}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="color-bar-thick mb-5" />
        <h3 className="font-funky text-2xl font-bold tracking-tight text-brand-charcoal md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-bold text-brand-navy">
          <MapPin className="h-4 w-4 text-brand-emerald" />
          {city}
        </p>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{excerpt}</p>
        <Button asChild variant="secondary" className="mt-6 w-full shadow-brand-gold">
          <Link href={`/events/${slug}`}>
            Explore event
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function PersonCard({
  name,
  role,
  bio,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  image: MediaAsset;
}) {
  return (
    <article className="group surface-card h-full overflow-hidden transition-all duration-300 hover:shadow-luxe hover:-translate-y-1">
      <div className="relative h-80 overflow-hidden md:h-96">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy/40 to-transparent" />
      </div>
      <div className="p-6">
        <div className="mb-3 h-1.5 w-14 rounded-full bg-brand-emerald" />
        <h3 className="font-display text-2xl font-bold text-brand-charcoal">{name}</h3>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-burgundy">
          {role}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{bio}</p>
      </div>
    </article>
  );
}

export function AlumniCard({
  name,
  track,
  city,
  quote,
  image,
}: {
  name: string;
  track: string;
  city: string;
  quote: string;
  image: MediaAsset;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-soft backdrop-blur transition-all duration-300 hover:shadow-luxe hover:-translate-y-1">
      <div className="relative h-72">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-burgundy/30 to-transparent" />
      </div>
      <div className="p-6">
        <div className="mb-3 h-1.5 w-12 rounded-full bg-brand-burgundy" />
        <p className="badge-emerald text-xs">
          {track}
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-charcoal">{name}</h3>
        <p className="mt-2 text-sm font-bold text-brand-navy">{city}</p>
        <p className="mt-4 text-sm italic leading-7 text-slate-600">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </article>
  );
}
