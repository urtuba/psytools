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
    zh: "自闭症谱系商数问卷（AQ-10）— 成人版",
    es: "Cociente del Espectro Autista (AQ-10) — Adultos",
  },
  description: {
    en: "A 10-item screening questionnaire for autistic traits in adults, condensed from the 50-item Autism Spectrum Quotient.",
    tr: "50 maddelik Otizm Spektrum Anketi'nden kısaltılmış, yetişkinlerde otistik özellikleri taramak için 10 maddelik bir ölçek.",
    de: "Ein 10-Item-Screeningfragebogen für autistische Merkmale bei Erwachsenen, verkürzt aus dem 50-Item-Autismus-Spektrum-Quotienten.",
    zh: "一份用于筛查成人自闭症特质的10条目问卷，由50条目的自闭症谱系商数量表精简而成。",
    es: "Un cuestionario de cribado de 10 ítems para rasgos autistas en adultos, condensado a partir del Cociente del Espectro Autista de 50 ítems.",
  },
  instructions: {
    en: "For each statement, select the answer that best describes you.",
    tr: "Her ifade için sizi en iyi tanımlayan yanıtı işaretleyin.",
    de: "Wählen Sie zu jeder Aussage die Antwort, die Sie am besten beschreibt.",
    zh: "请针对每条陈述，选择最符合您情况的答案。",
    es: "Para cada afirmación, seleccione la respuesta que mejor lo describa.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 0,
      label: { en: "Definitely disagree", tr: "Kesinlikle katılmıyorum", de: "Stimme überhaupt nicht zu", zh: "完全不同意", es: "Totalmente en desacuerdo" },
    },
    {
      value: 1,
      label: { en: "Slightly disagree", tr: "Biraz katılmıyorum", de: "Stimme eher nicht zu", zh: "有点不同意", es: "Ligeramente en desacuerdo" },
    },
    {
      value: 2,
      label: { en: "Slightly agree", tr: "Biraz katılıyorum", de: "Stimme eher zu", zh: "有点同意", es: "Ligeramente de acuerdo" },
    },
    {
      value: 3,
      label: { en: "Definitely agree", tr: "Kesinlikle katılıyorum", de: "Stimme voll und ganz zu", zh: "完全同意", es: "Totalmente de acuerdo" },
    },
  ],
  questions: [
    {
      id: "aq10-1",
      text: {
        en: "I often notice small sounds when others do not",
        tr: "Başkalarının fark etmediği küçük sesleri sıklıkla fark ederim",
        de: "Ich nehme oft leise Geräusche wahr, die andere nicht bemerken",
        zh: "我经常注意到别人注意不到的微小声音",
        es: "A menudo noto pequeños sonidos que otras personas no perciben",
      },
    },
    {
      id: "aq10-2",
      text: {
        en: "I usually concentrate more on the whole picture, rather than the small details",
        tr: "Genellikle küçük ayrıntılardan çok resmin bütününe odaklanırım",
        de: "Ich konzentriere mich meist mehr auf das Gesamtbild als auf die kleinen Details",
        zh: "我通常更关注事情的整体，而不是小细节",
        es: "Normalmente me concentro más en la imagen global que en los pequeños detalles",
      },
      reverseScored: true,
    },
    {
      id: "aq10-3",
      text: {
        en: "I find it easy to do more than one thing at once",
        tr: "Aynı anda birden fazla iş yapmak benim için kolaydır",
        de: "Es fällt mir leicht, mehrere Dinge gleichzeitig zu tun",
        zh: "我觉得同时做几件事情很容易",
        es: "Me resulta fácil hacer más de una cosa a la vez",
      },
      reverseScored: true,
    },
    {
      id: "aq10-4",
      text: {
        en: "If there is an interruption, I can switch back to what I was doing very quickly",
        tr: "Bir kesinti olursa, yapmakta olduğum işe çok hızlı bir şekilde geri dönebilirim",
        de: "Wenn ich unterbrochen werde, kann ich sehr schnell zu meiner Tätigkeit zurückkehren",
        zh: "如果被打断，我能很快回到原来正在做的事情上",
        es: "Si hay una interrupción, puedo volver muy rápidamente a lo que estaba haciendo",
      },
      reverseScored: true,
    },
    {
      id: "aq10-5",
      text: {
        en: "I find it easy to 'read between the lines' when someone is talking to me",
        tr: "Biri benimle konuşurken 'satır aralarını okumak' benim için kolaydır",
        de: "Es fällt mir leicht, 'zwischen den Zeilen zu lesen', wenn jemand mit mir spricht",
        zh: "当别人和我说话时，我觉得'听出言外之意'很容易",
        es: "Me resulta fácil 'leer entre líneas' cuando alguien me está hablando",
      },
      reverseScored: true,
    },
    {
      id: "aq10-6",
      text: {
        en: "I know how to tell if someone listening to me is getting bored",
        tr: "Beni dinleyen birinin sıkılmaya başladığını nasıl anlayacağımı bilirim",
        de: "Ich erkenne, ob jemand, der mir zuhört, sich zu langweilen beginnt",
        zh: "我知道如何判断听我说话的人是否开始感到厌烦",
        es: "Sé darme cuenta de si la persona que me escucha se está aburriendo",
      },
      reverseScored: true,
    },
    {
      id: "aq10-7",
      text: {
        en: "When I'm reading a story I find it difficult to work out the characters' intentions",
        tr: "Bir öykü okurken karakterlerin niyetlerini anlamakta zorlanırım",
        de: "Wenn ich eine Geschichte lese, fällt es mir schwer, die Absichten der Figuren zu erkennen",
        zh: "读故事时，我很难弄清人物的意图",
        es: "Cuando leo una historia, me resulta difícil deducir las intenciones de los personajes",
      },
    },
    {
      id: "aq10-8",
      text: {
        en: "I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc)",
        tr: "Belirli kategorilerdeki şeyler hakkında bilgi toplamayı severim (örneğin araba türleri, kuş türleri, tren türleri, bitki türleri vb.)",
        de: "Ich sammle gern Informationen über Kategorien von Dingen (z. B. Auto-, Vogel-, Zug- oder Pflanzenarten)",
        zh: "我喜欢收集各类事物的信息（例如汽车的类型、鸟的种类、火车的类型、植物的种类等）",
        es: "Me gusta recopilar información sobre categorías de cosas (p. ej., tipos de coches, de aves, de trenes, de plantas, etc.)",
      },
    },
    {
      id: "aq10-9",
      text: {
        en: "I find it easy to work out what someone is thinking or feeling just by looking at their face",
        tr: "Sadece yüzüne bakarak birinin ne düşündüğünü ya da hissettiğini anlamak benim için kolaydır",
        de: "Es fällt mir leicht, allein am Gesicht abzulesen, was jemand denkt oder fühlt",
        zh: "我觉得只看别人的脸就能轻松看出对方在想什么或有什么感受",
        es: "Me resulta fácil deducir lo que alguien piensa o siente con solo mirarle la cara",
      },
      reverseScored: true,
    },
    {
      id: "aq10-10",
      text: {
        en: "I find it difficult to work out people's intentions",
        tr: "İnsanların niyetlerini anlamakta zorlanırım",
        de: "Es fällt mir schwer, die Absichten anderer Menschen zu erkennen",
        zh: "我很难弄清别人的意图",
        es: "Me resulta difícil deducir las intenciones de las personas",
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
          zh: "低于筛查阈值",
          es: "Por debajo del umbral de cribado",
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
          zh: "达到或超过阈值——建议考虑转介进行自闭症专科评估",
          es: "En el umbral o por encima — considere la derivación para una evaluación especializada de autismo",
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
      "en: reproduced from the original. Other locales (tr, de, zh, es): AI translation (Anthropic Claude, claude-fable-5) from the original English; official translations were not consulted and the texts are unverified. See SOURCES.md.",
    note: "Each item scores 1 point in the trait direction; disagree-scored items are modeled as reverseScored.",
  },
};
