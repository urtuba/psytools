import type { AssessmentDefinition } from "../types.ts";

/**
 * ASRS v1.1 — Adult ADHD Self-Report Scale, 6-item screener (Part A).
 *
 * Developed by the WHO and the Workgroup on Adult ADHD (Harvard Medical
 * School / NYU). Items 1–3 count as screen-positive from "Sometimes" and
 * items 4–6 from "Often"; four or more positive items indicate symptoms
 * highly consistent with adult ADHD and warrant further investigation
 * (Kessler et al., 2005). Free to distribute and score.
 */
export const asrs6: AssessmentDefinition = {
  id: "asrs6",
  version: "1.0.0",
  title: {
    en: "Adult ADHD Self-Report Scale (ASRS-v1.1) Screener",
  },
  description: {
    en: "A 6-item screener for adult attention-deficit/hyperactivity disorder, drawn from the WHO's full 18-item ASRS.",
  },
  instructions: {
    en: "As you answer each question, select the option that best describes how you have felt and conducted yourself over the past 6 months.",
  },
  defaultLocale: "en",
  options: [
    { value: 0, label: { en: "Never" } },
    { value: 1, label: { en: "Rarely" } },
    { value: 2, label: { en: "Sometimes" } },
    { value: 3, label: { en: "Often" } },
    { value: 4, label: { en: "Very often" } },
  ],
  questions: [
    {
      id: "asrs6-1",
      text: {
        en: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
      },
    },
    {
      id: "asrs6-2",
      text: {
        en: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
      },
    },
    {
      id: "asrs6-3",
      text: {
        en: "How often do you have problems remembering appointments or obligations?",
      },
    },
    {
      id: "asrs6-4",
      text: {
        en: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
      },
    },
    {
      id: "asrs6-5",
      text: {
        en: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
      },
    },
    {
      id: "asrs6-6",
      text: {
        en: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
      },
    },
  ],
  scoring: {
    kind: "count",
    missing: { strategy: "require-complete" },
    items: [
      { questionId: "asrs6-1", minValue: 2 },
      { questionId: "asrs6-2", minValue: 2 },
      { questionId: "asrs6-3", minValue: 2 },
      { questionId: "asrs6-4", minValue: 3 },
      { questionId: "asrs6-5", minValue: 3 },
      { questionId: "asrs6-6", minValue: 3 },
    ],
    bands: [
      {
        id: "negative",
        min: 0,
        max: 3,
        label: {
          en: "Symptoms not consistent with adult ADHD",
        },
      },
      {
        id: "positive",
        min: 4,
        max: 6,
        label: {
          en: "Symptoms highly consistent with adult ADHD — further investigation warranted",
        },
      },
    ],
  },
  meta: {
    reference:
      "Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychological Medicine, 35(2), 245-256.",
    license:
      "Free with conditions — (c) WHO / Workgroup on Adult ADHD; free for clinical and research use. Verify licensing with the rights holders before embedding in commercial products.",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 6 months",
    note: "The score counts screen-positive items, not symptom severity.",
  },
};
