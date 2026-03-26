import { Reveal } from "@/components/motion/reveal";
import { AlumniCard } from "@/components/sections/content-cards";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/config/site-media";
import { alumniStories } from "@/data/alumni";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Alumni",
  description:
    "Read alumni stories and participant reflections from The Leap Pakistan across youth and corporate leadership experiences.",
  path: "/alumni",
  image: media.alumniHero.src,
});

export default function AlumniPage() {
  return (
    <main>
      <PageHero
        eyebrow="Alumni"
        title="The people who continue the story after the programme ends."
        description="Our alumni network reflects the long-tail value of thoughtful experiences: stronger confidence, clearer direction, and ongoing connection."
        image={media.alumniHero}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Alumni" }]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Featured stories"
            title="Photo-led stories with insight, not just applause."
            description="These alumni reflections show how experiences can stay with people well after the final session, helping them lead with more clarity and confidence."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {alumniStories.map((story, index) => (
              <Reveal key={story.name} delay={index * 0.08}>
                <AlumniCard {...story} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            "Photo-ready storytelling for future alumni spotlights",
            "Cohort-specific follow-up and milestone features",
            "Ongoing community touchpoints to sustain connection",
          ].map((item) => (
            <div key={item} className="surface-card p-6 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Want to design an experience people still talk about months later?"
        description="That is the standard we aim for. Let&apos;s shape something memorable, relevant, and worth carrying forward."
      />
    </main>
  );
}
