import { LegalPage } from "@/components/sections/legal-page";
import { legalContent } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: legalContent.terms.title,
  description: legalContent.terms.intro,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return <LegalPage {...legalContent.terms} />;
}
