import type { AssessmentDefinition } from "../types.ts";

/**
 * WHO-5 — World Health Organization Well-Being Index.
 *
 * 5 positively worded items, 0–5 frequency scale over the past two weeks.
 * The raw sum (0–25) is multiplied by 4 and reported as a 0–100 percentage;
 * higher scores mean better well-being. A score of 50 or below indicates
 * reduced well-being and warrants screening for depression; 28 or below
 * indicates likely depression (Topp et al., 2015). Free to use.
 */
export const who5: AssessmentDefinition = {
  id: "who5",
  version: "1.0.0",
  title: {
    en: "WHO-5 Well-Being Index",
    tr: "WHO-5 İyilik Hali İndeksi",
    de: "WHO-5-Index zum Wohlbefinden",
  },
  description: {
    en: "A 5-item self-report scale measuring subjective psychological well-being over the past two weeks. Higher scores mean better well-being.",
    tr: "Son iki hafta içindeki öznel psikolojik iyilik halini ölçen 5 maddelik bir öz bildirim ölçeği. Yüksek puan daha iyi bir iyilik haline işaret eder.",
    de: "Eine Selbstbeurteilungsskala mit 5 Items zur Messung des subjektiven psychischen Wohlbefindens in den letzten zwei Wochen. Höhere Werte bedeuten besseres Wohlbefinden.",
  },
  instructions: {
    en: "Please indicate for each of the five statements which is closest to how you have been feeling over the last two weeks.",
    tr: "Lütfen aşağıdaki beş ifadenin her biri için, son iki hafta içinde kendinizi nasıl hissettiğinize en yakın olan seçeneği işaretleyin.",
    de: "Bitte geben Sie für jede der fünf Aussagen an, welche Antwort Ihrem Befinden in den letzten zwei Wochen am nächsten kommt.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: { en: "At no time", tr: "Hiçbir zaman", de: "Zu keinem Zeitpunkt" },
    },
    {
      value: 1,
      label: { en: "Some of the time", tr: "Bazen", de: "Ab und zu" },
    },
    {
      value: 2,
      label: {
        en: "Less than half of the time",
        tr: "Zamanın yarısından az",
        de: "Etwas weniger als die Hälfte der Zeit",
      },
    },
    {
      value: 3,
      label: {
        en: "More than half of the time",
        tr: "Zamanın yarısından çok",
        de: "Etwas mehr als die Hälfte der Zeit",
      },
    },
    {
      value: 4,
      label: { en: "Most of the time", tr: "Çoğu zaman", de: "Meistens" },
    },
    {
      value: 5,
      label: { en: "All of the time", tr: "Her zaman", de: "Die ganze Zeit" },
    },
  ],
  questions: [
    {
      id: "who5-1",
      text: {
        en: "I have felt cheerful and in good spirits",
        tr: "Kendimi neşeli ve keyifli hissettim",
        de: "Ich war froh und guter Laune",
      },
    },
    {
      id: "who5-2",
      text: {
        en: "I have felt calm and relaxed",
        tr: "Kendimi sakin ve rahatlamış hissettim",
        de: "Ich habe mich ruhig und entspannt gefühlt",
      },
    },
    {
      id: "who5-3",
      text: {
        en: "I have felt active and vigorous",
        tr: "Kendimi aktif ve dinç hissettim",
        de: "Ich habe mich energisch und aktiv gefühlt",
      },
    },
    {
      id: "who5-4",
      text: {
        en: "I woke up feeling fresh and rested",
        tr: "Uyandığımda kendimi dinlenmiş ve zinde hissettim",
        de: "Ich habe mich beim Aufwachen frisch und ausgeruht gefühlt",
      },
    },
    {
      id: "who5-5",
      text: {
        en: "My daily life has been filled with things that interest me",
        tr: "Günlük yaşamım ilgimi çeken şeylerle doluydu",
        de: "Mein Alltag war voller Dinge, die mich interessieren",
      },
    },
  ],
  scoring: {
    kind: "sum",
    multiplier: 4,
    bands: [
      {
        id: "low",
        min: 0,
        max: 28,
        label: {
          en: "Low well-being — indicates likely depression, assessment recommended",
          tr: "Düşük iyilik hali — olası depresyona işaret eder, değerlendirme önerilir",
          de: "Niedriges Wohlbefinden — Hinweis auf wahrscheinliche Depression, Abklärung empfohlen",
        },
      },
      {
        id: "reduced",
        min: 29,
        max: 50,
        label: {
          en: "Reduced well-being — screening for depression recommended",
          tr: "Azalmış iyilik hali — depresyon taraması önerilir",
          de: "Vermindertes Wohlbefinden — Depressionsscreening empfohlen",
        },
      },
      {
        id: "good",
        min: 51,
        max: 100,
        label: {
          en: "Good well-being",
          tr: "İyi düzeyde iyilik hali",
          de: "Gutes Wohlbefinden",
        },
      },
    ],
  },
  meta: {
    reference:
      "Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). The WHO-5 Well-Being Index: a systematic review of the literature. Psychotherapy and Psychosomatics, 84(3), 167-176.",
    license: "Free to use (WHO Regional Office for Europe / Psychiatric Research Unit, Hillerød)",
    timeframe: "past 2 weeks",
    note: "Positively worded: higher scores mean better well-being.",
  },
};
