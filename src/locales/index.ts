import type { InventoryLocalePack } from "../types.ts";

export type LocalePackLoader = () => Promise<{ default: InventoryLocalePack }>;

/**
 * Lazy loaders for every non-English locale pack, keyed by inventory id
 * then locale. Packs are only fetched (and only enter memory / a bundle)
 * when requested.
 */
export const localePacks: Readonly<Record<string, Readonly<Record<string, LocalePackLoader>>>> = {
  "phq9": {
    tr: () => import("./tr/phq9.ts"),
    de: () => import("./de/phq9.ts"),
    zh: () => import("./zh/phq9.ts"),
    es: () => import("./es/phq9.ts"),
  },
  "gad7": {
    tr: () => import("./tr/gad7.ts"),
    de: () => import("./de/gad7.ts"),
    zh: () => import("./zh/gad7.ts"),
    es: () => import("./es/gad7.ts"),
  },
  "dass21": {
    tr: () => import("./tr/dass21.ts"),
    de: () => import("./de/dass21.ts"),
    zh: () => import("./zh/dass21.ts"),
    es: () => import("./es/dass21.ts"),
  },
  "who5": {
    tr: () => import("./tr/who5.ts"),
    de: () => import("./de/who5.ts"),
    zh: () => import("./zh/who5.ts"),
    es: () => import("./es/who5.ts"),
  },
  "asrs6": {
    tr: () => import("./tr/asrs6.ts"),
    de: () => import("./de/asrs6.ts"),
    zh: () => import("./zh/asrs6.ts"),
    es: () => import("./es/asrs6.ts"),
  },
  "aq10": {
    tr: () => import("./tr/aq10.ts"),
    de: () => import("./de/aq10.ts"),
    zh: () => import("./zh/aq10.ts"),
    es: () => import("./es/aq10.ts"),
  },
  "audit": {
    tr: () => import("./tr/audit.ts"),
    de: () => import("./de/audit.ts"),
    zh: () => import("./zh/audit.ts"),
    es: () => import("./es/audit.ts"),
  },
  "mini-ipip": {
    tr: () => import("./tr/mini-ipip.ts"),
    de: () => import("./de/mini-ipip.ts"),
    zh: () => import("./zh/mini-ipip.ts"),
    es: () => import("./es/mini-ipip.ts"),
  },
  "cesd": {
    tr: () => import("./tr/cesd.ts"),
    de: () => import("./de/cesd.ts"),
    zh: () => import("./zh/cesd.ts"),
    es: () => import("./es/cesd.ts"),
  },
  // ecr-r and hsps ship en plus the published, validated Turkish
  // adaptations (nebisumer.com); other locales can follow once verified
  // sources are available.
  "ecr-r": {
    tr: () => import("./tr/ecr-r.ts"),
  },
  "erq": {
    tr: () => import("./tr/erq.ts"),
    de: () => import("./de/erq.ts"),
    zh: () => import("./zh/erq.ts"),
    es: () => import("./es/erq.ts"),
  },
  "hsps": {
    tr: () => import("./tr/hsps.ts"),
  },
};

/** Locales available for an inventory (its base locale plus lazy packs). */
export function availableLocales(inventoryId: string): string[] {
  return ["en", ...Object.keys(localePacks[inventoryId] ?? {})].sort();
}
