import type { AssessmentDefinition, ScoreBand } from "../types.ts";

const depressionBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 9, label: { en: "Normal", tr: "Normal", de: "Normal" } },
  { id: "mild", min: 10, max: 13, label: { en: "Mild", tr: "Hafif", de: "Leicht" } },
  { id: "moderate", min: 14, max: 20, label: { en: "Moderate", tr: "Orta", de: "Moderat" } },
  { id: "severe", min: 21, max: 27, label: { en: "Severe", tr: "Şiddetli", de: "Schwer" } },
  { id: "extremely-severe", min: 28, max: 42, label: { en: "Extremely severe", tr: "Çok şiddetli", de: "Sehr schwer" } },
];

const anxietyBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 7, label: { en: "Normal", tr: "Normal", de: "Normal" } },
  { id: "mild", min: 8, max: 9, label: { en: "Mild", tr: "Hafif", de: "Leicht" } },
  { id: "moderate", min: 10, max: 14, label: { en: "Moderate", tr: "Orta", de: "Moderat" } },
  { id: "severe", min: 15, max: 19, label: { en: "Severe", tr: "Şiddetli", de: "Schwer" } },
  { id: "extremely-severe", min: 20, max: 42, label: { en: "Extremely severe", tr: "Çok şiddetli", de: "Sehr schwer" } },
];

const stressBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 14, label: { en: "Normal", tr: "Normal", de: "Normal" } },
  { id: "mild", min: 15, max: 18, label: { en: "Mild", tr: "Hafif", de: "Leicht" } },
  { id: "moderate", min: 19, max: 25, label: { en: "Moderate", tr: "Orta", de: "Moderat" } },
  { id: "severe", min: 26, max: 33, label: { en: "Severe", tr: "Şiddetli", de: "Schwer" } },
  { id: "extremely-severe", min: 34, max: 42, label: { en: "Extremely severe", tr: "Çok şiddetli", de: "Sehr schwer" } },
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
  },
  description: {
    en: "A 21-item self-report questionnaire measuring depression, anxiety, and stress over the past week.",
    tr: "Geçtiğimiz hafta boyunca depresyon, anksiyete ve stresi ölçen 21 maddelik bir öz bildirim ölçeği.",
    de: "Ein Selbstbeurteilungsfragebogen mit 21 Items zur Messung von Depression, Angst und Stress in der vergangenen Woche.",
  },
  instructions: {
    en: "Please read each statement and select the option which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.",
    tr: "Lütfen her ifadeyi okuyun ve geçtiğimiz hafta boyunca ifadenin size ne kadar uyduğunu gösteren seçeneği işaretleyin. Doğru ya da yanlış cevap yoktur. Herhangi bir ifade üzerinde çok fazla zaman harcamayın.",
    de: "Bitte lesen Sie jede Aussage und wählen Sie die Option, die angibt, wie sehr die Aussage in der vergangenen Woche auf Sie zutraf. Es gibt keine richtigen oder falschen Antworten. Verbringen Sie nicht zu viel Zeit mit einer Aussage.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: {
        en: "Did not apply to me at all",
        tr: "Bana hiç uymadı",
        de: "Traf gar nicht auf mich zu",
      },
    },
    {
      value: 1,
      label: {
        en: "Applied to me to some degree, or some of the time",
        tr: "Bana biraz uydu ya da zaman zaman uydu",
        de: "Traf bis zu einem gewissen Grad oder manchmal auf mich zu",
      },
    },
    {
      value: 2,
      label: {
        en: "Applied to me to a considerable degree, or a good part of the time",
        tr: "Bana oldukça uydu ya da zamanın büyük bölümünde uydu",
        de: "Traf in beträchtlichem Maße oder einen guten Teil der Zeit auf mich zu",
      },
    },
    {
      value: 3,
      label: {
        en: "Applied to me very much, or most of the time",
        tr: "Bana çok uydu ya da hemen hemen her zaman uydu",
        de: "Traf sehr stark oder die meiste Zeit auf mich zu",
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
      },
    },
    {
      id: "dass21-2",
      text: {
        en: "I was aware of dryness of my mouth",
        tr: "Ağzımın kuruduğunu fark ettim",
        de: "Ich bemerkte, dass mein Mund trocken war",
      },
    },
    {
      id: "dass21-3",
      text: {
        en: "I couldn't seem to experience any positive feeling at all",
        tr: "Hiç olumlu duygu yaşayamadığımı fark ettim",
        de: "Ich konnte überhaupt keine positiven Gefühle mehr erleben",
      },
    },
    {
      id: "dass21-4",
      text: {
        en: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
        tr: "Nefes almada zorluk yaşadım (örneğin, fiziksel çaba göstermediğim hâlde aşırı hızlı nefes alma, nefessiz kalma)",
        de: "Ich hatte Atemprobleme (z. B. übermäßig schnelle Atmung, Atemlosigkeit ohne körperliche Anstrengung)",
      },
    },
    {
      id: "dass21-5",
      text: {
        en: "I found it difficult to work up the initiative to do things",
        tr: "Bir işe başlamak için gereken isteği kendimde bulmakta zorlandım",
        de: "Es fiel mir schwer, die Initiative zu ergreifen, um Dinge zu erledigen",
      },
    },
    {
      id: "dass21-6",
      text: {
        en: "I tended to over-react to situations",
        tr: "Olaylara aşırı tepki verme eğiliminde oldum",
        de: "Ich neigte dazu, auf Situationen überzureagieren",
      },
    },
    {
      id: "dass21-7",
      text: {
        en: "I experienced trembling (e.g. in the hands)",
        tr: "Titreme yaşadım (örneğin ellerde)",
        de: "Ich hatte Zittern (z. B. in den Händen)",
      },
    },
    {
      id: "dass21-8",
      text: {
        en: "I felt that I was using a lot of nervous energy",
        tr: "Sinirsel enerjimin çok fazla olduğunu hissettim",
        de: "Ich fühlte, dass ich viel nervöse Energie verbrauchte",
      },
    },
    {
      id: "dass21-9",
      text: {
        en: "I was worried about situations in which I might panic and make a fool of myself",
        tr: "Panikleyip kendimi gülünç duruma düşürebileceğim durumlar nedeniyle endişelendim",
        de: "Ich machte mir Sorgen über Situationen, in denen ich in Panik geraten und mich blamieren könnte",
      },
    },
    {
      id: "dass21-10",
      text: {
        en: "I felt that I had nothing to look forward to",
        tr: "Dört gözle beklediğim hiçbir şey olmadığını hissettim",
        de: "Ich hatte das Gefühl, mich auf nichts mehr freuen zu können",
      },
    },
    {
      id: "dass21-11",
      text: {
        en: "I found myself getting agitated",
        tr: "Giderek huzursuzlandığımı fark ettim",
        de: "Ich merkte, dass ich unruhig wurde",
      },
    },
    {
      id: "dass21-12",
      text: {
        en: "I found it difficult to relax",
        tr: "Gevşeyip rahatlamakta zorlandım",
        de: "Es fiel mir schwer, mich zu entspannen",
      },
    },
    {
      id: "dass21-13",
      text: {
        en: "I felt down-hearted and blue",
        tr: "Kendimi üzgün ve karamsar hissettim",
        de: "Ich fühlte mich niedergeschlagen und traurig",
      },
    },
    {
      id: "dass21-14",
      text: {
        en: "I was intolerant of anything that kept me from getting on with what I was doing",
        tr: "Yaptığım işi sürdürmeme engel olan şeylere tahammül edemedim",
        de: "Ich konnte es nicht ertragen, von dem, was ich gerade tat, abgehalten zu werden",
      },
    },
    {
      id: "dass21-15",
      text: {
        en: "I felt I was close to panic",
        tr: "Panik olmaya yakın olduğumu hissettim",
        de: "Ich fühlte mich einer Panik nahe",
      },
    },
    {
      id: "dass21-16",
      text: {
        en: "I was unable to become enthusiastic about anything",
        tr: "Hiçbir şeye karşı heves duyamadım",
        de: "Ich konnte mich für nichts mehr begeistern",
      },
    },
    {
      id: "dass21-17",
      text: {
        en: "I felt I wasn't worth much as a person",
        tr: "Kişi olarak fazla bir değerimin olmadığını hissettim",
        de: "Ich hatte das Gefühl, als Person nicht viel wert zu sein",
      },
    },
    {
      id: "dass21-18",
      text: {
        en: "I felt that I was rather touchy",
        tr: "Oldukça alıngan olduğumu hissettim",
        de: "Ich fühlte, dass ich ziemlich empfindlich war",
      },
    },
    {
      id: "dass21-19",
      text: {
        en: "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
        tr: "Fiziksel çaba göstermediğim hâlde kalbimin hareketlerini fark ettim (örneğin, kalp atışının hızlanması, kalbin bir atışı atlaması)",
        de: "Ich nahm meinen Herzschlag wahr, ohne mich körperlich angestrengt zu haben (z. B. Gefühl von Herzrasen oder Herzstolpern)",
      },
    },
    {
      id: "dass21-20",
      text: {
        en: "I felt scared without any good reason",
        tr: "Geçerli bir neden olmadığı hâlde korktuğumu hissettim",
        de: "Ich fühlte mich ohne triftigen Grund ängstlich",
      },
    },
    {
      id: "dass21-21",
      text: {
        en: "I felt that life was meaningless",
        tr: "Yaşamın anlamsız olduğunu hissettim",
        de: "Ich hatte das Gefühl, dass das Leben sinnlos ist",
      },
    },
  ],
  scoring: {
    kind: "subscales",
    subscales: [
      {
        id: "depression",
        label: { en: "Depression", tr: "Depresyon", de: "Depression" },
        questionIds: ["dass21-3", "dass21-5", "dass21-10", "dass21-13", "dass21-16", "dass21-17", "dass21-21"],
        multiplier: 2,
        bands: depressionBands,
      },
      {
        id: "anxiety",
        label: { en: "Anxiety", tr: "Anksiyete", de: "Angst" },
        questionIds: ["dass21-2", "dass21-4", "dass21-7", "dass21-9", "dass21-15", "dass21-19", "dass21-20"],
        multiplier: 2,
        bands: anxietyBands,
      },
      {
        id: "stress",
        label: { en: "Stress", tr: "Stres", de: "Stress" },
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
      "en: reproduced from the original. tr/de: AI-assisted (Anthropic Claude, claude-fable-5) following the published validated versions; not verified against the official documents. See SOURCES.md.",
    timeframe: "past week",
  },
};
