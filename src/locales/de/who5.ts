import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for who5. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "who5",
  "locale": "de",
  "title": "WHO-5-Index zum Wohlbefinden",
  "description": "Eine Selbstbeurteilungsskala mit 5 Items zur Messung des subjektiven psychischen Wohlbefindens in den letzten zwei Wochen. Höhere Werte bedeuten besseres Wohlbefinden.",
  "instructions": "Bitte geben Sie für jede der fünf Aussagen an, welche Antwort Ihrem Befinden in den letzten zwei Wochen am nächsten kommt.",
  "options": [
    "Zu keinem Zeitpunkt",
    "Ab und zu",
    "Etwas weniger als die Hälfte der Zeit",
    "Etwas mehr als die Hälfte der Zeit",
    "Meistens",
    "Die ganze Zeit"
  ],
  "questions": {
    "who5-1": {
      "text": "Ich war froh und guter Laune"
    },
    "who5-2": {
      "text": "Ich habe mich ruhig und entspannt gefühlt"
    },
    "who5-3": {
      "text": "Ich habe mich energisch und aktiv gefühlt"
    },
    "who5-4": {
      "text": "Ich habe mich beim Aufwachen frisch und ausgeruht gefühlt"
    },
    "who5-5": {
      "text": "Mein Alltag war voller Dinge, die mich interessieren"
    }
  },
  "bands": {
    "low": "Niedriges Wohlbefinden — Hinweis auf wahrscheinliche Depression, Abklärung empfohlen",
    "reduced": "Vermindertes Wohlbefinden — Depressionsscreening empfohlen",
    "good": "Gutes Wohlbefinden"
  }
};

export default pack;
