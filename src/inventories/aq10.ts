import type { AssessmentDefinition } from "../types.ts";

/**
 * AQ-10 — Autism Spectrum Quotient, 10-item version (adults).
 *
 * Recommended by NICE (UK) for quick screening of autistic traits in
 * adults. Each item is answered on a 4-point agree/disagree scale but
 * scores binary: one point per item answered in the trait direction
 * ("agree" on items 1, 7, 8, 10; "disagree" on the rest, modeled here as
 * `reverseScored`). A total of 6 or more suggests referral for a
 * specialist autism assessment (Allison et al., 2012). Free to use.
 */
export const aq10: AssessmentDefinition = {
  id: "aq10",
  version: "1.0.0",
  title: {
    en: "Autism Spectrum Quotient (AQ-10) — Adult",
    tr: "Otizm Spektrum Anketi (AQ-10) — Yetişkin",
    de: "Autismus-Spektrum-Quotient (AQ-10) — Erwachsene",
  },
  description: {
    en: "A 10-item screening questionnaire for autistic traits in adults, condensed from the 50-item Autism Spectrum Quotient.",
    tr: "50 maddelik Otizm Spektrum Anketi'nden kısaltılmış, yetişkinlerde otistik özellikleri taramak için 10 maddelik bir ölçek.",
    de: "Ein 10-Item-Screeningfragebogen für autistische Merkmale bei Erwachsenen, verkürzt aus dem 50-Item-Autismus-Spektrum-Quotienten.",
  },
  instructions: {
    en: "For each statement, select the answer that best describes you.",
    tr: "Her ifade için sizi en iyi tanımlayan yanıtı işaretleyin.",
    de: "Wählen Sie zu jeder Aussage die Antwort, die Sie am besten beschreibt.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: { en: "Definitely disagree", tr: "Kesinlikle katılmıyorum", de: "Stimme überhaupt nicht zu" },
    },
    {
      value: 1,
      label: { en: "Slightly disagree", tr: "Biraz katılmıyorum", de: "Stimme eher nicht zu" },
    },
    {
      value: 2,
      label: { en: "Slightly agree", tr: "Biraz katılıyorum", de: "Stimme eher zu" },
    },
    {
      value: 3,
      label: { en: "Definitely agree", tr: "Kesinlikle katılıyorum", de: "Stimme voll und ganz zu" },
    },
  ],
  questions: [
    {
      id: "aq10-1",
      text: {
        en: "I often notice small sounds when others do not",
        tr: "Başkalarının fark etmediği küçük sesleri sıklıkla fark ederim",
        de: "Ich nehme oft leise Geräusche wahr, die andere nicht bemerken",
      },
    },
    {
      id: "aq10-2",
      text: {
        en: "I usually concentrate more on the whole picture, rather than the small details",
        tr: "Genellikle küçük ayrıntılardan çok resmin bütününe odaklanırım",
        de: "Ich konzentriere mich meist mehr auf das Gesamtbild als auf die kleinen Details",
      },
      reverseScored: true,
    },
    {
      id: "aq10-3",
      text: {
        en: "I find it easy to do more than one thing at once",
        tr: "Aynı anda birden fazla iş yapmak benim için kolaydır",
        de: "Es fällt mir leicht, mehrere Dinge gleichzeitig zu tun",
      },
      reverseScored: true,
    },
    {
      id: "aq10-4",
      text: {
        en: "If there is an interruption, I can switch back to what I was doing very quickly",
        tr: "Bir kesinti olursa, yapmakta olduğum işe çok hızlı bir şekilde geri dönebilirim",
        de: "Wenn ich unterbrochen werde, kann ich sehr schnell zu meiner Tätigkeit zurückkehren",
      },
      reverseScored: true,
    },
    {
      id: "aq10-5",
      text: {
        en: "I find it easy to 'read between the lines' when someone is talking to me",
        tr: "Biri benimle konuşurken 'satır aralarını okumak' benim için kolaydır",
        de: "Es fällt mir leicht, 'zwischen den Zeilen zu lesen', wenn jemand mit mir spricht",
      },
      reverseScored: true,
    },
    {
      id: "aq10-6",
      text: {
        en: "I know how to tell if someone listening to me is getting bored",
        tr: "Beni dinleyen birinin sıkılmaya başladığını nasıl anlayacağımı bilirim",
        de: "Ich erkenne, ob jemand, der mir zuhört, sich zu langweilen beginnt",
      },
      reverseScored: true,
    },
    {
      id: "aq10-7",
      text: {
        en: "When I'm reading a story I find it difficult to work out the characters' intentions",
        tr: "Bir öykü okurken karakterlerin niyetlerini anlamakta zorlanırım",
        de: "Wenn ich eine Geschichte lese, fällt es mir schwer, die Absichten der Figuren zu erkennen",
      },
    },
    {
      id: "aq10-8",
      text: {
        en: "I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc)",
        tr: "Belirli kategorilerdeki şeyler hakkında bilgi toplamayı severim (örneğin araba türleri, kuş türleri, tren türleri, bitki türleri vb.)",
        de: "Ich sammle gern Informationen über Kategorien von Dingen (z. B. Auto-, Vogel-, Zug- oder Pflanzenarten)",
      },
    },
    {
      id: "aq10-9",
      text: {
        en: "I find it easy to work out what someone is thinking or feeling just by looking at their face",
        tr: "Sadece yüzüne bakarak birinin ne düşündüğünü ya da hissettiğini anlamak benim için kolaydır",
        de: "Es fällt mir leicht, allein am Gesicht abzulesen, was jemand denkt oder fühlt",
      },
      reverseScored: true,
    },
    {
      id: "aq10-10",
      text: {
        en: "I find it difficult to work out people's intentions",
        tr: "İnsanların niyetlerini anlamakta zorlanırım",
        de: "Es fällt mir schwer, die Absichten anderer Menschen zu erkennen",
      },
    },
  ],
  scoring: {
    kind: "count",
    items: [
      { questionId: "aq10-1", minValue: 2 },
      { questionId: "aq10-2", minValue: 2 },
      { questionId: "aq10-3", minValue: 2 },
      { questionId: "aq10-4", minValue: 2 },
      { questionId: "aq10-5", minValue: 2 },
      { questionId: "aq10-6", minValue: 2 },
      { questionId: "aq10-7", minValue: 2 },
      { questionId: "aq10-8", minValue: 2 },
      { questionId: "aq10-9", minValue: 2 },
      { questionId: "aq10-10", minValue: 2 },
    ],
    bands: [
      {
        id: "below-threshold",
        min: 0,
        max: 5,
        label: {
          en: "Below screening threshold",
          tr: "Tarama eşiğinin altında",
          de: "Unterhalb der Screening-Schwelle",
        },
      },
      {
        id: "above-threshold",
        min: 6,
        max: 10,
        label: {
          en: "At or above threshold — consider referral for a specialist autism assessment",
          tr: "Eşikte ya da üzerinde — uzman otizm değerlendirmesine yönlendirme düşünülmelidir",
          de: "An oder über der Schwelle — Überweisung zu einer spezialisierten Autismus-Diagnostik erwägen",
        },
      },
    ],
  },
  meta: {
    reference:
      "Allison, C., Auyeung, B., & Baron-Cohen, S. (2012). Toward brief \"Red Flags\" for autism screening: The Short Autism Spectrum Quotient and the Short Quantitative Checklist in 1,000 cases and 3,000 controls. Journal of the American Academy of Child & Adolescent Psychiatry, 51(2), 202-212.",
    license:
      "Free with conditions — (c) Autism Research Centre, University of Cambridge; distributed free of charge, NICE-recommended for clinical screening. Verify licensing with ARC before embedding in commercial products.",
    licenseFlag: "free-with-conditions",
    translationProvenance:
      "en: reproduced from the original. tr/de: AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note: "Each item scores 1 point in the trait direction; disagree-scored items are modeled as reverseScored.",
  },
};
