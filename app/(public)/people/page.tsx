import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PersonCard } from "@/components/sections/content-cards";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/config/site-media";
import { founder, coreTeam, patrons } from "@/data/people";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "People",
  description:
    "Meet the founder, core team, and patrons guiding The Leap Pakistan across leadership, learning, and impact.",
  path: "/people",
  image: media.peopleHero.src,
});

export default function PeoplePage() {
  return (
    <main>
      <PageHero
        eyebrow="People"
        title="The people behind the platform, the experiences, and the direction."
        description="Meet the founder, core team, and patrons shaping The Leap Pakistan with clarity, care, and a commitment to meaningful growth."
        image={media.peopleHero}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "People" }]}
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-3xl">
            <p className="eyebrow border-brand-emerald/20 bg-brand-emerald/10 text-brand-emerald">Founder</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal md:text-5xl">
              {founder.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-burgundy font-semibold md:text-lg">
              {founder.role}
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600 md:text-lg">
              {founder.extended}
            </p>
          </div>
          <div className="surface-card border-l-4 border-l-brand-emerald p-8 text-base leading-8 text-slate-600">
            <p>{founder.bio}</p>
            <p className="mt-5">{founder.extended}</p>
          </div>
        </div>
      </section>

      <section className="section-space section-mist">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow border-brand-gold/20 bg-brand-gold/10 text-brand-gold">Core team</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal md:text-5xl">
              Multidisciplinary leadership across programmes, partnerships, and story.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              Our team works across audience strategy, facilitation, partnership building, and experience design to ensure every engagement feels coherent and elevated.
            </p>
            <div className="color-bar mt-6" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreTeam.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <PersonCard {...person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow border-brand-burgundy/20 bg-brand-burgundy/10 text-brand-burgundy">Our patrons</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal md:text-5xl">
              Trusted voices around the ecosystem.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              Patrons bring perspective, mentorship, and long-range credibility to the work, helping The Leap Pakistan stay ambitious and grounded at the same time.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {patrons.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <PersonCard {...person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for leadership speakers, facilitators, or programme partners?"
        description="Reach out to discuss how The Leap Pakistan can support your next event, cohort, activation, or leadership journey."
      />
    </main>
  );
}
