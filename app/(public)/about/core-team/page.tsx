import { Reveal } from "@/components/motion/reveal";
import { PersonCard } from "@/components/sections/content-cards";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/config/site-media";
import { coreTeam } from "@/data/people";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Core Team",
  description:
    "Meet the core team behind The Leap Pakistan across programmes, partnerships, facilitation, and brand experience.",
  path: "/about/core-team",
  image: media.peopleHero.src,
});

export default function CoreTeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Core Team"
        description="The team behind The Leap Pakistan is intentionally cross-disciplinary, combining learning design, relationships, facilitation, and brand storytelling."
        image={media.peopleHero}
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "About", href: "/about" },
          { title: "Core Team" },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Team structure"
            title="Programmes, partnerships, facilitation, and brand under one roof."
            description="That combination allows the platform to create experiences that are both operationally strong and emotionally resonant."
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
    </main>
  );
}
