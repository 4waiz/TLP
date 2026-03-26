type Faq = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="surface-card group p-6 open:bg-brand-navy open:text-white"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 group-open:text-white/75">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
