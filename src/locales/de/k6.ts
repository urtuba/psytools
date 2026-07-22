import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for k6. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k6",
  "locale": "de",
  "title": "Kessler-Skala für psychische Belastung (K6)",
  "description": "Ein 6-Item-Screeninginstrument für unspezifische psychische Belastung in den letzten 30 Tagen.",
  "instructions": "Die folgenden Fragen beziehen sich darauf, wie Sie sich in den letzten 30 Tagen gefühlt haben.",
  "options": [
    "Zu keiner Zeit",
    "Ein wenig der Zeit",
    "Einen Teil der Zeit",
    "Die meiste Zeit",
    "Die ganze Zeit"
  ],
  "questions": {
    "k6-1": { "text": "Wie oft fühlten Sie sich in den letzten 30 Tagen nervös?" },
    "k6-2": { "text": "Wie oft fühlten Sie sich in den letzten 30 Tagen hoffnungslos?" },
    "k6-3": { "text": "Wie oft fühlten Sie sich in den letzten 30 Tagen unruhig oder zappelig?" },
    "k6-4": { "text": "Wie oft fühlten Sie sich in den letzten 30 Tagen so niedergeschlagen, dass Sie nichts aufheitern konnte?" },
    "k6-5": { "text": "Wie oft hatten Sie in den letzten 30 Tagen das Gefühl, dass alles anstrengend war?" },
    "k6-6": { "text": "Wie oft fühlten Sie sich in den letzten 30 Tagen wertlos?" }
  },
  "bands": {
    "low": "Geringe psychische Belastung",
    "moderate": "Mäßige psychische Belastung",
    "serious": "Schwerwiegende psychische Belastung"
  }
};

export default pack;
