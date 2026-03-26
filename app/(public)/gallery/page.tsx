import { CtaBanner } from "@/components/sections/cta-banner";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/config/site-media";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Browse The Leap Pakistan gallery across youth programmes, summits, workshops, mentorship spaces, and alumni moments.",
  path: "/gallery",
  image: media.galleryHero.src,
});

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="A visual archive of movement, mentorship, and meaningful moments."
        description="Browse selected imagery from workshops, events, leadership spaces, and community experiences across the Leap Pakistan platform."
        image={media.galleryHero}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Gallery" }]}
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Selected moments"
            title="A living gallery shaped around people, participation, and presence."
            description="These images are placeholders curated to reflect the intended visual direction of the brand and can be swapped later through the centralized media config."
          />
          <div className="mt-12">
            <GalleryGrid items={galleryItems} categories={galleryCategories} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a programme experience that looks as strong as it feels?"
        description="Talk to us about creating a workshop, summit, or retreat that carries the same level of visual rhythm and participant energy."
      />
    </main>
  );
}
