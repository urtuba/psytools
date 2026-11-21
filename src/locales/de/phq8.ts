import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for phq8. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq8",
  locale: "de",
  title: "Patienten-Gesundheitsfragebogen-8 (PHQ-8)",
  description:
    "Ein Selbstbeurteilungsbogen mit 8 Fragen zur Schwere einer Depression: der PHQ-9 ohne die Frage nach Gedanken an Selbstverletzung.",
  instructions: "Wie oft hat Sie eines der folgenden Probleme in den letzten 2 Wochen belastet?",
  options: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"],
  questions: {
    "phq8-1": { text: "Wenig Interesse oder Freude daran, Dinge zu tun" },
    "phq8-2": { text: "Sich niedergeschlagen, deprimiert oder hoffnungslos fühlen" },
    "phq8-3": { text: "Probleme beim Einschlafen oder Durchschlafen oder zu viel Schlaf" },
    "phq8-4": { text: "Sich müde fühlen oder wenig Energie haben" },
    "phq8-5": { text: "Wenig Appetit oder zu viel essen" },
    "phq8-6": {
      text: "Sich schlecht fühlen wegen sich selbst, oder das Gefühl, ein Versager zu sein oder sich selbst oder die eigene Familie enttäuscht zu haben",
    },
    "phq8-7": {
      text: "Schwierigkeiten, sich auf Dinge zu konzentrieren, etwa beim Lesen der Zeitung oder beim Fernsehen",
    },
    "phq8-8": {
      text: "Sich so langsam bewegen oder sprechen, dass es anderen Menschen hätte auffallen können? Oder das Gegenteil: so zappelig oder unruhig sein, dass Sie sich viel mehr als sonst bewegt haben",
    },
  },
  bands: {
    minimal: "Minimale Depression",
    mild: "Leichte Depression",
    moderate: "Mittelgradige Depression",
    "moderately-severe": "Mittelschwere bis schwere Depression",
    severe: "Schwere Depression",
  },
};

export default pack;
