import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for phq4. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq4",
  locale: "de",
  title: "Patienten-Gesundheitsfragebogen-4 (PHQ-4)",
  description:
    "Ein ultrakurzes Screening auf Angst und Depression mit 4 Fragen, zusammengesetzt aus GAD-2 und PHQ-2.",
  instructions: "Wie oft haben Sie die folgenden Probleme in den letzten 2 Wochen belastet?",
  options: ["Gar nicht", "An mehreren Tagen", "An mehr als der Hälfte der Tage", "Fast jeden Tag"],
  questions: {
    "phq4-1": { text: "Sich nervös, ängstlich oder angespannt fühlen" },
    "phq4-2": { text: "Nicht aufhören oder kontrollieren können, sich Sorgen zu machen" },
    "phq4-3": { text: "Wenig Interesse oder Freude daran, Dinge zu tun" },
    "phq4-4": { text: "Sich niedergeschlagen, deprimiert oder hoffnungslos fühlen" },
  },
  subscales: {
    anxiety: {
      label: "Angst (GAD-2)",
      bands: {
        "below-cutoff": "Unterhalb des Screening-Schwellenwerts",
        positive: "Positives Screening: weitere Abklärung mit dem GAD-7 und einem klinischen Gespräch",
      },
    },
    depression: {
      label: "Depression (PHQ-2)",
      bands: {
        "below-cutoff": "Unterhalb des Screening-Schwellenwerts",
        positive: "Positives Screening: weitere Abklärung mit dem PHQ-9 und einem klinischen Gespräch",
      },
    },
    total: { label: "Gesamtwert (PHQ-4)" },
  },
};

export default pack;
