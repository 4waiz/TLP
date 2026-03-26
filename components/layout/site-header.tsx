"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const handleNavigate = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div
        className={cn(
          "mx-auto max-w-[1440px] rounded-[1.75rem] border transition-all duration-300",
          scrolled
            ? "border-brand-navy/10 bg-white/85 shadow-soft backdrop-blur-xl"
            : "border-white/60 bg-white/70 backdrop-blur-lg",
        )}
      >
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={handleNavigate}
            className="flex items-center gap-3 rounded-full pr-4 transition-opacity hover:opacity-90"
            aria-label={`${siteConfig.name} home`}
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
              <Image
                src={siteConfig.logoPath}
                alt={`${siteConfig.name} logo`}
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                The Leap Pakistan
              </p>
              <p className="text-xs text-slate-500">Subsidiary of The Aseer Group</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {siteConfig.nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-3 text-sm font-semibold transition-colors",
                      pathname.startsWith("/about")
                        ? "bg-brand-navy text-white"
                        : "text-slate-700 hover:bg-brand-navy/5 hover:text-brand-navy",
                    )}
                    type="button"
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {aboutOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-3 w-72 rounded-[1.5rem] border border-brand-navy/10 bg-white p-3 shadow-luxe"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={handleNavigate}
                            className={cn(
                              "block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-brand-navy/5 hover:text-brand-navy",
                              pathname === child.href
                                ? "bg-brand-navy/5 font-semibold text-brand-navy"
                                : "text-slate-600",
                            )}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigate}
                  className={cn(
                    "rounded-full px-4 py-3 text-sm font-semibold transition-colors",
                    pathname === item.href
                      ? "bg-brand-navy text-white"
                      : "text-slate-700 hover:bg-brand-navy/5 hover:text-brand-navy",
                  )}
                >
                  {item.title}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="secondary">
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>

          <button
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy lg:hidden"
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-brand-navy/10 lg:hidden"
            >
              <div className="container space-y-2 py-4">
                {siteConfig.nav.map((item) =>
                  item.children ? (
                    <div key={item.href} className="rounded-[1.5rem] border border-brand-navy/10 bg-white/70 p-2">
                      <button
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-brand-navy"
                        type="button"
                        onClick={() => setAboutOpen((value) => !value)}
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            aboutOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {aboutOpen ? (
                        <div className="space-y-1 px-2 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={handleNavigate}
                              className="block rounded-2xl px-4 py-3 text-sm text-slate-600 hover:bg-brand-navy/5 hover:text-brand-navy"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavigate}
                      className={cn(
                        "block rounded-[1.25rem] px-4 py-3 text-sm font-semibold",
                        pathname === item.href
                          ? "bg-brand-navy text-white"
                          : "bg-white/70 text-slate-700",
                      )}
                    >
                      {item.title}
                    </Link>
                  ),
                )}
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/contact">Start a conversation</Link>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
