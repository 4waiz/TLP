import Link from "next/link";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
      <Link
        href="/contact"
        className="flex h-14 items-center justify-center rounded-full bg-brand-gold text-sm font-semibold text-brand-charcoal shadow-luxe"
      >
        Book a discovery call
      </Link>
    </div>
  );
}
