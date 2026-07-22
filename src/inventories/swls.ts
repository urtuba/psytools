import type { AssessmentDefinition } from "../types.ts";
import { sevenPointAgreementOptions } from "./common.ts";

/**
 * SWLS — Satisfaction with Life Scale (Diener, Emmons, Larsen & Griffin,
 * 1985).
 *
 * 5 items on a fully labeled 1–7 agreement scale, total score 5–35,
 * interpreted against Diener's published score groupings (20 is the
 * neutral point). Copyrighted by the authors but free to use without
 * permission by researchers and practitioners with credit; commercial
 * use is not licensed.
 */
export const swls: AssessmentDefinition = {
  id: "swls",
  version: "1.0.0",
  categories: ["well-being"],
  title: {
    en: "Satisfaction with Life Scale (SWLS)",
  },
  description: {
    en: "A 5-item measure of global life satisfaction.",
  },
  instructions: {
    en: "Below are five statements that you may agree or disagree with. Indicate your agreement with each item. Please be open and honest in your responding.",
  },
  defaultLocale: "en",
  options: sevenPointAgreementOptions,
  questions: [
    { id: "swls-1", text: { en: "In most ways my life is close to my ideal." } },
    { id: "swls-2", text: { en: "The conditions of my life are excellent." } },
    { id: "swls-3", text: { en: "I am satisfied with my life." } },
    { id: "swls-4", text: { en: "So far I have gotten the important things I want in life." } },
    { id: "swls-5", text: { en: "If I could live my life over, I would change almost nothing." } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "require-complete" },
    bands: [
      { id: "extremely-dissatisfied", min: 5, max: 9, label: { en: "Extremely dissatisfied" } },
      { id: "dissatisfied", min: 10, max: 14, label: { en: "Dissatisfied" } },
      { id: "slightly-dissatisfied", min: 15, max: 19, label: { en: "Slightly dissatisfied" } },
      { id: "neutral", min: 20, max: 20, label: { en: "Neutral" } },
      { id: "slightly-satisfied", min: 21, max: 25, label: { en: "Slightly satisfied" } },
      { id: "satisfied", min: 26, max: 30, label: { en: "Satisfied" } },
      { id: "extremely-satisfied", min: 31, max: 35, label: { en: "Extremely satisfied" } },
    ],
  },
  meta: {
    reference:
      "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49(1), 71-75.",
    license:
      "Free with conditions — copyrighted by the authors; free to use without permission or charge by all professionals (researchers and practitioners) with credit, for non-commercial purposes (eddiener.com)",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original instrument (Diener et al., 1985). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-sonnet-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    scoringNote:
      "Score groupings follow Diener's published SWLS interpretation guide (20 = neutral point).",
  },
};
