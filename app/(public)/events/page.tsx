import Link from "next/link";

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
  const accentColors = [
    "bg-brand-emerald",
    "bg-brand-gold",
    "bg-brand-burgundy",
  ];

  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="High-energy events with stronger strategy behind the scenes."
        description="Explore featured summits, leadership retreats, and youth experiences built to create visibility, momentum, and meaningful participation."
        image={media.eventsHero}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Events" }]}
      />

      <section className="section-space">
        <div className="container">
          <div className="luxury-panel grid gap-8 p-8 md:p-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0">
              <p className="eyebrow border-brand-emerald/20 bg-brand-emerald/10 text-brand-emerald">Featured event</p>
              <div className="color-bar mt-6" />
              <h2 className="mt-6 event-title text-brand-charcoal">
                {featured.title}
              </h2>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-burgundy">
                {formatDate(featured.date)} • {featured.city}
              </p>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600">
                {featured.overview}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary">
                  <Link href={`/events/${featured.slug}`}>View event details</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Discuss event partnership</Link>
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 gap-4">
              {featured.highlights.map((item, index) => (
                <div
                  key={item}
                  className="surface-card min-w-0 border-l-4 p-6 text-sm font-medium leading-7 text-slate-700"
                  style={{
                    borderLeftColor:
                      index % 3 === 0
                        ? "#1D9E75"
                        : index % 3 === 1
                          ? "#D4900A"
                          : "#791F1F",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container">
          <div className="mb-4">
            <p className="eyebrow border-brand-burgundy/20 bg-brand-burgundy/10 text-brand-burgundy">Upcoming and featured</p>
            <h2 className="mt-5 event-title text-brand-charcoal">
              Explore the current event lineup.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Each format is designed for a distinct audience, with room for custom partnerships, registrations, and private adaptations.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {events.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.06}>
                <EventCard {...event} date={formatDate(event.date)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-3xl">
            <p className="eyebrow border-brand-gold/20 bg-brand-gold/10 text-brand-gold">Event FAQs</p>
            <h2 className="mt-5 event-title text-brand-charcoal">
              Planning to attend, partner, or register a group?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              These are the most common questions we receive when organisations and participants are considering a Leap Pakistan event.
            </p>
          </div>
          <FaqList items={eventFaqs} />
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
