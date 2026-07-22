import type { AssessmentDefinition } from "../types.ts";
import { kesslerFrequencyLabels } from "./common.ts";

/**
 * K10 — Kessler Psychological Distress Scale, 10 items (Kessler et al.,
 * 2002).
 *
 * Non-specific psychological distress over the past 30 days. Items are
 * scored 1–5 ("none of the time" to "all of the time"), total 10–50,
 * interpreted here in the widely used Australian severity groupings.
 * The K10 is in the public domain and free for clinical and research
 * use.
 */
export const k10: AssessmentDefinition = {
  id: "k10",
  version: "1.0.0",
  categories: ["distress"],
  title: {
    en: "Kessler Psychological Distress Scale (K10)",
  },
  description: {
    en: "A 10-item screening measure of non-specific psychological distress over the past 30 days.",
  },
  instructions: {
    en: "The following questions ask about how you have been feeling during the past 30 days.",
  },
  defaultLocale: "en",
  options: kesslerFrequencyLabels.map((label, i) => ({ value: i + 1, label: { en: label } })),
  questions: [
    { id: "k10-1", text: { en: "About how often did you feel tired out for no good reason?" } },
    { id: "k10-2", text: { en: "About how often did you feel nervous?" } },
    { id: "k10-3", text: { en: "About how often did you feel so nervous that nothing could calm you down?" } },
    { id: "k10-4", text: { en: "About how often did you feel hopeless?" } },
    { id: "k10-5", text: { en: "About how often did you feel restless or fidgety?" } },
    { id: "k10-6", text: { en: "About how often did you feel so restless you could not sit still?" } },
    { id: "k10-7", text: { en: "About how often did you feel depressed?" } },
    { id: "k10-8", text: { en: "About how often did you feel that everything was an effort?" } },
    { id: "k10-9", text: { en: "About how often did you feel so sad that nothing could cheer you up?" } },
    { id: "k10-10", text: { en: "About how often did you feel worthless?" } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "require-complete" },
    bands: [
      { id: "low", min: 10, max: 19, label: { en: "Likely to be well" } },
      { id: "mild", min: 20, max: 24, label: { en: "Mild psychological distress" } },
      { id: "moderate", min: 25, max: 29, label: { en: "Moderate psychological distress" } },
      { id: "severe", min: 30, max: 50, label: { en: "Severe psychological distress" } },
    ],
  },
  meta: {
    reference:
      "Kessler, R. C., Andrews, G., Colpe, L. J., Hiripi, E., Mroczek, D. K., Normand, S.-L. T., Walters, E. E., & Zaslavsky, A. M. (2002). Short screening scales to monitor population prevalences and trends in non-specific psychological distress. Psychological Medicine, 32(6), 959-976.",
    license: "Free — the K10 is in the public domain and free for clinical and research use",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original instrument (Kessler et al., 2002). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-sonnet-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 30 days",
    scoringNote:
      "Severity groupings (10-19 / 20-24 / 25-29 / 30-50) follow the widely used Australian convention; other groupings exist in the literature. The full interview administration skips items 3 and 6 when the preceding item is 'none of the time' and scores skipped items 1 — this simple form administers all items, so scoring requires complete answers.",
  },
};
