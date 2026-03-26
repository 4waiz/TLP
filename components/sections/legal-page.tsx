import { PageHero } from "@/components/sections/page-hero";
import { media } from "@/config/site-media";

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="pb-8">
      <PageHero
        eyebrow="Legal"
        title={title}
        description={`${intro} Last updated: ${updated}.`}
        image={media.brandDetail}
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title },
        ]}
      />
      <section className="section-space">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            {sections.map((section) => (
              <article key={section.heading} className="surface-card p-8">
                <h2 className="font-display text-3xl text-brand-charcoal">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
