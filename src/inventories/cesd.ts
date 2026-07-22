import type { AssessmentDefinition } from "../types.ts";

/**
 * CES-D — Center for Epidemiologic Studies Depression Scale.
 *
 * 20 items, 0–3 past-week frequency scale, total score 0–60. Items 4, 8,
 * 12 and 16 are positively worded and reverse scored. Scores of 16 or
 * above indicate elevated depressive symptoms (Radloff, 1977). Developed
 * at the U.S. National Institute of Mental Health; the scale is in the
 * public domain.
 */
export const cesd: AssessmentDefinition = {
  id: "cesd",
  version: "1.0.0",
  categories: ["depression"],
  title: {
    en: "Center for Epidemiologic Studies Depression Scale (CES-D)",
  },
  description: {
    en: "A 20-item self-report scale designed to measure depressive symptomatology in the general population.",
  },
  instructions: {
    en: "Please read each statement carefully, then indicate how often you felt or behaved this way during the past week, including today.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: {
        en: "Rarely or none of the time (less than 1 day)",
      },
    },
    {
      value: 1,
      label: {
        en: "Some or a little of the time (1-2 days)",
      },
    },
    {
      value: 2,
      label: {
        en: "Occasionally or a moderate amount of the time (3-4 days)",
      },
    },
    {
      value: 3,
      label: {
        en: "Most or all of the time (5-7 days)",
      },
    },
  ],
  questions: [
    {
      id: "cesd-1",
      text: {
        en: "I was bothered by things that usually don't bother me",
      },
    },
    {
      id: "cesd-2",
      text: {
        en: "I did not feel like eating; my appetite was poor",
      },
    },
    {
      id: "cesd-3",
      text: {
        en: "I felt that I could not shake off the blues even with help from my family and friends",
      },
    },
    {
      id: "cesd-4",
      text: {
        en: "I felt that I was just as good as other people",
      },
      reverseScored: true,
    },
    {
      id: "cesd-5",
      text: {
        en: "I had trouble keeping my mind on what I was doing",
      },
    },
    {
      id: "cesd-6",
      text: {
        en: "I felt depressed",
      },
    },
    {
      id: "cesd-7",
      text: {
        en: "I felt that everything I did was an effort",
      },
    },
    {
      id: "cesd-8",
      text: {
        en: "I felt hopeful about the future",
      },
      reverseScored: true,
    },
    {
      id: "cesd-9",
      text: {
        en: "I thought my life had been a failure",
      },
    },
    {
      id: "cesd-10",
      text: {
        en: "I felt fearful",
      },
    },
    {
      id: "cesd-11",
      text: {
        en: "My sleep was restless",
      },
    },
    {
      id: "cesd-12",
      text: {
        en: "I was happy",
      },
      reverseScored: true,
    },
    {
      id: "cesd-13",
      text: {
        en: "I talked less than usual",
      },
    },
    {
      id: "cesd-14",
      text: {
        en: "I felt lonely",
      },
    },
    {
      id: "cesd-15",
      text: {
        en: "People were unfriendly",
      },
    },
    {
      id: "cesd-16",
      text: {
        en: "I enjoyed life",
      },
      reverseScored: true,
    },
    {
      id: "cesd-17",
      text: {
        en: "I had crying spells",
      },
    },
    {
      id: "cesd-18",
      text: {
        en: "I felt sad",
      },
    },
    {
      id: "cesd-19",
      text: {
        en: "I felt that people disliked me",
      },
    },
    {
      id: "cesd-20",
      text: {
        en: "I could not get \"going\"",
      },
    },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 16 },
    bands: [
      {
        id: "below-cutoff",
        min: 0,
        max: 15,
        label: { en: "Below the clinical cutoff" },
      },
      {
        id: "elevated",
        min: 16,
        max: 60,
        label: { en: "Elevated depressive symptoms (at or above the cutoff of 16)" },
      },
    ],
  },
  meta: {
    reference:
      "Radloff, L. S. (1977). The CES-D Scale: A self-report depression scale for research in the general population. Applied Psychological Measurement, 1(3), 385-401.",
    license:
      "Free — developed at the U.S. National Institute of Mental Health; the scale is in the public domain and may be used without permission",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original instrument (via the NIDA Seek, Test, Treat and Retain data harmonization packet). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past week",
    scoringNote:
      "The >=16 cutoff for elevated depressive symptoms follows Radloff (1977); it screens for risk and is not a diagnosis. The prorating threshold (>=16 of 20 items) is an implementation choice, not part of the published scoring.",
  },
};
