import { AboutStoryPage } from "@/components/sections/about-story-page";
import { aboutPages } from "@/data/about";
import { buildMetadata } from "@/lib/metadata";

const content = aboutPages.company;

export const metadata = buildMetadata({
  title: content.title,
  description: content.intro,
  path: "/about/company",
  image: content.image.src,
});

export default function CompanyPage() {
  return (
    <AboutStoryPage
      title={content.title}
      description={content.intro}
      image={content.image}
      paragraphs={content.paragraphs}
    />
  );
}
