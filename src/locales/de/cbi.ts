import type { InventoryLocalePack } from "../../types.ts";

/**
 * German locale pack for cbi. AI translation (Anthropic Claude,
 * claude-opus-5), unverified. See SOURCES.md.
 */
const pack: InventoryLocalePack = {
  "id": "cbi",
  "locale": "de",
  "title": "Kopenhagener Burnout-Inventar (CBI)",
  "description": "Ein Instrument mit 19 Items, das Burnout in drei getrennt ausgewerteten Skalen erfasst: persönliche, arbeitsbezogene und klientenbezogene Erschöpfung.",
  "instructions": "Wählen Sie die Antwort, die am besten auf Sie zutrifft. Wo von Klienten die Rede ist, setzen Sie das Wort ein, das zu Ihrer Arbeit passt — Patienten, Schüler, Kinder oder wen auch immer Sie betreuen. Beantworten Sie die Fragen zu Klienten nur, wenn Ihre Arbeit sie einschließt.",
  "options": [
    "Immer",
    "Oft",
    "Manchmal",
    "Selten",
    "Nie/fast nie"
  ],
  "questions": {
    "cbi-1": { "text": "Wie oft fühlen Sie sich müde?" },
    "cbi-2": { "text": "Wie oft sind Sie körperlich erschöpft?" },
    "cbi-3": { "text": "Wie oft sind Sie emotional erschöpft?" },
    "cbi-4": { "text": "Wie oft denken Sie: „Ich kann nicht mehr“?" },
    "cbi-5": { "text": "Wie oft fühlen Sie sich ausgelaugt?" },
    "cbi-6": { "text": "Wie oft fühlen Sie sich schwach und anfällig für Krankheiten?" },
    "cbi-7": {
      "text": "Ist Ihre Arbeit emotional erschöpfend?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-8": {
      "text": "Fühlen Sie sich wegen Ihrer Arbeit ausgebrannt?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-9": {
      "text": "Frustriert Ihre Arbeit Sie?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-10": { "text": "Fühlen Sie sich am Ende des Arbeitstages ausgelaugt?" },
    "cbi-11": { "text": "Sind Sie morgens bei dem Gedanken an einen weiteren Arbeitstag erschöpft?" },
    "cbi-12": { "text": "Haben Sie das Gefühl, dass jede Arbeitsstunde Sie ermüdet?" },
    "cbi-13": { "text": "Haben Sie in Ihrer Freizeit genug Energie für Familie und Freunde?" },
    "cbi-14": {
      "text": "Empfinden Sie die Arbeit mit Klienten als schwierig?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-15": {
      "text": "Empfinden Sie die Arbeit mit Klienten als frustrierend?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-16": {
      "text": "Zehrt die Arbeit mit Klienten an Ihrer Energie?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-17": {
      "text": "Haben Sie das Gefühl, bei der Arbeit mit Klienten mehr zu geben als zurückzubekommen?",
      "options": [
        "In sehr hohem Maße",
        "In hohem Maße",
        "Etwas",
        "In geringem Maße",
        "In sehr geringem Maße"
      ]
    },
    "cbi-18": { "text": "Sind Sie es müde, mit Klienten zu arbeiten?" },
    "cbi-19": { "text": "Fragen Sie sich manchmal, wie lange Sie noch mit Klienten arbeiten können?" }
  },
  "subscales": {
    "personal": { "label": "Persönliches Burnout" },
    "work": { "label": "Arbeitsbezogenes Burnout" },
    "client": { "label": "Klientenbezogenes Burnout" }
  }
};

export default pack;
