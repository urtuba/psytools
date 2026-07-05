import type {
  AssessmentDefinition,
  AssessmentOption,
  InventoryLocalePack,
  LocalizedText,
  ScoreBand,
  ScoreFlag,
  ScoringDefinition,
} from "./types.ts";
import { PsytoolsError } from "./errors.ts";

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
 * Merges a locale pack into a definition, returning a new definition that
 * additionally carries the pack's language in every localized text. The
 * original definition and the pack are not modified.
 *
 * Packs may be partial (untranslated entries keep their existing locales),
 * but entries referencing unknown question/band/flag/subscale ids or
 * mismatched option counts throw `invalid_argument`.
 */
export function applyLocale(
  definition: AssessmentDefinition,
  pack: InventoryLocalePack,
): AssessmentDefinition {
  if (pack.id !== definition.id) {
    throw new PsytoolsError(
      "invalid_argument",
      `Locale pack "${pack.id}" (${pack.locale}) does not belong to assessment "${definition.id}"`,
    );
  }
  const set = (text: LocalizedText, value: string | undefined): LocalizedText =>
    value === undefined ? text : { ...text, [pack.locale]: value };
  const setOptions = (
    options: AssessmentOption[],
    labels: string[] | undefined,
    where: string,
  ): AssessmentOption[] => {
    if (!labels) return options;
    if (labels.length !== options.length) {
      throw new PsytoolsError(
        "invalid_argument",
        `Locale pack "${pack.id}/${pack.locale}": ${where} has ${labels.length} labels for ${options.length} options`,
      );
    }
    return options.map((option, i) => ({ ...option, label: set(option.label, labels[i]) }));
  };
  const setBands = (
    bands: ScoreBand[] | undefined,
    packBands: Record<string, string> | undefined,
  ): ScoreBand[] | undefined =>
    bands?.map((band) => ({ ...band, label: set(band.label, packBands?.[band.id]) }));
  const setFlags = (
    flags: ScoreFlag[] | undefined,
    packFlags: Record<string, string> | undefined,
  ): ScoreFlag[] | undefined =>
    flags?.map((flag) => ({ ...flag, label: set(flag.label, packFlags?.[flag.id]) }));

  for (const questionId of Object.keys(pack.questions)) {
    if (!definition.questions.some((q) => q.id === questionId)) {
      throw new PsytoolsError(
        "invalid_argument",
        `Locale pack "${pack.id}/${pack.locale}" references unknown question "${questionId}"`,
      );
    }
  }

  let scoring: ScoringDefinition | undefined;
  if (definition.scoring) {
    const s = definition.scoring;
    if (s.kind === "subscales") {
      scoring = {
        ...s,
        subscales: s.subscales.map((subscale) => {
          const entry = pack.subscales?.[subscale.id];
          return {
            ...subscale,
            label: set(subscale.label, entry?.label),
            ...(subscale.bands ? { bands: setBands(subscale.bands, entry?.bands) } : {}),
          };
        }),
        ...(s.flags ? { flags: setFlags(s.flags, pack.flags) } : {}),
      };
    } else {
      scoring = {
        ...s,
        ...(s.bands ? { bands: setBands(s.bands, pack.bands) } : {}),
        ...(s.flags ? { flags: setFlags(s.flags, pack.flags) } : {}),
      };
    }
  }

  return {
    ...definition,
    title: set(definition.title, pack.title),
    ...(definition.description ? { description: set(definition.description, pack.description) } : {}),
    ...(definition.instructions ? { instructions: set(definition.instructions, pack.instructions) } : {}),
    options: setOptions(definition.options, pack.options, "options"),
    questions: definition.questions.map((question) => {
      const entry = pack.questions[question.id];
      if (!entry) return question;
      return {
        ...question,
        text: set(question.text, entry.text),
        ...(question.options
          ? { options: setOptions(question.options, entry.options, `question "${question.id}"`) }
          : {}),
      };
    }),
    ...(scoring ? { scoring } : {}),
  };
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
