import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ParallaxCard } from "@/components/motion/parallax-card";
import {
  AlumniCard,
  EventCard,
  PersonCard,
  ServiceCard,
} from "@/components/sections/content-cards";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroHome } from "@/components/sections/hero-home";
import { ImpactStrip } from "@/components/sections/impact-strip";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { media } from "@/config/site-media";
import { alumniStories } from "@/data/alumni";
import { events } from "@/data/events";
import { founder, coreTeam } from "@/data/people";
import { deliveryMetrics, differentiators } from "@/data/site-content";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Leadership, Learning & Impact",
  description:
    "The Leap Pakistan creates premium experiences across youth leadership, education partnerships, corporate development, and events as a subsidiary of The Aseer Group.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroHome />

      {/* Brand positioning */}
      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Brand positioning"
              title="A platform built to bridge ambition and execution."
              description="We shape experiences that look premium, feel human, and create real movement across student, institutional, and organisational contexts."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Subsidiary strength",
                  description:
                    "The Leap Pakistan sits within The Aseer Group, giving the brand a wider foundation for quality, partnerships, and long-term thinking.",
                  color: "#D4900A",
                  bg: "bg-brand-gold/8",
                },
                {
                  title: "Experience-led design",
                  description:
                    "Programmes are shaped as complete journeys with facilitation, visual discipline, environment, storytelling, and purposeful follow-through.",
                  color: "#1D9E75",
                  bg: "bg-brand-emerald/8",
                },
                {
                  title: "Cross-sector relevance",
                  description:
                    "From campus halls to boardrooms, we design language and formats that land with the audience in front of us.",
                  color: "#791F1F",
                  bg: "bg-brand-burgundy/8",
                },
                {
                  title: "Mission with polish",
                  description:
                    "The work remains inspirational without becoming vague, and professional without becoming cold or generic.",
                  color: "#0C447C",
                  bg: "bg-brand-navy/6",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`surface-card border-l-4 p-6 transition-all duration-300 hover:shadow-luxe hover:-translate-y-1 ${item.bg}`}
                  style={{ borderLeftColor: item.color }}
                >
                  <p
                    className="font-display text-sm font-bold uppercase tracking-[0.22em]"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-space section-chalk">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Programmes and partnerships designed for momentum."
            description="A flexible service ecosystem for youth development, corporate capability, experiential learning, and education-facing activation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ImpactStrip items={deliveryMetrics} />

      {/* Why choose us */}
      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Why choose us"
                title="A stronger rhythm of strategy, story, and participant experience."
                description="The difference is not only in what we deliver, but in how intentional the experience feels from first touchpoint to final follow-up."
              />
            </div>
          </Reveal>
          <div className="grid gap-5">
            {differentiators.map((item, index) => {
              const colors = ["#D4900A", "#1D9E75", "#0C447C", "#791F1F"];
              const color = colors[index % colors.length];
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="surface-card border-l-4 p-8 transition-all duration-300 hover:shadow-luxe hover:-translate-y-0.5" style={{ borderLeftColor: color }}>
                    <div className="flex items-start gap-4">
                      <div
                        className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Sparkles className="h-5 w-5" style={{ color }} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-brand-charcoal">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="section-space section-mist">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Upcoming events"
              title="Moments that create visibility, energy, and real engagement."
              description="Preview selected event formats and flagship experiences currently featured within the platform."
            />
            <Button asChild variant="default">
              <Link href="/events">
                View all events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {events.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.06}>
                <EventCard
                  {...event}
                  date={formatDate(event.date)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section-space">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="surface-card overflow-hidden">
              <div className="relative h-[520px]">
                <Image
                  src={founder.image.src}
                  alt={founder.image.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: founder.image.position ?? "center" }}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
              </div>
              <div className="p-8">
                <p className="badge-gold">
                  Founder spotlight
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold text-brand-charcoal">
                  {founder.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-brand-navy/75">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{founder.bio}</p>
                <Button asChild variant="outline" className="mt-6">
                  <Link href="/about/founder">Read the founder story</Link>
                </Button>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="People and leadership"
              title="A team shaping ambitious experiences with clarity and care."
              description="The Leap Pakistan brings together programme design, partnerships, brand storytelling, and facilitation under one contemporary platform."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {coreTeam.slice(0, 4).map((person, index) => (
                <Reveal key={person.name} delay={index * 0.07}>
                  <PersonCard {...person} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="section-space section-chalk">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Alumni voices"
              title="Stories from participants who kept moving."
              description="Our alumni experience is designed to extend beyond one event or one cohort, helping people stay connected to growth and one another."
            />
            <Button asChild variant="default">
              <Link href="/alumni">Visit alumni stories</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {alumniStories.map((story, index) => (
              <Reveal key={story.name} delay={index * 0.08}>
                <AlumniCard {...story} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-space">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Gallery"
              title="A visual rhythm of workshops, summits, conversations, and growth."
              description="The platform is designed to feel alive in motion, on stage, in rooms, and in the quieter moments where reflection turns into direction."
            />
            <Button asChild variant="outline">
              <Link href="/gallery">Open the gallery</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[media.gallery1, media.gallery2, media.gallery3, media.gallery6].map(
              (image, index) => (
                <Reveal key={image.src} delay={index * 0.07}>
                  <div className="group relative h-72 overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to shape a more meaningful programme, partnership, or event?"
        description="Tell us what you are building, who it is for, and where you want it to go next. We will help you shape the right format, tone, and next step."
      />
    </main>
  );
}
