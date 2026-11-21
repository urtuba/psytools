import type { AssessmentDefinition } from "../types.ts";
import { twoWeekFrequencyOptions, twoWeekInstructions } from "./common.ts";

/**
 * PHQ-8: Patient Health Questionnaire-8 (depression severity).
 *
 * The PHQ-9 without item 9 (self-harm): 8 items on the 0-3 frequency
 * scale, total 0-24. The PHQ manual states that the PHQ-8 "is scored just
 * like the PHQ-9" and that its cutpoints "are identical to the PHQ-9", so
 * the bands are the PHQ-9's, capped at 24. Same Pfizer grant as the
 * bundled PHQ-9.
 */
export const phq8: AssessmentDefinition = {
  id: "phq8",
  version: "1.0.0",
  categories: ["depression"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Patient Health Questionnaire-8 (PHQ-8)",
  },
  description: {
    en: "An 8-item self-report measure of depression severity: the PHQ-9 without its item on thoughts of self-harm.",
  },
  instructions: twoWeekInstructions,
  defaultLocale: "en",
  options: twoWeekFrequencyOptions,
  questions: [
    { id: "phq8-1", text: { en: "Little interest or pleasure in doing things" } },
    { id: "phq8-2", text: { en: "Feeling down, depressed, or hopeless" } },
    { id: "phq8-3", text: { en: "Trouble falling or staying asleep, or sleeping too much" } },
    { id: "phq8-4", text: { en: "Feeling tired or having little energy" } },
    { id: "phq8-5", text: { en: "Poor appetite or overeating" } },
    {
      id: "phq8-6",
      text: {
        en: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      },
    },
    {
      id: "phq8-7",
      text: { en: "Trouble concentrating on things, such as reading the newspaper or watching television" },
    },
    {
      id: "phq8-8",
      text: {
        en: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
      },
    },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 6 },
    bands: [
      { id: "minimal", min: 0, max: 4, label: { en: "Minimal depression" } },
      { id: "mild", min: 5, max: 9, label: { en: "Mild depression" } },
      { id: "moderate", min: 10, max: 14, label: { en: "Moderate depression" } },
      { id: "moderately-severe", min: 15, max: 19, label: { en: "Moderately severe depression" } },
      { id: "severe", min: 20, max: 24, label: { en: "Severe depression" } },
    ],
  },
  meta: {
    reference:
      "Kroenke, K., Strine, T. W., Spitzer, R. L., Williams, J. B. W., Berry, J. T., & Mokdad, A. H. (2009). The PHQ-8 as a measure of current depression in the general population. Journal of Affective Disorders, 114(1-3), 163-173.",
    license: "Free: no permission required to reproduce, translate, display or distribute (Pfizer educational grant)",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from Pfizer's own PHQ-8 form, \"English for Canada\" (footer: \"No permission required to reproduce, translate, display or distribute\"), downloaded from https://www.phqscreeners.com/select-screener; the site offers no PHQ-8 form labelled plain English, and this one matches items 1-8 of Pfizer's English PHQ-9 form word for word. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
    scoringNote:
      "Sum 0-24. Bands use the PHQ-9 cutpoints of 5, 10, 15 and 20, which the PHQ manual says apply to the PHQ-8 unchanged. A score of 10 or more, the start of the moderate band, is the manual's \"yellow flag\" for a possible clinically significant condition and the cut-point usually used for current depression. The PHQ-8 has no self-harm item, so unlike `phq9` it raises no suicidality flag; do not use it where self-harm needs to be screened.",
  },
};
