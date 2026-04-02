import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <div
          className="relative overflow-hidden rounded-[2rem] bg-brand-navy text-white shadow-luxe"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 100%, rgba(29,158,117,0.3), transparent 45%), radial-gradient(circle at 100% 0%, rgba(212,144,10,0.25), transparent 45%), radial-gradient(circle at 50% 50%, rgba(121,31,31,0.1), transparent 50%)",
          }}
        >
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brand-emerald/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
                Let&apos;s build the next step
              </p>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
                {title}
              </h2>
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <p className="text-base leading-8 text-white/80 md:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg" className="shadow-brand-gold">
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom color bar */}
          <div className="h-1.5" style={{ background: "linear-gradient(90deg, #D4900A 0%, #1D9E75 35%, #0C447C 65%, #791F1F 100%)" }} />
        </div>
      </div>
    </section>
  );
}
