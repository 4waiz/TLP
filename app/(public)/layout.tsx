import { AnnouncementStrip } from "@/components/layout/announcement-strip";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { ScrollTop } from "@/components/layout/scroll-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AnnouncementStrip />
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileCTA />
      <ScrollTop />
    </>
  );
}
