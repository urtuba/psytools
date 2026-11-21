import type { AssessmentDefinition } from "../types.ts";
import { twoWeekFrequencyOptions } from "./common.ts";

/** Bands shared by both 2-item subscales: the manual's cutpoint of 3. */
const screenBands = (followUp: string) => [
  { id: "below-cutoff", min: 0, max: 2, label: { en: "Below the screening cutpoint" } },
  { id: "positive", min: 3, max: 6, label: { en: `Positive screen: follow up with ${followUp}` } },
];

/**
 * PHQ-4: Patient Health Questionnaire for Depression and Anxiety.
 *
 * 4 items on the 0-3 frequency scale: the GAD-2 (items 1-2) and the PHQ-2
 * (items 3-4), in the order Pfizer's own PHQ-4 form prints them. Scored
 * as three scales: anxiety (0-6), depression (0-6) and the total (0-12).
 * The two subscales carry the PHQ manual's screening cutpoint of 3; the
 * total carries no bands, see `meta.scoringNote`.
 */
export const phq4: AssessmentDefinition = {
  id: "phq4",
  version: "1.0.0",
  categories: ["depression", "anxiety"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Patient Health Questionnaire-4 (PHQ-4)",
  },
  description: {
    en: "An ultra-brief 4-item screener for anxiety and depression, made of the 2-item GAD-2 and PHQ-2.",
  },
  instructions: {
    en: "Over the last 2 weeks, how often have you been bothered by the following problems?",
  },
  defaultLocale: "en",
  options: twoWeekFrequencyOptions,
  questions: [
    { id: "phq4-1", text: { en: "Feeling nervous, anxious or on edge" } },
    { id: "phq4-2", text: { en: "Not being able to stop or control worrying" } },
    { id: "phq4-3", text: { en: "Little interest or pleasure in doing things" } },
    { id: "phq4-4", text: { en: "Feeling down, depressed, or hopeless" } },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "require-complete" },
    subscales: [
      {
        id: "anxiety",
        label: { en: "Anxiety (GAD-2)" },
        questionIds: ["phq4-1", "phq4-2"],
        bands: screenBands("the GAD-7 and a clinical interview"),
      },
      {
        id: "depression",
        label: { en: "Depression (PHQ-2)" },
        questionIds: ["phq4-3", "phq4-4"],
        bands: screenBands("the PHQ-9 and a clinical interview"),
      },
      {
        id: "total",
        label: { en: "Total (PHQ-4)" },
        questionIds: ["phq4-1", "phq4-2", "phq4-3", "phq4-4"],
      },
    ],
  },
  meta: {
    reference:
      "Kroenke, K., Spitzer, R. L., Williams, J. B. W., & Löwe, B. (2009). An ultra-brief screening scale for anxiety and depression: The PHQ-4. Psychosomatics, 50(6), 613-621.",
    license: "Free: no permission required to reproduce, translate, display or distribute (Pfizer educational grant)",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from Pfizer's own English PHQ-4 form (footer: \"No permission required to reproduce, translate, display or distribute\"), downloaded from https://www.phqscreeners.com/select-screener. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
    scoringNote:
      "Three scales over the same four answers: anxiety = items 1-2 (GAD-2, 0-6), depression = items 3-4 (PHQ-2, 0-6), total = items 1-4 (0-12). The subscale bands split at 3, the PHQ manual's screening cutpoint for the PHQ-2 and GAD-2 (\"a score of 3 or greater should prompt administration of the full PHQ-9 and/or GAD-7, as well as a clinical interview\"). The total has no bands: total-score categories (0-2, 3-5, 6-8, 9-12) circulate widely and are attributed to Kroenke et al. (2009), but neither that paper nor the PHQ manual could be read to confirm them, so none are bundled. Apply them over the total's `score` if your protocol uses them.",
  },
};
