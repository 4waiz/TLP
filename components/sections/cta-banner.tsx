import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaBanner({
  title,
  description,
  primaryLabel = "Talk to our team",
  primaryHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-space">
      <div className="container">
        <div className="luxury-panel overflow-hidden bg-brand-navy text-white">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div className="min-w-0">
              <p className="eyebrow border-white/15 bg-white/10 text-white/85">
                Let&apos;s build the next step
              </p>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl leading-tight text-balance md:text-5xl">
                {title}
              </h2>
            </div>
            <div className="min-w-0">
              <p className="text-base leading-8 text-white/75 md:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg">
                  <Link href={primaryHref}>{primaryLabel}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
