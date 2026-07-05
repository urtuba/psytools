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
    zh: "世界卫生组织五项身心健康指标（WHO-5）",
    es: "Índice de Bienestar de la OMS (WHO-5)",
  },
  description: {
    en: "A 5-item self-report scale measuring subjective psychological well-being over the past two weeks. Higher scores mean better well-being.",
    tr: "Son iki hafta içindeki öznel psikolojik iyilik halini ölçen 5 maddelik bir öz bildirim ölçeği. Yüksek puan daha iyi bir iyilik haline işaret eder.",
    de: "Eine Selbstbeurteilungsskala mit 5 Items zur Messung des subjektiven psychischen Wohlbefindens in den letzten zwei Wochen. Höhere Werte bedeuten besseres Wohlbefinden.",
    zh: "一份包含5个条目的自评量表，用于测量过去两周的主观心理幸福感。得分越高，表示身心健康状况越好。",
    es: "Una escala de autoinforme de 5 ítems que mide el bienestar psicológico subjetivo durante las últimas dos semanas. Las puntuaciones más altas indican un mayor bienestar.",
  },
  instructions: {
    en: "Please indicate for each of the five statements which is closest to how you have been feeling over the last two weeks.",
    tr: "Lütfen aşağıdaki beş ifadenin her biri için, son iki hafta içinde kendinizi nasıl hissettiğinize en yakın olan seçeneği işaretleyin.",
    de: "Bitte geben Sie für jede der fünf Aussagen an, welche Antwort Ihrem Befinden in den letzten zwei Wochen am nächsten kommt.",
    zh: "请针对以下五条陈述，逐条选出最接近您在过去两周内感受的选项。",
    es: "Por favor, indique para cada una de las cinco frases cuál se acerca más a cómo se ha sentido durante las últimas dos semanas.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: { en: "At no time", tr: "Hiçbir zaman", de: "Zu keinem Zeitpunkt", zh: "任何时候都没有", es: "En ningún momento" },
    },
    {
      value: 1,
      label: { en: "Some of the time", tr: "Bazen", de: "Ab und zu", zh: "有些时候", es: "Algunas veces" },
    },
    {
      value: 2,
      label: {
        en: "Less than half of the time",
        tr: "Zamanın yarısından az",
        de: "Etwas weniger als die Hälfte der Zeit",
        zh: "少于一半的时间",
        es: "Menos de la mitad del tiempo",
      },
    },
    {
      value: 3,
      label: {
        en: "More than half of the time",
        tr: "Zamanın yarısından çok",
        de: "Etwas mehr als die Hälfte der Zeit",
        zh: "多于一半的时间",
        es: "Más de la mitad del tiempo",
      },
    },
    {
      value: 4,
      label: { en: "Most of the time", tr: "Çoğu zaman", de: "Meistens", zh: "大部分时间", es: "La mayor parte del tiempo" },
    },
    {
      value: 5,
      label: { en: "All of the time", tr: "Her zaman", de: "Die ganze Zeit", zh: "所有时间", es: "Todo el tiempo" },
    },
  ],
  questions: [
    {
      id: "who5-1",
      text: {
        en: "I have felt cheerful and in good spirits",
        tr: "Kendimi neşeli ve keyifli hissettim",
        de: "Ich war froh und guter Laune",
        zh: "我感到愉快、心情舒畅",
        es: "Me he sentido alegre y de buen ánimo",
      },
    },
    {
      id: "who5-2",
      text: {
        en: "I have felt calm and relaxed",
        tr: "Kendimi sakin ve rahatlamış hissettim",
        de: "Ich habe mich ruhig und entspannt gefühlt",
        zh: "我感到平静和放松",
        es: "Me he sentido tranquilo y relajado",
      },
    },
    {
      id: "who5-3",
      text: {
        en: "I have felt active and vigorous",
        tr: "Kendimi aktif ve dinç hissettim",
        de: "Ich habe mich energisch und aktiv gefühlt",
        zh: "我感到精力充沛、充满活力",
        es: "Me he sentido activo y enérgico",
      },
    },
    {
      id: "who5-4",
      text: {
        en: "I woke up feeling fresh and rested",
        tr: "Uyandığımda kendimi dinlenmiş ve zinde hissettim",
        de: "Ich habe mich beim Aufwachen frisch und ausgeruht gefühlt",
        zh: "我醒来时感到清爽、休息充分",
        es: "Me he despertado sintiéndome fresco y descansado",
      },
    },
    {
      id: "who5-5",
      text: {
        en: "My daily life has been filled with things that interest me",
        tr: "Günlük yaşamım ilgimi çeken şeylerle doluydu",
        de: "Mein Alltag war voller Dinge, die mich interessieren",
        zh: "我的日常生活充满了让我感兴趣的事物",
        es: "Mi vida diaria ha estado llena de cosas que me interesan",
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
          zh: "幸福感低——提示可能存在抑郁，建议进行评估",
          es: "Bienestar bajo — indica una probable depresión, se recomienda una evaluación",
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
          zh: "幸福感降低——建议进行抑郁筛查",
          es: "Bienestar reducido — se recomienda un cribado de depresión",
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
          zh: "幸福感良好",
          es: "Buen bienestar",
        },
      },
    ],
  },
  meta: {
    reference:
      "Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). The WHO-5 Well-Being Index: a systematic review of the literature. Psychotherapy and Psychosomatics, 84(3), 167-176.",
    license: "Free — may be used without permission (WHO Regional Office for Europe / Psychiatric Research Unit, Hillerød)",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
    note: "Positively worded: higher scores mean better well-being.",
  },
};
