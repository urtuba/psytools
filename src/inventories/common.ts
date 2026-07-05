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
      tr: "Hiç",
      de: "Überhaupt nicht",
    },
  },
  {
    value: 1,
    label: {
      en: "Several days",
      tr: "Birkaç gün",
      de: "An einzelnen Tagen",
    },
  },
  {
    value: 2,
    label: {
      en: "More than half the days",
      tr: "Günlerin yarısından fazlasında",
      de: "An mehr als der Hälfte der Tage",
    },
  },
  {
    value: 3,
    label: {
      en: "Nearly every day",
      tr: "Hemen hemen her gün",
      de: "Beinahe jeden Tag",
    },
  },
];

/** Instructions shared by PHQ-9 and GAD-7. */
export const twoWeekInstructions: LocalizedText = {
  en: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  tr: "Son 2 hafta içinde, aşağıdaki sorunlardan herhangi biri sizi ne sıklıkta rahatsız etti?",
  de: "Wie oft fühlten Sie sich im Verlauf der letzten 2 Wochen durch die folgenden Beschwerden beeinträchtigt?",
};
