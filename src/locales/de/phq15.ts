import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for phq15. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq15",
  locale: "de",
  title: "Gesundheitsfragebogen für Patienten-15 (PHQ-15)",
  description:
    "Ein Selbstbeurteilungsbogen mit 15 Fragen zur Schwere häufiger körperlicher Beschwerden, eingesetzt zum Screening auf Somatisierung und somatoforme Störungen.",
  instructions:
    "Wie stark fühlten Sie sich in den letzten 4 Wochen durch die folgenden Beschwerden beeinträchtigt?",
  options: ["Nicht beeinträchtigt", "Wenig beeinträchtigt", "Stark beeinträchtigt"],
  questions: {
    "phq15-1": { text: "Bauchschmerzen" },
    "phq15-2": { text: "Rückenschmerzen" },
    "phq15-3": { text: "Schmerzen in Armen, Beinen oder Gelenken (Knie, Hüften usw.)" },
    "phq15-4": { text: "Menstruationsbeschwerden oder andere Probleme mit der Regelblutung [nur Frauen]" },
    "phq15-5": { text: "Kopfschmerzen" },
    "phq15-6": { text: "Brustschmerzen" },
    "phq15-7": { text: "Schwindel" },
    "phq15-8": { text: "Ohnmachtsanfälle" },
    "phq15-9": { text: "Herzklopfen oder Herzrasen" },
    "phq15-10": { text: "Kurzatmigkeit" },
    "phq15-11": { text: "Schmerzen oder Probleme beim Geschlechtsverkehr" },
    "phq15-12": { text: "Verstopfung, weicher Stuhl oder Durchfall" },
    "phq15-13": { text: "Übelkeit, Blähungen oder Verdauungsbeschwerden" },
    "phq15-14": { text: "Müdigkeit oder das Gefühl, keine Energie zu haben" },
    "phq15-15": { text: "Schlafstörungen" },
  },
  bands: {
    minimal: "Minimale körperliche Beschwerden",
    low: "Geringe Schwere körperlicher Beschwerden",
    medium: "Mittlere Schwere körperlicher Beschwerden",
    high: "Hohe Schwere körperlicher Beschwerden",
  },
};

export default pack;
