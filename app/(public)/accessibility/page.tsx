import { LegalPage } from "@/components/sections/legal-page";
import { legalContent } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: legalContent.accessibility.title,
  description: legalContent.accessibility.intro,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return <LegalPage {...legalContent.accessibility} />;
}
