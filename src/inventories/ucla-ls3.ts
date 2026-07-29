import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** The 1–4 frequency scale of the UCLA Loneliness Scale, Version 3. */
const frequencyOptions: AssessmentOption[] = [
  { value: 1, label: { en: "Never" } },
  { value: 2, label: { en: "Rarely" } },
  { value: 3, label: { en: "Sometimes" } },
  { value: 4, label: { en: "Always" } },
];

/**
 * UCLA Loneliness Scale, Version 3 (Russell, 1996).
 *
 * 20 items on a 1–4 frequency scale, total 20–80, higher is lonelier.
 * Nine positively worded items (1, 5, 6, 9, 10, 15, 16, 19, 20) are
 * reverse scored. Russell publishes no cutoffs — the scale is scored
 * continuously — so no bands are defined.
 */
export const uclaLs3: AssessmentDefinition = {
  id: "ucla-ls3",
  version: "1.0.0",
  categories: ["loneliness"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "UCLA Loneliness Scale (Version 3)",
  },
  description: {
    en: "A 20-item self-report measure of subjective feelings of loneliness and social isolation.",
  },
  instructions: {
    en: "The following statements describe how people sometimes feel. For each statement, please indicate how often you feel the way described. Here is an example: How often do you feel happy? If you never felt happy, you would respond “never”; if you always feel happy, you would respond “always”.",
  },
  defaultLocale: "en",
  options: frequencyOptions,
  questions: [
    {
      id: "ucla-ls3-1",
      text: { en: "How often do you feel that you are “in tune” with the people around you?" },
      reverseScored: true,
    },
    { id: "ucla-ls3-2", text: { en: "How often do you feel that you lack companionship?" } },
    {
      id: "ucla-ls3-3",
      text: { en: "How often do you feel that there is no one you can turn to?" },
    },
    { id: "ucla-ls3-4", text: { en: "How often do you feel alone?" } },
    {
      id: "ucla-ls3-5",
      text: { en: "How often do you feel part of a group of friends?" },
      reverseScored: true,
    },
    {
      id: "ucla-ls3-6",
      text: {
        en: "How often do you feel that you have a lot in common with the people around you?",
      },
      reverseScored: true,
    },
    {
      id: "ucla-ls3-7",
      text: { en: "How often do you feel that you are no longer close to anyone?" },
    },
    {
      id: "ucla-ls3-8",
      text: {
        en: "How often do you feel that your interests and ideas are not shared by those around you?",
      },
    },
    {
      id: "ucla-ls3-9",
      text: { en: "How often do you feel outgoing and friendly?" },
      reverseScored: true,
    },
    {
      id: "ucla-ls3-10",
      text: { en: "How often do you feel close to people?" },
      reverseScored: true,
    },
    { id: "ucla-ls3-11", text: { en: "How often do you feel left out?" } },
    {
      id: "ucla-ls3-12",
      text: { en: "How often do you feel that your relationships with others are not meaningful?" },
    },
    {
      id: "ucla-ls3-13",
      text: { en: "How often do you feel that no one really knows you well?" },
    },
    { id: "ucla-ls3-14", text: { en: "How often do you feel isolated from others?" } },
    {
      id: "ucla-ls3-15",
      text: { en: "How often do you feel that you can find companionship when you want it?" },
      reverseScored: true,
    },
    {
      id: "ucla-ls3-16",
      text: { en: "How often do you feel that there are people who really understand you?" },
      reverseScored: true,
    },
    { id: "ucla-ls3-17", text: { en: "How often do you feel shy?" } },
    {
      id: "ucla-ls3-18",
      text: { en: "How often do you feel that people are around you but not with you?" },
    },
    {
      id: "ucla-ls3-19",
      text: { en: "How often do you feel that there are people you can talk to?" },
      reverseScored: true,
    },
    {
      id: "ucla-ls3-20",
      text: { en: "How often do you feel that there are people you can turn to?" },
      reverseScored: true,
    },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 16 },
  },
  meta: {
    reference:
      "Russell, D. W. (1996). UCLA Loneliness Scale (Version 3): Reliability, validity, and factor structure. Journal of Personality Assessment, 66(1), 20-40.",
    license:
      "Free with conditions — the author has publicly disclaimed any requirement to seek his permission, but no formal licence exists and commercial redistribution has not been addressed by anyone",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: transcribed from two independent reproductions of Russell (1996), checked against each other — the Stanford SPARQ Measuring Mobility toolkit copy (https://sparqtools.org/mobility-measure/ucla-loneliness-scale-version-3/) and the Fetzer Institute self-measures compendium. The rights holder distributes no copy of his own and the 1996 article is paywalled, so no first-party source was available. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from the English above; published adaptations were not consulted and the texts are unverified. See SOURCES.md.",
    scoringNote:
      "Sum 20-80, higher is lonelier, with the nine positively worded items (1, 5, 6, 9, 10, 15, 16, 19, 20) reverse scored. No bands are defined: Russell publishes no cutoffs and the scale is scored continuously. Severity bandings for this scale circulate widely on the web; none of them traces to Russell, so none is bundled. The two reproductions used differ on the top anchor — one prints \"Often\", the other \"Always\" — and psytools follows \"Always\", which is the anchor Russell's own instruction example uses (\"if you always feel happy, you would respond 'always'\"). \"Often\" belongs to the earlier Revised UCLA Loneliness Scale.",
  },
};
