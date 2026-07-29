import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** Descending 5–0 scale: the pole named first on the form scores highest. */
const descending: AssessmentOption[] = [5, 4, 3, 2, 1, 0].map((value) => ({
  value,
  label: { en: String(value) },
}));

/** Ascending 0–5 scale, for the two pairs the form prints the other way round. */
const ascending: AssessmentOption[] = [0, 1, 2, 3, 4, 5].map((value) => ({
  value,
  label: { en: String(value) },
}));

const labelled = (labels: string[], values: number[]): AssessmentOption[] =>
  labels.map((label, i) => ({ value: values[i]!, label: { en: label } }));

/**
 * CSI-16 — Couples Satisfaction Index, 16-item version.
 *
 * 16 items on four different answer scales, total 0–81, higher is more
 * satisfied; below 51.5 suggests notable dissatisfaction. Freely
 * available for clinical and research use per the authors' own form;
 * commercial use is not addressed either way — see SOURCES.md.
 */
export const csi16: AssessmentDefinition = {
  id: "csi16",
  version: "1.0.0",
  categories: ["relationships"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Couples Satisfaction Index (CSI-16)",
  },
  description: {
    en: "A 16-item self-report measure of relationship satisfaction, built with item response theory for precision in the dissatisfied range.",
  },
  instructions: {
    en: "For each of the following items, select the answer that best describes how you feel about your relationship. Base your responses on your first impressions and immediate feelings about the item.",
  },
  defaultLocale: "en",
  // Most items use the 0-5 "Not at all ... Completely" scale; the rest
  // carry their own, so the assessment-level scale is that one.
  options: labelled(
    ["Not at all", "A little", "Somewhat", "Mostly", "Almost Completely", "Completely"],
    [0, 1, 2, 3, 4, 5],
  ),
  questions: [
    {
      id: "csi16-1",
      text: {
        en: "Please indicate the degree of happiness, all things considered, of your relationship.",
      },
      options: labelled(
        [
          "Extremely Unhappy",
          "Fairly Unhappy",
          "A Little Unhappy",
          "Happy",
          "Very Happy",
          "Extremely Happy",
          "Perfect",
        ],
        [0, 1, 2, 3, 4, 5, 6],
      ),
    },
    {
      id: "csi16-2",
      text: {
        en: "In general, how often do you think that things between you and your partner are going well?",
      },
      options: labelled(
        [
          "All the time",
          "Most of the time",
          "More often than not",
          "Occasionally",
          "Rarely",
          "Never",
        ],
        [5, 4, 3, 2, 1, 0],
      ),
    },
    {
      id: "csi16-3",
      text: { en: "Our relationship is strong" },
      options: labelled(
        [
          "Not at all TRUE",
          "A little TRUE",
          "Somewhat TRUE",
          "Mostly TRUE",
          "Almost Completely TRUE",
          "Completely TRUE",
        ],
        [0, 1, 2, 3, 4, 5],
      ),
    },
    {
      id: "csi16-4",
      text: { en: "My relationship with my partner makes me happy" },
      options: labelled(
        [
          "Not at all TRUE",
          "A little TRUE",
          "Somewhat TRUE",
          "Mostly TRUE",
          "Almost Completely TRUE",
          "Completely TRUE",
        ],
        [0, 1, 2, 3, 4, 5],
      ),
    },
    {
      id: "csi16-5",
      text: { en: "I have a warm and comfortable relationship with my partner" },
      options: labelled(
        [
          "Not at all TRUE",
          "A little TRUE",
          "Somewhat TRUE",
          "Mostly TRUE",
          "Almost Completely TRUE",
          "Completely TRUE",
        ],
        [0, 1, 2, 3, 4, 5],
      ),
    },
    {
      id: "csi16-6",
      text: { en: "I really feel like part of a team with my partner" },
      options: labelled(
        [
          "Not at all TRUE",
          "A little TRUE",
          "Somewhat TRUE",
          "Mostly TRUE",
          "Almost Completely TRUE",
          "Completely TRUE",
        ],
        [0, 1, 2, 3, 4, 5],
      ),
    },
    { id: "csi16-7", text: { en: "How rewarding is your relationship with your partner?" } },
    { id: "csi16-8", text: { en: "How well does your partner meet your needs?" } },
    {
      id: "csi16-9",
      text: { en: "To what extent has your relationship met your original expectations?" },
    },
    { id: "csi16-10", text: { en: "In general, how satisfied are you with your relationship?" } },
    { id: "csi16-11", text: { en: "INTERESTING — BORING" }, options: descending },
    { id: "csi16-12", text: { en: "BAD — GOOD" }, options: ascending },
    { id: "csi16-13", text: { en: "FULL — EMPTY" }, options: descending },
    { id: "csi16-14", text: { en: "STURDY — FRAGILE" }, options: descending },
    { id: "csi16-15", text: { en: "DISCOURAGING — HOPEFUL" }, options: ascending },
    { id: "csi16-16", text: { en: "ENJOYABLE — MISERABLE" }, options: descending },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "require-complete" },
    bands: [
      {
        id: "dissatisfied",
        min: 0,
        max: 51,
        label: { en: "Notable relationship dissatisfaction" },
      },
      {
        id: "satisfied",
        min: 52,
        max: 81,
        label: { en: "No notable relationship dissatisfaction" },
      },
    ],
  },
  meta: {
    reference:
      "Funk, J. L., & Rogge, R. D. (2007). Testing the ruler with item response theory: Increasing precision of measurement for relationship satisfaction with the Couples Satisfaction Index. Journal of Family Psychology, 21(4), 572-583.",
    license:
      "Free with conditions — the authors state the CSI scales are freely available for use in both clinical and research settings with no additional permission necessary; commercial use is not addressed either way",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: transcribed from the authors' own CSI-16 form, https://couples-research.com/measures/. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from the original English; published adaptations were not consulted and the texts are unverified. See SOURCES.md.",
    scoringNote:
      "Sum 0-81, higher is more satisfied — the opposite direction from every other bundled inventory, where a higher score means more of a problem. The authors' cutoff is 51.5, so the bundled bands split at 51/52. Four different answer scales are in play, which is why most items carry their own `options`: item 1 is a 7-point 0-6 happiness scale, item 2 runs 5 down to 0, items 3-6 are 0-5 agreement, items 7-10 are the 0-5 assessment-level scale, and items 11-16 are semantic differentials.",
    renderingNote:
      "Items 11-16 are semantic differentials: two opposing words with six unlabelled positions between them. The `text` carries both poles in the order the authors print them, left to right, and the six options are labelled with the position numbers as they appear on the authors' own form. The authors note that when they administer the scale they replace those numbers with blank circles or radio buttons; a renderer wanting that should draw the poles from `text` at each end of a row of six controls, keyed by option position. `instructions` carries the only instruction line printed on the form, which on paper introduces items 11-16; items 1-10 carry self-contained stems and need none.",
  },
};
