import { Reveal } from "@/components/motion/reveal";
import { AboutStoryPage } from "@/components/sections/about-story-page";
import { PersonCard } from "@/components/sections/content-cards";
import { patrons } from "@/data/people";
import { aboutPages } from "@/data/about";
import { buildMetadata } from "@/lib/metadata";

const content = aboutPages.patrons;

export const metadata = buildMetadata({
  title: content.title,
  description: content.intro,
  path: "/about/patrons",
  image: content.image.src,
});

export default function PatronsPage() {
  return (
    <AboutStoryPage
      title={content.title}
      description={content.intro}
      image={content.image}
      paragraphs={content.paragraphs}
    >
      <section className="pb-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {patrons.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <PersonCard {...person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </AboutStoryPage>
  );
}
