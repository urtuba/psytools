import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for k10. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k10",
  "locale": "de",
  "title": "Kessler-Skala für psychische Belastung (K10)",
  "description": "Ein 10-Item-Screeninginstrument für unspezifische psychische Belastung in den letzten 30 Tagen.",
  "instructions": "Die folgenden Fragen beziehen sich darauf, wie Sie sich in den letzten 30 Tagen gefühlt haben.",
  "options": [
    "Zu keiner Zeit",
    "Ein wenig der Zeit",
    "Einen Teil der Zeit",
    "Die meiste Zeit",
    "Die ganze Zeit"
  ],
  "questions": {
    "k10-1": { "text": "Wie oft fühlten Sie sich ohne ersichtlichen Grund erschöpft?" },
    "k10-2": { "text": "Wie oft fühlten Sie sich nervös?" },
    "k10-3": { "text": "Wie oft fühlten Sie sich so nervös, dass Sie sich durch nichts beruhigen konnten?" },
    "k10-4": { "text": "Wie oft fühlten Sie sich hoffnungslos?" },
    "k10-5": { "text": "Wie oft fühlten Sie sich unruhig oder zappelig?" },
    "k10-6": { "text": "Wie oft fühlten Sie sich so unruhig, dass Sie nicht stillsitzen konnten?" },
    "k10-7": { "text": "Wie oft fühlten Sie sich niedergeschlagen?" },
    "k10-8": { "text": "Wie oft hatten Sie das Gefühl, dass alles anstrengend war?" },
    "k10-9": { "text": "Wie oft fühlten Sie sich so traurig, dass Sie nichts aufheitern konnte?" },
    "k10-10": { "text": "Wie oft fühlten Sie sich wertlos?" }
  },
  "bands": {
    "low": "Voraussichtlich unauffällig",
    "mild": "Leichte psychische Belastung",
    "moderate": "Mäßige psychische Belastung",
    "severe": "Schwere psychische Belastung"
  }
};

export default pack;
