import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { siteConfig } from "@/config/site";

const socialLinks = [
  { href: siteConfig.social.facebook, icon: Facebook, label: "Facebook" },
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.youtube, icon: Youtube, label: "YouTube" },
  { href: siteConfig.social.x, icon: Twitter, label: "X" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-brand-navy/10 bg-brand-charcoal text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white">
                <Image
                  src={siteConfig.logoPath}
                  alt={`${siteConfig.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  The Leap Pakistan
                </p>
                <p className="text-sm text-white/65">Subsidiary of The Aseer Group</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
              A premium platform for youth leadership, education partnerships,
              experiential learning, and people development designed for modern
              Pakistan.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/72">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-gold" />
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-brand-gold hover:text-brand-charcoal"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterList title="Quick Links" links={siteConfig.footerLinks.company} />
          <FooterList title="About" links={siteConfig.footerLinks.about} />
          <FooterList title="Legal" links={siteConfig.footerLinks.legal} />
        </div>

        <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
              Lead with intention
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/72">
              For partnerships, programmes, or event collaboration, reach out
              and shape the next meaningful experience with The Leap Pakistan.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:-translate-y-0.5"
          >
            Connect with us
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://awaizahmed.com"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold transition-colors hover:text-white"
            >
              Awaiz Ahmed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
        {title}
      </h3>
      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-sm text-white/65 transition-colors hover:text-brand-gold"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
