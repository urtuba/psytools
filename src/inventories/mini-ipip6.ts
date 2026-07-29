import type { AssessmentDefinition } from "../types.ts";
import { ipipAccuracyOptions, ipipInstructions } from "./common.ts";

/**
 * Mini-IPIP6 — 24-item public-domain measure of six broad personality
 * factors (Sibley et al., 2011).
 *
 * The Mini-IPIP's Big Five (Donnellan et al., 2006) plus a sixth
 * factor, honesty-humility — 4 items per factor on IPIP's 1-5
 * accuracy scale, 15 of them reverse-keyed. Factor scores are
 * descriptive (4-20 each, higher = more of the factor); there are no
 * clinical cutoffs, so no bands are defined.
 *
 * Items 1-20 keep the order the bundled `mini-ipip` uses, so the two
 * inventories line up item for item; 21-24 are honesty-humility. IPIP
 * items are public domain.
 */
export const miniIpip6: AssessmentDefinition = {
  id: "mini-ipip6",
  version: "1.0.0",
  categories: ["personality"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Mini-IPIP6 Big Six Personality Scale",
  },
  description: {
    en: "A 24-item public-domain measure of six broad personality factors — the Big Five (extraversion, agreeableness, conscientiousness, neuroticism, openness) plus honesty-humility — drawn from the International Personality Item Pool.",
  },
  instructions: ipipInstructions,
  defaultLocale: "en",
  options: ipipAccuracyOptions,
  questions: [
    { id: "mini-ipip6-1", text: { en: "I am the life of the party" } },
    { id: "mini-ipip6-2", text: { en: "I sympathize with others' feelings" } },
    { id: "mini-ipip6-3", text: { en: "I get chores done right away" } },
    { id: "mini-ipip6-4", text: { en: "I have frequent mood swings" } },
    { id: "mini-ipip6-5", text: { en: "I have a vivid imagination" } },
    { id: "mini-ipip6-6", text: { en: "I don't talk a lot" }, reverseScored: true },
    { id: "mini-ipip6-7", text: { en: "I am not interested in other people's problems" }, reverseScored: true },
    { id: "mini-ipip6-8", text: { en: "I often forget to put things back in their proper place" }, reverseScored: true },
    { id: "mini-ipip6-9", text: { en: "I am relaxed most of the time" }, reverseScored: true },
    { id: "mini-ipip6-10", text: { en: "I am not interested in abstract ideas" }, reverseScored: true },
    { id: "mini-ipip6-11", text: { en: "I talk to a lot of different people at parties" } },
    { id: "mini-ipip6-12", text: { en: "I feel others' emotions" } },
    { id: "mini-ipip6-13", text: { en: "I like order" } },
    { id: "mini-ipip6-14", text: { en: "I get upset easily" } },
    { id: "mini-ipip6-15", text: { en: "I have difficulty understanding abstract ideas" }, reverseScored: true },
    { id: "mini-ipip6-16", text: { en: "I keep in the background" }, reverseScored: true },
    { id: "mini-ipip6-17", text: { en: "I am not really interested in others" }, reverseScored: true },
    { id: "mini-ipip6-18", text: { en: "I make a mess of things" }, reverseScored: true },
    { id: "mini-ipip6-19", text: { en: "I seldom feel blue" }, reverseScored: true },
    { id: "mini-ipip6-20", text: { en: "I do not have a good imagination" }, reverseScored: true },
    { id: "mini-ipip6-21", text: { en: "I feel entitled to more of everything" }, reverseScored: true },
    { id: "mini-ipip6-22", text: { en: "I deserve more things in life" }, reverseScored: true },
    { id: "mini-ipip6-23", text: { en: "I would like to be seen driving around in a very expensive car" }, reverseScored: true },
    { id: "mini-ipip6-24", text: { en: "I would get a lot of pleasure from owning expensive luxury goods" }, reverseScored: true },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "prorate", minAnswered: 3 },
    subscales: [
      {
        id: "extraversion",
        label: { en: "Extraversion" },
        questionIds: ["mini-ipip6-1", "mini-ipip6-6", "mini-ipip6-11", "mini-ipip6-16"],
      },
      {
        id: "agreeableness",
        label: { en: "Agreeableness" },
        questionIds: ["mini-ipip6-2", "mini-ipip6-7", "mini-ipip6-12", "mini-ipip6-17"],
      },
      {
        id: "conscientiousness",
        label: { en: "Conscientiousness" },
        questionIds: ["mini-ipip6-3", "mini-ipip6-8", "mini-ipip6-13", "mini-ipip6-18"],
      },
      {
        id: "neuroticism",
        label: { en: "Neuroticism" },
        questionIds: ["mini-ipip6-4", "mini-ipip6-9", "mini-ipip6-14", "mini-ipip6-19"],
      },
      {
        id: "openness",
        label: { en: "Openness to Experience" },
        questionIds: ["mini-ipip6-5", "mini-ipip6-10", "mini-ipip6-15", "mini-ipip6-20"],
      },
      {
        id: "honesty-humility",
        label: { en: "Honesty-Humility" },
        questionIds: ["mini-ipip6-21", "mini-ipip6-22", "mini-ipip6-23", "mini-ipip6-24"],
      },
    ],
  },
  meta: {
    reference:
      "Sibley, C. G., Luyten, N., Purnomo, M., Mobberley, A., Wootton, L. W., Hammond, M. D., Sengupta, N., Perry, R., West-Newman, T., Wilson, M. S., McLellan, V. L., Hoverd, W. J., & Robertson, A. (2011). The Mini-IPIP6: Validation and extension of a short measure of the Big-Six factors of personality in New Zealand. New Zealand Journal of Psychology, 40(3), 142-159.",
    license:
      "Free — public domain (International Personality Item Pool, ipip.ori.org). IPIP states that permission is automatically granted to any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial; no attribution is required.",
    licenseFlag: "free",
    scoringNote:
      "Six subscale sums of 4 items each (4-20), 15 of the 24 items reverse-keyed. Summing is IPIP's own published scoring rule (ipip.ori.org/newScoringInstructions.htm); divide by 4 for the item mean. The prorating threshold (>=3 of 4 per factor) is an implementation choice, not part of the published scoring.",
    translationProvenance:
      "en: item stems reproduced from the IPIP scoring key at https://ipip.ori.org/MiniIPIP6Key.htm, rendered as first-person sentences (\"Am the life of the party.\" -> \"I am the life of the party\"). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from that English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note:
      "Descriptive personality traits, not a clinical screen — no cutoff bands are defined. Items 1-20 are the Mini-IPIP (Donnellan et al., 2006) in the order the bundled `mini-ipip` uses; items 21-24 are the honesty-humility factor.",
  },
};
