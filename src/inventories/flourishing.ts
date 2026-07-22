import type { AssessmentDefinition } from "../types.ts";
import { sevenPointAgreementOptions } from "./common.ts";

/**
 * FS — Flourishing Scale (Diener et al., 2010).
 *
 * 8 items on a fully labeled 1–7 agreement scale, total score 8–56;
 * higher scores indicate more self-perceived psychological resources and
 * strengths. No published cutoffs exist, so no bands are defined.
 * Copyrighted by the authors but free to use without permission by
 * researchers and practitioners with credit; commercial use is not
 * licensed.
 */
export const flourishing: AssessmentDefinition = {
  id: "flourishing",
  version: "1.0.0",
  categories: ["well-being"],
  title: {
    en: "Flourishing Scale (FS)",
  },
  description: {
    en: "An 8-item summary measure of self-perceived success in important areas such as relationships, self-esteem, purpose, and optimism.",
  },
  instructions: {
    en: "Below are eight statements with which you may agree or disagree. Indicate your agreement with each item.",
  },
  defaultLocale: "en",
  options: sevenPointAgreementOptions,
  questions: [
    { id: "flourishing-1", text: { en: "I lead a purposeful and meaningful life." } },
    { id: "flourishing-2", text: { en: "My social relationships are supportive and rewarding." } },
    { id: "flourishing-3", text: { en: "I am engaged and interested in my daily activities." } },
    { id: "flourishing-4", text: { en: "I actively contribute to the happiness and well-being of others." } },
    { id: "flourishing-5", text: { en: "I am competent and capable in the activities that are important to me." } },
    { id: "flourishing-6", text: { en: "I am a good person and live a good life." } },
    { id: "flourishing-7", text: { en: "I am optimistic about my future." } },
    { id: "flourishing-8", text: { en: "People respect me." } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "require-complete" },
  },
  meta: {
    reference:
      "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R. (2010). New well-being measures: Short scales to assess flourishing and positive and negative feelings. Social Indicators Research, 97(2), 143-156.",
    license:
      "Free with conditions — copyrighted by the authors; free to use without permission or charge by all professionals (researchers and practitioners) with credit, for non-commercial purposes (eddiener.com)",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original instrument (Diener et al., 2010). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-sonnet-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    scoringNote:
      "Total 8-56; higher scores indicate a person with many psychological resources and strengths. No cutoffs are published.",
  },
};
