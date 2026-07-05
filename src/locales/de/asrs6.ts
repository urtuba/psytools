import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for asrs6. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "asrs6",
  "locale": "de",
  "title": "Selbstbeurteilungsskala für ADHS bei Erwachsenen (ASRS-v1.1) Screener",
  "description": "Ein 6-Item-Screener für Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung bei Erwachsenen, abgeleitet aus der vollständigen 18-Item-ASRS der WHO.",
  "instructions": "Wählen Sie bei jeder Frage die Option, die am besten beschreibt, wie Sie sich in den letzten 6 Monaten gefühlt und verhalten haben.",
  "options": [
    "Nie",
    "Selten",
    "Manchmal",
    "Oft",
    "Sehr oft"
  ],
  "questions": {
    "asrs6-1": {
      "text": "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen, nachdem die schwierigen Teile erledigt sind?"
    },
    "asrs6-2": {
      "text": "Wie oft haben Sie Schwierigkeiten, Ordnung in Dinge zu bringen, wenn Sie eine Aufgabe erledigen müssen, die Organisation erfordert?"
    },
    "asrs6-3": {
      "text": "Wie oft haben Sie Probleme, sich an Termine oder Verpflichtungen zu erinnern?"
    },
    "asrs6-4": {
      "text": "Wie oft vermeiden oder verzögern Sie den Beginn einer Aufgabe, die viel Nachdenken erfordert?"
    },
    "asrs6-5": {
      "text": "Wie oft zappeln Sie mit Händen oder Füßen, wenn Sie längere Zeit sitzen müssen?"
    },
    "asrs6-6": {
      "text": "Wie oft fühlen Sie sich übermäßig aktiv und getrieben, Dinge zu tun, als würden Sie von einem Motor angetrieben?"
    }
  },
  "bands": {
    "negative": "Symptome nicht mit ADHS im Erwachsenenalter vereinbar",
    "positive": "Symptome in hohem Maße mit ADHS im Erwachsenenalter vereinbar — weitere Abklärung angezeigt"
  }
};

export default pack;
