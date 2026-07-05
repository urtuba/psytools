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
    zh: "Mini-IPIP 大五人格量表",
    es: "Escala de Personalidad de los Cinco Grandes Mini-IPIP",
  },
  description: {
    en: "A 20-item public-domain measure of the Big Five personality traits (extraversion, agreeableness, conscientiousness, neuroticism, openness), drawn from the International Personality Item Pool.",
    tr: "Uluslararası Kişilik Madde Havuzu'ndan (IPIP) türetilmiş, Beş Faktör kişilik özelliklerini (dışadönüklük, uyumluluk, sorumluluk, duygusal dengesizlik, deneyime açıklık) ölçen 20 maddelik kamu malı bir ölçek.",
    de: "Ein gemeinfreies 20-Item-Instrument zur Messung der Big-Five-Persönlichkeitsmerkmale (Extraversion, Verträglichkeit, Gewissenhaftigkeit, Neurotizismus, Offenheit) aus dem International Personality Item Pool.",
    zh: "一个源自国际人格条目库（IPIP）的20项公共领域量表，用于测量大五人格特质（外向性、宜人性、尽责性、神经质、开放性）。",
    es: "Una medida de dominio público de 20 ítems de los cinco grandes rasgos de personalidad (extraversión, amabilidad, responsabilidad, neuroticismo, apertura), extraída del International Personality Item Pool.",
  },
  instructions: {
    en: "Describe yourself as you generally are now, not as you wish to be in the future. Indicate how accurately each statement describes you.",
    tr: "Kendinizi gelecekte olmak istediğiniz gibi değil, şu anda genel olarak olduğunuz gibi tanımlayın. Her ifadenin sizi ne kadar doğru tanımladığını belirtin.",
    de: "Beschreiben Sie sich so, wie Sie im Allgemeinen jetzt sind, nicht wie Sie in Zukunft sein möchten. Geben Sie an, wie zutreffend jede Aussage Sie beschreibt.",
    zh: "请按照您现在通常的样子来描述自己，而不是您希望将来成为的样子。请指出每个陈述对您的描述有多准确。",
    es: "Descríbase tal como es generalmente ahora, no como desea ser en el futuro. Indique con qué precisión le describe cada afirmación.",
  },
  defaultLocale: "en",
  options: [
    {
      value: 1,
      label: {
        en: "Very inaccurate",
        tr: "Bana hiç uymuyor",
        de: "Trifft überhaupt nicht zu",
        zh: "非常不符合",
        es: "Muy inexacto",
      },
    },
    {
      value: 2,
      label: {
        en: "Moderately inaccurate",
        tr: "Bana pek uymuyor",
        de: "Trifft eher nicht zu",
        zh: "比较不符合",
        es: "Moderadamente inexacto",
      },
    },
    {
      value: 3,
      label: {
        en: "Neither accurate nor inaccurate",
        tr: "Ne uyuyor ne uymuyor",
        de: "Weder zutreffend noch unzutreffend",
        zh: "既非符合也非不符合",
        es: "Ni exacto ni inexacto",
      },
    },
    {
      value: 4,
      label: {
        en: "Moderately accurate",
        tr: "Bana oldukça uyuyor",
        de: "Trifft eher zu",
        zh: "比较符合",
        es: "Moderadamente exacto",
      },
    },
    {
      value: 5,
      label: {
        en: "Very accurate",
        tr: "Bana tamamen uyuyor",
        de: "Trifft voll und ganz zu",
        zh: "非常符合",
        es: "Muy exacto",
      },
    },
  ],
  questions: [
    {
      id: "mini-ipip-1",
      text: {
        en: "I am the life of the party",
        tr: "Bulunduğum ortamın neşe kaynağıyımdır",
        de: "Ich bin der Mittelpunkt jeder Party",
        zh: "我是聚会中的活跃人物",
        es: "Soy el alma de la fiesta",
      },
    },
    {
      id: "mini-ipip-2",
      text: {
        en: "I sympathize with others' feelings",
        tr: "Başkalarının duygularını paylaşırım",
        de: "Ich fühle mit anderen mit",
        zh: "我能体会别人的感受",
        es: "Me identifico con los sentimientos de los demás",
      },
    },
    {
      id: "mini-ipip-3",
      text: {
        en: "I get chores done right away",
        tr: "Günlük işlerimi hemen hallederim",
        de: "Ich erledige anstehende Aufgaben sofort",
        zh: "我会立刻把日常事务做完",
        es: "Hago las tareas de inmediato",
      },
    },
    {
      id: "mini-ipip-4",
      text: {
        en: "I have frequent mood swings",
        tr: "Ruh halim sık sık değişir",
        de: "Meine Stimmung schwankt häufig",
        zh: "我的情绪经常波动",
        es: "Tengo cambios de humor frecuentes",
      },
    },
    {
      id: "mini-ipip-5",
      text: {
        en: "I have a vivid imagination",
        tr: "Canlı bir hayal gücüm vardır",
        de: "Ich habe eine lebhafte Fantasie",
        zh: "我有丰富的想象力",
        es: "Tengo una imaginación viva",
      },
    },
    {
      id: "mini-ipip-6",
      text: {
        en: "I don't talk a lot",
        tr: "Çok konuşmam",
        de: "Ich rede nicht viel",
        zh: "我话不多",
        es: "No hablo mucho",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-7",
      text: {
        en: "I am not interested in other people's problems",
        tr: "Başkalarının sorunlarıyla ilgilenmem",
        de: "Die Probleme anderer Menschen interessieren mich nicht",
        zh: "我对别人的问题不感兴趣",
        es: "No me interesan los problemas de los demás",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-8",
      text: {
        en: "I often forget to put things back in their proper place",
        tr: "Eşyaları yerine koymayı sık sık unuturum",
        de: "Ich vergesse oft, Dinge an ihren Platz zurückzulegen",
        zh: "我经常忘记把东西放回原处",
        es: "A menudo olvido volver a poner las cosas en su sitio",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-9",
      text: {
        en: "I am relaxed most of the time",
        tr: "Çoğu zaman rahat ve sakinimdir",
        de: "Ich bin die meiste Zeit entspannt",
        zh: "我大部分时间都很放松",
        es: "Estoy relajado la mayor parte del tiempo",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-10",
      text: {
        en: "I am not interested in abstract ideas",
        tr: "Soyut fikirlerle ilgilenmem",
        de: "Ich interessiere mich nicht für abstrakte Ideen",
        zh: "我对抽象的观念不感兴趣",
        es: "No me interesan las ideas abstractas",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-11",
      text: {
        en: "I talk to a lot of different people at parties",
        tr: "Sosyal ortamlarda birçok farklı insanla konuşurum",
        de: "Auf Partys spreche ich mit vielen verschiedenen Leuten",
        zh: "在聚会上我会和很多不同的人交谈",
        es: "En las fiestas hablo con muchas personas diferentes",
      },
    },
    {
      id: "mini-ipip-12",
      text: {
        en: "I feel others' emotions",
        tr: "Başkalarının duygularını hissederim",
        de: "Ich spüre die Gefühle anderer",
        zh: "我能感受到别人的情绪",
        es: "Siento las emociones de los demás",
      },
    },
    {
      id: "mini-ipip-13",
      text: {
        en: "I like order",
        tr: "Düzeni severim",
        de: "Ich mag Ordnung",
        zh: "我喜欢井井有条",
        es: "Me gusta el orden",
      },
    },
    {
      id: "mini-ipip-14",
      text: {
        en: "I get upset easily",
        tr: "Kolayca keyfim kaçar",
        de: "Ich rege mich leicht auf",
        zh: "我容易心烦意乱",
        es: "Me altero con facilidad",
      },
    },
    {
      id: "mini-ipip-15",
      text: {
        en: "I have difficulty understanding abstract ideas",
        tr: "Soyut fikirleri anlamakta zorlanırım",
        de: "Es fällt mir schwer, abstrakte Ideen zu verstehen",
        zh: "我难以理解抽象的观念",
        es: "Me cuesta entender las ideas abstractas",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-16",
      text: {
        en: "I keep in the background",
        tr: "Arka planda kalmayı tercih ederim",
        de: "Ich halte mich im Hintergrund",
        zh: "我习惯待在幕后",
        es: "Me mantengo en un segundo plano",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-17",
      text: {
        en: "I am not really interested in others",
        tr: "Başkalarıyla pek ilgilenmem",
        de: "Ich interessiere mich nicht wirklich für andere",
        zh: "我对别人并不真正感兴趣",
        es: "En realidad no me interesan los demás",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-18",
      text: {
        en: "I make a mess of things",
        tr: "Ortalığı dağınık bırakırım",
        de: "Bei mir geht alles drunter und drüber",
        zh: "我常把事情弄得一团糟",
        es: "Lo dejo todo hecho un desastre",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-19",
      text: {
        en: "I seldom feel blue",
        tr: "Nadiren hüzünlenirim",
        de: "Ich fühle mich selten niedergeschlagen",
        zh: "我很少感到忧郁",
        es: "Rara vez me siento triste",
      },
      reverseScored: true,
    },
    {
      id: "mini-ipip-20",
      text: {
        en: "I do not have a good imagination",
        tr: "İyi bir hayal gücüm yoktur",
        de: "Ich habe keine gute Vorstellungskraft",
        zh: "我的想象力不佳",
        es: "No tengo buena imaginación",
      },
      reverseScored: true,
    },
  ],
  scoring: {
    kind: "subscales",
    subscales: [
      {
        id: "extraversion",
        label: {
          en: "Extraversion",
          tr: "Dışadönüklük",
          de: "Extraversion",
          zh: "外向性",
          es: "Extraversión",
        },
        questionIds: ["mini-ipip-1", "mini-ipip-6", "mini-ipip-11", "mini-ipip-16"],
      },
      {
        id: "agreeableness",
        label: {
          en: "Agreeableness",
          tr: "Uyumluluk",
          de: "Verträglichkeit",
          zh: "宜人性",
          es: "Amabilidad",
        },
        questionIds: ["mini-ipip-2", "mini-ipip-7", "mini-ipip-12", "mini-ipip-17"],
      },
      {
        id: "conscientiousness",
        label: {
          en: "Conscientiousness",
          tr: "Sorumluluk",
          de: "Gewissenhaftigkeit",
          zh: "尽责性",
          es: "Responsabilidad",
        },
        questionIds: ["mini-ipip-3", "mini-ipip-8", "mini-ipip-13", "mini-ipip-18"],
      },
      {
        id: "neuroticism",
        label: {
          en: "Neuroticism",
          tr: "Duygusal Dengesizlik",
          de: "Neurotizismus",
          zh: "神经质",
          es: "Neuroticismo",
        },
        questionIds: ["mini-ipip-4", "mini-ipip-9", "mini-ipip-14", "mini-ipip-19"],
      },
      {
        id: "openness",
        label: {
          en: "Openness (Intellect/Imagination)",
          tr: "Deneyime Açıklık",
          de: "Offenheit (Intellekt/Vorstellungskraft)",
          zh: "开放性（智力/想象力）",
          es: "Apertura (Intelecto/Imaginación)",
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
