import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqList } from "@/components/sections/faq-list";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { media } from "@/config/site-media";
import { contactFaqs } from "@/data/site-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact The Leap Pakistan for programme enquiries, event partnerships, youth leadership initiatives, and corporate development conversations.",
  path: "/contact",
  image: media.contact.src,
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="Start a meaningful conversation about your next programme or partnership."
        description="Tell us what you are building and who it is for. We will help shape the right format, timeline, and next step."
        image={media.contact}
        breadcrumbs={[{ title: "Home", href: "/" }, { title: "Contact" }]}
      />

      <section className="section-space">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="luxury-panel p-8 md:p-10">
            <SectionHeading
              eyebrow="Inquiry form"
              title="Tell us what you need."
              description="For schools, universities, companies, event partners, and community collaborators."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-card p-8">
              <p className="eyebrow">Direct contact</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  <span className="font-semibold text-brand-charcoal">Email:</span>{" "}
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </p>
                <p>
                  <span className="font-semibold text-brand-charcoal">Phone:</span>{" "}
                  <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                </p>
                <p>
                  <span className="font-semibold text-brand-charcoal">Location:</span>{" "}
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            <div className="surface-card p-8">
              <p className="eyebrow">Fast actions</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={siteConfig.contact.whatsapp}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-emerald px-6 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-3 text-sm font-semibold text-brand-navy"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call our team
                </a>
              </div>
            </div>

            <div className="surface-card p-8">
              <p className="eyebrow">Working with us</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                We support enquiries for public events, closed-group programmes,
                institutional partnerships, corporate development initiatives,
                retreats, activations, and advisory conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/70">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Frequently asked"
            title="A few useful answers before we connect."
            description="These are common questions from organisations and partners exploring how to work with The Leap Pakistan."
          />
          <FaqList items={contactFaqs} />
        </div>
      </section>

      <CtaBanner
        title="Need a faster route to the right conversation?"
        description="Use the inquiry form, email us directly, or reach out on WhatsApp for a quicker first exchange."
        primaryLabel="Send an inquiry"
        primaryHref="/contact"
        secondaryLabel="Browse events"
        secondaryHref="/events"
      />
    </main>
  );
}
