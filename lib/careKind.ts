import { careOptions } from "@/components/home/careOptions";

export type CareKind = "daily" | "medical";

/** Medical care is led by registered nurses or physiotherapists; it is colour-coded "clinic" blue. */
export function careKind(slug: string): CareKind {
  return careOptions.find((o) => o.slug === slug)?.group ?? "daily";
}
