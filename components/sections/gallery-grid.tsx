"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
};

export function GalleryGrid({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-5 py-3 text-sm font-semibold transition-colors",
              activeCategory === category
                ? "bg-brand-navy text-white"
                : "bg-white text-slate-600 hover:bg-brand-navy/5 hover:text-brand-navy",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-white/80 bg-white text-left shadow-soft"
            onClick={() => setActiveItem(item)}
          >
            <div className="relative min-h-[260px]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={800}
                height={900}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/15 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  {item.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-brand-charcoal/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-charcoal"
              aria-label="Close gallery preview"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex h-full items-center justify-center">
              <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem]">
                <Image
                  src={activeItem.image.src}
                  alt={activeItem.image.alt}
                  width={1600}
                  height={1200}
                  className="max-h-[90vh] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                    {activeItem.category}
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-white">
                    {activeItem.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
