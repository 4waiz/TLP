import Image from "next/image";

import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { founder } from "@/data/people";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "The Founder",
  description: founder.bio,
  path: "/about/founder",
  image: founder.image.src,
});

export default function FounderPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="The Founder"
        description={founder.extended}
        image={founder.image}
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "About", href: "/about" },
          { title: "The Founder" },
        ]}
      />

      <section className="section-space">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card overflow-hidden">
            <div className="relative h-[520px]">
              <Image
                src={founder.image.src}
                alt={founder.image.alt}
                fill
                className="object-cover"
                style={{ objectPosition: founder.image.position ?? "center" }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow={founder.role}
              title={founder.name}
              description="Empowering young Pakistanis to discover, explore, and fall in love with their homeland."
            />
            <div className="surface-card p-8 text-base leading-8 text-slate-600">
              <p>{founder.bio}</p>
              <p className="mt-5">{founder.extended}</p>
              <p className="mt-5">
                Today, with over 80 satisfied deals completed across Pakistan,
                The Leap Pakistan stands as a testament to what happens when
                experience meets purpose. Under Aseer&apos;s leadership, the
                company continues to redefine what local travel looks like —
                making it smoother, more memorable, and more accessible for
                every young Pakistani ready to take that leap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
