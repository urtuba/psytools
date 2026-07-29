import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/**
 * The EAT-26's six frequency anchors. Items 1–25 score only the top three
 * (Always 3, Usually 2, Often 1; Sometimes/Rarely/Never all 0) and item 26
 * scores the bottom three the other way round — the instrument's own
 * asymmetric key, not a reversal of a symmetric scale, which is why both
 * scales are spelled out rather than expressed with `reverseScored`.
 */
const frequencyLabels = ["Always", "Usually", "Often", "Sometimes", "Rarely", "Never"];

const symptomOptions: AssessmentOption[] = [3, 2, 1, 0, 0, 0].map((value, i) => ({
  value,
  label: { en: frequencyLabels[i]! },
}));

const item26Options: AssessmentOption[] = [0, 0, 0, 1, 2, 3].map((value, i) => ({
  value,
  label: { en: frequencyLabels[i]! },
}));

/**
 * EAT-26 — Eating Attitudes Test, 26-item version.
 *
 * 26 items, total 0–78, referral recommended at 20 or above. psytools
 * bundles Part B of Garner's form (the 26 scored items); the BMI section
 * and the five behavioural questions of Parts A and C are part of his
 * wider screening protocol, not of the EAT-26 score, and are not shipped.
 * Free for individual use; commercial web platforms that charge user fees
 * need a licensing agreement from the copyright holder — see SOURCES.md.
 */
export const eat26: AssessmentDefinition = {
  id: "eat26",
  version: "1.0.0",
  categories: ["disordered-eating"],
  audience: ["adolescent", "adult"],
  respondent: "self",
  title: {
    en: "Eating Attitudes Test (EAT-26)",
  },
  description: {
    en: "A 26-item self-report screening measure of symptoms and concerns characteristic of eating disorders.",
  },
  instructions: {
    en: "This is a screening measure to help you determine whether you might have an eating disorder that needs professional attention. This screening measure is not designed to make a diagnosis of an eating disorder or take the place of a professional consultation. Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers. All of your responses are confidential.",
  },
  defaultLocale: "en",
  options: symptomOptions,
  questions: [
    { id: "eat26-1", text: { en: "Am terrified about being overweight." } },
    { id: "eat26-2", text: { en: "Avoid eating when I am hungry." } },
    { id: "eat26-3", text: { en: "Find myself preoccupied with food." } },
    {
      id: "eat26-4",
      text: { en: "Have gone on eating binges where I feel that I may not be able to stop." },
    },
    { id: "eat26-5", text: { en: "Cut my food into small pieces." } },
    { id: "eat26-6", text: { en: "Aware of the calorie content of foods that I eat." } },
    {
      id: "eat26-7",
      text: {
        en: "Particularly avoid food with a high carbohydrate content (i.e. bread, rice, potatoes, etc.)",
      },
    },
    { id: "eat26-8", text: { en: "Feel that others would prefer if I ate more." } },
    { id: "eat26-9", text: { en: "Vomit after I have eaten." } },
    { id: "eat26-10", text: { en: "Feel extremely guilty after eating." } },
    { id: "eat26-11", text: { en: "Am preoccupied with a desire to be thinner." } },
    { id: "eat26-12", text: { en: "Think about burning up calories when I exercise." } },
    { id: "eat26-13", text: { en: "Other people think that I am too thin." } },
    { id: "eat26-14", text: { en: "Am preoccupied with the thought of having fat on my body." } },
    { id: "eat26-15", text: { en: "Take longer than others to eat my meals." } },
    { id: "eat26-16", text: { en: "Avoid foods with sugar in them." } },
    { id: "eat26-17", text: { en: "Eat diet foods." } },
    { id: "eat26-18", text: { en: "Feel that food controls my life." } },
    { id: "eat26-19", text: { en: "Display self-control around food." } },
    { id: "eat26-20", text: { en: "Feel that others pressure me to eat." } },
    { id: "eat26-21", text: { en: "Give too much time and thought to food." } },
    { id: "eat26-22", text: { en: "Feel uncomfortable after eating sweets." } },
    { id: "eat26-23", text: { en: "Engage in dieting behavior." } },
    { id: "eat26-24", text: { en: "Like my stomach to be empty." } },
    { id: "eat26-25", text: { en: "Have the impulse to vomit after meals." } },
    { id: "eat26-26", text: { en: "Enjoy trying new rich foods." }, options: item26Options },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 21 },
    bands: [
      {
        id: "below-cutoff",
        min: 0,
        max: 19,
        label: { en: "Below the referral cutoff" },
      },
      {
        id: "at-or-above-cutoff",
        min: 20,
        max: 78,
        label: {
          en: "At or above the referral cutoff — evaluation by a qualified professional is recommended",
        },
      },
    ],
  },
  meta: {
    reference:
      "Garner, D. M., Olmsted, M. P., Bohr, Y., & Garfinkel, P. E. (1982). The Eating Attitudes Test: Psychometric features and clinical correlates. Psychological Medicine, 12(4), 871-878.",
    license:
      "Free with conditions — free for individual use, all fees and royalties waived; commercial web platforms that charge user fees must obtain a licensing agreement from the copyright holder (David M. Garner / Eating Attitudes LLC)",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: transcribed from the copyright holder's own EAT-26 form, https://www.eat-26.com/downloads/. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from the original English; official translations and published adaptations were not consulted and the texts are unverified. See SOURCES.md.",
    renderingNote:
      "Three of the six anchors on every item score the same number (0), so an option's value does not identify which anchor was chosen. Key rendered options and stored raw responses by their position in the `options` array, not by `value`, or the three zero-scoring anchors collapse into one another in the UI. The collapse is the instrument's own key, not a simplification: Garner's scoring table gives Sometimes, Rarely and Never the same 0 on items 1-25.",
    scoringNote:
      "Sum 0-78 on Garner's own asymmetric key: for items 1-25 Always scores 3, Usually 2, Often 1, and Sometimes/Rarely/Never all score 0; item 26 is scored the other way round (Never 3, Rarely 2, Sometimes 1, the rest 0). A score of 20 or above is Garner's referral criterion. His three subscales are documented but not scored, because the total is the referral criterion: dieting = items 1, 6, 7, 10, 11, 12, 14, 16, 17, 22, 23, 24, 26; bulimia and food preoccupation = 3, 4, 9, 18, 21, 25; oral control = 2, 5, 8, 13, 15, 19, 20. Garner's full screening protocol also refers a respondent on low age-referenced BMI or on any of five behavioural questions (bingeing, vomiting, laxative use, exercise, weight loss); those are not part of the 26-item score and are not implemented, so a score below 20 alone does not complete his referral logic.",
  },
};
