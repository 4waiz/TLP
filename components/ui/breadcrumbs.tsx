import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Crumb = {
  title: string;
  href?: string;
};

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className={cn("flex flex-wrap items-center gap-2 text-sm text-slate-500", className)}>
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
            {item.href ? (
              <Link className="transition-colors hover:text-white" href={item.href}>
                {item.title}
              </Link>
            ) : (
              <span className="font-semibold">{item.title}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
