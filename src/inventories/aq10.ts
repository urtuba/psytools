import type { AssessmentDefinition } from "../types.ts";

/**
 * AQ-10 — Autism Spectrum Quotient, 10-item version (adults).
 *
 * Recommended by NICE (UK) for quick screening of autistic traits in
 * adults. Each item is answered on a 4-point agree/disagree scale but
 * scores binary: one point per item answered in the trait direction
 * ("agree" on items 1, 7, 8, 10; "disagree" on the rest, modeled here as
 * `reverseScored`). A total of 6 or more suggests referral for a
 * specialist autism assessment (Allison et al., 2012). Free to use.
 */
export const aq10: AssessmentDefinition = {
  id: "aq10",
  version: "1.0.0",
  title: {
    en: "Autism Spectrum Quotient (AQ-10) — Adult",
  },
  description: {
    en: "A 10-item screening questionnaire for autistic traits in adults, condensed from the 50-item Autism Spectrum Quotient.",
  },
  instructions: {
    en: "For each statement, select the answer that best describes you.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: { en: "Definitely disagree" },
    },
    {
      value: 1,
      label: { en: "Slightly disagree" },
    },
    {
      value: 2,
      label: { en: "Slightly agree" },
    },
    {
      value: 3,
      label: { en: "Definitely agree" },
    },
  ],
  questions: [
    {
      id: "aq10-1",
      text: {
        en: "I often notice small sounds when others do not",
      },
    },
    {
      id: "aq10-2",
      text: {
        en: "I usually concentrate more on the whole picture, rather than the small details",
      },
      reverseScored: true,
    },
    {
      id: "aq10-3",
      text: {
        en: "I find it easy to do more than one thing at once",
      },
      reverseScored: true,
    },
    {
      id: "aq10-4",
      text: {
        en: "If there is an interruption, I can switch back to what I was doing very quickly",
      },
      reverseScored: true,
    },
    {
      id: "aq10-5",
      text: {
        en: "I find it easy to 'read between the lines' when someone is talking to me",
      },
      reverseScored: true,
    },
    {
      id: "aq10-6",
      text: {
        en: "I know how to tell if someone listening to me is getting bored",
      },
      reverseScored: true,
    },
    {
      id: "aq10-7",
      text: {
        en: "When I'm reading a story I find it difficult to work out the characters' intentions",
      },
    },
    {
      id: "aq10-8",
      text: {
        en: "I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc)",
      },
    },
    {
      id: "aq10-9",
      text: {
        en: "I find it easy to work out what someone is thinking or feeling just by looking at their face",
      },
      reverseScored: true,
    },
    {
      id: "aq10-10",
      text: {
        en: "I find it difficult to work out people's intentions",
      },
    },
  ],
  scoring: {
    kind: "count",
    missing: { strategy: "require-complete" },
    items: [
      { questionId: "aq10-1", minValue: 2 },
      { questionId: "aq10-2", minValue: 2 },
      { questionId: "aq10-3", minValue: 2 },
      { questionId: "aq10-4", minValue: 2 },
      { questionId: "aq10-5", minValue: 2 },
      { questionId: "aq10-6", minValue: 2 },
      { questionId: "aq10-7", minValue: 2 },
      { questionId: "aq10-8", minValue: 2 },
      { questionId: "aq10-9", minValue: 2 },
      { questionId: "aq10-10", minValue: 2 },
    ],
    bands: [
      {
        id: "below-threshold",
        min: 0,
        max: 5,
        label: {
          en: "Below screening threshold",
        },
      },
      {
        id: "above-threshold",
        min: 6,
        max: 10,
        label: {
          en: "At or above threshold — consider referral for a specialist autism assessment",
        },
      },
    ],
  },
  meta: {
    reference:
      "Allison, C., Auyeung, B., & Baron-Cohen, S. (2012). Toward brief \"Red Flags\" for autism screening: The Short Autism Spectrum Quotient and the Short Quantitative Checklist in 1,000 cases and 3,000 controls. Journal of the American Academy of Child & Adolescent Psychiatry, 51(2), 202-212.",
    license:
      "Free with conditions — (c) Autism Research Centre, University of Cambridge; distributed free of charge, NICE-recommended for clinical screening. Verify licensing with ARC before embedding in commercial products.",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note: "Each item scores 1 point in the trait direction; disagree-scored items are modeled as reverseScored.",
  },
};
