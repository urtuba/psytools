import type { AssessmentDefinition } from "../types.ts";
import { ipipAccuracyOptions, ipipInstructions } from "./common.ts";

/**
 * IPIP-VIA-R Short Scales — 96-item public-domain measure of 24
 * character strengths (Bluemke, Partsch, Saucier & Lechner, 2021).
 *
 * Four items per strength on IPIP's 1-5 accuracy scale. Every scale is
 * balanced by design — two positively and two negatively worded items —
 * so acquiescent responding cancels within the scale; that is why
 * exactly half of the 96 items (48) are reverse-keyed. Strength scores
 * are descriptive (4-20 each) and usually read as a rank order rather
 * than against a norm; no clinical cutoffs exist, so no bands are
 * defined.
 *
 * The 24 strengths follow the Values in Action classification
 * (Peterson & Seligman, 2004). IPIP items are public domain.
 */
export const ipipViaR: AssessmentDefinition = {
  id: "ipip-via-r",
  version: "1.0.0",
  categories: ["character-strengths", "personality"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "IPIP-VIA-R Short Scales",
  },
  description: {
    en: "A 96-item public-domain measure of 24 character strengths, four items per strength, from the International Personality Item Pool. Every scale is balanced — two positively and two negatively worded items — to control for acquiescent responding.",
  },
  instructions: ipipInstructions,
  defaultLocale: "en",
  options: ipipAccuracyOptions,
  questions: [
    { id: "ipip-via-r-1", text: { en: "I feel it's important to live in a world of beauty" } },
    { id: "ipip-via-r-2", text: { en: "I experience deep emotions when I see beautiful things" } },
    { id: "ipip-via-r-3", text: { en: "I am rarely aware of the natural beauty in the environment" }, reverseScored: true },
    { id: "ipip-via-r-4", text: { en: "I fail to notice beauty until others comment on it" }, reverseScored: true },
    { id: "ipip-via-r-5", text: { en: "I know that there are people in my life who care as much for me as for themselves" } },
    { id: "ipip-via-r-6", text: { en: "I can express love to someone else" } },
    { id: "ipip-via-r-7", text: { en: "I do not easily share my feelings with others" }, reverseScored: true },
    { id: "ipip-via-r-8", text: { en: "I have difficulty accepting love from anyone" }, reverseScored: true },
    { id: "ipip-via-r-9", text: { en: "I am an extremely loyal person" } },
    { id: "ipip-via-r-10", text: { en: "I support my teammates or fellow group members" } },
    { id: "ipip-via-r-11", text: { en: "I am not good at working with a group" }, reverseScored: true },
    { id: "ipip-via-r-12", text: { en: "I prefer to do everything alone" }, reverseScored: true },
    { id: "ipip-via-r-13", text: { en: "I am excited by many different activities" } },
    { id: "ipip-via-r-14", text: { en: "I can find something of interest in any situation" } },
    { id: "ipip-via-r-15", text: { en: "I am not all that curious about the world" }, reverseScored: true },
    { id: "ipip-via-r-16", text: { en: "I have few interests" }, reverseScored: true },
    { id: "ipip-via-r-17", text: { en: "I treat all people equally" } },
    { id: "ipip-via-r-18", text: { en: "I believe that everyone's rights are equally important" } },
    { id: "ipip-via-r-19", text: { en: "I take advantage of others" }, reverseScored: true },
    { id: "ipip-via-r-20", text: { en: "I treat others differently if I don't like them" }, reverseScored: true },
    { id: "ipip-via-r-21", text: { en: "I try to respond with understanding when someone treats me badly" } },
    { id: "ipip-via-r-22", text: { en: "I allow others to make a fresh start" } },
    { id: "ipip-via-r-23", text: { en: "I hold grudges" }, reverseScored: true },
    { id: "ipip-via-r-24", text: { en: "I find it hard to forgive others" }, reverseScored: true },
    { id: "ipip-via-r-25", text: { en: "I express my thanks to those who care about me" } },
    { id: "ipip-via-r-26", text: { en: "I am an extremely grateful person" } },
    { id: "ipip-via-r-27", text: { en: "I feel no gratitude to others" }, reverseScored: true },
    { id: "ipip-via-r-28", text: { en: "I find few things in my life to be grateful for" }, reverseScored: true },
    { id: "ipip-via-r-29", text: { en: "I can find the positive in what seems negative to others" } },
    { id: "ipip-via-r-30", text: { en: "I remain hopeful despite challenges" } },
    { id: "ipip-via-r-31", text: { en: "I expect the worst" }, reverseScored: true },
    { id: "ipip-via-r-32", text: { en: "I often think about the possibility of negative outcomes that are not likely to occur" }, reverseScored: true },
    { id: "ipip-via-r-33", text: { en: "I use laughter to brighten the days of others" } },
    { id: "ipip-via-r-34", text: { en: "I keep my sense of humor even in gloomy situations" } },
    { id: "ipip-via-r-35", text: { en: "I am not known for my sense of humor" }, reverseScored: true },
    { id: "ipip-via-r-36", text: { en: "I am not fun to be with" }, reverseScored: true },
    { id: "ipip-via-r-37", text: { en: "I don't quit a task before it is finished" } },
    { id: "ipip-via-r-38", text: { en: "I finish things despite obstacles in the way" } },
    { id: "ipip-via-r-39", text: { en: "I don't finish what I start" }, reverseScored: true },
    { id: "ipip-via-r-40", text: { en: "I give up easily" }, reverseScored: true },
    { id: "ipip-via-r-41", text: { en: "I am trusted to keep secrets" } },
    { id: "ipip-via-r-42", text: { en: "I keep my promises" } },
    { id: "ipip-via-r-43", text: { en: "I lie to get myself out of trouble" }, reverseScored: true },
    { id: "ipip-via-r-44", text: { en: "I cheat on people who have trusted me" }, reverseScored: true },
    { id: "ipip-via-r-45", text: { en: "I weigh the pro's and the con's" } },
    { id: "ipip-via-r-46", text: { en: "I am valued by my friends for my good judgment" } },
    { id: "ipip-via-r-47", text: { en: "I don't tend to think things through critically" }, reverseScored: true },
    { id: "ipip-via-r-48", text: { en: "I don't think about different possibilities when making decisions" }, reverseScored: true },
    { id: "ipip-via-r-49", text: { en: "I am never too busy to help a friend" } },
    { id: "ipip-via-r-50", text: { en: "I go out of my way to cheer up people who appear down" } },
    { id: "ipip-via-r-51", text: { en: "I get impatient when others talk to me about their problems" }, reverseScored: true },
    { id: "ipip-via-r-52", text: { en: "I am only kind to others if they have been kind to me" }, reverseScored: true },
    { id: "ipip-via-r-53", text: { en: "I am good at helping people work well together" } },
    { id: "ipip-via-r-54", text: { en: "I am told that I am a strong but fair leader" } },
    { id: "ipip-via-r-55", text: { en: "I have difficulty getting others to work together" }, reverseScored: true },
    { id: "ipip-via-r-56", text: { en: "I am not good at taking charge of a group" }, reverseScored: true },
    { id: "ipip-via-r-57", text: { en: "I am a true life-long learner" } },
    { id: "ipip-via-r-58", text: { en: "I am thrilled when I learn something new" } },
    { id: "ipip-via-r-59", text: { en: "I don't like to learn new things" }, reverseScored: true },
    { id: "ipip-via-r-60", text: { en: "I don't read nonfiction books for fun" }, reverseScored: true },
    { id: "ipip-via-r-61", text: { en: "I don't brag about my accomplishments" } },
    { id: "ipip-via-r-62", text: { en: "I would never be described as arrogant" } },
    { id: "ipip-via-r-63", text: { en: "I like to stand out in a crowd" }, reverseScored: true },
    { id: "ipip-via-r-64", text: { en: "I like to talk about myself" }, reverseScored: true },
    { id: "ipip-via-r-65", text: { en: "I come up with new ways to do things" } },
    { id: "ipip-via-r-66", text: { en: "I am an original thinker" } },
    { id: "ipip-via-r-67", text: { en: "I am not considered to have new and different ideas" }, reverseScored: true },
    { id: "ipip-via-r-68", text: { en: "I have no special urge to do something original" }, reverseScored: true },
    { id: "ipip-via-r-69", text: { en: "I have a mature view on life" } },
    { id: "ipip-via-r-70", text: { en: "I am considered to be a wise person" } },
    { id: "ipip-via-r-71", text: { en: "I am not good at figuring out what really matters" }, reverseScored: true },
    { id: "ipip-via-r-72", text: { en: "I am rarely consulted for advice by others" }, reverseScored: true },
    { id: "ipip-via-r-73", text: { en: "I believe it is always better to be safe than sorry" } },
    { id: "ipip-via-r-74", text: { en: "I make careful choices" } },
    { id: "ipip-via-r-75", text: { en: "I act before thinking through the consequences" }, reverseScored: true },
    { id: "ipip-via-r-76", text: { en: "I like taking risks" }, reverseScored: true },
    { id: "ipip-via-r-77", text: { en: "I am a highly disciplined person" } },
    { id: "ipip-via-r-78", text: { en: "I forego things that are bad for me in the long run even if they make me feel good in the short run" } },
    { id: "ipip-via-r-79", text: { en: "I let myself be taken over by urges to spend or eat too much" }, reverseScored: true },
    { id: "ipip-via-r-80", text: { en: "I give in to my urges" }, reverseScored: true },
    { id: "ipip-via-r-81", text: { en: "I am good at sensing what others are feeling" } },
    { id: "ipip-via-r-82", text: { en: "I know what to say to make people feel good" } },
    { id: "ipip-via-r-83", text: { en: "I don't know how to handle myself in a new social situation" }, reverseScored: true },
    { id: "ipip-via-r-84", text: { en: "I have trouble guessing how others will react" }, reverseScored: true },
    { id: "ipip-via-r-85", text: { en: "I am a spiritual person" } },
    { id: "ipip-via-r-86", text: { en: "I believe that each person has a purpose in life" } },
    { id: "ipip-via-r-87", text: { en: "I feel that life has no meaning" }, reverseScored: true },
    { id: "ipip-via-r-88", text: { en: "I do not believe in a universal power or a God" }, reverseScored: true },
    { id: "ipip-via-r-89", text: { en: "I have taken frequent stands in the face of strong opposition" } },
    { id: "ipip-via-r-90", text: { en: "I don't hesitate to express an unpopular opinion" } },
    { id: "ipip-via-r-91", text: { en: "I do not stand up for my beliefs" }, reverseScored: true },
    { id: "ipip-via-r-92", text: { en: "I don't speak my mind freely when there might be negative results" }, reverseScored: true },
    { id: "ipip-via-r-93", text: { en: "I awaken with a sense of excitement about the day's possibilities" } },
    { id: "ipip-via-r-94", text: { en: "I look forward to each new day" } },
    { id: "ipip-via-r-95", text: { en: "I am described as grumpy" }, reverseScored: true },
    { id: "ipip-via-r-96", text: { en: "I don't have much energy" }, reverseScored: true },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "prorate", minAnswered: 3 },
    subscales: [
      {
        id: "appreciation-of-beauty",
        label: { en: "Appreciation of beauty and excellence" },
        questionIds: ["ipip-via-r-1", "ipip-via-r-2", "ipip-via-r-3", "ipip-via-r-4"],
      },
      {
        id: "capacity-for-love",
        label: { en: "Capacity for love" },
        questionIds: ["ipip-via-r-5", "ipip-via-r-6", "ipip-via-r-7", "ipip-via-r-8"],
      },
      {
        id: "citizenship-teamwork",
        label: { en: "Citizenship / teamwork" },
        questionIds: ["ipip-via-r-9", "ipip-via-r-10", "ipip-via-r-11", "ipip-via-r-12"],
      },
      {
        id: "curiosity",
        label: { en: "Curiosity" },
        questionIds: ["ipip-via-r-13", "ipip-via-r-14", "ipip-via-r-15", "ipip-via-r-16"],
      },
      {
        id: "equity-fairness",
        label: { en: "Equity / fairness" },
        questionIds: ["ipip-via-r-17", "ipip-via-r-18", "ipip-via-r-19", "ipip-via-r-20"],
      },
      {
        id: "forgiveness-mercy",
        label: { en: "Forgiveness / mercy" },
        questionIds: ["ipip-via-r-21", "ipip-via-r-22", "ipip-via-r-23", "ipip-via-r-24"],
      },
      {
        id: "gratitude",
        label: { en: "Gratitude" },
        questionIds: ["ipip-via-r-25", "ipip-via-r-26", "ipip-via-r-27", "ipip-via-r-28"],
      },
      {
        id: "hope-optimism",
        label: { en: "Hope / optimism" },
        questionIds: ["ipip-via-r-29", "ipip-via-r-30", "ipip-via-r-31", "ipip-via-r-32"],
      },
      {
        id: "humor-playfulness",
        label: { en: "Humour / playfulness" },
        questionIds: ["ipip-via-r-33", "ipip-via-r-34", "ipip-via-r-35", "ipip-via-r-36"],
      },
      {
        id: "perseverance",
        label: { en: "Industry / perseverance / persistence" },
        questionIds: ["ipip-via-r-37", "ipip-via-r-38", "ipip-via-r-39", "ipip-via-r-40"],
      },
      {
        id: "integrity",
        label: { en: "Integrity / honesty / authenticity" },
        questionIds: ["ipip-via-r-41", "ipip-via-r-42", "ipip-via-r-43", "ipip-via-r-44"],
      },
      {
        id: "judgment",
        label: { en: "Judgment / open-mindedness" },
        questionIds: ["ipip-via-r-45", "ipip-via-r-46", "ipip-via-r-47", "ipip-via-r-48"],
      },
      {
        id: "kindness",
        label: { en: "Kindness / generosity" },
        questionIds: ["ipip-via-r-49", "ipip-via-r-50", "ipip-via-r-51", "ipip-via-r-52"],
      },
      {
        id: "leadership",
        label: { en: "Leadership" },
        questionIds: ["ipip-via-r-53", "ipip-via-r-54", "ipip-via-r-55", "ipip-via-r-56"],
      },
      {
        id: "love-of-learning",
        label: { en: "Love of learning" },
        questionIds: ["ipip-via-r-57", "ipip-via-r-58", "ipip-via-r-59", "ipip-via-r-60"],
      },
      {
        id: "modesty-humility",
        label: { en: "Modesty / humility" },
        questionIds: ["ipip-via-r-61", "ipip-via-r-62", "ipip-via-r-63", "ipip-via-r-64"],
      },
      {
        id: "creativity",
        label: { en: "Originality / creativity" },
        questionIds: ["ipip-via-r-65", "ipip-via-r-66", "ipip-via-r-67", "ipip-via-r-68"],
      },
      {
        id: "perspective",
        label: { en: "Perspective / wisdom" },
        questionIds: ["ipip-via-r-69", "ipip-via-r-70", "ipip-via-r-71", "ipip-via-r-72"],
      },
      {
        id: "prudence",
        label: { en: "Prudence" },
        questionIds: ["ipip-via-r-73", "ipip-via-r-74", "ipip-via-r-75", "ipip-via-r-76"],
      },
      {
        id: "self-regulation",
        label: { en: "Self-regulation / self-control" },
        questionIds: ["ipip-via-r-77", "ipip-via-r-78", "ipip-via-r-79", "ipip-via-r-80"],
      },
      {
        id: "social-intelligence",
        label: { en: "Social / personal / emotional intelligence" },
        questionIds: ["ipip-via-r-81", "ipip-via-r-82", "ipip-via-r-83", "ipip-via-r-84"],
      },
      {
        id: "spirituality",
        label: { en: "Spirituality / religiousness" },
        questionIds: ["ipip-via-r-85", "ipip-via-r-86", "ipip-via-r-87", "ipip-via-r-88"],
      },
      {
        id: "valor",
        label: { en: "Valour / bravery / courage" },
        questionIds: ["ipip-via-r-89", "ipip-via-r-90", "ipip-via-r-91", "ipip-via-r-92"],
      },
      {
        id: "zest",
        label: { en: "Zest / enthusiasm / vitality" },
        questionIds: ["ipip-via-r-93", "ipip-via-r-94", "ipip-via-r-95", "ipip-via-r-96"],
      },
    ],
  },
  meta: {
    reference:
      "Bluemke, M., Partsch, M. V., Saucier, G., & Lechner, C. M. (2021). Human character in the IPIP: Towards shorter, more content-valid, and cross-culturally comparable IPIP-VIA character strength scales. PsyArXiv. https://doi.org/10.31234/osf.io/k79qf. Strengths taxonomy after Peterson, C., & Seligman, M. E. P. (2004). Character Strengths and Virtues: A Handbook and Classification. Oxford University Press.",
    license:
      "Free — public domain (International Personality Item Pool, ipip.ori.org). IPIP states that permission is automatically granted to any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial; no attribution is required.",
    licenseFlag: "free",
    scoringNote:
      "Twenty-four subscale sums of 4 items each (4-20), 48 of the 96 items reverse-keyed — every scale is balanced 2 positive / 2 negative by design, so acquiescence cancels within the scale. Summing is IPIP's own published scoring rule (ipip.ori.org/newScoringInstructions.htm); divide by 4 for the item mean, which is what the authors' reliability estimates refer to. The prorating threshold (>=3 of 4 per strength) is an implementation choice: with a balanced scale, dropping one item breaks the balance, so a prorated strength score carries some acquiescence bias.",
    translationProvenance:
      "en: item stems reproduced from the IPIP scoring key at https://ipip.ori.org/IPIP-VIA-R_Key.html, rendered as first-person sentences (\"Am the life of the party.\" -> \"I am the life of the party\"). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from that English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note:
      "Descriptive strength profile, not a clinical screen — no cutoff bands exist. Scores are most often read ipsatively (which strengths rank highest for this person) rather than against a norm.",
  },
};
