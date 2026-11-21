import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** The fully labelled 1-7 agreement scale printed on the TIPI form. */
const tipiOptions: AssessmentOption[] = [
  { value: 1, label: { en: "Disagree strongly" } },
  { value: 2, label: { en: "Disagree moderately" } },
  { value: 3, label: { en: "Disagree a little" } },
  { value: 4, label: { en: "Neither agree nor disagree" } },
  { value: 5, label: { en: "Agree a little" } },
  { value: 6, label: { en: "Agree moderately" } },
  { value: 7, label: { en: "Agree strongly" } },
];

/**
 * TIPI: Ten-Item Personality Inventory.
 *
 * 10 trait-pair items on a 1-7 agreement scale, five 2-item Big Five
 * scales, each with one reverse-keyed item (items 2, 4, 6, 8, 10). Sums
 * 2-14 per scale; the authors' published score is the mean of the two
 * items. No cutoffs exist, so no bands.
 */
export const tipi: AssessmentDefinition = {
  id: "tipi",
  version: "1.0.0",
  categories: ["personality"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Ten-Item Personality Inventory (TIPI)",
  },
  description: {
    en: "A 10-item measure of the Big Five personality dimensions, for settings where a very short measure is needed.",
  },
  instructions: {
    en: "Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which you agree or disagree with that statement. You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other. I see myself as:",
  },
  defaultLocale: "en",
  options: tipiOptions,
  questions: [
    { id: "tipi-1", text: { en: "Extraverted, enthusiastic." } },
    { id: "tipi-2", text: { en: "Critical, quarrelsome." }, reverseScored: true },
    { id: "tipi-3", text: { en: "Dependable, self-disciplined." } },
    { id: "tipi-4", text: { en: "Anxious, easily upset." }, reverseScored: true },
    { id: "tipi-5", text: { en: "Open to new experiences, complex." } },
    { id: "tipi-6", text: { en: "Reserved, quiet." }, reverseScored: true },
    { id: "tipi-7", text: { en: "Sympathetic, warm." } },
    { id: "tipi-8", text: { en: "Disorganized, careless." }, reverseScored: true },
    { id: "tipi-9", text: { en: "Calm, emotionally stable." } },
    { id: "tipi-10", text: { en: "Conventional, uncreative." }, reverseScored: true },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "require-complete" },
    subscales: [
      { id: "extraversion", label: { en: "Extraversion" }, questionIds: ["tipi-1", "tipi-6"] },
      { id: "agreeableness", label: { en: "Agreeableness" }, questionIds: ["tipi-2", "tipi-7"] },
      { id: "conscientiousness", label: { en: "Conscientiousness" }, questionIds: ["tipi-3", "tipi-8"] },
      { id: "emotional-stability", label: { en: "Emotional Stability" }, questionIds: ["tipi-4", "tipi-9"] },
      { id: "openness", label: { en: "Openness to Experiences" }, questionIds: ["tipi-5", "tipi-10"] },
    ],
  },
  meta: {
    reference:
      "Gosling, S. D., Rentfrow, P. J., & Swann, W. B., Jr. (2003). A very brief measure of the Big-Five personality domains. Journal of Research in Personality, 37(6), 504-528.",
    license:
      "Free: \"Anyone can use it for any purpose. No need to ask me for permission.\" (S. D. Gosling, https://gosling.psy.utexas.edu/scales-weve-developed/ten-item-personality-measure-tipi/)",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from the authors' TIPI form PDF (dated 2003), linked as \"TIPI scale (pdf)\" from https://gosling.psy.utexas.edu/scales-weve-developed/ten-item-personality-measure-tipi/. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5-5) from the original English; the translations hosted on the authors' page were not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "general (no recall window)",
    scoringNote:
      "Five scales of two items each: extraversion 1, 6R; agreeableness 2R, 7; conscientiousness 3, 8R; emotional stability 4R, 9; openness to experiences 5, 10R. Reverse-keyed items are recoded 8 - answer. psytools reports sums (2-14); the authors' score is the mean of the two items, so divide by 2. No cutoffs exist; the authors publish norms instead. Emotional stability is the reverse pole of neuroticism. Two items per scale give low internal consistency by design; the authors point to test-retest reliability as the better index.",
  },
};
