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
    tr: "Mini-IPIP Beş Faktör Kişilik Ölçeği",
    de: "Mini-IPIP Big-Five-Persönlichkeitsskala",
  },
  description: {
    en: "A 20-item public-domain measure of the Big Five personality traits (extraversion, agreeableness, conscientiousness, neuroticism, openness), drawn from the International Personality Item Pool.",
    tr: "Uluslararası Kişilik Madde Havuzu'ndan (IPIP) türetilmiş, Beş Faktör kişilik özelliklerini (dışadönüklük, uyumluluk, sorumluluk, duygusal dengesizlik, deneyime açıklık) ölçen 20 maddelik kamu malı bir ölçek.",
    de: "Ein gemeinfreies 20-Item-Instrument zur Messung der Big-Five-Persönlichkeitsmerkmale (Extraversion, Verträglichkeit, Gewissenhaftigkeit, Neurotizismus, Offenheit) aus dem International Personality Item Pool.",
  },
  instructions: {
    en: "Describe yourself as you generally are now, not as you wish to be in the future. Indicate how accurately each statement describes you.",
    tr: "Kendinizi gelecekte olmak istediğiniz gibi değil, şu anda genel olarak olduğunuz gibi tanımlayın. Her ifadenin sizi ne kadar doğru tanımladığını belirtin.",
    de: "Beschreiben Sie sich so, wie Sie im Allgemeinen jetzt sind, nicht wie Sie in Zukunft sein möchten. Geben Sie an, wie zutreffend jede Aussage Sie beschreibt.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 1,
      label: { en: "Very inaccurate", tr: "Bana hiç uymuyor", de: "Trifft überhaupt nicht zu" },
    },
    {
      value: 2,
      label: { en: "Moderately inaccurate", tr: "Bana pek uymuyor", de: "Trifft eher nicht zu" },
    },
    {
      value: 3,
      label: {
        en: "Neither accurate nor inaccurate",
        tr: "Ne uyuyor ne uymuyor",
        de: "Weder zutreffend noch unzutreffend",
      },
    },
    {
      value: 4,
      label: { en: "Moderately accurate", tr: "Bana oldukça uyuyor", de: "Trifft eher zu" },
    },
    {
      value: 5,
      label: { en: "Very accurate", tr: "Bana tamamen uyuyor", de: "Trifft voll und ganz zu" },
    },
  ],
  questions: [
    {
      id: "mini-ipip-1",
      text: {
        en: "I am the life of the party",
        tr: "Bulunduğum ortamın neşe kaynağıyımdır",
        de: "Ich bin der Mittelpunkt jeder Party",
      },
    },
    {
      id: "mini-ipip-2",
      text: {
        en: "I sympathize with others' feelings",
        tr: "Başkalarının duygularını paylaşırım",
        de: "Ich fühle mit anderen mit",
      },
    },
    {
      id: "mini-ipip-3",
      text: {
        en: "I get chores done right away",
        tr: "Günlük işlerimi hemen hallederim",
        de: "Ich erledige anstehende Aufgaben sofort",
      },
    },
    {
      id: "mini-ipip-4",
      text: {
        en: "I have frequent mood swings",
        tr: "Ruh halim sık sık değişir",
        de: "Meine Stimmung schwankt häufig",
      },
    },
    {
      id: "mini-ipip-5",
      text: {
        en: "I have a vivid imagination",
        tr: "Canlı bir hayal gücüm vardır",
        de: "Ich habe eine lebhafte Fantasie",
      },
    },
    {
      id: "mini-ipip-6",
      text: {
        en: "I don't talk a lot",
        tr: "Çok konuşmam",
        de: "Ich rede nicht viel",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-7",
      text: {
        en: "I am not interested in other people's problems",
        tr: "Başkalarının sorunlarıyla ilgilenmem",
        de: "Die Probleme anderer Menschen interessieren mich nicht",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-8",
      text: {
        en: "I often forget to put things back in their proper place",
        tr: "Eşyaları yerine koymayı sık sık unuturum",
        de: "Ich vergesse oft, Dinge an ihren Platz zurückzulegen",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-9",
      text: {
        en: "I am relaxed most of the time",
        tr: "Çoğu zaman rahat ve sakinimdir",
        de: "Ich bin die meiste Zeit entspannt",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-10",
      text: {
        en: "I am not interested in abstract ideas",
        tr: "Soyut fikirlerle ilgilenmem",
        de: "Ich interessiere mich nicht für abstrakte Ideen",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-11",
      text: {
        en: "I talk to a lot of different people at parties",
        tr: "Sosyal ortamlarda birçok farklı insanla konuşurum",
        de: "Auf Partys spreche ich mit vielen verschiedenen Leuten",
      },
    },
    {
      id: "mini-ipip-12",
      text: {
        en: "I feel others' emotions",
        tr: "Başkalarının duygularını hissederim",
        de: "Ich spüre die Gefühle anderer",
      },
    },
    {
      id: "mini-ipip-13",
      text: {
        en: "I like order",
        tr: "Düzeni severim",
        de: "Ich mag Ordnung",
      },
    },
    {
      id: "mini-ipip-14",
      text: {
        en: "I get upset easily",
        tr: "Kolayca keyfim kaçar",
        de: "Ich rege mich leicht auf",
      },
    },
    {
      id: "mini-ipip-15",
      text: {
        en: "I have difficulty understanding abstract ideas",
        tr: "Soyut fikirleri anlamakta zorlanırım",
        de: "Es fällt mir schwer, abstrakte Ideen zu verstehen",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-16",
      text: {
        en: "I keep in the background",
        tr: "Arka planda kalmayı tercih ederim",
        de: "Ich halte mich im Hintergrund",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-17",
      text: {
        en: "I am not really interested in others",
        tr: "Başkalarıyla pek ilgilenmem",
        de: "Ich interessiere mich nicht wirklich für andere",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-18",
      text: {
        en: "I make a mess of things",
        tr: "Ortalığı dağınık bırakırım",
        de: "Bei mir geht alles drunter und drüber",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-19",
      text: {
        en: "I seldom feel blue",
        tr: "Nadiren hüzünlenirim",
        de: "Ich fühle mich selten niedergeschlagen",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-20",
      text: {
        en: "I do not have a good imagination",
        tr: "İyi bir hayal gücüm yoktur",
        de: "Ich habe keine gute Vorstellungskraft",
      },
      reverseScored: true,
    },
  ],
  scoring: {
    kind: "subscales",
    subscales: [
      {
        id: "extraversion",
        label: { en: "Extraversion", tr: "Dışadönüklük", de: "Extraversion" },
        questionIds: ["mini-ipip-1", "mini-ipip-6", "mini-ipip-11", "mini-ipip-16"],
      },
      {
        id: "agreeableness",
        label: { en: "Agreeableness", tr: "Uyumluluk", de: "Verträglichkeit" },
        questionIds: ["mini-ipip-2", "mini-ipip-7", "mini-ipip-12", "mini-ipip-17"],
      },
      {
        id: "conscientiousness",
        label: { en: "Conscientiousness", tr: "Sorumluluk", de: "Gewissenhaftigkeit" },
        questionIds: ["mini-ipip-3", "mini-ipip-8", "mini-ipip-13", "mini-ipip-18"],
      },
      {
        id: "neuroticism",
        label: { en: "Neuroticism", tr: "Duygusal Dengesizlik", de: "Neurotizismus" },
        questionIds: ["mini-ipip-4", "mini-ipip-9", "mini-ipip-14", "mini-ipip-19"],
      },
      {
        id: "openness",
        label: {
          en: "Openness (Intellect/Imagination)",
          tr: "Deneyime Açıklık",
          de: "Offenheit (Intellekt/Vorstellungskraft)",
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
      "en: reproduced from the original. tr/de: AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note: "Descriptive personality traits, not a clinical screen — no cutoff bands are defined.",
  },
};
