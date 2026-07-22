import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for flourishing. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "flourishing",
  "locale": "de",
  "title": "Flourishing-Skala (FS)",
  "description": "Ein 8-Item-Kurzmaß für das selbstwahrgenommene Gelingen in wichtigen Lebensbereichen wie Beziehungen, Selbstwert, Sinnhaftigkeit und Optimismus.",
  "instructions": "Im Folgenden finden Sie acht Aussagen, denen Sie zustimmen oder nicht zustimmen können. Geben Sie bitte an, inwieweit Sie jeder Aussage zustimmen.",
  "options": [
    "Stimme überhaupt nicht zu",
    "Stimme nicht zu",
    "Stimme eher nicht zu",
    "Weder noch",
    "Stimme eher zu",
    "Stimme zu",
    "Stimme voll und ganz zu"
  ],
  "questions": {
    "flourishing-1": { "text": "Ich führe ein sinnerfülltes und bedeutungsvolles Leben." },
    "flourishing-2": { "text": "Meine sozialen Beziehungen sind unterstützend und bereichernd." },
    "flourishing-3": { "text": "Ich bin engagiert und interessiert an meinen alltäglichen Aktivitäten." },
    "flourishing-4": { "text": "Ich trage aktiv zum Glück und Wohlergehen anderer bei." },
    "flourishing-5": { "text": "Ich bin kompetent und fähig in den Tätigkeiten, die mir wichtig sind." },
    "flourishing-6": { "text": "Ich bin ein guter Mensch und führe ein gutes Leben." },
    "flourishing-7": { "text": "Ich bin optimistisch, was meine Zukunft betrifft." },
    "flourishing-8": { "text": "Andere Menschen respektieren mich." }
  }
};

export default pack;
