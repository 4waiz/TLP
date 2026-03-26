import { ArrowRight } from "lucide-react";

type ImpactItem = {
  value: string;
  label: string;
  description: string;
};

export function ImpactStrip({ items }: { items: ImpactItem[] }) {
  return (
    <section className="section-space">
      <div className="container">
        <div className="luxury-panel overflow-hidden p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Delivery snapshot</p>
              <h2 className="mt-5 font-display text-4xl text-brand-charcoal md:text-5xl">
                A model built for momentum, not noise.
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-brand-navy/65">
              Designed for scale and relevance
              <ArrowRight className="h-4 w-4" />
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] bg-brand-chalk p-6">
                <p className="font-display text-5xl text-brand-navy">{item.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
