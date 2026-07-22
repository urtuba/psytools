import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

const agreementOptions: AssessmentOption[] = [
  { value: 1, label: { en: "1 — Strongly disagree" } },
  { value: 2, label: { en: "2" } },
  { value: 3, label: { en: "3" } },
  { value: 4, label: { en: "4 — Neutral" } },
  { value: 5, label: { en: "5" } },
  { value: 6, label: { en: "6" } },
  { value: 7, label: { en: "7 — Strongly agree" } },
];

/**
 * ERQ — Emotion Regulation Questionnaire (Gross & John, 2003).
 *
 * 10 items on a 1–7 agreement scale, two subscales: cognitive reappraisal
 * (items 1, 3, 5, 7, 8, 10) and expressive suppression (items 2, 4, 6, 9).
 * No reversals; subscale results are sums (the published convention is the
 * item mean — divide by 6 and 4 respectively). The strategies are
 * descriptive individual differences — no clinical cutoffs exist, so no
 * bands are defined. The authors instruct not to change the item order:
 * items 1 and 3 define the terms "positive emotion" and "negative emotion".
 *
 * Research use only: distributed by the authors for non-commercial
 * research (Stanford Psychophysiology Laboratory).
 */
export const erq: AssessmentDefinition = {
  id: "erq",
  version: "1.0.0",
  categories: ["emotion-regulation"],
  title: {
    en: "Emotion Regulation Questionnaire (ERQ)",
  },
  description: {
    en: "A 10-item measure of individual differences in the habitual use of two emotion regulation strategies: cognitive reappraisal and expressive suppression.",
  },
  instructions: {
    en: "We would like to ask you some questions about your emotional life, in particular, how you control (that is, regulate and manage) your emotions. The questions below involve two distinct aspects of your emotional life. One is your emotional experience, or what you feel like inside. The other is your emotional expression, or how you show your emotions in the way you talk, gesture, or behave. Although some of the following questions may seem similar to one another, they differ in important ways.",
  },
  defaultLocale: "en",
  options: agreementOptions,
  questions: [
    { id: "erq-1", text: { en: "When I want to feel more positive emotion (such as joy or amusement), I change what I'm thinking about." } },
    { id: "erq-2", text: { en: "I keep my emotions to myself." } },
    { id: "erq-3", text: { en: "When I want to feel less negative emotion (such as sadness or anger), I change what I'm thinking about." } },
    { id: "erq-4", text: { en: "When I am feeling positive emotions, I am careful not to express them." } },
    { id: "erq-5", text: { en: "When I'm faced with a stressful situation, I make myself think about it in a way that helps me stay calm." } },
    { id: "erq-6", text: { en: "I control my emotions by not expressing them." } },
    { id: "erq-7", text: { en: "When I want to feel more positive emotion, I change the way I'm thinking about the situation." } },
    { id: "erq-8", text: { en: "I control my emotions by changing the way I think about the situation I'm in." } },
    { id: "erq-9", text: { en: "When I am feeling negative emotions, I make sure not to express them." } },
    { id: "erq-10", text: { en: "When I want to feel less negative emotion, I change the way I'm thinking about the situation." } },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "require-complete" },
    subscales: [
      {
        id: "reappraisal",
        label: { en: "Cognitive reappraisal" },
        questionIds: ["erq-1", "erq-3", "erq-5", "erq-7", "erq-8", "erq-10"],
      },
      {
        id: "suppression",
        label: { en: "Expressive suppression" },
        questionIds: ["erq-2", "erq-4", "erq-6", "erq-9"],
      },
    ],
  },
  meta: {
    reference:
      "Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85(2), 348-362.",
    license:
      "Research only — distributed by the authors free of charge for non-commercial research (Stanford Psychophysiology Laboratory); commercial use is not licensed",
    licenseFlag: "research-only",
    translationProvenance:
      "en: reproduced from the original instrument (Gross & John, 2003; official Stanford SPL distribution). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. A validated Turkish adaptation exists (Ulaşan Özgüle, 2011) but uses a 6-point response scale and a different item order, so it cannot be represented as a locale pack of this definition. See SOURCES.md.",
    scoringNote:
      "Subscale results are sums (reappraisal 6-42, suppression 4-28); the published convention reports item means — divide by 6 and 4 respectively.",
  },
};
