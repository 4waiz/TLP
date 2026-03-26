import { AboutStoryPage } from "@/components/sections/about-story-page";
import { aboutPages } from "@/data/about";
import { buildMetadata } from "@/lib/metadata";

const content = aboutPages.story;

export const metadata = buildMetadata({
  title: content.title,
  description: content.intro,
  path: "/about/story",
  image: content.image.src,
});

export default function StoryPage() {
  return (
    <AboutStoryPage
      title={content.title}
      description={content.intro}
      image={content.image}
      paragraphs={content.paragraphs}
    />
  );
}
