import type { AssessmentDefinition } from "../types.ts";
import { kesslerFrequencyLabels } from "./common.ts";

/**
 * K6 — Kessler Psychological Distress Scale, 6 items (Kessler et al.,
 * 2002).
 *
 * Non-specific psychological distress over the past 30 days. Items are
 * scored 0–4 per the U.S. convention, total 0–24; 13 or above indicates
 * serious psychological distress (Kessler et al., 2003), 5–12 moderate
 * distress (Prochaska et al., 2012). The K6 is in the public domain and
 * free for clinical and research use.
 */
export const k6: AssessmentDefinition = {
  id: "k6",
  version: "1.0.0",
  categories: ["distress"],
  title: {
    en: "Kessler Psychological Distress Scale (K6)",
  },
  description: {
    en: "A 6-item screening measure of non-specific psychological distress over the past 30 days.",
  },
  instructions: {
    en: "The following questions ask about how you have been feeling during the past 30 days.",
  },
  defaultLocale: "en",
  options: kesslerFrequencyLabels.map((label, i) => ({ value: i, label: { en: label } })),
  questions: [
    { id: "k6-1", text: { en: "During the past 30 days, about how often did you feel nervous?" } },
    { id: "k6-2", text: { en: "During the past 30 days, about how often did you feel hopeless?" } },
    { id: "k6-3", text: { en: "During the past 30 days, about how often did you feel restless or fidgety?" } },
    { id: "k6-4", text: { en: "During the past 30 days, about how often did you feel so depressed that nothing could cheer you up?" } },
    { id: "k6-5", text: { en: "During the past 30 days, about how often did you feel that everything was an effort?" } },
    { id: "k6-6", text: { en: "During the past 30 days, about how often did you feel worthless?" } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "require-complete" },
    bands: [
      { id: "low", min: 0, max: 4, label: { en: "Low psychological distress" } },
      { id: "moderate", min: 5, max: 12, label: { en: "Moderate psychological distress" } },
      { id: "serious", min: 13, max: 24, label: { en: "Serious psychological distress" } },
    ],
  },
  meta: {
    reference:
      "Kessler, R. C., Andrews, G., Colpe, L. J., Hiripi, E., Mroczek, D. K., Normand, S.-L. T., Walters, E. E., & Zaslavsky, A. M. (2002). Short screening scales to monitor population prevalences and trends in non-specific psychological distress. Psychological Medicine, 32(6), 959-976.",
    license: "Free — the K6 is in the public domain and free for clinical and research use",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original instrument (Kessler et al., 2002). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-sonnet-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 30 days",
    scoringNote:
      "Uses the U.S. 0-4 coding (total 0-24). The >=13 serious-distress cutoff follows Kessler et al. (2003); the 5-12 moderate band follows Prochaska et al. (2012).",
  },
};
