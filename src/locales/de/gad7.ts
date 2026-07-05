import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for gad7. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "gad7",
  "locale": "de",
  "title": "Generalisierte Angststörung Skala (GAD-7)",
  "description": "Ein Selbstbeurteilungsfragebogen mit 7 Items zum Screening und zur Schweregradmessung generalisierter Angst.",
  "instructions": "Wie oft fühlten Sie sich im Verlauf der letzten 2 Wochen durch die folgenden Beschwerden beeinträchtigt?",
  "options": [
    "Überhaupt nicht",
    "An einzelnen Tagen",
    "An mehr als der Hälfte der Tage",
    "Beinahe jeden Tag"
  ],
  "questions": {
    "gad7-1": {
      "text": "Nervosität, Ängstlichkeit oder Anspannung"
    },
    "gad7-2": {
      "text": "Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren"
    },
    "gad7-3": {
      "text": "Übermäßige Sorgen bezüglich verschiedener Angelegenheiten"
    },
    "gad7-4": {
      "text": "Schwierigkeiten, sich zu entspannen"
    },
    "gad7-5": {
      "text": "Rastlosigkeit, sodass das Stillsitzen schwerfällt"
    },
    "gad7-6": {
      "text": "Schnelle Verärgerung oder Gereiztheit"
    },
    "gad7-7": {
      "text": "Angstgefühl, als könnte etwas Schlimmes passieren"
    }
  },
  "bands": {
    "minimal": "Minimale Angst",
    "mild": "Leichte Angst",
    "moderate": "Mittelgradige Angst",
    "severe": "Schwere Angst"
  }
};

export default pack;
