import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** Always ... Never/almost never, scored 100 down to 0 (Kristensen et al.'s own key). */
const frequencyOptions: AssessmentOption[] = [
  { value: 100, label: { en: "Always" } },
  { value: 75, label: { en: "Often" } },
  { value: 50, label: { en: "Sometimes" } },
  { value: 25, label: { en: "Seldom" } },
  { value: 0, label: { en: "Never/almost never" } },
];

/** To a very high degree ... To a very low degree, scored on the same 100–0 key. */
const degreeOptions: AssessmentOption[] = [
  { value: 100, label: { en: "To a very high degree" } },
  { value: 75, label: { en: "To a high degree" } },
  { value: 50, label: { en: "Somewhat" } },
  { value: 25, label: { en: "To a low degree" } },
  { value: 0, label: { en: "To a very low degree" } },
];

/**
 * CBI — Copenhagen Burnout Inventory (Kristensen, Borritz, Villadsen &
 * Christensen, 2005).
 *
 * 19 items in three independent scales: personal burnout (6), work-related
 * burnout (7), and client-related burnout (6). Each scale is scored on its
 * own; there is no total across all 19, because the three ask about
 * different attributions of the same exhaustion.
 *
 * Two response scales are mixed within the work and client scales — the
 * degree scale on the items phrased as "is your work..." and the frequency
 * scale on those phrased as "how often...". Both map to the same 100/75/50/
 * 25/0 key, which is why the published score for each scale is the mean of
 * its items on a 0–100 range. psytools reports subscale sums; divide by 6,
 * 7, and 6 to get the published figure (the same convention the ECR-R, ERQ
 * and HSPS entries follow).
 *
 * One item is reverse-keyed: work-burnout item 7, on having energy left for
 * family and friends, where more energy means less burnout.
 *
 * No cutoffs are defined. The authors publish population norms (Danish
 * means around 32 for personal burnout) rather than severity thresholds, so
 * no bands are declared — see SOURCES.md.
 *
 * Item text is reproduced from the authors' own English first edition
 * (February 2004), hosted by NFA, Denmark's National Research Centre for
 * the Working Environment. Rights: no first-party grant exists — read the
 * SOURCES.md entry before shipping this commercially.
 */
export const cbi: AssessmentDefinition = {
  id: "cbi",
  version: "1.0.0",
  categories: ["burnout"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Copenhagen Burnout Inventory (CBI)",
  },
  description: {
    en: "A 19-item measure of burnout in three separately-scored scales: personal, work-related, and client-related exhaustion.",
  },
  instructions: {
    en: "Choose the option that best describes you. Where the questions mention clients, read the word that fits your own work — patients, students, children, or whoever you work with. Answer the client questions only if your work involves them.",
  },
  defaultLocale: "en",
  options: frequencyOptions,
  questions: [
    // Part one: personal burnout (frequency scale).
    { id: "cbi-1", text: { en: "How often do you feel tired?" } },
    { id: "cbi-2", text: { en: "How often are you physically exhausted?" } },
    { id: "cbi-3", text: { en: "How often are you emotionally exhausted?" } },
    { id: "cbi-4", text: { en: "How often do you think: “I can’t take it anymore”?" } },
    { id: "cbi-5", text: { en: "How often do you feel worn out?" } },
    { id: "cbi-6", text: { en: "How often do you feel weak and susceptible to illness?" } },
    // Part two: work-related burnout (first three on the degree scale).
    { id: "cbi-7", text: { en: "Is your work emotionally exhausting?" }, options: degreeOptions },
    { id: "cbi-8", text: { en: "Do you feel burnt out because of your work?" }, options: degreeOptions },
    { id: "cbi-9", text: { en: "Does your work frustrate you?" }, options: degreeOptions },
    { id: "cbi-10", text: { en: "Do you feel worn out at the end of the working day?" } },
    { id: "cbi-11", text: { en: "Are you exhausted in the morning at the thought of another day at work?" } },
    { id: "cbi-12", text: { en: "Do you feel that every working hour is tiring for you?" } },
    { id: "cbi-13", text: { en: "Do you have enough energy for family and friends during leisure time?" }, reverseScored: true },
    // Part three: client-related burnout (first four on the degree scale).
    { id: "cbi-14", text: { en: "Do you find it hard to work with clients?" }, options: degreeOptions },
    { id: "cbi-15", text: { en: "Do you find it frustrating to work with clients?" }, options: degreeOptions },
    { id: "cbi-16", text: { en: "Does it drain your energy to work with clients?" }, options: degreeOptions },
    { id: "cbi-17", text: { en: "Do you feel that you give more than you get back when you work with clients?" }, options: degreeOptions },
    { id: "cbi-18", text: { en: "Are you tired of working with clients?" } },
    { id: "cbi-19", text: { en: "Do you sometimes wonder how long you will be able to continue working with clients?" } },
  ],
  scoring: {
    kind: "subscales",
    subscales: [
      {
        id: "personal",
        label: { en: "Personal burnout" },
        questionIds: ["cbi-1", "cbi-2", "cbi-3", "cbi-4", "cbi-5", "cbi-6"],
      },
      {
        id: "work",
        label: { en: "Work-related burnout" },
        questionIds: ["cbi-7", "cbi-8", "cbi-9", "cbi-10", "cbi-11", "cbi-12", "cbi-13"],
      },
      {
        id: "client",
        label: { en: "Client-related burnout" },
        questionIds: ["cbi-14", "cbi-15", "cbi-16", "cbi-17", "cbi-18", "cbi-19"],
      },
    ],
    missing: { strategy: "prorate", minAnswered: 4 },
  },
  meta: {
    reference:
      "Kristensen, T. S., Borritz, M., Villadsen, E., & Christensen, K. B. (2005). The Copenhagen Burnout Inventory: A new tool for the assessment of burnout. Work & Stress, 19(3), 192-207.",
    source:
      "Item text reproduced from the authors' own English first edition (February 2004), Marianne Borritz and Tage S. Kristensen, National Institute of Occupational Health, Copenhagen; hosted by NFA (Det Nationale Forskningscenter for Arbejdsmiljoe).",
    license:
      "Free with conditions - no first-party grant exists. NFA, Denmark's national occupational-health research institute, hosts the complete instrument publicly with no gatekeeping, and an independent peer-reviewed validation study describes it as a public domain questionnaire; but neither the instrument nor any rights holder's own statement grants redistribution. See SOURCES.md for exactly what supports this and what is missing.",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the authors' own English edition. The instrument was developed in Danish for the PUMA study; the English text is the authors' own, not a third-party translation. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from that English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    scoringNote:
      "Each scale is scored separately as the mean of its items on 0-100. psytools reports sums; divide by 6 (personal), 7 (work), and 6 (client).",
    definitions:
      "Personal burnout: a state of prolonged physical and psychological exhaustion. Work-related burnout: the same, perceived as related to the person's work. Client-related burnout: the same, perceived as related to the person's work with clients.",
    presentationNote:
      "The authors instruct that the items should not be presented in the printed order and may be interleaved with questions on other topics, to avoid stereotyped response patterns. psytools keeps the published order so the definition stays checkable against the source; shuffle at presentation time if you follow the recommendation.",
    missingDataNote:
      "The authors' own rule classifies a respondent as a non-responder below 3 of 6 answered (personal), 4 of 7 (work), and 3 of 6 (client). A single policy cannot carry three thresholds, so minAnswered is pinned to 4 - stricter than the authors on the two 6-item scales, which fails safe by refusing to score rather than scoring thin data.",
  },
};
