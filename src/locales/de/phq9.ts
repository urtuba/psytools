import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for phq9. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "phq9",
  "locale": "de",
  "title": "Gesundheitsfragebogen für Patienten (PHQ-9)",
  "description": "Ein Selbstbeurteilungsfragebogen mit 9 Items zum Screening und zur Schweregradmessung von Depression.",
  "instructions": "Wie oft fühlten Sie sich im Verlauf der letzten 2 Wochen durch die folgenden Beschwerden beeinträchtigt?",
  "options": [
    "Überhaupt nicht",
    "An einzelnen Tagen",
    "An mehr als der Hälfte der Tage",
    "Beinahe jeden Tag"
  ],
  "questions": {
    "phq9-1": {
      "text": "Wenig Interesse oder Freude an Ihren Tätigkeiten"
    },
    "phq9-2": {
      "text": "Niedergeschlagenheit, Schwermut oder Hoffnungslosigkeit"
    },
    "phq9-3": {
      "text": "Schwierigkeiten ein- oder durchzuschlafen oder vermehrter Schlaf"
    },
    "phq9-4": {
      "text": "Müdigkeit oder Gefühl, keine Energie zu haben"
    },
    "phq9-5": {
      "text": "Verminderter Appetit oder übermäßiges Bedürfnis zu essen"
    },
    "phq9-6": {
      "text": "Schlechte Meinung von sich selbst; Gefühl, ein Versager zu sein oder die Familie enttäuscht zu haben"
    },
    "phq9-7": {
      "text": "Schwierigkeiten, sich auf etwas zu konzentrieren, z. B. beim Zeitunglesen oder Fernsehen"
    },
    "phq9-8": {
      "text": "Waren Ihre Bewegungen oder Ihre Sprache so verlangsamt, dass es auch anderen auffallen würde? Oder waren Sie im Gegenteil „zappelig“ oder ruhelos und hatten dadurch einen stärkeren Bewegungsdrang als sonst?"
    },
    "phq9-9": {
      "text": "Gedanken, dass Sie lieber tot wären oder sich Leid zufügen möchten"
    }
  },
  "bands": {
    "minimal": "Minimale Depression",
    "mild": "Leichte Depression",
    "moderate": "Mittelgradige Depression",
    "moderately-severe": "Mittelschwere Depression",
    "severe": "Schwere Depression"
  },
  "flags": {
    "suicidality": "Selbstverletzungs- oder Suizidgedanken angegeben (Item 9) — erfordert klinische Abklärung"
  }
};

export default pack;
