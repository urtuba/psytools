import type { AssessmentDefinition } from "../types.ts";
import { ipipAccuracyOptions, ipipInstructions } from "./common.ts";

/**
 * IPIP-NEO-60 — 60-item public-domain personality inventory
 * (Maples-Keller et al., 2019).
 *
 * Twelve items per domain on IPIP's 1-5 accuracy scale, measuring
 * constructs similar to five broad personality domains: neuroticism,
 * extraversion, openness to experience, agreeableness, and
 * conscientiousness. Each domain draws two items from each of six
 * facets. 23 of the 60 items are reverse-keyed. Domain scores are
 * descriptive (12-60 each); no clinical cutoffs exist, so no bands are
 * defined.
 *
 * Facets are two items apiece — far too short to score on their own —
 * so psytools reports the five domains and documents the facet
 * composition in `meta.scoringNote`. IPIP items are public domain.
 */
export const ipipNeo60: AssessmentDefinition = {
  id: "ipip-neo-60",
  version: "1.0.0",
  categories: ["personality"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "IPIP-NEO-60",
  },
  description: {
    en: "A 60-item public-domain personality inventory built from International Personality Item Pool items, measuring constructs similar to five broad personality domains — neuroticism, extraversion, openness to experience, agreeableness, and conscientiousness — with 12 items per domain.",
  },
  instructions: ipipInstructions,
  defaultLocale: "en",
  options: ipipAccuracyOptions,
  questions: [
    { id: "ipip-neo-60-1", text: { en: "I worry about things" } },
    { id: "ipip-neo-60-2", text: { en: "I get stressed out easily" } },
    { id: "ipip-neo-60-3", text: { en: "I get angry easily" } },
    { id: "ipip-neo-60-4", text: { en: "I lose my temper" } },
    { id: "ipip-neo-60-5", text: { en: "I often feel blue" } },
    { id: "ipip-neo-60-6", text: { en: "I dislike myself" } },
    { id: "ipip-neo-60-7", text: { en: "I find it difficult to approach others" } },
    { id: "ipip-neo-60-8", text: { en: "I am easily intimidated" } },
    { id: "ipip-neo-60-9", text: { en: "I rarely overindulge" }, reverseScored: true },
    { id: "ipip-neo-60-10", text: { en: "I am able to control my cravings" }, reverseScored: true },
    { id: "ipip-neo-60-11", text: { en: "I remain calm under pressure" }, reverseScored: true },
    { id: "ipip-neo-60-12", text: { en: "I am calm even in tense situations" }, reverseScored: true },
    { id: "ipip-neo-60-13", text: { en: "I make friends easily" } },
    { id: "ipip-neo-60-14", text: { en: "I act comfortably with others" } },
    { id: "ipip-neo-60-15", text: { en: "I love large parties" } },
    { id: "ipip-neo-60-16", text: { en: "I avoid crowds" }, reverseScored: true },
    { id: "ipip-neo-60-17", text: { en: "I take charge" } },
    { id: "ipip-neo-60-18", text: { en: "I try to lead others" } },
    { id: "ipip-neo-60-19", text: { en: "I am always busy" } },
    { id: "ipip-neo-60-20", text: { en: "I am always on the go" } },
    { id: "ipip-neo-60-21", text: { en: "I love excitement" } },
    { id: "ipip-neo-60-22", text: { en: "I seek adventure" } },
    { id: "ipip-neo-60-23", text: { en: "I have a lot of fun" } },
    { id: "ipip-neo-60-24", text: { en: "I love life" } },
    { id: "ipip-neo-60-25", text: { en: "I have a vivid imagination" } },
    { id: "ipip-neo-60-26", text: { en: "I love to daydream" } },
    { id: "ipip-neo-60-27", text: { en: "I believe in the importance of art" } },
    { id: "ipip-neo-60-28", text: { en: "I do not like art" }, reverseScored: true },
    { id: "ipip-neo-60-29", text: { en: "I experience my emotions intensely" } },
    { id: "ipip-neo-60-30", text: { en: "I am not easily affected by my emotions" }, reverseScored: true },
    { id: "ipip-neo-60-31", text: { en: "I prefer to stick with things that I know" }, reverseScored: true },
    { id: "ipip-neo-60-32", text: { en: "I don't like the idea of change" }, reverseScored: true },
    { id: "ipip-neo-60-33", text: { en: "I avoid philosophical discussions" }, reverseScored: true },
    { id: "ipip-neo-60-34", text: { en: "I am not interested in theoretical discussions" }, reverseScored: true },
    { id: "ipip-neo-60-35", text: { en: "I tend to vote for liberal political candidates" } },
    { id: "ipip-neo-60-36", text: { en: "I believe in one true religion" }, reverseScored: true },
    { id: "ipip-neo-60-37", text: { en: "I trust others" } },
    { id: "ipip-neo-60-38", text: { en: "I believe that others have good intentions" } },
    { id: "ipip-neo-60-39", text: { en: "I cheat to get ahead" }, reverseScored: true },
    { id: "ipip-neo-60-40", text: { en: "I take advantage of others" }, reverseScored: true },
    { id: "ipip-neo-60-41", text: { en: "I love to help others" } },
    { id: "ipip-neo-60-42", text: { en: "I am concerned about others" } },
    { id: "ipip-neo-60-43", text: { en: "I insult people" }, reverseScored: true },
    { id: "ipip-neo-60-44", text: { en: "I get back at others" }, reverseScored: true },
    { id: "ipip-neo-60-45", text: { en: "I believe that I am better than others" }, reverseScored: true },
    { id: "ipip-neo-60-46", text: { en: "I think highly of myself" }, reverseScored: true },
    { id: "ipip-neo-60-47", text: { en: "I sympathize with the homeless" } },
    { id: "ipip-neo-60-48", text: { en: "I feel sympathy for those who are worse off than myself" } },
    { id: "ipip-neo-60-49", text: { en: "I handle tasks smoothly" } },
    { id: "ipip-neo-60-50", text: { en: "I know how to get things done" } },
    { id: "ipip-neo-60-51", text: { en: "I like order" } },
    { id: "ipip-neo-60-52", text: { en: "I leave a mess in my room" }, reverseScored: true },
    { id: "ipip-neo-60-53", text: { en: "I tell the truth" } },
    { id: "ipip-neo-60-54", text: { en: "I break my promises" }, reverseScored: true },
    { id: "ipip-neo-60-55", text: { en: "I work hard" } },
    { id: "ipip-neo-60-56", text: { en: "I set high standards for myself and others" } },
    { id: "ipip-neo-60-57", text: { en: "I carry out my plans" } },
    { id: "ipip-neo-60-58", text: { en: "I have difficulty starting tasks" }, reverseScored: true },
    { id: "ipip-neo-60-59", text: { en: "I make rash decisions" }, reverseScored: true },
    { id: "ipip-neo-60-60", text: { en: "I act without thinking" }, reverseScored: true },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "prorate", minAnswered: 9 },
    subscales: [
      {
        id: "neuroticism",
        label: { en: "Neuroticism" },
        questionIds: [
          "ipip-neo-60-1", "ipip-neo-60-2", "ipip-neo-60-3", "ipip-neo-60-4", "ipip-neo-60-5",
          "ipip-neo-60-6", "ipip-neo-60-7", "ipip-neo-60-8", "ipip-neo-60-9", "ipip-neo-60-10",
          "ipip-neo-60-11", "ipip-neo-60-12",
        ],
      },
      {
        id: "extraversion",
        label: { en: "Extraversion" },
        questionIds: [
          "ipip-neo-60-13", "ipip-neo-60-14", "ipip-neo-60-15", "ipip-neo-60-16", "ipip-neo-60-17",
          "ipip-neo-60-18", "ipip-neo-60-19", "ipip-neo-60-20", "ipip-neo-60-21", "ipip-neo-60-22",
          "ipip-neo-60-23", "ipip-neo-60-24",
        ],
      },
      {
        id: "openness",
        label: { en: "Openness to Experience" },
        questionIds: [
          "ipip-neo-60-25", "ipip-neo-60-26", "ipip-neo-60-27", "ipip-neo-60-28", "ipip-neo-60-29",
          "ipip-neo-60-30", "ipip-neo-60-31", "ipip-neo-60-32", "ipip-neo-60-33", "ipip-neo-60-34",
          "ipip-neo-60-35", "ipip-neo-60-36",
        ],
      },
      {
        id: "agreeableness",
        label: { en: "Agreeableness" },
        questionIds: [
          "ipip-neo-60-37", "ipip-neo-60-38", "ipip-neo-60-39", "ipip-neo-60-40", "ipip-neo-60-41",
          "ipip-neo-60-42", "ipip-neo-60-43", "ipip-neo-60-44", "ipip-neo-60-45", "ipip-neo-60-46",
          "ipip-neo-60-47", "ipip-neo-60-48",
        ],
      },
      {
        id: "conscientiousness",
        label: { en: "Conscientiousness" },
        questionIds: [
          "ipip-neo-60-49", "ipip-neo-60-50", "ipip-neo-60-51", "ipip-neo-60-52", "ipip-neo-60-53",
          "ipip-neo-60-54", "ipip-neo-60-55", "ipip-neo-60-56", "ipip-neo-60-57", "ipip-neo-60-58",
          "ipip-neo-60-59", "ipip-neo-60-60",
        ],
      },
    ],
  },
  meta: {
    reference:
      "Maples-Keller, J. L., Williamson, R. L., Sleep, C. E., Carter, N. T., Campbell, W. K., & Miller, J. D. (2019). Using item response theory to develop a 60-item representation of the NEO PI-R using the International Personality Item Pool: Development of the IPIP-NEO-60. Journal of Personality Assessment, 101(1), 4-15.",
    license:
      "Free — public domain (International Personality Item Pool, ipip.ori.org). IPIP states that permission is automatically granted to any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial; no attribution is required.",
    licenseFlag: "free",
    scoringNote:
      "Five domain sums of 12 items each (12-60), 23 of the 60 items reverse-keyed. Summing is IPIP's own published scoring rule (ipip.ori.org/newScoringInstructions.htm); divide by 12 for the item mean. Each domain's 12 items come from six two-item facets, in this order — neuroticism: anxiety, anger, depression, self-consciousness, immoderation, vulnerability; extraversion: friendliness, gregariousness, assertiveness, activity level, excitement-seeking, cheerfulness; openness: imagination, artistic interests, emotionality, adventurousness, intellect, liberalism; agreeableness: trust, morality, altruism, cooperation, modesty, sympathy; conscientiousness: self-efficacy, orderliness, dutifulness, achievement-striving, self-discipline, cautiousness. Two items are far too few for a reliable facet score, so psytools scores domains only. The prorating threshold (>=9 of 12 per domain) is an implementation choice.",
    translationProvenance:
      "en: item stems reproduced from the IPIP scoring key at https://ipip.ori.org/IPIP-NEO-60ScoringKeys.htm, rendered as first-person sentences (\"Am the life of the party.\" -> \"I am the life of the party\"). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from that English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note:
      "Descriptive personality traits, not a clinical screen — no cutoff bands are defined. The scale label IPIP-NEO-60 is IPIP's own, following its citation guidance; psytools has no relationship with, and claims no endorsement by, any commercial test publisher.",
  },
};
