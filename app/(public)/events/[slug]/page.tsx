import { notFound } from "next/navigation";
import Link from "next/link";

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
            <div className="surface-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Event snapshot
              </p>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-600 md:grid-cols-2">
                <p>
                  <span className="font-semibold text-brand-charcoal">Date:</span>{" "}
                  {formatDate(event.date)}
                </p>
                <p>
                  <span className="font-semibold text-brand-charcoal">City:</span>{" "}
                  {event.city}
                </p>
                <p>
                  <span className="font-semibold text-brand-charcoal">Venue:</span>{" "}
                  {event.venue}
                </p>
                <p>
                  <span className="font-semibold text-brand-charcoal">Format:</span>{" "}
                  {event.type}
                </p>
              </div>
            </div>
            <div className="surface-card p-8">
              <SectionHeading
                eyebrow="Highlights"
                title="Designed to create momentum in the room."
              />
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                {event.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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

      <section className="section-space bg-white/70">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Other events"
              title="Explore more experiences from the current lineup."
            />
            <Button asChild variant="outline">
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
