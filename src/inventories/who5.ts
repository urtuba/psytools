import type { AssessmentDefinition } from "../types.ts";

/**
 * WHO-5 — World Health Organization Well-Being Index.
 *
 * 5 positively worded items, 0–5 frequency scale over the past two weeks.
 * The raw sum (0–25) is multiplied by 4 and reported as a 0–100 percentage;
 * higher scores mean better well-being. A score of 50 or below indicates
 * reduced well-being and warrants screening for depression; 28 or below
 * indicates likely depression (Topp et al., 2015). Free to use.
 */
export const who5: AssessmentDefinition = {
  id: "who5",
  version: "1.0.0",
  categories: ["well-being"],
  title: {
    en: "WHO-5 Well-Being Index",
  },
  description: {
    en: "A 5-item self-report scale measuring subjective psychological well-being over the past two weeks. Higher scores mean better well-being.",
  },
  instructions: {
    en: "Please indicate for each of the five statements which is closest to how you have been feeling over the last two weeks.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: { en: "At no time" },
    },
    {
      value: 1,
      label: { en: "Some of the time" },
    },
    {
      value: 2,
      label: {
        en: "Less than half of the time",
      },
    },
    {
      value: 3,
      label: {
        en: "More than half of the time",
      },
    },
    {
      value: 4,
      label: { en: "Most of the time" },
    },
    {
      value: 5,
      label: { en: "All of the time" },
    },
  ],
  questions: [
    {
      id: "who5-1",
      text: {
        en: "I have felt cheerful and in good spirits",
      },
    },
    {
      id: "who5-2",
      text: {
        en: "I have felt calm and relaxed",
      },
    },
    {
      id: "who5-3",
      text: {
        en: "I have felt active and vigorous",
      },
    },
    {
      id: "who5-4",
      text: {
        en: "I woke up feeling fresh and rested",
      },
    },
    {
      id: "who5-5",
      text: {
        en: "My daily life has been filled with things that interest me",
      },
    },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "require-complete" },
    multiplier: 4,
    bands: [
      {
        id: "low",
        min: 0,
        max: 28,
        label: {
          en: "Low well-being — indicates likely depression, assessment recommended",
        },
      },
      {
        id: "reduced",
        min: 29,
        max: 50,
        label: {
          en: "Reduced well-being — screening for depression recommended",
        },
      },
      {
        id: "good",
        min: 51,
        max: 100,
        label: {
          en: "Good well-being",
        },
      },
    ],
  },
  meta: {
    reference:
      "Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). The WHO-5 Well-Being Index: a systematic review of the literature. Psychotherapy and Psychosomatics, 84(3), 167-176.",
    license: "Free — may be used without permission (WHO Regional Office for Europe / Psychiatric Research Unit, Hillerød)",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
    note: "Positively worded: higher scores mean better well-being.",
  },
};
