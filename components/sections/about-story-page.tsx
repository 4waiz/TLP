import { PageHero } from "@/components/sections/page-hero";

type AboutStoryPageProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
  children?: React.ReactNode;
};

export function AboutStoryPage({
  title,
  description,
  image,
  paragraphs,
  children,
}: AboutStoryPageProps) {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={title}
        description={description}
        image={image}
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "About", href: "/about" },
          { title },
        ]}
      />

      <section className="section-space">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-slate-600">
            {paragraphs.map((paragraph) => (
              <div key={paragraph} className="surface-card p-8">
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {children}
    </main>
  );
}
