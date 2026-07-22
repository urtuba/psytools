import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

const yearlyFrequencyOptions: AssessmentOption[] = [
  { value: 0, label: { en: "Never" } },
  {
    value: 1,
    label: {
      en: "Less than monthly",
    },
  },
  {
    value: 2,
    label: { en: "Monthly" },
  },
  {
    value: 3,
    label: {
      en: "Weekly",
    },
  },
  {
    value: 4,
    label: {
      en: "Daily or almost daily",
    },
  },
];

// Items 9 and 10 score 0 / 2 / 4 — there is no 1 or 3.
const injuryOptions: AssessmentOption[] = [
  { value: 0, label: { en: "No" } },
  {
    value: 2,
    label: {
      en: "Yes, but not in the last year",
    },
  },
  {
    value: 4,
    label: {
      en: "Yes, during the last year",
    },
  },
];

/**
 * AUDIT — Alcohol Use Disorders Identification Test.
 *
 * 10 items developed by the WHO to detect hazardous and harmful alcohol
 * consumption. Items use variable point systems: 1–8 score 0–4 on
 * item-specific scales, 9–10 score 0/2/4. Total 0–40, interpreted in the
 * four risk zones of the WHO manual (Babor et al., 2001). Free to use.
 */
export const audit: AssessmentDefinition = {
  id: "audit",
  version: "1.0.0",
  categories: ["substance-use"],
  title: {
    en: "Alcohol Use Disorders Identification Test (AUDIT)",
  },
  description: {
    en: "A 10-item WHO screening instrument for hazardous and harmful alcohol consumption and possible alcohol dependence.",
  },
  instructions: {
    en: "Please answer the following questions about your use of alcoholic beverages during the past 12 months. One drink means one standard drink (e.g. a glass of beer or wine, or a single measure of spirits).",
  },
  defaultLocale: "en",
  options: yearlyFrequencyOptions,
  questions: [
    {
      id: "audit-1",
      text: {
        en: "How often do you have a drink containing alcohol?",
      },
      options: [
        { value: 0, label: { en: "Never" } },
        {
          value: 1,
          label: {
            en: "Monthly or less",
          },
        },
        {
          value: 2,
          label: {
            en: "2 to 4 times a month",
          },
        },
        {
          value: 3,
          label: {
            en: "2 to 3 times a week",
          },
        },
        {
          value: 4,
          label: {
            en: "4 or more times a week",
          },
        },
      ],
    },
    {
      id: "audit-2",
      text: {
        en: "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      },
      options: [
        { value: 0, label: { en: "1 or 2" } },
        { value: 1, label: { en: "3 or 4" } },
        { value: 2, label: { en: "5 or 6" } },
        { value: 3, label: { en: "7 to 9" } },
        {
          value: 4,
          label: {
            en: "10 or more",
          },
        },
      ],
    },
    {
      id: "audit-3",
      text: {
        en: "How often do you have six or more drinks on one occasion?",
      },
    },
    {
      id: "audit-4",
      text: {
        en: "How often during the last year have you found that you were not able to stop drinking once you had started?",
      },
    },
    {
      id: "audit-5",
      text: {
        en: "How often during the last year have you failed to do what was normally expected from you because of drinking?",
      },
    },
    {
      id: "audit-6",
      text: {
        en: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
      },
    },
    {
      id: "audit-7",
      text: {
        en: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
      },
    },
    {
      id: "audit-8",
      text: {
        en: "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",
      },
    },
    {
      id: "audit-9",
      text: {
        en: "Have you or someone else been injured as a result of your drinking?",
      },
      options: injuryOptions,
    },
    {
      id: "audit-10",
      text: {
        en: "Has a relative or friend or a doctor or another health worker been concerned about your drinking or suggested you cut down?",
      },
      options: injuryOptions,
    },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "ignore" },
    bands: [
      {
        id: "zone-1",
        min: 0,
        max: 7,
        label: {
          en: "Zone I: low risk — alcohol education",
        },
      },
      {
        id: "zone-2",
        min: 8,
        max: 15,
        label: {
          en: "Zone II: hazardous drinking — simple advice recommended",
        },
      },
      {
        id: "zone-3",
        min: 16,
        max: 19,
        label: {
          en: "Zone III: harmful drinking — brief counselling and continued monitoring",
        },
      },
      {
        id: "zone-4",
        min: 20,
        max: 40,
        label: {
          en: "Zone IV: possible dependence — referral for diagnostic evaluation",
        },
      },
    ],
  },
  meta: {
    reference:
      "Babor, T. F., Higgins-Biddle, J. C., Saunders, J. B., & Monteiro, M. G. (2001). AUDIT: The Alcohol Use Disorders Identification Test — Guidelines for Use in Primary Care (2nd ed.). Geneva: World Health Organization.",
    license: "Free — WHO permits reproduction and use of the AUDIT without permission",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 12 months",
  },
};
