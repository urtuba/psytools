import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

const intensityOptions: AssessmentOption[] = [
  { value: 1, label: { en: "1 — Not at all" } },
  { value: 2, label: { en: "2" } },
  { value: 3, label: { en: "3" } },
  { value: 4, label: { en: "4 — Moderately" } },
  { value: 5, label: { en: "5" } },
  { value: 6, label: { en: "6" } },
  { value: 7, label: { en: "7 — Extremely" } },
];

/**
 * HSPS — Highly Sensitive Person Scale (Aron & Aron, 1997).
 *
 * 27 items on a 1–7 intensity scale, no reverse-scored items. The total
 * is reported here as a sum (27–189); research commonly reports the item
 * mean — divide by 27. Sensory-processing sensitivity is a continuous
 * temperament trait — no clinical cutoffs exist, so no bands are defined.
 *
 * Research use only: © 1997 E. Aron; distributed for research use. The
 * Turkish locale pack reproduces the validated adaptation
 * (Şengül-İnal & Sümer, 2017).
 */
export const hsps: AssessmentDefinition = {
  id: "hsps",
  version: "1.0.0",
  categories: ["sensory-processing", "personality"],
  title: {
    en: "Highly Sensitive Person Scale (HSPS)",
  },
  description: {
    en: "A 27-item self-report measure of sensory-processing sensitivity: how strongly a person perceives and processes internal and external stimuli.",
  },
  instructions: {
    en: "Answer each question according to the way you personally feel, using the following scale.",
  },
  defaultLocale: "en",
  options: intensityOptions,
  questions: [
    { id: "hsps-1", text: { en: "Are you easily overwhelmed by strong sensory input?" } },
    { id: "hsps-2", text: { en: "Do you seem to be aware of subtleties in your environment?" } },
    { id: "hsps-3", text: { en: "Do other people's moods affect you?" } },
    { id: "hsps-4", text: { en: "Do you tend to be more sensitive to pain?" } },
    { id: "hsps-5", text: { en: "Do you find yourself needing to withdraw during busy days, into bed or into a darkened room or any place where you can have some privacy and relief from stimulation?" } },
    { id: "hsps-6", text: { en: "Are you particularly sensitive to the effects of caffeine?" } },
    { id: "hsps-7", text: { en: "Are you easily overwhelmed by things like bright lights, strong smells, coarse fabrics, or sirens close by?" } },
    { id: "hsps-8", text: { en: "Do you have a rich, complex inner life?" } },
    { id: "hsps-9", text: { en: "Are you made uncomfortable by loud noises?" } },
    { id: "hsps-10", text: { en: "Are you deeply moved by the arts or music?" } },
    { id: "hsps-11", text: { en: "Does your nervous system sometimes feel so frazzled that you just have to go off by yourself?" } },
    { id: "hsps-12", text: { en: "Are you conscientious?" } },
    { id: "hsps-13", text: { en: "Do you startle easily?" } },
    { id: "hsps-14", text: { en: "Do you get rattled when you have a lot to do in a short amount of time?" } },
    { id: "hsps-15", text: { en: "When people are uncomfortable in a physical environment do you tend to know what needs to be done to make it more comfortable (like changing the lighting or the seating)?" } },
    { id: "hsps-16", text: { en: "Are you annoyed when people try to get you to do too many things at once?" } },
    { id: "hsps-17", text: { en: "Do you try hard to avoid making mistakes or forgetting things?" } },
    { id: "hsps-18", text: { en: "Do you make a point to avoid violent movies and TV shows?" } },
    { id: "hsps-19", text: { en: "Do you become unpleasantly aroused when a lot is going on around you?" } },
    { id: "hsps-20", text: { en: "Does being very hungry create a strong reaction in you, disrupting your concentration or mood?" } },
    { id: "hsps-21", text: { en: "Do changes in your life shake you up?" } },
    { id: "hsps-22", text: { en: "Do you notice and enjoy delicate or fine scents, tastes, sounds, works of art?" } },
    { id: "hsps-23", text: { en: "Do you find it unpleasant to have a lot going on at once?" } },
    { id: "hsps-24", text: { en: "Do you make it a high priority to arrange your life to avoid upsetting or overwhelming situations?" } },
    { id: "hsps-25", text: { en: "Are you bothered by intense stimuli, like loud noises or chaotic scenes?" } },
    { id: "hsps-26", text: { en: "When you must compete or be observed while performing a task, do you become so nervous or shaky that you do much worse than you would otherwise?" } },
    { id: "hsps-27", text: { en: "When you were a child, did parents or teachers seem to see you as sensitive or shy?" } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 21 },
  },
  meta: {
    reference:
      "Aron, E. N., & Aron, A. (1997). Sensory-processing sensitivity and its relation to introversion and emotionality. Journal of Personality and Social Psychology, 73(2), 345-368.",
    trAdaptation:
      "Şengül-İnal, G., & Sümer, N. (2017). Exploring the multidimensional structure of sensory processing sensitivity in Turkish samples. Current Psychology.",
    license:
      "Research only — HSP Scale © 1997 E. Aron, distributed for research use. The Turkish adaptation is distributed for scientific research only, not for clinical diagnosis or personnel selection (nebisumer.com)",
    licenseFlag: "research-only",
    translationProvenance:
      "en: reproduced from the original instrument (HSP Scale © 1997 E. Aron; Aron & Aron, 1997). tr: items and option anchors reproduced from the published Turkish adaptation (Şengül-İnal & Sümer, via nebisumer.com) — a validated translation; the pack's description and instructions are adapted for on-screen rendering. See SOURCES.md.",
    scoringNote:
      "The total is a sum over 27 items (range 27-189); the Turkish adaptation reports the item mean — divide by 27. The prorating threshold (>=21 of 27 items) is an implementation choice, not part of the published scoring.",
  },
};
