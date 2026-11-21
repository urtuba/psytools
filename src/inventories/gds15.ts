import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** Yes/no, with "yes" scoring 1. Items keyed on "no" are `reverseScored`. */
const yesNoOptions: AssessmentOption[] = [
  { value: 1, label: { en: "Yes" } },
  { value: 0, label: { en: "No" } },
];

/** Items where "no" is the answer that indicates depression. */
const keyedNo = new Set([1, 5, 7, 11, 13]);

const items: string[] = [
  "Are you basically satisfied with your life?",
  "Have you dropped many of your activities and interests?",
  "Do you feel that your life is empty?",
  "Do you often get bored?",
  "Are you in good spirits most of the time?",
  "Are you afraid that something bad is going to happen to you?",
  "Do you feel happy most of the time?",
  "Do you often feel helpless?",
  "Do you prefer to stay at home, rather than going out and doing new things?",
  "Do you feel you have more problems with memory than most?",
  "Do you think it is wonderful to be alive now?",
  "Do you feel pretty worthless the way you are now?",
  "Do you feel full of energy?",
  "Do you feel that your situation is hopeless?",
  "Do you think that most people are better off than you are?",
];

/**
 * GDS-15: Geriatric Depression Scale, short form.
 *
 * 15 yes/no items about the past week, one point per answer in the
 * depressive direction, total 0-15. "No" is the depressive answer on
 * items 1, 5, 7, 11 and 13 (modelled as `reverseScored`), "yes" on the
 * other ten. Bands follow the authors' own scoring page: more than 5
 * suggests depression, more than 10 is almost always depression.
 */
export const gds15: AssessmentDefinition = {
  id: "gds15",
  version: "1.0.0",
  categories: ["depression"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Geriatric Depression Scale, Short Form (GDS-15)",
  },
  description: {
    en: "A 15-item yes/no screening scale for depression in older adults.",
  },
  instructions: {
    en: "Choose the best answer for how you have felt over the past week:",
  },
  defaultLocale: "en",
  options: yesNoOptions,
  questions: items.map((text, i) => ({
    id: `gds15-${i + 1}`,
    text: { en: text },
    ...(keyedNo.has(i + 1) ? { reverseScored: true } : {}),
  })),
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 10 },
    bands: [
      { id: "below-cutoff", min: 0, max: 5, label: { en: "Below the follow-up threshold" } },
      {
        id: "suggestive",
        min: 6,
        max: 10,
        label: { en: "Suggestive of depression: a follow-up interview is warranted" },
      },
      { id: "likely", min: 11, max: 15, label: { en: "Almost always depression" } },
    ],
  },
  meta: {
    reference:
      "Sheikh, J. I., & Yesavage, J. A. (1986). Geriatric Depression Scale (GDS): Recent evidence and development of a shorter version. In Clinical Gerontology: A Guide to Assessment and Intervention (pp. 165-173). New York: The Haworth Press.",
    license:
      "Free: \"The original scale is in the public domain due to it being partly the result of Federal support\" (J. A. Yesavage, https://web.stanford.edu/~yesavage/GDS.html). See SOURCES.md for how this statement is read for the short form.",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from the authors' \"Short Form English\" page, https://web.stanford.edu/~yesavage/GDS.english.short.html, with the keyed answers taken from \"Short Form English Scoring\", https://web.stanford.edu/~yesavage/GDS.english.short.score.html (fetched 2026-11-21). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5-5) from the original English; the translations listed on the authors' page were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past week",
    scoringNote:
      "Sum 0-15, one point per answer in the depressive direction: \"no\" on items 1, 5, 7, 11, 13 and \"yes\" on the rest. Bands follow the authors' scoring page: \"for clinical purposes a score > 5 points is suggestive of depression and should warrent a follow-up interview. Scores > 10 are almost always depression.\" The same page notes that sensitivity and specificity differ across studies. Missing data: the authors prorate (score x 15 / answered) and would treat more than 5 missing items as invalid, so at least 10 answers are required; they round a fractional result up, while psytools rounds to the nearest integer.",
  },
};
