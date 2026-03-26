import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/sections/content-cards";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { media } from "@/config/site-media";
import { servicePrinciples, services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore The Leap Pakistan services across youth leadership, corporate development, experiential learning, education partnerships, and event programmes.",
  path: "/services",
  image: media.servicesHero.src,
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Premium programmes designed around leadership, growth, and engagement."
        description="From youth cohorts and education partnerships to corporate retreats and flagship summits, our work is shaped to feel credible, contemporary, and outcome-driven."
        image={media.servicesHero}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Services" }]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Service ecosystem"
            title="A modular offering with room for custom design."
            description="Select a format, combine tracks, or build a bespoke programme shaped to your audience and objectives."
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

      <section className="section-space bg-white/70">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="How we deliver"
            title="Every engagement is built around context, quality, and participant experience."
            description="We combine strategy, facilitation, design sensitivity, and real-world audience understanding so the work feels tailored rather than generic."
          />
          <div className="grid gap-5">
            {servicePrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <div className="surface-card p-8">
                  <h3 className="font-display text-3xl text-brand-charcoal">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="luxury-panel grid gap-8 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Engagement pathways</p>
              <h2 className="mt-6 font-display text-4xl text-brand-charcoal md:text-5xl">
                Need a single workshop, a full retreat, or a multi-touch programme?
              </h2>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-slate-600 md:grid-cols-2">
              {[
                "Single-format workshops for targeted skill-building",
                "Programme series for sustained cohort journeys",
                "Summits and large-format activation experiences",
                "Retreats and offsites for leadership alignment",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] bg-brand-chalk p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Discuss your requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let&apos;s shape the right service mix for your audience."
        description="Share your audience, goals, and preferred format. We can recommend a workshop, a multi-session pathway, a summit concept, or a tailored retreat structure."
      />
    </main>
  );
}
