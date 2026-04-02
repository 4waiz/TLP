import { ChevronDown } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const colors = ["border-l-brand-gold", "border-l-brand-emerald", "border-l-brand-burgundy", "border-l-brand-navy"];
        return (
          <details
            key={item.question}
            className={`group surface-card border-l-4 ${colors[index % 4]} p-6 transition-all duration-300 open:bg-brand-navy open:text-white open:shadow-brand-navy`}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 group-open:text-white/80">
              {item.answer}
            </p>
          </details>
        );
      })}
    </div>
  );
}
