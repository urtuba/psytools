import type { AssessmentDefinition } from "../types.ts";
import { ipipAccuracyOptions, ipipInstructions } from "./common.ts";

/**
 * IPIP BIS/BAS Scales — 36-item public-domain measure of approach and
 * avoidance motivation.
 *
 * Four subscales on IPIP's 1-5 accuracy scale: behavioral inhibition
 * (BIS/anxiety, 10 items), and three behavioral-activation facets —
 * fun-seeking (10), drive (10), and reward responsiveness (6). Ten
 * items are reverse-keyed. Subscale sums are descriptive; no clinical
 * cutoffs exist, so no bands are defined.
 *
 * These are IPIP's own *preliminary* scales measuring constructs
 * similar to those in the BIS/BAS scales of Carver and White (1994) —
 * public-domain proxies, not that instrument. IPIP items are public
 * domain.
 */
export const bisBas: AssessmentDefinition = {
  id: "bis-bas",
  version: "1.0.0",
  categories: ["personality", "motivation"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "IPIP BIS/BAS Scales",
  },
  description: {
    en: "A 36-item public-domain measure of approach and avoidance motivation, built from International Personality Item Pool items keyed to the behavioral inhibition and activation constructs: sensitivity to punishment (BIS) and three facets of sensitivity to reward (BAS drive, fun-seeking, and reward responsiveness).",
  },
  instructions: ipipInstructions,
  defaultLocale: "en",
  options: ipipAccuracyOptions,
  questions: [
    { id: "bis-bas-1", text: { en: "I worry about what people think of me" } },
    { id: "bis-bas-2", text: { en: "I am always worried about something" } },
    { id: "bis-bas-3", text: { en: "I often worry about things that turn out to be unimportant" } },
    { id: "bis-bas-4", text: { en: "I am afraid that I will do the wrong thing" } },
    { id: "bis-bas-5", text: { en: "I am easily hurt" } },
    { id: "bis-bas-6", text: { en: "I begin to panic when there is danger" } },
    { id: "bis-bas-7", text: { en: "I become overwhelmed by events" } },
    { id: "bis-bas-8", text: { en: "I get stressed out easily" } },
    { id: "bis-bas-9", text: { en: "I rarely worry" }, reverseScored: true },
    { id: "bis-bas-10", text: { en: "I am not embarrassed easily" }, reverseScored: true },
    { id: "bis-bas-11", text: { en: "I like to behave spontaneously" } },
    { id: "bis-bas-12", text: { en: "I have persuaded others to do something really adventurous or crazy" } },
    { id: "bis-bas-13", text: { en: "I am willing to try anything once" } },
    { id: "bis-bas-14", text: { en: "I like to act on a whim" } },
    { id: "bis-bas-15", text: { en: "I prefer friends who are excitingly unpredictable" } },
    { id: "bis-bas-16", text: { en: "I do crazy things" } },
    { id: "bis-bas-17", text: { en: "I enjoy being reckless" } },
    { id: "bis-bas-18", text: { en: "I would never go hang gliding or bungee jumping" }, reverseScored: true },
    { id: "bis-bas-19", text: { en: "I rarely enjoy behaving in a silly manner" }, reverseScored: true },
    { id: "bis-bas-20", text: { en: "I avoid dangerous situations" }, reverseScored: true },
    { id: "bis-bas-21", text: { en: "I want to be in charge" } },
    { id: "bis-bas-22", text: { en: "I try to surpass others' accomplishments" } },
    { id: "bis-bas-23", text: { en: "I like to show off my body" } },
    { id: "bis-bas-24", text: { en: "I know how to get around the rules" } },
    { id: "bis-bas-25", text: { en: "I have a strong need for power" } },
    { id: "bis-bas-26", text: { en: "I take charge" } },
    { id: "bis-bas-27", text: { en: "I push myself very hard to succeed" } },
    { id: "bis-bas-28", text: { en: "I am not highly motivated to succeed" }, reverseScored: true },
    { id: "bis-bas-29", text: { en: "I am not an extraordinary person" }, reverseScored: true },
    { id: "bis-bas-30", text: { en: "I hate being the center of attention" }, reverseScored: true },
    { id: "bis-bas-31", text: { en: "I feel excited or happy for no apparent reason" } },
    { id: "bis-bas-32", text: { en: "I get caught up in the excitement when others are celebrating" } },
    { id: "bis-bas-33", text: { en: "I am eager to soothe hurt feelings" } },
    { id: "bis-bas-34", text: { en: "I get so happy or energetic that I am almost giddy" } },
    { id: "bis-bas-35", text: { en: "I rarely get caught up in the excitement" }, reverseScored: true },
    { id: "bis-bas-36", text: { en: "I don't get excited about things" }, reverseScored: true },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "prorate", minAnswered: 5 },
    subscales: [
      {
        id: "bis-anxiety",
        label: { en: "BIS — Behavioural inhibition / anxiety" },
        questionIds: [
          "bis-bas-1", "bis-bas-2", "bis-bas-3", "bis-bas-4", "bis-bas-5", "bis-bas-6",
          "bis-bas-7", "bis-bas-8", "bis-bas-9", "bis-bas-10",
        ],
      },
      {
        id: "bas-fun-seeking",
        label: { en: "BAS — Fun-seeking" },
        questionIds: [
          "bis-bas-11", "bis-bas-12", "bis-bas-13", "bis-bas-14", "bis-bas-15", "bis-bas-16",
          "bis-bas-17", "bis-bas-18", "bis-bas-19", "bis-bas-20",
        ],
      },
      {
        id: "bas-drive",
        label: { en: "BAS — Drive" },
        questionIds: [
          "bis-bas-21", "bis-bas-22", "bis-bas-23", "bis-bas-24", "bis-bas-25", "bis-bas-26",
          "bis-bas-27", "bis-bas-28", "bis-bas-29", "bis-bas-30",
        ],
      },
      {
        id: "bas-reward-responsiveness",
        label: { en: "BAS — Reward responsiveness" },
        questionIds: [
          "bis-bas-31", "bis-bas-32", "bis-bas-33", "bis-bas-34", "bis-bas-35", "bis-bas-36",
        ],
      },
    ],
  },
  meta: {
    reference:
      "Goldberg, L. R., Johnson, J. A., Eber, H. W., Hogan, R., Ashton, M. C., Cloninger, C. R., & Gough, H. G. (2006). The International Personality Item Pool and the future of public-domain personality measures. Journal of Research in Personality, 40(1), 84-96. Constructs after Carver, C. S., & White, T. L. (1994). Behavioral inhibition, behavioral activation, and affective responses to impending reward and punishment: The BIS/BAS scales. Journal of Personality and Social Psychology, 67(2), 319-333.",
    license:
      "Free — public domain (International Personality Item Pool, ipip.ori.org). IPIP states that permission is automatically granted to any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial; no attribution is required.",
    licenseFlag: "free",
    scoringNote:
      "Four subscale sums (BIS 10 items 10-50; BAS fun-seeking 10 items 10-50; BAS drive 10 items 10-50; BAS reward responsiveness 6 items 6-30), 10 of the 36 items reverse-keyed. Summing is IPIP's own published scoring rule (ipip.ori.org/newScoringInstructions.htm); divide by the item count for the item mean. The prorating threshold is a single number across subscales, so it is set to the strictest value the 6-item subscale allows (>=5), which is 5 of 6 there and 5 of 10 on the others — an implementation choice, not part of the published scoring.",
    translationProvenance:
      "en: item stems reproduced from the IPIP scoring key at https://ipip.ori.org/newBIS_BASkey.htm, rendered as first-person sentences (\"Am the life of the party.\" -> \"I am the life of the party\"). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from that English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note:
      "IPIP labels these its *preliminary* scales for the BIS/BAS constructs. They measure constructs similar to those of the Carver and White (1994) BIS/BAS scales rather than reproducing them; IPIP reports correlations with the original scales of .69 (BIS), .63 (fun-seeking), .54 (drive), and .41 (reward responsiveness), .86/.92/.72/.59 corrected for unreliability. Descriptive trait scores, not a clinical screen — no cutoff bands exist.",
  },
};
