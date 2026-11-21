import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** The yes/no answer scale of the PC-PTSD-5. A "yes" scores 1. */
const yesNoOptions: AssessmentOption[] = [
  { value: 1, label: { en: "Yes" } },
  { value: 0, label: { en: "No" } },
];

/** The VA form's lead-in to the five symptom items, prepended to each one. */
const leadIn = "In the past month, have you";

/**
 * PC-PTSD-5: Primary Care PTSD Screen for DSM-5.
 *
 * A lifetime trauma-exposure question followed by five yes/no symptom
 * items about the past month. The score is the count of "yes" answers to
 * the five symptom items (0-5); the exposure question gates them and is
 * not scored. Developed by staff at the VA's National Center for PTSD,
 * public domain. No bands: the VA's cut-point of 4 is explicitly
 * sample-dependent, see `meta.scoringNote`.
 */
export const pcPtsd5: AssessmentDefinition = {
  id: "pc-ptsd-5",
  version: "1.0.0",
  categories: ["post-traumatic-stress"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "Primary Care PTSD Screen for DSM-5 (PC-PTSD-5)",
  },
  description: {
    en: "A brief screen for probable posttraumatic stress disorder: one question about lifetime trauma exposure, then five yes/no questions about how the trauma has affected the person in the past month.",
  },
  instructions: {
    en: "Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. For example: a serious accident or fire; a physical or sexual assault or abuse; an earthquake or flood; a war; seeing someone be killed or seriously injured; having a loved one die through homicide or suicide.",
  },
  defaultLocale: "en",
  options: yesNoOptions,
  questions: [
    {
      id: "pc-ptsd-5-trauma",
      text: {
        en: "Have you ever experienced this kind of event? If no, screen total = 0. Please stop here. If yes, please answer the questions below.",
      },
    },
    {
      id: "pc-ptsd-5-1",
      text: {
        en: `${leadIn} had nightmares about the event(s) or thought about the event(s) when you did not want to?`,
      },
      optional: true,
    },
    {
      id: "pc-ptsd-5-2",
      text: {
        en: `${leadIn} tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?`,
      },
      optional: true,
    },
    {
      id: "pc-ptsd-5-3",
      text: { en: `${leadIn} been constantly on guard, watchful, or easily startled?` },
      optional: true,
    },
    {
      id: "pc-ptsd-5-4",
      text: { en: `${leadIn} felt numb or detached from people, activities, or your surroundings?` },
      optional: true,
    },
    {
      id: "pc-ptsd-5-5",
      text: {
        en: `${leadIn} felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?`,
      },
      optional: true,
    },
  ],
  scoring: {
    kind: "count",
    missing: { strategy: "ignore" },
    items: [1, 2, 3, 4, 5].map((n) => ({ questionId: `pc-ptsd-5-${n}`, minValue: 1 })),
  },
  meta: {
    reference:
      "Prins, A., Bovin, M. J., Kimerling, R., Kaloupek, D. G., Marx, B. P., Pless Kaiser, A., & Schnurr, P. P. (2015). The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5) [Measurement instrument]. Available from https://www.ptsd.va.gov",
    license: "Free: developed by staff at the VA's National Center for PTSD, in the public domain and not copyrighted",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from the VA's own PC-PTSD-5 form PDF (version date 2022), https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp; the form's lead-in \"In the past month, have you...\" is prepended to each symptom item and the six bulleted examples are joined into one sentence (see SOURCES.md). Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5-5) from the original English; the VA's own Spanish version was not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "exposure: lifetime; symptoms: past month",
    scoringNote:
      "Count of \"yes\" answers to the five symptom items, 0-5. The exposure question (pc-ptsd-5-trauma) is not scored; it gates the symptom items, which are marked optional so a respondent who answers \"no\" and stops is scored 0, as the VA specifies. psytools cannot enforce the gate: render the symptom items only after a \"yes\", and treat a response that answers them after a \"no\" as invalid. No bands are defined on purpose: the VA reports that \"a cut-point of 4 ideally balanced false negatives and false positives for the overall sample and for men\", that it produced many false negatives for women, and that \"clinicians should consider sample characteristics and screening purposes when selecting a cut-point.\" Apply your own cut-point over `score`.",
    renderingNote:
      "Show pc-ptsd-5-trauma first. Show pc-ptsd-5-1 to pc-ptsd-5-5 only when it is answered \"yes\" (value 1).",
  },
};
