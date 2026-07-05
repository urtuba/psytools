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
  },
  description: {
    en: "A 9-item self-report questionnaire for screening and measuring the severity of depression.",
  },
  instructions: twoWeekInstructions,
  defaultLocale: "en",
  options: twoWeekFrequencyOptions,
  questions: [
    {
      id: "phq9-1",
      text: {
        en: "Little interest or pleasure in doing things",
      },
    },
    {
      id: "phq9-2",
      text: {
        en: "Feeling down, depressed, or hopeless",
      },
    },
    {
      id: "phq9-3",
      text: {
        en: "Trouble falling or staying asleep, or sleeping too much",
      },
    },
    {
      id: "phq9-4",
      text: {
        en: "Feeling tired or having little energy",
      },
    },
    {
      id: "phq9-5",
      text: {
        en: "Poor appetite or overeating",
      },
    },
    {
      id: "phq9-6",
      text: {
        en: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      },
    },
    {
      id: "phq9-7",
      text: {
        en: "Trouble concentrating on things, such as reading the newspaper or watching television",
      },
    },
    {
      id: "phq9-8",
      text: {
        en: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
      },
    },
    {
      id: "phq9-9",
      text: {
        en: "Thoughts that you would be better off dead or of hurting yourself in some way",
      },
    },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 7 },
    bands: [
      {
        id: "minimal",
        min: 0,
        max: 4,
        label: { en: "Minimal depression" },
      },
      {
        id: "mild",
        min: 5,
        max: 9,
        label: { en: "Mild depression" },
      },
      {
        id: "moderate",
        min: 10,
        max: 14,
        label: { en: "Moderate depression" },
      },
      {
        id: "moderately-severe",
        min: 15,
        max: 19,
        label: { en: "Moderately severe depression" },
      },
      {
        id: "severe",
        min: 20,
        max: 27,
        label: { en: "Severe depression" },
      },
    ],
    flags: [
      {
        id: "suicidality",
        questionId: "phq9-9",
        minValue: 1,
        label: {
          en: "Self-harm or suicidal ideation reported (item 9) — requires clinical attention",
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
