import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for csi16. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const trueScale = [
  "Überhaupt nicht zutreffend",
  "Wenig zutreffend",
  "Etwas zutreffend",
  "Weitgehend zutreffend",
  "Fast völlig zutreffend",
  "Völlig zutreffend",
];

// The semantic differentials are numbered positions on the authors' own
// form, identical in every language — restated here because a locale pack
// must cover every per-question scale.
const down = ["5", "4", "3", "2", "1", "0"];
const up = ["0", "1", "2", "3", "4", "5"];

const pack: InventoryLocalePack = {
  id: "csi16",
  locale: "de",
  title: "Couples Satisfaction Index (CSI-16)",
  description:
    "Ein Selbstbeurteilungsbogen mit 16 Fragen zur Partnerschaftszufriedenheit, mit Item-Response-Theorie für hohe Präzision im unzufriedenen Bereich entwickelt.",
  instructions:
    "Wählen Sie bei jeder der folgenden Aussagen die Antwort, die am besten beschreibt, wie Sie über Ihre Beziehung denken. Gehen Sie dabei von Ihrem ersten Eindruck und Ihrem unmittelbaren Gefühl zur jeweiligen Aussage aus.",
  options: ["Überhaupt nicht", "Wenig", "Etwas", "Weitgehend", "Fast völlig", "Völlig"],
  questions: {
    "csi16-1": {
      text: "Bitte geben Sie an, wie glücklich Ihre Beziehung alles in allem ist.",
      options: [
        "Äußerst unglücklich",
        "Ziemlich unglücklich",
        "Etwas unglücklich",
        "Glücklich",
        "Sehr glücklich",
        "Äußerst glücklich",
        "Perfekt",
      ],
    },
    "csi16-2": {
      text: "Wie oft haben Sie insgesamt den Eindruck, dass es zwischen Ihnen und Ihrem Partner gut läuft?",
      options: ["Immer", "Meistens", "Öfter als nicht", "Gelegentlich", "Selten", "Nie"],
    },
    "csi16-3": { text: "Unsere Beziehung ist stark", options: trueScale },
    "csi16-4": { text: "Meine Beziehung zu meinem Partner macht mich glücklich", options: trueScale },
    "csi16-5": { text: "Ich habe eine warme und angenehme Beziehung zu meinem Partner", options: trueScale },
    "csi16-6": { text: "Ich fühle mich mit meinem Partner wirklich als Team", options: trueScale },
    "csi16-7": { text: "Wie bereichernd ist Ihre Beziehung zu Ihrem Partner?" },
    "csi16-8": { text: "Wie gut erfüllt Ihr Partner Ihre Bedürfnisse?" },
    "csi16-9": { text: "Inwieweit hat Ihre Beziehung Ihre ursprünglichen Erwartungen erfüllt?" },
    "csi16-10": { text: "Wie zufrieden sind Sie insgesamt mit Ihrer Beziehung?" },
    "csi16-11": { text: "INTERESSANT — LANGWEILIG", options: down },
    "csi16-12": { text: "SCHLECHT — GUT", options: up },
    "csi16-13": { text: "ERFÜLLT — LEER", options: down },
    "csi16-14": { text: "STABIL — ZERBRECHLICH", options: down },
    "csi16-15": { text: "ENTMUTIGEND — HOFFNUNGSVOLL", options: up },
    "csi16-16": { text: "ERFREULICH — ELEND", options: down },
  },
  bands: {
    dissatisfied: "Deutliche Unzufriedenheit in der Beziehung",
    satisfied: "Keine deutliche Unzufriedenheit in der Beziehung",
  },
};

export default pack;
