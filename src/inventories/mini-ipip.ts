import type { AssessmentDefinition } from "../types.ts";

/**
 * Mini-IPIP — 20-item short form of the International Personality Item
 * Pool Five-Factor Model measure (Donnellan et al., 2006).
 *
 * Measures the Big Five personality traits with 4 items each on a 1–5
 * accuracy scale; half the items are reverse-keyed. Trait scores are
 * descriptive (4–20 per trait, higher = more of the trait) — there are no
 * clinical cutoffs, so no bands are defined. IPIP items are public domain.
 */
export const miniIpip: AssessmentDefinition = {
  id: "mini-ipip",
  version: "1.0.0",
  title: {
    en: "Mini-IPIP Big Five Personality Scale",
  },
  description: {
    en: "A 20-item public-domain measure of the Big Five personality traits (extraversion, agreeableness, conscientiousness, neuroticism, openness), drawn from the International Personality Item Pool.",
  },
  instructions: {
    en: "Describe yourself as you generally are now, not as you wish to be in the future. Indicate how accurately each statement describes you.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 1,
      label: {
        en: "Very inaccurate",
      },
    },
    {
      value: 2,
      label: {
        en: "Moderately inaccurate",
      },
    },
    {
      value: 3,
      label: {
        en: "Neither accurate nor inaccurate",
      },
    },
    {
      value: 4,
      label: {
        en: "Moderately accurate",
      },
    },
    {
      value: 5,
      label: {
        en: "Very accurate",
      },
    },
  ],
  questions: [
    {
      id: "mini-ipip-1",
      text: {
        en: "I am the life of the party",
      },
    },
    {
      id: "mini-ipip-2",
      text: {
        en: "I sympathize with others' feelings",
      },
    },
    {
      id: "mini-ipip-3",
      text: {
        en: "I get chores done right away",
      },
    },
    {
      id: "mini-ipip-4",
      text: {
        en: "I have frequent mood swings",
      },
    },
    {
      id: "mini-ipip-5",
      text: {
        en: "I have a vivid imagination",
      },
    },
    {
      id: "mini-ipip-6",
      text: {
        en: "I don't talk a lot",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-7",
      text: {
        en: "I am not interested in other people's problems",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-8",
      text: {
        en: "I often forget to put things back in their proper place",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-9",
      text: {
        en: "I am relaxed most of the time",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-10",
      text: {
        en: "I am not interested in abstract ideas",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-11",
      text: {
        en: "I talk to a lot of different people at parties",
      },
    },
    {
      id: "mini-ipip-12",
      text: {
        en: "I feel others' emotions",
      },
    },
    {
      id: "mini-ipip-13",
      text: {
        en: "I like order",
      },
    },
    {
      id: "mini-ipip-14",
      text: {
        en: "I get upset easily",
      },
    },
    {
      id: "mini-ipip-15",
      text: {
        en: "I have difficulty understanding abstract ideas",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-16",
      text: {
        en: "I keep in the background",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-17",
      text: {
        en: "I am not really interested in others",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-18",
      text: {
        en: "I make a mess of things",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-19",
      text: {
        en: "I seldom feel blue",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-20",
      text: {
        en: "I do not have a good imagination",
      },
      reverseScored: true,
    },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "prorate", minAnswered: 3 },
    subscales: [
      {
        id: "extraversion",
        label: {
          en: "Extraversion",
        },
        questionIds: ["mini-ipip-1", "mini-ipip-6", "mini-ipip-11", "mini-ipip-16"],
      },
      {
        id: "agreeableness",
        label: {
          en: "Agreeableness",
        },
        questionIds: ["mini-ipip-2", "mini-ipip-7", "mini-ipip-12", "mini-ipip-17"],
      },
      {
        id: "conscientiousness",
        label: {
          en: "Conscientiousness",
        },
        questionIds: ["mini-ipip-3", "mini-ipip-8", "mini-ipip-13", "mini-ipip-18"],
      },
      {
        id: "neuroticism",
        label: {
          en: "Neuroticism",
        },
        questionIds: ["mini-ipip-4", "mini-ipip-9", "mini-ipip-14", "mini-ipip-19"],
      },
      {
        id: "openness",
        label: {
          en: "Openness (Intellect/Imagination)",
        },
        questionIds: ["mini-ipip-5", "mini-ipip-10", "mini-ipip-15", "mini-ipip-20"],
      },
    ],
  },
  meta: {
    reference:
      "Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006). The Mini-IPIP scales: tiny-yet-effective measures of the Big Five factors of personality. Psychological Assessment, 18(2), 192-203.",
    license:
      "Free — public domain (International Personality Item Pool, ipip.ori.org), created explicitly to be free of copyright restrictions",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note: "Descriptive personality traits, not a clinical screen — no cutoff bands are defined.",
  },
};
