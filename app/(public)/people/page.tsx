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
          <SectionHeading
            eyebrow="Founder"
            title={founder.name}
            description={`${founder.role}. ${founder.extended}`}
          />
          <div className="surface-card p-8 text-base leading-8 text-slate-600">
            <p>{founder.bio}</p>
            <p className="mt-5">{founder.extended}</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container">
          <SectionHeading
            eyebrow="Core team"
            title="Multidisciplinary leadership across programmes, partnerships, and story."
            description="Our team works across audience strategy, facilitation, partnership building, and experience design to ensure every engagement feels coherent and elevated."
          />
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
          <SectionHeading
            eyebrow="Our patrons"
            title="Trusted voices around the ecosystem."
            description="Patrons bring perspective, mentorship, and long-range credibility to the work, helping The Leap Pakistan stay ambitious and grounded at the same time."
          />
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
