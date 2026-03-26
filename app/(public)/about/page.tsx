import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { media } from "@/config/site-media";
import { aboutOverview } from "@/data/about";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about The Leap Pakistan, its company story, founder, team, patrons, and brand philosophy as a subsidiary of The Aseer Group.",
  path: "/about",
  image: media.company.src,
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A platform shaped around growth, leadership, and meaningful advancement."
        description="Explore the company, the founder, the core team, the story, our patrons, and the brand philosophy behind The Leap Pakistan."
        image={media.company}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "About" }]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Navigate the story"
            title="Six perspectives on one modern brand."
            description="Each page expands a different part of the platform so the narrative feels complete rather than compressed into a single generic company profile."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aboutOverview.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group surface-card flex h-full flex-col justify-between p-8 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <h2 className="font-display text-3xl text-brand-charcoal">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-8 text-sm font-semibold text-brand-navy">
                    Explore section
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Relationship to Aseer Group"
            title="The Leap Pakistan operates with a wider group-backed standard of intention and quality."
            description="Being part of The Aseer Group gives the brand a stronger platform for partnerships, creative ambition, and thoughtful long-term growth."
          />
          <div className="surface-card p-8 text-base leading-8 text-slate-600">
            <p>
              The Leap Pakistan is positioned as a contemporary, high-quality
              platform within The Aseer Group ecosystem. That relationship
              matters because it anchors the brand in a wider philosophy of
              value creation, responsible leadership, and carefully considered
              execution.
            </p>
            <p className="mt-5">
              For partners, this means confidence in the seriousness of the
              platform. For participants, it means experiences designed with
              greater care, stronger structure, and a more intentional standard
              of delivery.
            </p>
            <Button asChild variant="secondary" className="mt-8">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want the brand story to continue in your organisation, institution, or event?"
        description="The best way to understand The Leap Pakistan is to experience it in action. Let&apos;s build something purposeful together."
      />
    </main>
  );
}
