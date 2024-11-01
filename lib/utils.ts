import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function generateMetadata(title: string, description: string) {
  return {
    title: `${title} - Regions of Spain`,
    description,
    openGraph: {
      title: `${title} - Regions of Spain`,
      description,
      type: "website",
    },
  };
}