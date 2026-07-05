import type { AssessmentDefinition } from "../types.ts";
import { twoWeekFrequencyOptions, twoWeekInstructions } from "./common.ts";

/**
 * PHQ-9 — Patient Health Questionnaire-9 (depression screening).
 *
 * 9 items, 0–3 frequency scale, total score 0–27. Item 9 raises a
 * `suicidality` flag when answered above 0. The PHQ-9 is in the public
 * domain (Kroenke, Spitzer & Williams, 2001; developed with a grant from
 * Pfizer Inc.). Translations follow published validated versions — verify
 * against the official wording before clinical use.
 */
export const phq9: AssessmentDefinition = {
  id: "phq9",
  version: "1.0.0",
  title: {
    en: "Patient Health Questionnaire (PHQ-9)",
    tr: "Hasta Sağlığı Anketi (PHQ-9)",
    de: "Gesundheitsfragebogen für Patienten (PHQ-9)",
    zh: "患者健康问卷（PHQ-9）",
    es: "Cuestionario de Salud del Paciente (PHQ-9)",
  },
  description: {
    en: "A 9-item self-report questionnaire for screening and measuring the severity of depression.",
    tr: "Depresyonu taramak ve şiddetini ölçmek için kullanılan 9 maddelik bir öz bildirim ölçeği.",
    de: "Ein Selbstbeurteilungsfragebogen mit 9 Items zum Screening und zur Schweregradmessung von Depression.",
    zh: "一份包含9个条目的自评问卷，用于筛查抑郁并测量其严重程度。",
    es: "Un cuestionario de autoinforme de 9 ítems para la detección y la medición de la gravedad de la depresión.",
  },
  instructions: twoWeekInstructions,
  defaultLocale: "en",
  options: twoWeekFrequencyOptions,
  questions: [
    {
      id: "phq9-1",
      text: {
        en: "Little interest or pleasure in doing things",
        tr: "İşleri yapmaya karşı çok az ilgi ya da zevk duyma",
        de: "Wenig Interesse oder Freude an Ihren Tätigkeiten",
        zh: "做事时提不起兴趣或没有乐趣",
        es: "Poco interés o placer en hacer las cosas",
      },
    },
    {
      id: "phq9-2",
      text: {
        en: "Feeling down, depressed, or hopeless",
        tr: "Kendini kederli, çökkün ya da umutsuz hissetme",
        de: "Niedergeschlagenheit, Schwermut oder Hoffnungslosigkeit",
        zh: "感到心情低落、沮丧或绝望",
        es: "Sentirse desanimado(a), deprimido(a) o sin esperanza",
      },
    },
    {
      id: "phq9-3",
      text: {
        en: "Trouble falling or staying asleep, or sleeping too much",
        tr: "Uykuya dalmada ya da uykuyu sürdürmede güçlük ya da çok fazla uyuma",
        de: "Schwierigkeiten ein- oder durchzuschlafen oder vermehrter Schlaf",
        zh: "入睡困难、睡不安稳或睡眠过多",
        es: "Dificultad para conciliar el sueño o mantenerse dormido(a), o dormir demasiado",
      },
    },
    {
      id: "phq9-4",
      text: {
        en: "Feeling tired or having little energy",
        tr: "Kendini yorgun hissetme ya da çok az enerjiye sahip olma",
        de: "Müdigkeit oder Gefühl, keine Energie zu haben",
        zh: "感觉疲倦或没有活力",
        es: "Sentirse cansado(a) o con poca energía",
      },
    },
    {
      id: "phq9-5",
      text: {
        en: "Poor appetite or overeating",
        tr: "İştahsızlık ya da aşırı yeme",
        de: "Verminderter Appetit oder übermäßiges Bedürfnis zu essen",
        zh: "食欲不振或吃得过多",
        es: "Falta de apetito o comer en exceso",
      },
    },
    {
      id: "phq9-6",
      text: {
        en: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
        tr: "Kendiniz hakkında kötü hissetme — kendinizi başarısız biri olarak görme ya da kendinizi veya ailenizi hayal kırıklığına uğrattığınızı düşünme",
        de: "Schlechte Meinung von sich selbst; Gefühl, ein Versager zu sein oder die Familie enttäuscht zu haben",
        zh: "觉得自己很糟糕——或觉得自己很失败，或让自己或家人失望",
        es: "Sentirse mal consigo mismo(a) — o sentir que es un fracaso o que se ha fallado a sí mismo(a) o a su familia",
      },
    },
    {
      id: "phq9-7",
      text: {
        en: "Trouble concentrating on things, such as reading the newspaper or watching television",
        tr: "Gazete okumak ya da televizyon seyretmek gibi işlere konsantre olmada güçlük",
        de: "Schwierigkeiten, sich auf etwas zu konzentrieren, z. B. beim Zeitunglesen oder Fernsehen",
        zh: "难以集中注意力做事，例如看报纸或看电视",
        es: "Dificultad para concentrarse en actividades como leer el periódico o ver la televisión",
      },
    },
    {
      id: "phq9-8",
      text: {
        en: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
        tr: "Diğer insanların fark edebileceği kadar yavaş hareket etme ya da yavaş konuşma? Ya da tam tersi — her zamankinden çok daha fazla hareket edecek kadar kıpır kıpır ya da huzursuz olma",
        de: "Waren Ihre Bewegungen oder Ihre Sprache so verlangsamt, dass es auch anderen auffallen würde? Oder waren Sie im Gegenteil „zappelig“ oder ruhelos und hatten dadurch einen stärkeren Bewegungsdrang als sonst?",
        zh: "动作或说话缓慢到别人可能已经察觉？或者正好相反——烦躁或坐立不安，动来动去的情况比平时多得多",
        es: "¿Se ha movido o ha hablado tan despacio que otras personas podrían haberlo notado? O lo contrario — estar tan inquieto(a) o agitado(a) que se ha estado moviendo mucho más de lo habitual",
      },
    },
    {
      id: "phq9-9",
      text: {
        en: "Thoughts that you would be better off dead or of hurting yourself in some way",
        tr: "Ölmüş olmanın ya da kendinize bir şekilde zarar vermenin daha iyi olacağına dair düşünceler",
        de: "Gedanken, dass Sie lieber tot wären oder sich Leid zufügen möchten",
        zh: "有不如死掉或以某种方式伤害自己的念头",
        es: "Pensamientos de que estaría mejor muerto(a) o de hacerse daño de alguna manera",
      },
    },
  ],
  scoring: {
    kind: "sum",
    bands: [
      {
        id: "minimal",
        min: 0,
        max: 4,
        label: { en: "Minimal depression", tr: "Minimal depresyon", de: "Minimale Depression", zh: "极轻度抑郁", es: "Depresión mínima" },
      },
      {
        id: "mild",
        min: 5,
        max: 9,
        label: { en: "Mild depression", tr: "Hafif depresyon", de: "Leichte Depression", zh: "轻度抑郁", es: "Depresión leve" },
      },
      {
        id: "moderate",
        min: 10,
        max: 14,
        label: { en: "Moderate depression", tr: "Orta düzeyde depresyon", de: "Mittelgradige Depression", zh: "中度抑郁", es: "Depresión moderada" },
      },
      {
        id: "moderately-severe",
        min: 15,
        max: 19,
        label: { en: "Moderately severe depression", tr: "Orta-şiddetli düzeyde depresyon", de: "Mittelschwere Depression", zh: "中重度抑郁", es: "Depresión moderadamente grave" },
      },
      {
        id: "severe",
        min: 20,
        max: 27,
        label: { en: "Severe depression", tr: "Şiddetli depresyon", de: "Schwere Depression", zh: "重度抑郁", es: "Depresión grave" },
      },
    ],
    flags: [
      {
        id: "suicidality",
        questionId: "phq9-9",
        minValue: 1,
        label: {
          en: "Self-harm or suicidal ideation reported (item 9) — requires clinical attention",
          tr: "Kendine zarar verme ya da intihar düşüncesi bildirildi (9. madde) — klinik değerlendirme gerektirir",
          de: "Selbstverletzungs- oder Suizidgedanken angegeben (Item 9) — erfordert klinische Abklärung",
          zh: "报告了自我伤害或自杀意念（第9项）——需要临床关注",
          es: "Se informó de autolesión o ideación suicida (ítem 9) — requiere atención clínica",
        },
      },
    ],
  },
  meta: {
    reference:
      "Kroenke, K., Spitzer, R. L., & Williams, J. B. (2001). The PHQ-9: validity of a brief depression severity measure. Journal of General Internal Medicine, 16(9), 606-613.",
    license: "Free — no permission required to reproduce, translate, display or distribute (Pfizer educational grant)",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 2 weeks",
  },
};
