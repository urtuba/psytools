import type { AssessmentDefinition } from "../types.ts";

/**
 * RSES — Rosenberg Self-Esteem Scale (Rosenberg, 1965).
 *
 * 10 items on a 4-point agreement scale scored 0–3, total 0–30; the five
 * negatively worded items (2, 5, 6, 8, 9) are reverse scored. Scores of
 * 15–25 are commonly described as the normal range. Use is permitted
 * without permission for educational and professional research, with
 * attribution (Morris Rosenberg Foundation / University of Maryland).
 */
export const rses: AssessmentDefinition = {
  id: "rses",
  version: "1.0.0",
  categories: ["self-esteem"],
  title: {
    en: "Rosenberg Self-Esteem Scale (RSES)",
  },
  description: {
    en: "A 10-item measure of global self-worth, measuring both positive and negative feelings about the self.",
  },
  instructions: {
    en: "Below is a list of statements dealing with your general feelings about yourself. Please indicate how strongly you agree or disagree with each statement.",
  },
  defaultLocale: "en",
  options: [
    { value: 0, label: { en: "Strongly disagree" } },
    { value: 1, label: { en: "Disagree" } },
    { value: 2, label: { en: "Agree" } },
    { value: 3, label: { en: "Strongly agree" } },
  ],
  questions: [
    { id: "rses-1", text: { en: "On the whole, I am satisfied with myself." } },
    { id: "rses-2", text: { en: "At times I think I am no good at all." }, reverseScored: true },
    { id: "rses-3", text: { en: "I feel that I have a number of good qualities." } },
    { id: "rses-4", text: { en: "I am able to do things as well as most other people." } },
    { id: "rses-5", text: { en: "I feel I do not have much to be proud of." }, reverseScored: true },
    { id: "rses-6", text: { en: "I certainly feel useless at times." }, reverseScored: true },
    { id: "rses-7", text: { en: "I feel that I'm a person of worth, at least on an equal plane with others." } },
    { id: "rses-8", text: { en: "I wish I could have more respect for myself." }, reverseScored: true },
    { id: "rses-9", text: { en: "All in all, I am inclined to feel that I am a failure." }, reverseScored: true },
    { id: "rses-10", text: { en: "I take a positive attitude toward myself." } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 8 },
    bands: [
      { id: "low", min: 0, max: 14, label: { en: "Low self-esteem" } },
      { id: "normal", min: 15, max: 25, label: { en: "Within the normal range" } },
      { id: "high", min: 26, max: 30, label: { en: "High self-esteem" } },
    ],
  },
  meta: {
    reference:
      "Rosenberg, M. (1965). Society and the Adolescent Self-Image. Princeton, NJ: Princeton University Press.",
    license:
      "Free with conditions — may be used without explicit permission for educational and professional research, with attribution to the Rosenberg family (Morris Rosenberg Foundation / University of Maryland Department of Sociology); commercial use is not explicitly licensed",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original instrument (Rosenberg, 1965). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-sonnet-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    scoringNote:
      "Items scored 0-3 (Strongly disagree = 0 ... Strongly agree = 3) with items 2, 5, 6, 8, 9 reverse scored. The 15-25 normal range follows the University of Maryland scoring guidance; the prorating threshold (>=8 of 10) is an implementation choice.",
  },
};
