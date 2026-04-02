import { ArrowRight } from "lucide-react";

type ImpactItem = {
  value: string;
  label: string;
  description: string;
};

const cardColors = [
  { bg: "bg-brand-navy", text: "text-white", accent: "text-brand-gold", bar: "bg-brand-gold" },
  { bg: "bg-brand-gold/12", text: "text-brand-charcoal", accent: "text-brand-navy", bar: "bg-brand-navy" },
  { bg: "bg-brand-emerald/12", text: "text-brand-charcoal", accent: "text-brand-emerald", bar: "bg-brand-emerald" },
  { bg: "bg-brand-burgundy/10", text: "text-brand-charcoal", accent: "text-brand-burgundy", bar: "bg-brand-burgundy" },
];

export function ImpactStrip({ items }: { items: ImpactItem[] }) {
  return (
    <section className="section-space">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-luxe backdrop-blur md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Delivery snapshot</p>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-charcoal md:text-5xl">
                A model built for momentum, not noise.
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-brand-navy/65">
              Designed for scale and relevance
              <ArrowRight className="h-4 w-4" />
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {items.map((item, index) => {
              const style = cardColors[index % cardColors.length];
              return (
                <div
                  key={item.label}
                  className={`rounded-[1.5rem] ${style.bg} p-6 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`h-1.5 w-12 rounded-full ${style.bar} mb-4`} />
                  <p className={`font-display text-5xl font-extrabold ${style.accent}`}>
                    {item.value}
                  </p>
                  <p className={`mt-3 text-sm font-bold uppercase tracking-[0.2em] ${style.accent}`}>
                    {item.label}
                  </p>
                  <p className={`mt-3 text-sm leading-7 ${style.bg === "bg-brand-navy" ? "text-white/70" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
