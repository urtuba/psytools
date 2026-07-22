import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for erq. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "erq",
  "locale": "de",
  "title": "Fragebogen zur Emotionsregulation (ERQ)",
  "description": "Ein 10-Item-Fragebogen zur habituellen Nutzung zweier Emotionsregulationsstrategien: kognitive Neubewertung und expressive Unterdrückung.",
  "instructions": "Wir möchten Ihnen einige Fragen zu Ihrem Gefühlsleben stellen, insbesondere dazu, wie Sie Ihre Emotionen kontrollieren (das heißt regulieren und steuern). Die folgenden Fragen betreffen zwei verschiedene Aspekte Ihres Gefühlslebens. Der eine ist Ihr emotionales Erleben, also was Sie innerlich fühlen. Der andere ist Ihr emotionaler Ausdruck, also wie Sie Ihre Emotionen beim Sprechen, in Gestik oder Verhalten zeigen. Obwohl einige der folgenden Fragen einander ähnlich erscheinen mögen, unterscheiden sie sich in wichtigen Punkten.",
  "options": [
    "1 — Stimme überhaupt nicht zu",
    "2",
    "3",
    "4 — Neutral",
    "5",
    "6",
    "7 — Stimme voll und ganz zu"
  ],
  "questions": {
    "erq-1": { "text": "Wenn ich mehr positive Gefühle (wie Freude oder Heiterkeit) empfinden möchte, ändere ich, woran ich denke." },
    "erq-2": { "text": "Ich behalte meine Gefühle für mich." },
    "erq-3": { "text": "Wenn ich weniger negative Gefühle (wie Traurigkeit oder Ärger) empfinden möchte, ändere ich, woran ich denke." },
    "erq-4": { "text": "Wenn ich positive Gefühle empfinde, achte ich darauf, sie nicht zu zeigen." },
    "erq-5": { "text": "Wenn ich mit einer belastenden Situation konfrontiert bin, bringe ich mich dazu, so über sie nachzudenken, dass es mir hilft, ruhig zu bleiben." },
    "erq-6": { "text": "Ich kontrolliere meine Gefühle, indem ich sie nicht zeige." },
    "erq-7": { "text": "Wenn ich mehr positive Gefühle empfinden möchte, ändere ich meine Sichtweise auf die Situation." },
    "erq-8": { "text": "Ich kontrolliere meine Gefühle, indem ich meine Sichtweise auf die Situation ändere, in der ich mich befinde." },
    "erq-9": { "text": "Wenn ich negative Gefühle empfinde, sorge ich dafür, sie nicht zu zeigen." },
    "erq-10": { "text": "Wenn ich weniger negative Gefühle empfinden möchte, ändere ich meine Sichtweise auf die Situation." }
  },
  "subscales": {
    "reappraisal": { "label": "Kognitive Neubewertung" },
    "suppression": { "label": "Expressive Unterdrückung" }
  }
};

export default pack;
