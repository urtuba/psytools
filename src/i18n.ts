import type { LocalizedText } from "./types.ts";

/**
 * Resolves a `LocalizedText` to a string for the given locale.
 *
 * Resolution order: exact locale -> base language of the locale
 * (`"de-AT"` -> `"de"`) -> `fallbackLocale` -> first available entry.
 */
export function localize(
  text: LocalizedText,
  locale: string,
  fallbackLocale?: string,
): string {
  const exact = text[locale];
  if (exact !== undefined) return exact;

  const base = locale.split("-")[0];
  if (base !== undefined && base !== locale && text[base] !== undefined) {
    return text[base];
  }

  if (fallbackLocale !== undefined && text[fallbackLocale] !== undefined) {
    return text[fallbackLocale];
  }

  const first = Object.values(text)[0];
  return first ?? "";
}

/** Collects the union of locales present in a set of localized texts. */
export function collectLocales(
  texts: Array<LocalizedText | undefined>,
): string[] {
  const locales = new Set<string>();
  for (const text of texts) {
    if (!text) continue;
    for (const locale of Object.keys(text)) locales.add(locale);
  }
  return [...locales].sort();
}
