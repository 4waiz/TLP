import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

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
    <article className="group luxury-panel flex h-full flex-col">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-gold">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-display text-3xl text-brand-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-emerald" />
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
    <article className="group luxury-panel overflow-hidden">
      <div className="relative h-72">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">{type}</p>
          <p className="text-sm font-medium text-slate-500">{date}</p>
        </div>
        <h3 className="mt-5 font-display text-3xl text-brand-charcoal">{title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-brand-gold" />
          {city}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">{excerpt}</p>
        <Button asChild variant="outline" className="mt-6">
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
    <article className="group surface-card h-full overflow-hidden">
      <div className="relative h-80 overflow-hidden md:h-96">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-3xl text-brand-charcoal">{name}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
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
    <article className="luxury-panel overflow-hidden">
      <div className="relative h-72">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-emerald">
          {track}
        </p>
        <h3 className="mt-4 font-display text-3xl text-brand-charcoal">{name}</h3>
        <p className="mt-2 text-sm text-slate-500">{city}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600">“{quote}”</p>
      </div>
    </article>
  );
}
