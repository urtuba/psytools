import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for swls. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "swls",
  "locale": "de",
  "title": "Skala zur Lebenszufriedenheit (SWLS)",
  "description": "Ein 5-Item-Maß für die allgemeine Lebenszufriedenheit.",
  "instructions": "Im Folgenden finden Sie fünf Aussagen, denen Sie zustimmen oder nicht zustimmen können. Geben Sie bitte an, inwieweit Sie jeder Aussage zustimmen. Bitte antworten Sie offen und ehrlich.",
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
    "swls-1": { "text": "In den meisten Bereichen entspricht mein Leben meinem Ideal." },
    "swls-2": { "text": "Meine Lebensbedingungen sind ausgezeichnet." },
    "swls-3": { "text": "Ich bin zufrieden mit meinem Leben." },
    "swls-4": { "text": "Bisher habe ich die wichtigen Dinge erreicht, die ich mir für mein Leben wünsche." },
    "swls-5": { "text": "Wenn ich mein Leben noch einmal leben könnte, würde ich fast nichts ändern." }
  },
  "bands": {
    "extremely-dissatisfied": "Extrem unzufrieden",
    "dissatisfied": "Unzufrieden",
    "slightly-dissatisfied": "Leicht unzufrieden",
    "neutral": "Neutral",
    "slightly-satisfied": "Leicht zufrieden",
    "satisfied": "Zufrieden",
    "extremely-satisfied": "Äußerst zufrieden"
  }
};

export default pack;
