import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

const agreementOptions: AssessmentOption[] = [
  { value: 1, label: { en: "1 — Strongly disagree" } },
  { value: 2, label: { en: "2" } },
  { value: 3, label: { en: "3" } },
  { value: 4, label: { en: "4 — Neutral / mixed" } },
  { value: 5, label: { en: "5" } },
  { value: 6, label: { en: "6" } },
  { value: 7, label: { en: "7 — Strongly agree" } },
];

/**
 * ECR-R — Experiences in Close Relationships-Revised (adult attachment).
 *
 * 36 items on a 1–7 agreement scale: items 1–18 form the attachment
 * anxiety subscale, items 19–36 attachment avoidance (Fraley, Waller &
 * Brennan, 2000). Subscale results are reported as sums (18–126); the
 * published convention is the item mean — divide by 18. The dimensions
 * are continuous; no clinical cutoffs exist, so no bands are defined.
 *
 * Research use only: the items are published for use in the public
 * domain for non-commercial research; commercial use requires the
 * authors' permission. The Turkish locale pack reproduces the validated
 * YİYE-II adaptation (Selçuk, Günaydın, Sümer & Uysal, 2005).
 */
export const ecrR: AssessmentDefinition = {
  id: "ecr-r",
  version: "1.0.0",
  categories: ["attachment", "relationships"],
  title: {
    en: "Experiences in Close Relationships-Revised (ECR-R)",
  },
  description: {
    en: "A 36-item self-report measure of adult romantic attachment along two dimensions: attachment-related anxiety and attachment-related avoidance.",
  },
  instructions: {
    en: "The statements below concern how you feel in emotionally intimate relationships. We are interested in how you generally experience relationships, not just in what is happening in a current relationship. Respond to each statement by indicating how much you agree or disagree with it.",
  },
  defaultLocale: "en",
  options: agreementOptions,
  questions: [
    { id: "ecr-r-1", text: { en: "I'm afraid that I will lose my partner's love." } },
    { id: "ecr-r-2", text: { en: "I often worry that my partner will not want to stay with me." } },
    { id: "ecr-r-3", text: { en: "I often worry that my partner doesn't really love me." } },
    { id: "ecr-r-4", text: { en: "I worry that romantic partners won't care about me as much as I care about them." } },
    { id: "ecr-r-5", text: { en: "I often wish that my partner's feelings for me were as strong as my feelings for him or her." } },
    { id: "ecr-r-6", text: { en: "I worry a lot about my relationships." } },
    { id: "ecr-r-7", text: { en: "When my partner is out of sight, I worry that he or she might become interested in someone else." } },
    { id: "ecr-r-8", text: { en: "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me." } },
    { id: "ecr-r-9", text: { en: "I rarely worry about my partner leaving me." }, reverseScored: true },
    { id: "ecr-r-10", text: { en: "My romantic partner makes me doubt myself." } },
    { id: "ecr-r-11", text: { en: "I do not often worry about being abandoned." }, reverseScored: true },
    { id: "ecr-r-12", text: { en: "I find that my partner(s) don't want to get as close as I would like." } },
    { id: "ecr-r-13", text: { en: "Sometimes romantic partners change their feelings about me for no apparent reason." } },
    { id: "ecr-r-14", text: { en: "My desire to be very close sometimes scares people away." } },
    { id: "ecr-r-15", text: { en: "I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am." } },
    { id: "ecr-r-16", text: { en: "It makes me mad that I don't get the affection and support I need from my partner." } },
    { id: "ecr-r-17", text: { en: "I worry that I won't measure up to other people." } },
    { id: "ecr-r-18", text: { en: "My partner only seems to notice me when I'm angry." } },
    { id: "ecr-r-19", text: { en: "I prefer not to show a partner how I feel deep down." } },
    { id: "ecr-r-20", text: { en: "I feel comfortable sharing my private thoughts and feelings with my partner." }, reverseScored: true },
    { id: "ecr-r-21", text: { en: "I find it difficult to allow myself to depend on romantic partners." } },
    { id: "ecr-r-22", text: { en: "I am very comfortable being close to romantic partners." }, reverseScored: true },
    { id: "ecr-r-23", text: { en: "I don't feel comfortable opening up to romantic partners." } },
    { id: "ecr-r-24", text: { en: "I prefer not to be too close to romantic partners." } },
    { id: "ecr-r-25", text: { en: "I get uncomfortable when a romantic partner wants to be very close." } },
    { id: "ecr-r-26", text: { en: "I find it relatively easy to get close to my partner." }, reverseScored: true },
    { id: "ecr-r-27", text: { en: "It's not difficult for me to get close to my partner." }, reverseScored: true },
    { id: "ecr-r-28", text: { en: "I usually discuss my problems and concerns with my partner." }, reverseScored: true },
    { id: "ecr-r-29", text: { en: "It helps to turn to my romantic partner in times of need." }, reverseScored: true },
    { id: "ecr-r-30", text: { en: "I tell my partner just about everything." }, reverseScored: true },
    { id: "ecr-r-31", text: { en: "I talk things over with my partner." }, reverseScored: true },
    { id: "ecr-r-32", text: { en: "I am nervous when partners get too close to me." } },
    { id: "ecr-r-33", text: { en: "I feel comfortable depending on romantic partners." }, reverseScored: true },
    { id: "ecr-r-34", text: { en: "I find it easy to depend on romantic partners." }, reverseScored: true },
    { id: "ecr-r-35", text: { en: "It's easy for me to be affectionate with my partner." }, reverseScored: true },
    { id: "ecr-r-36", text: { en: "My partner really understands me and my needs." }, reverseScored: true },
  ],
  scoring: {
    kind: "subscales",
    missing: { strategy: "prorate", minAnswered: 14 },
    subscales: [
      {
        id: "anxiety",
        label: { en: "Attachment-related anxiety" },
        questionIds: [
          "ecr-r-1", "ecr-r-2", "ecr-r-3", "ecr-r-4", "ecr-r-5", "ecr-r-6",
          "ecr-r-7", "ecr-r-8", "ecr-r-9", "ecr-r-10", "ecr-r-11", "ecr-r-12",
          "ecr-r-13", "ecr-r-14", "ecr-r-15", "ecr-r-16", "ecr-r-17", "ecr-r-18",
        ],
      },
      {
        id: "avoidance",
        label: { en: "Attachment-related avoidance" },
        questionIds: [
          "ecr-r-19", "ecr-r-20", "ecr-r-21", "ecr-r-22", "ecr-r-23", "ecr-r-24",
          "ecr-r-25", "ecr-r-26", "ecr-r-27", "ecr-r-28", "ecr-r-29", "ecr-r-30",
          "ecr-r-31", "ecr-r-32", "ecr-r-33", "ecr-r-34", "ecr-r-35", "ecr-r-36",
        ],
      },
    ],
  },
  meta: {
    reference:
      "Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment. Journal of Personality and Social Psychology, 78(2), 350-365.",
    trAdaptation:
      "Selçuk, E., Günaydın, G., Sümer, N., & Uysal, A. (2005). Yetişkin bağlanma boyutları için yeni bir ölçüm: Yakın İlişkilerde Yaşantılar Envanteri-II'nin Türk örnekleminde psikometrik açıdan değerlendirilmesi. Türk Psikoloji Yazıları, 8, 1-11.",
    license:
      "Research only — published for use in the public domain for non-commercial research; commercial use requires the authors' permission (labs.psychology.illinois.edu/~rcfraley/measures). The Turkish adaptation is distributed for scientific research only, not for clinical diagnosis or personnel selection (nebisumer.com)",
    licenseFlag: "research-only",
    translationProvenance:
      "en: reproduced from the original instrument (Fraley, Waller & Brennan, 2000). tr: reproduced from the published Turkish adaptation (YİYE-II, Selçuk et al., 2005, via nebisumer.com) — a validated translation; the Turkish source interleaves the same items (odd = anxiety, even = avoidance) while this definition keeps the original English item order. See SOURCES.md.",
    scoringNote:
      "Subscale results are sums over 18 items (range 18-126); the published convention reports the item mean — divide by 18. The prorating threshold (>=14 of 18 per subscale) is an implementation choice, not part of the published scoring.",
  },
};
