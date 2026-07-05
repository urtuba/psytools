import type { AssessmentDefinition } from "../types.ts";

/**
 * ASRS v1.1 — Adult ADHD Self-Report Scale, 6-item screener (Part A).
 *
 * Developed by the WHO and the Workgroup on Adult ADHD (Harvard Medical
 * School / NYU). Items 1–3 count as screen-positive from "Sometimes" and
 * items 4–6 from "Often"; four or more positive items indicate symptoms
 * highly consistent with adult ADHD and warrant further investigation
 * (Kessler et al., 2005). Free to distribute and score.
 */
export const asrs6: AssessmentDefinition = {
  id: "asrs6",
  version: "1.0.0",
  title: {
    en: "Adult ADHD Self-Report Scale (ASRS-v1.1) Screener",
    tr: "Erişkin DEHB Kendi Bildirim Ölçeği (ASRS-v1.1) Tarama Formu",
    de: "Selbstbeurteilungsskala für ADHS bei Erwachsenen (ASRS-v1.1) Screener",
    zh: "成人ADHD自评量表（ASRS-v1.1）筛查问卷",
    es: "Escala de Autoevaluación del TDAH en Adultos (ASRS-v1.1) — Cuestionario de cribado",
  },
  description: {
    en: "A 6-item screener for adult attention-deficit/hyperactivity disorder, drawn from the WHO's full 18-item ASRS.",
    tr: "DSÖ'nün 18 maddelik tam ASRS ölçeğinden türetilmiş, erişkin dikkat eksikliği/hiperaktivite bozukluğu için 6 maddelik bir tarama aracı.",
    de: "Ein 6-Item-Screener für Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung bei Erwachsenen, abgeleitet aus der vollständigen 18-Item-ASRS der WHO.",
    zh: "一份包含6个条目的成人注意缺陷/多动障碍筛查问卷，摘自世界卫生组织完整的18条目ASRS量表。",
    es: "Un cuestionario de cribado de 6 ítems para el trastorno por déficit de atención e hiperactividad en adultos, extraído de la ASRS completa de 18 ítems de la OMS.",
  },
  instructions: {
    en: "As you answer each question, select the option that best describes how you have felt and conducted yourself over the past 6 months.",
    tr: "Her soruyu yanıtlarken, son 6 ay içinde kendinizi nasıl hissettiğinizi ve nasıl davrandığınızı en iyi tanımlayan seçeneği işaretleyin.",
    de: "Wählen Sie bei jeder Frage die Option, die am besten beschreibt, wie Sie sich in den letzten 6 Monaten gefühlt und verhalten haben.",
    zh: "回答每个问题时，请选择最能描述您在过去6个月中的感受和行为表现的选项。",
    es: "Al responder cada pregunta, seleccione la opción que mejor describa cómo se ha sentido y comportado durante los últimos 6 meses.",
  },
  defaultLocale: "en",
  options: [
    { value: 0, label: { en: "Never", tr: "Hiçbir zaman", de: "Nie", zh: "从不", es: "Nunca" } },
    { value: 1, label: { en: "Rarely", tr: "Nadiren", de: "Selten", zh: "很少", es: "Rara vez" } },
    { value: 2, label: { en: "Sometimes", tr: "Bazen", de: "Manchmal", zh: "有时", es: "A veces" } },
    { value: 3, label: { en: "Often", tr: "Sık sık", de: "Oft", zh: "经常", es: "A menudo" } },
    { value: 4, label: { en: "Very often", tr: "Çok sık", de: "Sehr oft", zh: "非常频繁", es: "Muy a menudo" } },
  ],
  questions: [
    {
      id: "asrs6-1",
      text: {
        en: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
        tr: "Bir işin zor kısımlarını tamamladıktan sonra, son ayrıntıları toparlayıp işi bitirmekte ne sıklıkla güçlük yaşarsınız?",
        de: "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen, nachdem die schwierigen Teile erledigt sind?",
        zh: "在完成一项工作中最具挑战性的部分之后，您在收尾处理最后细节时遇到困难的频率有多高？",
        es: "¿Con qué frecuencia tiene dificultades para ultimar los detalles finales de un proyecto, una vez terminadas las partes más difíciles?",
      },
    },
    {
      id: "asrs6-2",
      text: {
        en: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
        tr: "Organizasyon gerektiren bir iş yapmanız gerektiğinde, işleri sıraya koymakta ne sıklıkla güçlük çekersiniz?",
        de: "Wie oft haben Sie Schwierigkeiten, Ordnung in Dinge zu bringen, wenn Sie eine Aufgabe erledigen müssen, die Organisation erfordert?",
        zh: "当您需要完成一项讲求条理的任务时，您在把事情安排得井井有条方面遇到困难的频率有多高？",
        es: "¿Con qué frecuencia tiene dificultades para poner las cosas en orden cuando debe realizar una tarea que requiere organización?",
      },
    },
    {
      id: "asrs6-3",
      text: {
        en: "How often do you have problems remembering appointments or obligations?",
        tr: "Randevularınızı ya da yükümlülüklerinizi hatırlamakta ne sıklıkla güçlük çekersiniz?",
        de: "Wie oft haben Sie Probleme, sich an Termine oder Verpflichtungen zu erinnern?",
        zh: "您忘记约会或应办事项的频率有多高？",
        es: "¿Con qué frecuencia tiene problemas para recordar citas u obligaciones?",
      },
    },
    {
      id: "asrs6-4",
      text: {
        en: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
        tr: "Çok fazla düşünmeyi gerektiren bir işiniz olduğunda, başlamayı ne sıklıkla erteler ya da başlamaktan kaçınırsınız?",
        de: "Wie oft vermeiden oder verzögern Sie den Beginn einer Aufgabe, die viel Nachdenken erfordert?",
        zh: "当您有一项需要动很多脑筋的任务时，您回避或拖延着手去做的频率有多高？",
        es: "Cuando tiene una tarea que requiere pensar mucho, ¿con qué frecuencia evita o retrasa empezarla?",
      },
    },
    {
      id: "asrs6-5",
      text: {
        en: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
        tr: "Uzun süre oturmanız gerektiğinde, ne sıklıkla ellerinizi ya da ayaklarınızı kıpırdatır veya yerinizde kımıldanırsınız?",
        de: "Wie oft zappeln Sie mit Händen oder Füßen, wenn Sie längere Zeit sitzen müssen?",
        zh: "当您必须长时间坐着时，您手脚不停地动、坐立不安的频率有多高？",
        es: "¿Con qué frecuencia mueve o agita las manos o los pies cuando tiene que permanecer sentado durante mucho tiempo?",
      },
    },
    {
      id: "asrs6-6",
      text: {
        en: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
        tr: "Ne sıklıkla, sanki bir motor tarafından sürülüyormuşçasına kendinizi aşırı hareketli ve bir şeyler yapmaya zorlanmış hissedersiniz?",
        de: "Wie oft fühlen Sie sich übermäßig aktiv und getrieben, Dinge zu tun, als würden Sie von einem Motor angetrieben?",
        zh: "您感到自己过度活跃、不得不做些什么、就像被马达驱动着一样的频率有多高？",
        es: "¿Con qué frecuencia se siente demasiado activo y con la necesidad de hacer cosas, como si lo impulsara un motor?",
      },
    },
  ],
  scoring: {
    kind: "count",
    items: [
      { questionId: "asrs6-1", minValue: 2 },
      { questionId: "asrs6-2", minValue: 2 },
      { questionId: "asrs6-3", minValue: 2 },
      { questionId: "asrs6-4", minValue: 3 },
      { questionId: "asrs6-5", minValue: 3 },
      { questionId: "asrs6-6", minValue: 3 },
    ],
    bands: [
      {
        id: "negative",
        min: 0,
        max: 3,
        label: {
          en: "Symptoms not consistent with adult ADHD",
          tr: "Belirtiler erişkin DEHB ile uyumlu değil",
          de: "Symptome nicht mit ADHS im Erwachsenenalter vereinbar",
          zh: "症状与成人ADHD不相符",
          es: "Síntomas no compatibles con TDAH en adultos",
        },
      },
      {
        id: "positive",
        min: 4,
        max: 6,
        label: {
          en: "Symptoms highly consistent with adult ADHD — further investigation warranted",
          tr: "Belirtiler erişkin DEHB ile yüksek düzeyde uyumlu — ileri değerlendirme gerekir",
          de: "Symptome in hohem Maße mit ADHS im Erwachsenenalter vereinbar — weitere Abklärung angezeigt",
          zh: "症状与成人ADHD高度相符——建议作进一步评估",
          es: "Síntomas altamente compatibles con TDAH en adultos — se recomienda una evaluación adicional",
        },
      },
    ],
  },
  meta: {
    reference:
      "Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychological Medicine, 35(2), 245-256.",
    license:
      "Free with conditions — (c) WHO / Workgroup on Adult ADHD; free for clinical and research use. Verify licensing with the rights holders before embedding in commercial products.",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 6 months",
    note: "The score counts screen-positive items, not symptom severity.",
  },
};
