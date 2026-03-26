import { LegalPage } from "@/components/sections/legal-page";
import { legalContent } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: legalContent.privacy.title,
  description: legalContent.privacy.intro,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage {...legalContent.privacy} />;
}
