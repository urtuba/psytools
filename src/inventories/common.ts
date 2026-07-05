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
