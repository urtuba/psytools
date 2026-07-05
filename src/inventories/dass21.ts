import type { AssessmentDefinition, ScoreBand } from "../types.ts";

const depressionBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 9, label: { en: "Normal" } },
  { id: "mild", min: 10, max: 13, label: { en: "Mild" } },
  { id: "moderate", min: 14, max: 20, label: { en: "Moderate" } },
  { id: "severe", min: 21, max: 27, label: { en: "Severe" } },
  { id: "extremely-severe", min: 28, max: 42, label: { en: "Extremely severe" } },
];

const anxietyBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 7, label: { en: "Normal" } },
  { id: "mild", min: 8, max: 9, label: { en: "Mild" } },
  { id: "moderate", min: 10, max: 14, label: { en: "Moderate" } },
  { id: "severe", min: 15, max: 19, label: { en: "Severe" } },
  { id: "extremely-severe", min: 20, max: 42, label: { en: "Extremely severe" } },
];

const stressBands: ScoreBand[] = [
  { id: "normal", min: 0, max: 14, label: { en: "Normal" } },
  { id: "mild", min: 15, max: 18, label: { en: "Mild" } },
  { id: "moderate", min: 19, max: 25, label: { en: "Moderate" } },
  { id: "severe", min: 26, max: 33, label: { en: "Severe" } },
  { id: "extremely-severe", min: 34, max: 42, label: { en: "Extremely severe" } },
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
  },
  description: {
    en: "A 21-item self-report questionnaire measuring depression, anxiety, and stress over the past week.",
  },
  instructions: {
    en: "Please read each statement and select the option which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: {
        en: "Did not apply to me at all",
      },
    },
    {
      value: 1,
      label: {
        en: "Applied to me to some degree, or some of the time",
      },
    },
    {
      value: 2,
      label: {
        en: "Applied to me to a considerable degree, or a good part of the time",
      },
    },
    {
      value: 3,
      label: {
        en: "Applied to me very much, or most of the time",
      },
    },
  ],
  questions: [
    {
      id: "dass21-1",
      text: {
        en: "I found it hard to wind down",
      },
    },
    {
      id: "dass21-2",
      text: {
        en: "I was aware of dryness of my mouth",
      },
    },
    {
      id: "dass21-3",
      text: {
        en: "I couldn't seem to experience any positive feeling at all",
      },
    },
    {
      id: "dass21-4",
      text: {
        en: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
      },
    },
    {
      id: "dass21-5",
      text: {
        en: "I found it difficult to work up the initiative to do things",
      },
    },
    {
      id: "dass21-6",
      text: {
        en: "I tended to over-react to situations",
      },
    },
    {
      id: "dass21-7",
      text: {
        en: "I experienced trembling (e.g. in the hands)",
      },
    },
    {
      id: "dass21-8",
      text: {
        en: "I felt that I was using a lot of nervous energy",
      },
    },
    {
      id: "dass21-9",
      text: {
        en: "I was worried about situations in which I might panic and make a fool of myself",
      },
    },
    {
      id: "dass21-10",
      text: {
        en: "I felt that I had nothing to look forward to",
      },
    },
    {
      id: "dass21-11",
      text: {
        en: "I found myself getting agitated",
      },
    },
    {
      id: "dass21-12",
      text: {
        en: "I found it difficult to relax",
      },
    },
    {
      id: "dass21-13",
      text: {
        en: "I felt down-hearted and blue",
      },
    },
    {
      id: "dass21-14",
      text: {
        en: "I was intolerant of anything that kept me from getting on with what I was doing",
      },
    },
    {
      id: "dass21-15",
      text: {
        en: "I felt I was close to panic",
      },
    },
    {
      id: "dass21-16",
      text: {
        en: "I was unable to become enthusiastic about anything",
      },
    },
    {
      id: "dass21-17",
      text: {
        en: "I felt I wasn't worth much as a person",
      },
    },
    {
      id: "dass21-18",
      text: {
        en: "I felt that I was rather touchy",
      },
    },
    {
      id: "dass21-19",
      text: {
        en: "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
      },
    },
    {
      id: "dass21-20",
      text: {
        en: "I felt scared without any good reason",
      },
    },
    {
      id: "dass21-21",
      text: {
        en: "I felt that life was meaningless",
      },
    },
  ],
  scoring: {
    kind: "subscales",
    subscales: [
      {
        id: "depression",
        label: { en: "Depression" },
        questionIds: ["dass21-3", "dass21-5", "dass21-10", "dass21-13", "dass21-16", "dass21-17", "dass21-21"],
        multiplier: 2,
        bands: depressionBands,
      },
      {
        id: "anxiety",
        label: { en: "Anxiety" },
        questionIds: ["dass21-2", "dass21-4", "dass21-7", "dass21-9", "dass21-15", "dass21-19", "dass21-20"],
        multiplier: 2,
        bands: anxietyBands,
      },
      {
        id: "stress",
        label: { en: "Stress" },
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
