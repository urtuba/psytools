import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for eat26. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const frequency = ["Immer", "Meistens", "Oft", "Manchmal", "Selten", "Nie"];

const pack: InventoryLocalePack = {
  id: "eat26",
  locale: "de",
  title: "Eating Attitudes Test (EAT-26)",
  description:
    "Ein Selbstbeurteilungsbogen mit 26 Fragen zum Screening auf Symptome und Sorgen, die für Essstörungen charakteristisch sind.",
  instructions:
    "Dies ist ein Screening-Instrument, das Ihnen helfen soll einzuschätzen, ob bei Ihnen eine Essstörung vorliegen könnte, die professionelle Behandlung erfordert. Es ist nicht dafür gedacht, eine Essstörung zu diagnostizieren oder eine fachliche Beratung zu ersetzen. Bitte füllen Sie den folgenden Bogen so genau, ehrlich und vollständig wie möglich aus. Es gibt keine richtigen oder falschen Antworten. Alle Ihre Antworten sind vertraulich.",
  options: frequency,
  questions: {
    "eat26-1": { text: "Ich habe große Angst davor, übergewichtig zu sein." },
    "eat26-2": { text: "Ich vermeide es zu essen, wenn ich hungrig bin." },
    "eat26-3": { text: "Ich ertappe mich dabei, dass ich mich gedanklich stark mit Essen beschäftige." },
    "eat26-4": { text: "Ich hatte Essanfälle, bei denen ich das Gefühl hatte, nicht aufhören zu können." },
    "eat26-5": { text: "Ich zerteile mein Essen in kleine Stücke." },
    "eat26-6": { text: "Ich achte auf den Kaloriengehalt der Lebensmittel, die ich esse." },
    "eat26-7": {
      text: "Ich vermeide besonders Lebensmittel mit hohem Kohlenhydratanteil (z. B. Brot, Reis, Kartoffeln usw.)",
    },
    "eat26-8": { text: "Ich habe das Gefühl, dass andere es lieber sähen, wenn ich mehr äße." },
    "eat26-9": { text: "Ich erbreche, nachdem ich gegessen habe." },
    "eat26-10": { text: "Ich fühle mich nach dem Essen extrem schuldig." },
    "eat26-11": { text: "Der Wunsch, dünner zu sein, beschäftigt mich ständig." },
    "eat26-12": { text: "Beim Sport denke ich daran, Kalorien zu verbrennen." },
    "eat26-13": { text: "Andere Menschen finden, dass ich zu dünn bin." },
    "eat26-14": { text: "Der Gedanke, Fett am Körper zu haben, beschäftigt mich ständig." },
    "eat26-15": { text: "Ich brauche zum Essen länger als andere." },
    "eat26-16": { text: "Ich vermeide Lebensmittel, die Zucker enthalten." },
    "eat26-17": { text: "Ich esse Diätprodukte." },
    "eat26-18": { text: "Ich habe das Gefühl, dass Essen mein Leben bestimmt." },
    "eat26-19": { text: "Ich habe mich beim Essen unter Kontrolle." },
    "eat26-20": { text: "Ich habe das Gefühl, dass andere mich zum Essen drängen." },
    "eat26-21": { text: "Ich verwende zu viel Zeit und Gedanken auf das Essen." },
    "eat26-22": { text: "Nach Süßigkeiten fühle ich mich unwohl." },
    "eat26-23": { text: "Ich halte Diät." },
    "eat26-24": { text: "Ich mag es, wenn mein Magen leer ist." },
    "eat26-25": { text: "Nach Mahlzeiten verspüre ich den Drang zu erbrechen." },
    "eat26-26": { text: "Ich probiere gern neue, gehaltvolle Speisen.", options: frequency },
  },
  bands: {
    "below-cutoff": "Unterhalb des Überweisungs-Schwellenwerts",
    "at-or-above-cutoff":
      "Auf oder über dem Überweisungs-Schwellenwert — eine Abklärung durch eine qualifizierte Fachperson wird empfohlen",
  },
};

export default pack;
