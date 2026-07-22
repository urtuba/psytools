import type { AssessmentOption, LocalizedText } from "../types.ts";

/**
 * The 0–3 frequency scale ("over the last 2 weeks") shared by PHQ-9 and
 * GAD-7.
 */
export const twoWeekFrequencyOptions: AssessmentOption[] = [
  {
    value: 0,
    label: {
      en: "Not at all",
    },
  },
  {
    value: 1,
    label: {
      en: "Several days",
    },
  },
  {
    value: 2,
    label: {
      en: "More than half the days",
    },
  },
  {
    value: 3,
    label: {
      en: "Nearly every day",
    },
  },
];

/** Instructions shared by PHQ-9 and GAD-7. */
export const twoWeekInstructions: LocalizedText = {
  en: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
};

/**
 * The fully labeled 1–7 agreement scale shared by the Diener scales
 * (SWLS, Flourishing Scale).
 */
export const sevenPointAgreementOptions: AssessmentOption[] = [
  { value: 1, label: { en: "Strongly disagree" } },
  { value: 2, label: { en: "Disagree" } },
  { value: 3, label: { en: "Slightly disagree" } },
  { value: 4, label: { en: "Neither agree nor disagree" } },
  { value: 5, label: { en: "Slightly agree" } },
  { value: 6, label: { en: "Agree" } },
  { value: 7, label: { en: "Strongly agree" } },
];

/**
 * The past-30-days frequency labels shared by the Kessler distress
 * scales. K10 stores them as 1–5 (sum 10–50), K6 as 0–4 (sum 0–24),
 * matching each instrument's published scoring convention.
 */
export const kesslerFrequencyLabels: string[] = [
  "None of the time",
  "A little of the time",
  "Some of the time",
  "Most of the time",
  "All of the time",
];
