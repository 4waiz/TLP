import { LegalPage } from "@/components/sections/legal-page";
import { legalContent } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: legalContent.cookie.title,
  description: legalContent.cookie.intro,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return <LegalPage {...legalContent.cookie} />;
}
