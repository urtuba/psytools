import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

/** The 0–4 bother scale of the PCL-5 ("in the past month"). */
const botherOptions: AssessmentOption[] = [
  { value: 0, label: { en: "Not at all" } },
  { value: 1, label: { en: "A little bit" } },
  { value: 2, label: { en: "Moderately" } },
  { value: 3, label: { en: "Quite a bit" } },
  { value: 4, label: { en: "Extremely" } },
];

/**
 * PCL-5 — PTSD Checklist for DSM-5, standard (past month) form.
 *
 * 20 items, 0–4 scale, total 0–80. Developed by staff at the VA's
 * National Center for PTSD and in the public domain. No bands are
 * defined: the VA publishes a cutoff *range* (31–33) it calls initial
 * research, not a settled threshold — see `meta.scoringNote`.
 */
export const pcl5: AssessmentDefinition = {
  id: "pcl5",
  version: "1.0.0",
  categories: ["post-traumatic-stress"],
  audience: ["adult"],
  respondent: "self",
  title: {
    en: "PTSD Checklist for DSM-5 (PCL-5)",
  },
  description: {
    en: "A 20-item self-report measure of the DSM-5 symptoms of posttraumatic stress disorder over the past month.",
  },
  instructions: {
    en: "Below is a list of problems that people sometimes have in response to a very stressful experience. Keeping your worst event in mind, please read each problem carefully and then select one of the numbers to the right to indicate how much you have been bothered by that problem in the past month.",
  },
  defaultLocale: "en",
  options: botherOptions,
  questions: [
    {
      id: "pcl5-1",
      text: { en: "Repeated, disturbing, and unwanted memories of the stressful experience?" },
    },
    { id: "pcl5-2", text: { en: "Repeated, disturbing dreams of the stressful experience?" } },
    {
      id: "pcl5-3",
      text: {
        en: "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?",
      },
    },
    {
      id: "pcl5-4",
      text: { en: "Feeling very upset when something reminded you of the stressful experience?" },
    },
    {
      id: "pcl5-5",
      text: {
        en: "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?",
      },
    },
    {
      id: "pcl5-6",
      text: { en: "Avoiding memories, thoughts, or feelings related to the stressful experience?" },
    },
    {
      id: "pcl5-7",
      text: {
        en: "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?",
      },
    },
    {
      id: "pcl5-8",
      text: { en: "Trouble remembering important parts of the stressful experience?" },
    },
    {
      id: "pcl5-9",
      text: {
        en: "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?",
      },
    },
    {
      id: "pcl5-10",
      text: {
        en: "Blaming yourself or someone else for the stressful experience or what happened after it?",
      },
    },
    {
      id: "pcl5-11",
      text: {
        en: "Having strong negative feelings such as fear, horror, anger, guilt, or shame?",
      },
    },
    { id: "pcl5-12", text: { en: "Loss of interest in activities that you used to enjoy?" } },
    { id: "pcl5-13", text: { en: "Feeling distant or cut off from other people?" } },
    {
      id: "pcl5-14",
      text: {
        en: "Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?",
      },
    },
    {
      id: "pcl5-15",
      text: { en: "Irritable behavior, angry outbursts, or acting aggressively?" },
    },
    {
      id: "pcl5-16",
      text: { en: "Taking too many risks or doing things that could cause you harm?" },
    },
    { id: "pcl5-17", text: { en: "Being “superalert” or watchful or on guard?" } },
    { id: "pcl5-18", text: { en: "Feeling jumpy or easily startled?" } },
    { id: "pcl5-19", text: { en: "Having difficulty concentrating?" } },
    { id: "pcl5-20", text: { en: "Trouble falling or staying asleep?" } },
  ],
  scoring: {
    kind: "sum",
    missing: { strategy: "prorate", minAnswered: 16 },
  },
  meta: {
    reference:
      "Weathers, F. W., Litz, B. T., Keane, T. M., Palmieri, P. A., Marx, B. P., & Schnurr, P. P. (2013). The PTSD Checklist for DSM-5 (PCL-5) - Standard [Measurement instrument]. National Center for PTSD. Available from https://www.ptsd.va.gov/",
    license: "Free — developed by staff at the VA's National Center for PTSD, in the public domain and not copyrighted",
    licenseFlag: "free",
    translationProvenance:
      "en: transcribed from the VA's own PCL-5 Standard form PDF (version date 29 August 2023), https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-opus-5) from the original English; the VA's own Spanish version was not consulted and the texts are unverified. See SOURCES.md.",
    timeframe: "past month",
    scoringNote:
      "Sum 0-80. No severity bands are defined on purpose: the VA states that \"initial research suggests that a PCL-5 cutoff score between 31-33 is indicative of probable PTSD across samples\" — a range offered as initial research, not a settled threshold, and one the VA asks users to weigh against their own setting. Encoding one number of that range as a band boundary would render a provisional finding to a user as a categorical verdict. Apply your own cutoff over `score` if your protocol names one. The VA's separate DSM-5 provisional-diagnosis rule (at least 1 item from cluster B, 1 from C, 2 from D and 2 from E, each rated 2 or higher) is not implemented; the clusters are B: items 1-5, C: items 6-7, D: items 8-14, E: items 15-20.",
  },
};
