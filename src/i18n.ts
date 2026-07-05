import type {
  AssessmentDefinition,
  AssessmentOption,
  LocalizedText,
  ScoreBand,
  ScoreFlag,
  ScoringDefinition,
} from "./types.ts";

/**
 * Resolves a `LocalizedText` to a string for the given locale.
 *
 * Resolution order: exact locale -> base language of the locale
 * (`"de-AT"` -> `"de"`) -> `fallbackLocale` -> first available entry.
 */
export function localizeText(
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

/**
 * Returns a copy of a definition containing only the given locales in every
 * localized text (questions, options, bands, flags, subscales). The
 * definition's `defaultLocale` is always kept as the fallback.
 *
 * Use this at the server boundary to avoid shipping unused languages to a
 * client: `res.json(pickLocales(phq9, [userLocale]))`. The original
 * definition is not modified.
 */
export function pickLocales(
  definition: AssessmentDefinition,
  locales: string[],
): AssessmentDefinition {
  const keep = new Set([...locales, definition.defaultLocale]);
  const pick = (text: LocalizedText): LocalizedText => {
    const out: LocalizedText = {};
    for (const [locale, value] of Object.entries(text)) {
      if (keep.has(locale)) out[locale] = value;
    }
    return out;
  };
  const pickOptions = (options: AssessmentOption[]): AssessmentOption[] =>
    options.map((option) => ({ ...option, label: pick(option.label) }));
  const pickBands = (bands: ScoreBand[]): ScoreBand[] =>
    bands.map((band) => ({ ...band, label: pick(band.label) }));
  const pickFlags = (flags: ScoreFlag[]): ScoreFlag[] =>
    flags.map((flag) => ({ ...flag, label: pick(flag.label) }));

  let scoring: ScoringDefinition | undefined;
  if (definition.scoring) {
    const s = definition.scoring;
    if (s.kind === "subscales") {
      scoring = {
        ...s,
        subscales: s.subscales.map((subscale) => ({
          ...subscale,
          label: pick(subscale.label),
          ...(subscale.bands ? { bands: pickBands(subscale.bands) } : {}),
        })),
        ...(s.flags ? { flags: pickFlags(s.flags) } : {}),
      };
    } else {
      scoring = {
        ...s,
        ...(s.bands ? { bands: pickBands(s.bands) } : {}),
        ...(s.flags ? { flags: pickFlags(s.flags) } : {}),
      };
    }
  }

  return {
    ...definition,
    title: pick(definition.title),
    ...(definition.description ? { description: pick(definition.description) } : {}),
    ...(definition.instructions ? { instructions: pick(definition.instructions) } : {}),
    options: pickOptions(definition.options),
    questions: definition.questions.map((question) => ({
      ...question,
      text: pick(question.text),
      ...(question.options ? { options: pickOptions(question.options) } : {}),
    })),
    ...(scoring ? { scoring } : {}),
  };
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
