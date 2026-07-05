import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for audit. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "audit",
  "locale": "de",
  "title": "Alcohol Use Disorders Identification Test (AUDIT)",
  "description": "Ein 10-Item-Screeninginstrument der WHO für riskanten und schädlichen Alkoholkonsum sowie mögliche Alkoholabhängigkeit.",
  "instructions": "Bitte beantworten Sie die folgenden Fragen zu Ihrem Konsum alkoholischer Getränke in den letzten 12 Monaten. Ein Glas entspricht einem Standardgetränk (z. B. ein Glas Bier oder Wein oder ein einfacher Schnaps).",
  "options": [
    "Nie",
    "Seltener als einmal im Monat",
    "Einmal im Monat",
    "Einmal pro Woche",
    "Täglich oder fast täglich"
  ],
  "questions": {
    "audit-1": {
      "text": "Wie oft trinken Sie Alkohol?",
      "options": [
        "Nie",
        "Einmal im Monat oder seltener",
        "2- bis 4-mal im Monat",
        "2- bis 3-mal pro Woche",
        "4-mal oder öfter pro Woche"
      ]
    },
    "audit-2": {
      "text": "Wenn Sie Alkohol trinken, wie viele Gläser trinken Sie dann üblicherweise an einem Tag?",
      "options": [
        "1 oder 2",
        "3 oder 4",
        "5 oder 6",
        "7 bis 9",
        "10 oder mehr"
      ]
    },
    "audit-3": {
      "text": "Wie oft trinken Sie sechs oder mehr Gläser Alkohol bei einer Gelegenheit?"
    },
    "audit-4": {
      "text": "Wie oft konnten Sie im letzten Jahr nicht mehr mit dem Trinken aufhören, nachdem Sie einmal angefangen hatten?"
    },
    "audit-5": {
      "text": "Wie oft konnten Sie im letzten Jahr Ihren Verpflichtungen nicht nachkommen, weil Sie getrunken hatten?"
    },
    "audit-6": {
      "text": "Wie oft brauchten Sie im letzten Jahr morgens ein erstes Glas Alkohol, um nach einem Abend mit viel Alkohol wieder auf die Beine zu kommen?"
    },
    "audit-7": {
      "text": "Wie oft hatten Sie im letzten Jahr Schuldgefühle oder Gewissensbisse, nachdem Sie getrunken hatten?"
    },
    "audit-8": {
      "text": "Wie oft konnten Sie sich im letzten Jahr nicht an das erinnern, was am Vorabend geschehen war, weil Sie getrunken hatten?"
    },
    "audit-9": {
      "text": "Haben Sie sich oder eine andere Person schon einmal verletzt, weil Sie getrunken hatten?",
      "options": [
        "Nein",
        "Ja, aber nicht im letzten Jahr",
        "Ja, im letzten Jahr"
      ]
    },
    "audit-10": {
      "text": "Hat ein Verwandter, Freund, Arzt oder eine andere medizinische Fachkraft sich schon einmal Sorgen über Ihren Alkoholkonsum gemacht oder Ihnen geraten, weniger zu trinken?",
      "options": [
        "Nein",
        "Ja, aber nicht im letzten Jahr",
        "Ja, im letzten Jahr"
      ]
    }
  },
  "bands": {
    "zone-1": "Zone I: geringes Risiko — Aufklärung über Alkohol",
    "zone-2": "Zone II: riskanter Konsum — einfache Beratung empfohlen",
    "zone-3": "Zone III: schädlicher Konsum — Kurzintervention und weitere Beobachtung",
    "zone-4": "Zone IV: mögliche Abhängigkeit — Überweisung zur diagnostischen Abklärung"
  }
};

export default pack;
