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
    tr: "Yaygın Anksiyete Bozukluğu Ölçeği (GAD-7)",
    de: "Generalisierte Angststörung Skala (GAD-7)",
  },
  description: {
    en: "A 7-item self-report questionnaire for screening and measuring the severity of generalized anxiety.",
    tr: "Yaygın anksiyeteyi taramak ve şiddetini ölçmek için kullanılan 7 maddelik bir öz bildirim ölçeği.",
    de: "Ein Selbstbeurteilungsfragebogen mit 7 Items zum Screening und zur Schweregradmessung generalisierter Angst.",
  },
  instructions: twoWeekInstructions,
  defaultLocale: "en",
  options: twoWeekFrequencyOptions,
  questions: [
    {
      id: "gad7-1",
      text: {
        en: "Feeling nervous, anxious, or on edge",
        tr: "Sinirli, kaygılı ya da çok gergin hissetme",
        de: "Nervosität, Ängstlichkeit oder Anspannung",
      },
    },
    {
      id: "gad7-2",
      text: {
        en: "Not being able to stop or control worrying",
        tr: "Endişelenmeyi durduramama ya da kontrol edememe",
        de: "Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren",
      },
    },
    {
      id: "gad7-3",
      text: {
        en: "Worrying too much about different things",
        tr: "Farklı konular hakkında çok fazla endişelenme",
        de: "Übermäßige Sorgen bezüglich verschiedener Angelegenheiten",
      },
    },
    {
      id: "gad7-4",
      text: {
        en: "Trouble relaxing",
        tr: "Gevşeyip rahatlamada güçlük",
        de: "Schwierigkeiten, sich zu entspannen",
      },
    },
    {
      id: "gad7-5",
      text: {
        en: "Being so restless that it is hard to sit still",
        tr: "Yerinde duramayacak kadar huzursuz olma",
        de: "Rastlosigkeit, sodass das Stillsitzen schwerfällt",
      },
    },
    {
      id: "gad7-6",
      text: {
        en: "Becoming easily annoyed or irritable",
        tr: "Çabuk kızma ya da kolayca sinirlenir olma",
        de: "Schnelle Verärgerung oder Gereiztheit",
      },
    },
    {
      id: "gad7-7",
      text: {
        en: "Feeling afraid, as if something awful might happen",
        tr: "Sanki çok kötü bir şey olacakmış gibi korkuya kapılma",
        de: "Angstgefühl, als könnte etwas Schlimmes passieren",
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
        label: { en: "Minimal anxiety", tr: "Minimal anksiyete", de: "Minimale Angst" },
      },
      {
        id: "mild",
        min: 5,
        max: 9,
        label: { en: "Mild anxiety", tr: "Hafif anksiyete", de: "Leichte Angst" },
      },
      {
        id: "moderate",
        min: 10,
        max: 14,
        label: { en: "Moderate anxiety", tr: "Orta düzeyde anksiyete", de: "Mittelgradige Angst" },
      },
      {
        id: "severe",
        min: 15,
        max: 21,
        label: { en: "Severe anxiety", tr: "Şiddetli anksiyete", de: "Schwere Angst" },
      },
    ],
  },
  meta: {
    reference:
      "Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Archives of Internal Medicine, 166(10), 1092-1097.",
    license: "Free — no permission required to reproduce, translate, display or distribute (Pfizer educational grant)",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. tr/de: AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
  },
};
