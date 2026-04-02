import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, Building, Tag, Users, Ticket, CheckCircle } from "lucide-react";

import { EventRegistrationForm } from "@/components/forms/event-registration-form";
import { EventCard } from "@/components/sections/content-cards";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return {};
  }

  return buildMetadata({
    title: event.title,
    description: event.excerpt,
    path: `/events/${event.slug}`,
    image: event.image.src,
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const related = events.filter((item) => item.slug !== event.slug).slice(0, 2);

  const metaItems = [
    { icon: Calendar, label: "Date", value: formatDate(event.date), color: "text-brand-gold" },
    { icon: MapPin, label: "City", value: event.city, color: "text-brand-emerald" },
    { icon: Building, label: "Venue", value: event.venue, color: "text-brand-burgundy" },
    { icon: Tag, label: "Format", value: event.type, color: "text-brand-navy" },
  ];

  return (
    <main>
      <PageHero
        eyebrow={event.type}
        title={event.title}
        description={event.overview}
        image={event.image}
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Events", href: "/events" },
          { title: event.title },
        ]}
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {/* Event snapshot */}
            <div className="overflow-hidden rounded-[2rem] bg-brand-navy p-8 shadow-brand-navy">
              <div className="color-bar-thick mb-6" />
              <p className="badge-gold">
                Event snapshot
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {metaItems.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3">
                    <Icon className={`h-5 w-5 ${color}`} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">{label}</p>
                      <p className="text-sm font-semibold text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="surface-card p-8">
              <p className="badge-emerald">Highlights</p>
              <h2 className="mt-5 event-title text-brand-charcoal">
                Designed to create momentum in the room.
              </h2>
              <ul className="mt-6 space-y-4">
                {event.highlights.map((item, index) => {
                  const colors = [
                    { border: "#1D9E75", bg: "rgba(29,158,117,0.08)", icon: "text-brand-emerald" },
                    { border: "#D4900A", bg: "rgba(212,144,10,0.08)", icon: "text-brand-gold" },
                    { border: "#791F1F", bg: "rgba(121,31,31,0.08)", icon: "text-brand-burgundy" },
                  ];
                  const c = colors[index % 3];
                  return (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border-l-4 p-4"
                      style={{ borderLeftColor: c.border, backgroundColor: c.bg }}
                    >
                      <CheckCircle className={`mt-0.5 h-5 w-5 shrink-0 ${c.icon}`} />
                      <span className="text-sm font-medium leading-7 text-slate-700">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Registration option shells */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border-2 border-brand-gold/25 bg-brand-gold/8 p-6 transition-all duration-300 hover:shadow-brand-gold hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-gold" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Self Funded</span>
                </div>
                <p className="mt-3 font-display text-3xl font-extrabold text-brand-charcoal">$15</p>
                <p className="text-sm text-slate-500">Registration fee</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold text-brand-gold">
                    <Ticket className="h-3 w-3" />
                    Available
                  </span>
                </div>
                <Button variant="secondary" className="mt-4 w-full" disabled>
                  Register as Self Funded
                </Button>
              </div>
              <div className="rounded-[1.5rem] border-2 border-brand-emerald/25 bg-brand-emerald/8 p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-emerald" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">Fully Funded</span>
                </div>
                <p className="mt-3 font-display text-3xl font-extrabold text-brand-charcoal">$10</p>
                <p className="text-sm text-slate-500">Registration fee</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-emerald/15 px-3 py-1 text-xs font-bold text-brand-emerald">
                    <Ticket className="h-3 w-3" />
                    Available
                  </span>
                </div>
                <Button variant="emerald" className="mt-4 w-full" disabled>
                  Register as Fully Funded
                </Button>
              </div>
            </div>
          </div>

          <div className="luxury-panel p-8 md:p-10">
            <SectionHeading
              eyebrow="Register interest"
              title="Request attendance, group registration, or partnership details."
              description="This flow is wired for local database persistence and can be adapted later for approval, payments, or participant management."
            />
            <div className="mt-8">
              <EventRegistrationForm eventSlug={event.slug} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-mist">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Other events"
              title="Explore more experiences from the current lineup."
            />
            <Button asChild variant="default">
              <Link href="/events">Return to events</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((item) => (
              <EventCard
                key={item.slug}
                {...item}
                date={formatDate(item.date)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
