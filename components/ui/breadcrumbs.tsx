import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
  title: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
            {item.href ? (
              <Link className="transition-colors hover:text-brand-navy" href={item.href}>
                {item.title}
              </Link>
            ) : (
              <span className="text-brand-navy">{item.title}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
