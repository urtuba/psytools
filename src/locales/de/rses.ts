import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for rses. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "rses",
  "locale": "de",
  "title": "Rosenberg-Selbstwertskala (RSES)",
  "description": "Ein 10-Item-Maß für das globale Selbstwertgefühl, das sowohl positive als auch negative Gefühle gegenüber sich selbst erfasst.",
  "instructions": "Im Folgenden finden Sie eine Reihe von Aussagen zu Ihren allgemeinen Gefühlen sich selbst gegenüber. Geben Sie bitte an, inwieweit Sie jeder Aussage zustimmen oder nicht zustimmen.",
  "options": [
    "Stimme überhaupt nicht zu",
    "Stimme nicht zu",
    "Stimme zu",
    "Stimme voll und ganz zu"
  ],
  "questions": {
    "rses-1": { "text": "Insgesamt bin ich mit mir selbst zufrieden." },
    "rses-2": { "text": "Manchmal denke ich, dass ich überhaupt nichts kann." },
    "rses-3": { "text": "Ich habe das Gefühl, dass ich eine Reihe guter Eigenschaften habe." },
    "rses-4": { "text": "Ich bin in der Lage, Dinge genauso gut zu tun wie die meisten anderen Menschen." },
    "rses-5": { "text": "Ich habe das Gefühl, dass ich nicht viel habe, worauf ich stolz sein kann." },
    "rses-6": { "text": "Ich fühle mich manchmal tatsächlich nutzlos." },
    "rses-7": { "text": "Ich habe das Gefühl, dass ich wertvoll bin, zumindest ebenso wie andere Menschen." },
    "rses-8": { "text": "Ich wünschte, ich könnte mehr Respekt vor mir selbst haben." },
    "rses-9": { "text": "Alles in allem neige ich dazu, mich als Versager zu fühlen." },
    "rses-10": { "text": "Ich habe eine positive Einstellung zu mir selbst." }
  },
  "bands": {
    "low": "Geringer Selbstwert",
    "normal": "Im normalen Bereich",
    "high": "Hoher Selbstwert"
  }
};

export default pack;
