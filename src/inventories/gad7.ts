import type { AssessmentDefinition } from "../types.ts";
import { twoWeekFrequencyOptions, twoWeekInstructions } from "./common.ts";

/**
 * GAD-7 — Generalized Anxiety Disorder-7 (anxiety screening).
 *
 * 7 items, 0–3 frequency scale, total score 0–21. The GAD-7 is in the
 * public domain (Spitzer, Kroenke, Williams & Löwe, 2006; developed with a
 * grant from Pfizer Inc.). Translations follow published validated
 * versions — verify against the official wording before clinical use.
 */
export const gad7: AssessmentDefinition = {
  id: "gad7",
  version: "1.0.0",
  title: {
    en: "Generalized Anxiety Disorder Scale (GAD-7)",
  },
  description: {
    en: "A 7-item self-report questionnaire for screening and measuring the severity of generalized anxiety.",
  },
  instructions: twoWeekInstructions,
  defaultLocale: "en",
  options: twoWeekFrequencyOptions,
  questions: [
    {
      id: "gad7-1",
      text: {
        en: "Feeling nervous, anxious, or on edge",
      },
    },
    {
      id: "gad7-2",
      text: {
        en: "Not being able to stop or control worrying",
      },
    },
    {
      id: "gad7-3",
      text: {
        en: "Worrying too much about different things",
      },
    },
    {
      id: "gad7-4",
      text: {
        en: "Trouble relaxing",
      },
    },
    {
      id: "gad7-5",
      text: {
        en: "Being so restless that it is hard to sit still",
      },
    },
    {
      id: "gad7-6",
      text: {
        en: "Becoming easily annoyed or irritable",
      },
    },
    {
      id: "gad7-7",
      text: {
        en: "Feeling afraid, as if something awful might happen",
      },
    },
  ],
  scoring: {
    kind: "sum",
    bands: [
      {
        id: "minimal",
        min: 0,
        max: 4,
        label: { en: "Minimal anxiety" },
      },
      {
        id: "mild",
        min: 5,
        max: 9,
        label: { en: "Mild anxiety" },
      },
      {
        id: "moderate",
        min: 10,
        max: 14,
        label: { en: "Moderate anxiety" },
      },
      {
        id: "severe",
        min: 15,
        max: 21,
        label: { en: "Severe anxiety" },
      },
    ],
  },
  meta: {
    reference:
      "Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Archives of Internal Medicine, 166(10), 1092-1097.",
    license: "Free — no permission required to reproduce, translate, display or distribute (Pfizer educational grant)",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
  },
};
