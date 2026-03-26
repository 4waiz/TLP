import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="luxury-panel max-w-2xl p-10 text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-6 font-display text-5xl text-brand-navy">
          The next step is somewhere else.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you tried to reach is unavailable or has moved within the
          current site structure.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return to the home page</Link>
        </Button>
      </div>
    </main>
  );
}
