import type { AssessmentDefinition, ScoreBand } from "../types.ts";

const depressionBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 9, label: { en: "Normal", tr: "Normal", de: "Normal", zh: "正常", es: "Normal" } },
  { id: "mild", min: 10, max: 13, label: { en: "Mild", tr: "Hafif", de: "Leicht", zh: "轻度", es: "Leve" } },
  { id: "moderate", min: 14, max: 20, label: { en: "Moderate", tr: "Orta", de: "Moderat", zh: "中度", es: "Moderado" } },
  { id: "severe", min: 21, max: 27, label: { en: "Severe", tr: "Şiddetli", de: "Schwer", zh: "重度", es: "Grave" } },
  { id: "extremely-severe", min: 28, max: 42, label: { en: "Extremely severe", tr: "Çok şiddetli", de: "Sehr schwer", zh: "极重度", es: "Extremadamente grave" } },
];

const anxietyBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 7, label: { en: "Normal", tr: "Normal", de: "Normal", zh: "正常", es: "Normal" } },
  { id: "mild", min: 8, max: 9, label: { en: "Mild", tr: "Hafif", de: "Leicht", zh: "轻度", es: "Leve" } },
  { id: "moderate", min: 10, max: 14, label: { en: "Moderate", tr: "Orta", de: "Moderat", zh: "中度", es: "Moderado" } },
  { id: "severe", min: 15, max: 19, label: { en: "Severe", tr: "Şiddetli", de: "Schwer", zh: "重度", es: "Grave" } },
  { id: "extremely-severe", min: 20, max: 42, label: { en: "Extremely severe", tr: "Çok şiddetli", de: "Sehr schwer", zh: "极重度", es: "Extremadamente grave" } },
];

const stressBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 14, label: { en: "Normal", tr: "Normal", de: "Normal", zh: "正常", es: "Normal" } },
  { id: "mild", min: 15, max: 18, label: { en: "Mild", tr: "Hafif", de: "Leicht", zh: "轻度", es: "Leve" } },
  { id: "moderate", min: 19, max: 25, label: { en: "Moderate", tr: "Orta", de: "Moderat", zh: "中度", es: "Moderado" } },
  { id: "severe", min: 26, max: 33, label: { en: "Severe", tr: "Şiddetli", de: "Schwer", zh: "重度", es: "Grave" } },
  { id: "extremely-severe", min: 34, max: 42, label: { en: "Extremely severe", tr: "Çok şiddetli", de: "Sehr schwer", zh: "极重度", es: "Extremadamente grave" } },
];

/**
 * DASS-21 — Depression Anxiety Stress Scales, short form.
 *
 * 21 items, 0–3 applicability scale, three subscales (depression, anxiety,
 * stress) of 7 items each. Subscale sums are multiplied by 2 so severity
 * cutoffs match the full DASS-42. The DASS is in the public domain
 * (Lovibond & Lovibond, 1995). Translations follow published validated
 * versions — verify against the official wording before clinical use.
 */
export const dass21: AssessmentDefinition = {
  id: "dass21",
  version: "1.0.0",
  title: {
    en: "Depression Anxiety Stress Scales (DASS-21)",
    tr: "Depresyon Anksiyete Stres Ölçeği (DASS-21)",
    de: "Depressions-Angst-Stress-Skalen (DASS-21)",
    zh: "抑郁-焦虑-压力量表（DASS-21）",
    es: "Escalas de Depresión, Ansiedad y Estrés (DASS-21)",
  },
  description: {
    en: "A 21-item self-report questionnaire measuring depression, anxiety, and stress over the past week.",
    tr: "Geçtiğimiz hafta boyunca depresyon, anksiyete ve stresi ölçen 21 maddelik bir öz bildirim ölçeği.",
    de: "Ein Selbstbeurteilungsfragebogen mit 21 Items zur Messung von Depression, Angst und Stress in der vergangenen Woche.",
    zh: "一份包含21个条目的自评问卷，用于测量过去一周的抑郁、焦虑和压力水平。",
    es: "Un cuestionario de autoinforme de 21 ítems que mide la depresión, la ansiedad y el estrés durante la última semana.",
  },
  instructions: {
    en: "Please read each statement and select the option which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.",
    tr: "Lütfen her ifadeyi okuyun ve geçtiğimiz hafta boyunca ifadenin size ne kadar uyduğunu gösteren seçeneği işaretleyin. Doğru ya da yanlış cevap yoktur. Herhangi bir ifade üzerinde çok fazla zaman harcamayın.",
    de: "Bitte lesen Sie jede Aussage und wählen Sie die Option, die angibt, wie sehr die Aussage in der vergangenen Woche auf Sie zutraf. Es gibt keine richtigen oder falschen Antworten. Verbringen Sie nicht zu viel Zeit mit einer Aussage.",
    zh: "请阅读每一条陈述，并选择最能表明过去一周该陈述在多大程度上适用于您的选项。答案没有对错之分。请不要在任何一条陈述上花费太多时间。",
    es: "Por favor, lea cada frase y seleccione la opción que indique en qué medida la frase se aplicó a usted durante la última semana. No hay respuestas correctas ni incorrectas. No dedique demasiado tiempo a ninguna frase.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: {
        en: "Did not apply to me at all",
        tr: "Bana hiç uymadı",
        de: "Traf gar nicht auf mich zu",
        zh: "完全不适用于我",
        es: "No se aplicó a mí en absoluto",
      },
    },
    {
      value: 1,
      label: {
        en: "Applied to me to some degree, or some of the time",
        tr: "Bana biraz uydu ya da zaman zaman uydu",
        de: "Traf bis zu einem gewissen Grad oder manchmal auf mich zu",
        zh: "在某种程度上适用于我，或有时适用",
        es: "Se aplicó a mí en cierta medida, o parte del tiempo",
      },
    },
    {
      value: 2,
      label: {
        en: "Applied to me to a considerable degree, or a good part of the time",
        tr: "Bana oldukça uydu ya da zamanın büyük bölümünde uydu",
        de: "Traf in beträchtlichem Maße oder einen guten Teil der Zeit auf mich zu",
        zh: "在相当程度上适用于我，或大部分时间适用",
        es: "Se aplicó a mí en un grado considerable, o una buena parte del tiempo",
      },
    },
    {
      value: 3,
      label: {
        en: "Applied to me very much, or most of the time",
        tr: "Bana çok uydu ya da hemen hemen her zaman uydu",
        de: "Traf sehr stark oder die meiste Zeit auf mich zu",
        zh: "非常适用于我，或绝大部分时间适用",
        es: "Se aplicó a mí mucho, o la mayor parte del tiempo",
      },
    },
  ],
  questions: [
    {
      id: "dass21-1",
      text: {
        en: "I found it hard to wind down",
        tr: "Sakinleşip yatışmakta zorlandım",
        de: "Ich fand es schwer, mich zu beruhigen",
        zh: "我发现自己很难平静下来",
        es: "Me costó calmarme",
      },
    },
    {
      id: "dass21-2",
      text: {
        en: "I was aware of dryness of my mouth",
        tr: "Ağzımın kuruduğunu fark ettim",
        de: "Ich bemerkte, dass mein Mund trocken war",
        zh: "我注意到自己口干",
        es: "Noté que tenía la boca seca",
      },
    },
    {
      id: "dass21-3",
      text: {
        en: "I couldn't seem to experience any positive feeling at all",
        tr: "Hiç olumlu duygu yaşayamadığımı fark ettim",
        de: "Ich konnte überhaupt keine positiven Gefühle mehr erleben",
        zh: "我似乎完全无法体验到任何积极的感受",
        es: "No parecía poder experimentar ningún sentimiento positivo en absoluto",
      },
    },
    {
      id: "dass21-4",
      text: {
        en: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
        tr: "Nefes almada zorluk yaşadım (örneğin, fiziksel çaba göstermediğim hâlde aşırı hızlı nefes alma, nefessiz kalma)",
        de: "Ich hatte Atemprobleme (z. B. übermäßig schnelle Atmung, Atemlosigkeit ohne körperliche Anstrengung)",
        zh: "我感到呼吸困难（例如呼吸过快，或没有体力活动时也感到喘不过气）",
        es: "Experimenté dificultad para respirar (p. ej., respiración excesivamente rápida, falta de aire sin haber hecho esfuerzo físico)",
      },
    },
    {
      id: "dass21-5",
      text: {
        en: "I found it difficult to work up the initiative to do things",
        tr: "Bir işe başlamak için gereken isteği kendimde bulmakta zorlandım",
        de: "Es fiel mir schwer, die Initiative zu ergreifen, um Dinge zu erledigen",
        zh: "我发现自己很难主动去做事情",
        es: "Me resultó difícil tomar la iniciativa para hacer cosas",
      },
    },
    {
      id: "dass21-6",
      text: {
        en: "I tended to over-react to situations",
        tr: "Olaylara aşırı tepki verme eğiliminde oldum",
        de: "Ich neigte dazu, auf Situationen überzureagieren",
        zh: "我容易对事情反应过度",
        es: "Tendí a reaccionar de forma exagerada ante las situaciones",
      },
    },
    {
      id: "dass21-7",
      text: {
        en: "I experienced trembling (e.g. in the hands)",
        tr: "Titreme yaşadım (örneğin ellerde)",
        de: "Ich hatte Zittern (z. B. in den Händen)",
        zh: "我出现过颤抖（例如手抖）",
        es: "Experimenté temblores (p. ej., en las manos)",
      },
    },
    {
      id: "dass21-8",
      text: {
        en: "I felt that I was using a lot of nervous energy",
        tr: "Sinirsel enerjimin çok fazla olduğunu hissettim",
        de: "Ich fühlte, dass ich viel nervöse Energie verbrauchte",
        zh: "我觉得自己消耗了很多精神能量",
        es: "Sentí que estaba gastando mucha energía nerviosa",
      },
    },
    {
      id: "dass21-9",
      text: {
        en: "I was worried about situations in which I might panic and make a fool of myself",
        tr: "Panikleyip kendimi gülünç duruma düşürebileceğim durumlar nedeniyle endişelendim",
        de: "Ich machte mir Sorgen über Situationen, in denen ich in Panik geraten und mich blamieren könnte",
        zh: "我担心自己会在某些场合惊慌失措、出丑",
        es: "Me preocupaban las situaciones en las que podría entrar en pánico y hacer el ridículo",
      },
    },
    {
      id: "dass21-10",
      text: {
        en: "I felt that I had nothing to look forward to",
        tr: "Dört gözle beklediğim hiçbir şey olmadığını hissettim",
        de: "Ich hatte das Gefühl, mich auf nichts mehr freuen zu können",
        zh: "我觉得自己没有什么可期待的",
        es: "Sentí que no tenía nada que esperar con ilusión",
      },
    },
    {
      id: "dass21-11",
      text: {
        en: "I found myself getting agitated",
        tr: "Giderek huzursuzlandığımı fark ettim",
        de: "Ich merkte, dass ich unruhig wurde",
        zh: "我发现自己变得焦躁不安",
        es: "Me di cuenta de que me estaba agitando",
      },
    },
    {
      id: "dass21-12",
      text: {
        en: "I found it difficult to relax",
        tr: "Gevşeyip rahatlamakta zorlandım",
        de: "Es fiel mir schwer, mich zu entspannen",
        zh: "我发现自己很难放松",
        es: "Me resultó difícil relajarme",
      },
    },
    {
      id: "dass21-13",
      text: {
        en: "I felt down-hearted and blue",
        tr: "Kendimi üzgün ve karamsar hissettim",
        de: "Ich fühlte mich niedergeschlagen und traurig",
        zh: "我感到情绪低落、忧郁",
        es: "Me sentí desanimado y triste",
      },
    },
    {
      id: "dass21-14",
      text: {
        en: "I was intolerant of anything that kept me from getting on with what I was doing",
        tr: "Yaptığım işi sürdürmeme engel olan şeylere tahammül edemedim",
        de: "Ich konnte es nicht ertragen, von dem, was ich gerade tat, abgehalten zu werden",
        zh: "我无法容忍任何妨碍我继续做事的事情",
        es: "No toleraba nada que me impidiera seguir con lo que estaba haciendo",
      },
    },
    {
      id: "dass21-15",
      text: {
        en: "I felt I was close to panic",
        tr: "Panik olmaya yakın olduğumu hissettim",
        de: "Ich fühlte mich einer Panik nahe",
        zh: "我感到自己快要惊慌失措了",
        es: "Sentí que estaba a punto de entrar en pánico",
      },
    },
    {
      id: "dass21-16",
      text: {
        en: "I was unable to become enthusiastic about anything",
        tr: "Hiçbir şeye karşı heves duyamadım",
        de: "Ich konnte mich für nichts mehr begeistern",
        zh: "我对任何事情都提不起热情",
        es: "No fui capaz de entusiasmarme con nada",
      },
    },
    {
      id: "dass21-17",
      text: {
        en: "I felt I wasn't worth much as a person",
        tr: "Kişi olarak fazla bir değerimin olmadığını hissettim",
        de: "Ich hatte das Gefühl, als Person nicht viel wert zu sein",
        zh: "我觉得自己作为一个人没有多大价值",
        es: "Sentí que como persona no valía mucho",
      },
    },
    {
      id: "dass21-18",
      text: {
        en: "I felt that I was rather touchy",
        tr: "Oldukça alıngan olduğumu hissettim",
        de: "Ich fühlte, dass ich ziemlich empfindlich war",
        zh: "我觉得自己相当敏感、易被触怒",
        es: "Sentí que estaba bastante susceptible",
      },
    },
    {
      id: "dass21-19",
      text: {
        en: "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
        tr: "Fiziksel çaba göstermediğim hâlde kalbimin hareketlerini fark ettim (örneğin, kalp atışının hızlanması, kalbin bir atışı atlaması)",
        de: "Ich nahm meinen Herzschlag wahr, ohne mich körperlich angestrengt zu haben (z. B. Gefühl von Herzrasen oder Herzstolpern)",
        zh: "在没有体力活动的情况下，我能察觉到自己的心跳（例如感到心率加快或心跳漏跳）",
        es: "Fui consciente de los latidos de mi corazón sin haber hecho esfuerzo físico (p. ej., sensación de aumento del ritmo cardíaco, o de que el corazón se saltaba un latido)",
      },
    },
    {
      id: "dass21-20",
      text: {
        en: "I felt scared without any good reason",
        tr: "Geçerli bir neden olmadığı hâlde korktuğumu hissettim",
        de: "Ich fühlte mich ohne triftigen Grund ängstlich",
        zh: "我无缘无故地感到害怕",
        es: "Me sentí asustado sin ninguna razón justificada",
      },
    },
    {
      id: "dass21-21",
      text: {
        en: "I felt that life was meaningless",
        tr: "Yaşamın anlamsız olduğunu hissettim",
        de: "Ich hatte das Gefühl, dass das Leben sinnlos ist",
        zh: "我觉得生活毫无意义",
        es: "Sentí que la vida no tenía sentido",
      },
    },
  ],
  scoring: {
    kind: "subscales",
    subscales: [
      {
        id: "depression",
        label: { en: "Depression", tr: "Depresyon", de: "Depression", zh: "抑郁", es: "Depresión" },
        questionIds: ["dass21-3", "dass21-5", "dass21-10", "dass21-13", "dass21-16", "dass21-17", "dass21-21"],
        multiplier: 2,
        bands: depressionBands,
      },
      {
        id: "anxiety",
        label: { en: "Anxiety", tr: "Anksiyete", de: "Angst", zh: "焦虑", es: "Ansiedad" },
        questionIds: ["dass21-2", "dass21-4", "dass21-7", "dass21-9", "dass21-15", "dass21-19", "dass21-20"],
        multiplier: 2,
        bands: anxietyBands,
      },
      {
        id: "stress",
        label: { en: "Stress", tr: "Stres", de: "Stress", zh: "压力", es: "Estrés" },
        questionIds: ["dass21-1", "dass21-6", "dass21-8", "dass21-11", "dass21-12", "dass21-14", "dass21-18"],
        multiplier: 2,
        bands: stressBands,
      },
    ],
  },
  meta: {
    reference:
      "Lovibond, S. H., & Lovibond, P. F. (1995). Manual for the Depression Anxiety Stress Scales (2nd ed.). Sydney: Psychology Foundation.",
    license: "Free — public domain per the official DASS site, including translations",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past week",
  },
};
