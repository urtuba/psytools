import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for aq10. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "aq10",
  "locale": "de",
  "title": "Autismus-Spektrum-Quotient (AQ-10) — Erwachsene",
  "description": "Ein 10-Item-Screeningfragebogen für autistische Merkmale bei Erwachsenen, verkürzt aus dem 50-Item-Autismus-Spektrum-Quotienten.",
  "instructions": "Wählen Sie zu jeder Aussage die Antwort, die Sie am besten beschreibt.",
  "options": [
    "Stimme überhaupt nicht zu",
    "Stimme eher nicht zu",
    "Stimme eher zu",
    "Stimme voll und ganz zu"
  ],
  "questions": {
    "aq10-1": {
      "text": "Ich nehme oft leise Geräusche wahr, die andere nicht bemerken"
    },
    "aq10-2": {
      "text": "Ich konzentriere mich meist mehr auf das Gesamtbild als auf die kleinen Details"
    },
    "aq10-3": {
      "text": "Es fällt mir leicht, mehrere Dinge gleichzeitig zu tun"
    },
    "aq10-4": {
      "text": "Wenn ich unterbrochen werde, kann ich sehr schnell zu meiner Tätigkeit zurückkehren"
    },
    "aq10-5": {
      "text": "Es fällt mir leicht, 'zwischen den Zeilen zu lesen', wenn jemand mit mir spricht"
    },
    "aq10-6": {
      "text": "Ich erkenne, ob jemand, der mir zuhört, sich zu langweilen beginnt"
    },
    "aq10-7": {
      "text": "Wenn ich eine Geschichte lese, fällt es mir schwer, die Absichten der Figuren zu erkennen"
    },
    "aq10-8": {
      "text": "Ich sammle gern Informationen über Kategorien von Dingen (z. B. Auto-, Vogel-, Zug- oder Pflanzenarten)"
    },
    "aq10-9": {
      "text": "Es fällt mir leicht, allein am Gesicht abzulesen, was jemand denkt oder fühlt"
    },
    "aq10-10": {
      "text": "Es fällt mir schwer, die Absichten anderer Menschen zu erkennen"
    }
  },
  "bands": {
    "below-threshold": "Unterhalb der Screening-Schwelle",
    "above-threshold": "An oder über der Schwelle — Überweisung zu einer spezialisierten Autismus-Diagnostik erwägen"
  }
};

export default pack;
