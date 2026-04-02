import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, Users, Ticket, CheckCircle } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { EventCard } from "@/components/sections/content-cards";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { media } from "@/config/site-media";
import { eventFaqs, events } from "@/data/events";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Events",
  description:
    "Discover upcoming events, summits, retreats, and bootcamps by The Leap Pakistan with premium participant experiences and partnership pathways.",
  path: "/events",
  image: media.eventsHero.src,
});

export default function EventsPage() {
  const featured = events[0];

  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="High-energy events with stronger strategy behind the scenes."
        description="Explore featured summits, leadership retreats, and youth experiences built to create visibility, momentum, and meaningful participation."
        image={media.eventsHero}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Events" }]}
      />

      {/* ── FEATURED EVENT ── */}
      <section className="section-space">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-charcoal shadow-luxe">
              {/* Decorative background */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-gold/12 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-brand-emerald/10 blur-3xl" />
                <div className="absolute bottom-20 right-1/3 h-48 w-48 rounded-full bg-brand-burgundy/8 blur-3xl" />
              </div>

              <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
                {/* Left */}
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
                    <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse-glow" />
                    Featured event
                  </span>
                  <div className="color-bar-thick mt-6" />
                  <h2 className="mt-6 font-funky text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                    {featured.title}
                  </h2>

                  {/* Meta strip */}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
                      <Calendar className="h-4 w-4 text-brand-gold" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
                      <MapPin className="h-4 w-4 text-brand-emerald" />
                      {featured.city}
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
                      <Clock className="h-4 w-4 text-brand-burgundy" />
                      Full day
                    </span>
                  </div>

                  <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75">
                    {featured.overview}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="secondary" size="lg" className="shadow-brand-gold">
                      <Link href={`/events/${featured.slug}`}>
                        View event details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                    >
                      <Link href="/contact">Discuss partnership</Link>
                    </Button>
                  </div>
                </div>

                {/* Right: highlights + registration shells */}
                <div className="grid min-w-0 gap-4">
                  {/* Highlights */}
                  {featured.highlights.map((item, index) => {
                    const colors = [
                      { border: "#1D9E75", bg: "rgba(29,158,117,0.1)", icon: "text-brand-emerald" },
                      { border: "#D4900A", bg: "rgba(212,144,10,0.1)", icon: "text-brand-gold" },
                      { border: "#791F1F", bg: "rgba(121,31,31,0.1)", icon: "text-brand-burgundy" },
                    ];
                    const c = colors[index % 3];
                    return (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border-l-4 p-5 backdrop-blur-sm"
                        style={{ borderLeftColor: c.border, backgroundColor: c.bg }}
                      >
                        <CheckCircle className={`mt-0.5 h-5 w-5 shrink-0 ${c.icon}`} />
                        <span className="text-sm font-semibold leading-7 text-white/90">{item}</span>
                      </div>
                    );
                  })}

                  {/* Registration option shells */}
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-brand-gold" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Self Funded</span>
                      </div>
                      <p className="mt-3 font-display text-2xl font-extrabold text-white">$15</p>
                      <p className="text-xs text-white/60">Registration fee</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-bold text-brand-gold">
                          <Ticket className="h-3 w-3" />
                          Available
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-brand-emerald/30 bg-brand-emerald/10 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand-emerald" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">Fully Funded</span>
                      </div>
                      <p className="mt-3 font-display text-2xl font-extrabold text-white">$10</p>
                      <p className="text-xs text-white/60">Registration fee</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-emerald/20 px-3 py-1 text-xs font-bold text-brand-emerald">
                          <Ticket className="h-3 w-3" />
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom color bar */}
              <div className="h-2" style={{ background: "linear-gradient(90deg, #D4900A 0%, #1D9E75 35%, #0C447C 65%, #791F1F 100%)" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EVENT LINEUP ── */}
      <section className="section-space section-mist">
        <div className="container">
          <Reveal>
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="badge-burgundy">Upcoming and featured</p>
                <h2 className="mt-5 font-funky text-4xl font-bold tracking-tight text-brand-charcoal md:text-5xl lg:text-6xl">
                  Explore the current event lineup.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  Each format is designed for a distinct audience, with room for custom partnerships, registrations, and private adaptations.
                </p>
              </div>
              <Button asChild variant="default" size="lg">
                <Link href="/contact">
                  Register interest
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {events.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.08}>
                <EventCard {...event} date={formatDate(event.date)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT STATS STRIP ── */}
      <section className="section-space">
        <div className="container">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { value: "3+", label: "Events per year", color: "bg-brand-navy", accent: "text-brand-gold" },
                { value: "500+", label: "Participants", color: "bg-brand-gold/15", accent: "text-brand-navy" },
                { value: "10+", label: "Partner institutions", color: "bg-brand-emerald/15", accent: "text-brand-emerald" },
                { value: "4", label: "Cities covered", color: "bg-brand-burgundy/12", accent: "text-brand-burgundy" },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-[1.5rem] ${stat.color} p-6 text-center transition-all duration-300 hover:-translate-y-1`}>
                  <p className={`font-display text-5xl font-extrabold ${stat.accent}`}>{stat.value}</p>
                  <p className={`mt-2 text-sm font-bold uppercase tracking-[0.2em] ${stat.color === "bg-brand-navy" ? "text-white/70" : "text-slate-600"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-space section-chalk">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="max-w-3xl">
              <p className="badge-gold">Event FAQs</p>
              <h2 className="mt-5 font-funky text-3xl font-bold tracking-tight text-brand-charcoal md:text-4xl lg:text-5xl">
                Planning to attend, partner, or register a group?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                These are the most common questions we receive when organisations and participants are considering a Leap Pakistan event.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList items={eventFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Want to register interest or co-create an event?"
        description="Whether you are attending, sponsoring, or shaping a private-format experience, our team can guide you toward the most relevant path."
        primaryLabel="Register or inquire"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </main>
  );
}
