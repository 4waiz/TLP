export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="container section-space">
        <div className="mb-8 h-5 w-28 animate-pulse rounded-full bg-brand-navy/10" />
        <div className="mb-4 h-16 max-w-3xl animate-pulse rounded-3xl bg-brand-navy/10" />
        <div className="mb-12 h-8 max-w-2xl animate-pulse rounded-2xl bg-brand-navy/10" />
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-72 animate-pulse rounded-[2rem] bg-white/70 shadow-soft"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
