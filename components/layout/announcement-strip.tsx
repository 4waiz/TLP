export function AnnouncementStrip() {
  return (
    <div
      className="border-b border-brand-navy/10 bg-brand-navy text-white"
      style={{
        backgroundImage: "linear-gradient(90deg, #0C447C 0%, #0e4f8e 50%, #0C447C 100%)",
      }}
    >
      <div className="container flex min-h-11 items-center justify-center gap-3 text-center text-xs font-semibold tracking-[0.16em] text-white/90 sm:text-sm">
        <span className="hidden h-1.5 w-1.5 rounded-full bg-brand-gold sm:inline-block" />
        Leadership experiences for youth, education, and organisations across
        Pakistan.
        <span className="hidden h-1.5 w-1.5 rounded-full bg-brand-emerald sm:inline-block" />
      </div>
    </div>
  );
}
