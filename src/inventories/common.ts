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
      zh: "完全没有",
      es: "Para nada",
    },
  },
  {
    value: 1,
    label: {
      en: "Several days",
      tr: "Birkaç gün",
      de: "An einzelnen Tagen",
      zh: "有几天",
      es: "Varios días",
    },
  },
  {
    value: 2,
    label: {
      en: "More than half the days",
      tr: "Günlerin yarısından fazlasında",
      de: "An mehr als der Hälfte der Tage",
      zh: "一半以上的天数",
      es: "Más de la mitad de los días",
    },
  },
  {
    value: 3,
    label: {
      en: "Nearly every day",
      tr: "Hemen hemen her gün",
      de: "Beinahe jeden Tag",
      zh: "几乎每天",
      es: "Casi todos los días",
    },
  },
];

/** Instructions shared by PHQ-9 and GAD-7. */
export const twoWeekInstructions: LocalizedText = {
  en: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  tr: "Son 2 hafta içinde, aşağıdaki sorunlardan herhangi biri sizi ne sıklıkta rahatsız etti?",
  de: "Wie oft fühlten Sie sich im Verlauf der letzten 2 Wochen durch die folgenden Beschwerden beeinträchtigt?",
  zh: "在过去的2周里，您被以下任何一个问题困扰的频率如何？",
  es: "Durante las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?",
};
