import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** The 0–2 bother scale of the PHQ-15 ("during the last 4 weeks"). */
const botherOptions: AssessmentOption[] = [
  { value: 0, label: { en: "Not bothered at all" } },
  { value: 1, label: { en: "Bothered a little" } },
  { value: 2, label: { en: "Bothered a lot" } },
];

/**
 * PHQ-15 — Patient Health Questionnaire-15 (somatic symptom severity).
 *
 * 15 items, 0–2 bother scale, total 0–30, recall window 4 weeks. Same
 * Pfizer grant as the bundled PHQ-9 and GAD-7: no permission required to
 * reproduce, translate, display or distribute. Item 4 is printed
 * "[women only]" on the instrument, so it is `optional`.
 */
export const phq15: AssessmentDefinition = {
  id: "phq15",
  version: "1.0.0",
  categories: ["somatic-symptoms"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Patient Health Questionnaire-15 (PHQ-15)",
  },
  description: {
    en: "A 15-item self-report scale measuring the severity of common physical symptoms, used to screen for somatization and somatoform disorders.",
  },
  instructions: {
    en: "During the last 4 weeks, how much have you been bothered by any of the following problems?",
  },
  defaultLocale: "en",
  options: botherOptions,
  questions: [
    { id: "phq15-1", text: { en: "Stomach pain" } },
    { id: "phq15-2", text: { en: "Back pain" } },
    { id: "phq15-3", text: { en: "Pain in your arms, legs, or joints (knees, hips, etc)" } },
    {
      id: "phq15-4",
      text: { en: "Menstrual cramps or other problems with your periods [women only]" },
      optional: true,
    },
    { id: "phq15-5", text: { en: "Headaches" } },
    { id: "phq15-6", text: { en: "Chest pain" } },
    { id: "phq15-7", text: { en: "Dizziness" } },
    { id: "phq15-8", text: { en: "Fainting spells" } },
    { id: "phq15-9", text: { en: "Feeling your heart pound or race" } },
    { id: "phq15-10", text: { en: "Shortness of breath" } },
    { id: "phq15-11", text: { en: "Pain or problems during sexual intercourse" } },
    { id: "phq15-12", text: { en: "Constipation, loose bowels, or diarrhea" } },
    { id: "phq15-13", text: { en: "Nausea, gas, or indigestion" } },
    { id: "phq15-14", text: { en: "Feeling tired or having low energy" } },
    { id: "phq15-15", text: { en: "Trouble sleeping" } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "ignore" },
    bands: [
      { id: "minimal", min: 0, max: 4, label: { en: "Minimal somatic symptoms" } },
      { id: "low", min: 5, max: 9, label: { en: "Low somatic symptom severity" } },
      { id: "medium", min: 10, max: 14, label: { en: "Medium somatic symptom severity" } },
      { id: "high", min: 15, max: 30, label: { en: "High somatic symptom severity" } },
    ],
  },
  meta: {
    reference:
      "Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2002). The PHQ-15: Validity of a new measure for evaluating the severity of somatic symptoms. Psychosomatic Medicine, 64(2), 258-266.",
    license: "Free — no permission required to reproduce, translate, display or distribute (Pfizer educational grant)",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from the Pfizer instrument (footer: \"Copyright Pfizer Inc. No permission required to reproduce, translate, display, or distribute.\"), source instrument https://www.phqscreeners.com. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past 4 weeks",
    scoringNote:
      "Sum 0-30. Item 4 is printed \"[women only]\" on the instrument and is marked optional; unanswered items contribute 0. Two of the fifteen items are shared with the PHQ-9 — item 14 (tired) is PHQ-9 item 4 and item 15 (sleep) is PHQ-9 item 3 — but on the PHQ-15's 0-2 scale, not the PHQ-9's 0-3, so answers are not interchangeable between the two inventories.",
  },
};
