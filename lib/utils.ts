import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://theleappakistan.com";

  return new URL(path, base).toString();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-PK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
