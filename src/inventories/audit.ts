import type { AssessmentDefinition, AssessmentOption } from "../types.ts";

const yearlyFrequencyOptions: AssessmentOption[] = [
  { value: 0, label: { en: "Never", tr: "Hiçbir zaman", de: "Nie" } },
  {
    value: 1,
    label: { en: "Less than monthly", tr: "Ayda birden az", de: "Seltener als einmal im Monat" },
  },
  { value: 2, label: { en: "Monthly", tr: "Ayda bir", de: "Einmal im Monat" } },
  { value: 3, label: { en: "Weekly", tr: "Haftada bir", de: "Einmal pro Woche" } },
  {
    value: 4,
    label: { en: "Daily or almost daily", tr: "Hemen her gün", de: "Täglich oder fast täglich" },
  },
];

// Items 9 and 10 score 0 / 2 / 4 — there is no 1 or 3.
const injuryOptions: AssessmentOption[] = [
  { value: 0, label: { en: "No", tr: "Hayır", de: "Nein" } },
  {
    value: 2,
    label: {
      en: "Yes, but not in the last year",
      tr: "Evet, ama geçen yıl içinde değil",
      de: "Ja, aber nicht im letzten Jahr",
    },
  },
  {
    value: 4,
    label: {
      en: "Yes, during the last year",
      tr: "Evet, geçen yıl içinde",
      de: "Ja, im letzten Jahr",
    },
  },
];

/**
 * AUDIT — Alcohol Use Disorders Identification Test.
 *
 * 10 items developed by the WHO to detect hazardous and harmful alcohol
 * consumption. Items use variable point systems: 1–8 score 0–4 on
 * item-specific scales, 9–10 score 0/2/4. Total 0–40, interpreted in the
 * four risk zones of the WHO manual (Babor et al., 2001). Free to use.
 */
export const audit: AssessmentDefinition = {
  id: "audit",
  version: "1.0.0",
  title: {
    en: "Alcohol Use Disorders Identification Test (AUDIT)",
    tr: "Alkol Kullanım Bozuklukları Tanıma Testi (AUDIT)",
    de: "Alcohol Use Disorders Identification Test (AUDIT)",
  },
  description: {
    en: "A 10-item WHO screening instrument for hazardous and harmful alcohol consumption and possible alcohol dependence.",
    tr: "Tehlikeli ve zararlı alkol kullanımı ile olası alkol bağımlılığını taramak için DSÖ tarafından geliştirilmiş 10 maddelik bir ölçek.",
    de: "Ein 10-Item-Screeninginstrument der WHO für riskanten und schädlichen Alkoholkonsum sowie mögliche Alkoholabhängigkeit.",
  },
  instructions: {
    en: "Please answer the following questions about your use of alcoholic beverages during the past 12 months. One drink means one standard drink (e.g. a glass of beer or wine, or a single measure of spirits).",
    tr: "Lütfen aşağıdaki soruları son 12 ay içindeki alkollü içecek kullanımınızı düşünerek yanıtlayın. Bir kadeh, bir standart içkiyi ifade eder (örneğin bir bardak bira ya da şarap veya tek ölçü yüksek alkollü içki).",
    de: "Bitte beantworten Sie die folgenden Fragen zu Ihrem Konsum alkoholischer Getränke in den letzten 12 Monaten. Ein Glas entspricht einem Standardgetränk (z. B. ein Glas Bier oder Wein oder ein einfacher Schnaps).",
  },
  defaultLocale: "en",
  options: yearlyFrequencyOptions,
  questions: [
    {
      id: "audit-1",
      text: {
        en: "How often do you have a drink containing alcohol?",
        tr: "Ne sıklıkla alkollü içki içersiniz?",
        de: "Wie oft trinken Sie Alkohol?",
      },
      options: [
        { value: 0, label: { en: "Never", tr: "Hiçbir zaman", de: "Nie" } },
        {
          value: 1,
          label: { en: "Monthly or less", tr: "Ayda bir ya da daha az", de: "Einmal im Monat oder seltener" },
        },
        {
          value: 2,
          label: { en: "2 to 4 times a month", tr: "Ayda 2-4 kez", de: "2- bis 4-mal im Monat" },
        },
        {
          value: 3,
          label: { en: "2 to 3 times a week", tr: "Haftada 2-3 kez", de: "2- bis 3-mal pro Woche" },
        },
        {
          value: 4,
          label: {
            en: "4 or more times a week",
            tr: "Haftada 4 ya da daha fazla",
            de: "4-mal oder öfter pro Woche",
          },
        },
      ],
    },
    {
      id: "audit-2",
      text: {
        en: "How many drinks containing alcohol do you have on a typical day when you are drinking?",
        tr: "İçki içtiğiniz normal bir günde kaç kadeh içersiniz?",
        de: "Wenn Sie Alkohol trinken, wie viele Gläser trinken Sie dann üblicherweise an einem Tag?",
      },
      options: [
        { value: 0, label: { en: "1 or 2", tr: "1 ya da 2", de: "1 oder 2" } },
        { value: 1, label: { en: "3 or 4", tr: "3 ya da 4", de: "3 oder 4" } },
        { value: 2, label: { en: "5 or 6", tr: "5 ya da 6", de: "5 oder 6" } },
        { value: 3, label: { en: "7 to 9", tr: "7 ila 9", de: "7 bis 9" } },
        { value: 4, label: { en: "10 or more", tr: "10 ya da daha fazla", de: "10 oder mehr" } },
      ],
    },
    {
      id: "audit-3",
      text: {
        en: "How often do you have six or more drinks on one occasion?",
        tr: "Bir seferde altı ya da daha fazla kadeh içtiğiniz ne sıklıkla olur?",
        de: "Wie oft trinken Sie sechs oder mehr Gläser Alkohol bei einer Gelegenheit?",
      },
    },
    {
      id: "audit-4",
      text: {
        en: "How often during the last year have you found that you were not able to stop drinking once you had started?",
        tr: "Geçtiğimiz yıl içinde, içmeye başladıktan sonra kendinizi durduramadığınızı ne sıklıkla fark ettiniz?",
        de: "Wie oft konnten Sie im letzten Jahr nicht mehr mit dem Trinken aufhören, nachdem Sie einmal angefangen hatten?",
      },
    },
    {
      id: "audit-5",
      text: {
        en: "How often during the last year have you failed to do what was normally expected from you because of drinking?",
        tr: "Geçtiğimiz yıl içinde, içki yüzünden sizden normalde beklenenleri ne sıklıkla yapamadınız?",
        de: "Wie oft konnten Sie im letzten Jahr Ihren Verpflichtungen nicht nachkommen, weil Sie getrunken hatten?",
      },
    },
    {
      id: "audit-6",
      text: {
        en: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
        tr: "Geçtiğimiz yıl içinde, yoğun içilen bir geceden sonra kendinize gelmek için sabah ilk iş olarak bir içkiye ne sıklıkla ihtiyaç duydunuz?",
        de: "Wie oft brauchten Sie im letzten Jahr morgens ein erstes Glas Alkohol, um nach einem Abend mit viel Alkohol wieder auf die Beine zu kommen?",
      },
    },
    {
      id: "audit-7",
      text: {
        en: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
        tr: "Geçtiğimiz yıl içinde, içki içtikten sonra ne sıklıkla suçluluk ya da pişmanlık duydunuz?",
        de: "Wie oft hatten Sie im letzten Jahr Schuldgefühle oder Gewissensbisse, nachdem Sie getrunken hatten?",
      },
    },
    {
      id: "audit-8",
      text: {
        en: "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",
        tr: "Geçtiğimiz yıl içinde, içki yüzünden bir önceki gece olanları ne sıklıkla hatırlayamadınız?",
        de: "Wie oft konnten Sie sich im letzten Jahr nicht an das erinnern, was am Vorabend geschehen war, weil Sie getrunken hatten?",
      },
    },
    {
      id: "audit-9",
      text: {
        en: "Have you or someone else been injured as a result of your drinking?",
        tr: "İçki içmeniz yüzünden siz ya da bir başkası yaralandı mı?",
        de: "Haben Sie sich oder eine andere Person schon einmal verletzt, weil Sie getrunken hatten?",
      },
      options: injuryOptions,
    },
    {
      id: "audit-10",
      text: {
        en: "Has a relative or friend or a doctor or another health worker been concerned about your drinking or suggested you cut down?",
        tr: "Bir yakınınız, arkadaşınız, bir doktor ya da başka bir sağlık çalışanı içki içmenizden kaygı duydu mu ya da azaltmanızı önerdi mi?",
        de: "Hat ein Verwandter, Freund, Arzt oder eine andere medizinische Fachkraft sich schon einmal Sorgen über Ihren Alkoholkonsum gemacht oder Ihnen geraten, weniger zu trinken?",
      },
      options: injuryOptions,
    },
  ],
  scoring: {
    kind: "sum",
    bands: [
      {
        id: "zone-1",
        min: 0,
        max: 7,
        label: {
          en: "Zone I: low risk — alcohol education",
          tr: "Bölge I: düşük risk — alkol konusunda bilgilendirme",
          de: "Zone I: geringes Risiko — Aufklärung über Alkohol",
        },
      },
      {
        id: "zone-2",
        min: 8,
        max: 15,
        label: {
          en: "Zone II: hazardous drinking — simple advice recommended",
          tr: "Bölge II: tehlikeli içme — basit öneri/danışmanlık önerilir",
          de: "Zone II: riskanter Konsum — einfache Beratung empfohlen",
        },
      },
      {
        id: "zone-3",
        min: 16,
        max: 19,
        label: {
          en: "Zone III: harmful drinking — brief counselling and continued monitoring",
          tr: "Bölge III: zararlı içme — kısa danışmanlık ve izlem",
          de: "Zone III: schädlicher Konsum — Kurzintervention und weitere Beobachtung",
        },
      },
      {
        id: "zone-4",
        min: 20,
        max: 40,
        label: {
          en: "Zone IV: possible dependence — referral for diagnostic evaluation",
          tr: "Bölge IV: olası bağımlılık — tanısal değerlendirme için yönlendirme",
          de: "Zone IV: mögliche Abhängigkeit — Überweisung zur diagnostischen Abklärung",
        },
      },
    ],
  },
  meta: {
    reference:
      "Babor, T. F., Higgins-Biddle, J. C., Saunders, J. B., & Monteiro, M. G. (2001). AUDIT: The Alcohol Use Disorders Identification Test — Guidelines for Use in Primary Care (2nd ed.). Geneva: World Health Organization.",
    license: "Free — WHO permits reproduction and use of the AUDIT without permission",
    licenseFlag: "free",
    translationProvenance:
      "en: reproduced from the original. tr/de: AI-assisted (Anthropic Claude, claude-fable-5) following the validated versions; not verified against the official documents. See SOURCES.md.",
    timeframe: "past 12 months",
  },
};
