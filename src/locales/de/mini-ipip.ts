import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for mini-ipip. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "mini-ipip",
  "locale": "de",
  "title": "Mini-IPIP Big-Five-Persönlichkeitsskala",
  "description": "Ein gemeinfreies 20-Item-Instrument zur Messung der Big-Five-Persönlichkeitsmerkmale (Extraversion, Verträglichkeit, Gewissenhaftigkeit, Neurotizismus, Offenheit) aus dem International Personality Item Pool.",
  "instructions": "Beschreiben Sie sich so, wie Sie im Allgemeinen jetzt sind, nicht wie Sie in Zukunft sein möchten. Geben Sie an, wie zutreffend jede Aussage Sie beschreibt.",
  "options": [
    "Trifft überhaupt nicht zu",
    "Trifft eher nicht zu",
    "Weder zutreffend noch unzutreffend",
    "Trifft eher zu",
    "Trifft voll und ganz zu"
  ],
  "questions": {
    "mini-ipip-1": {
      "text": "Ich bin der Mittelpunkt jeder Party"
    },
    "mini-ipip-2": {
      "text": "Ich fühle mit anderen mit"
    },
    "mini-ipip-3": {
      "text": "Ich erledige anstehende Aufgaben sofort"
    },
    "mini-ipip-4": {
      "text": "Meine Stimmung schwankt häufig"
    },
    "mini-ipip-5": {
      "text": "Ich habe eine lebhafte Fantasie"
    },
    "mini-ipip-6": {
      "text": "Ich rede nicht viel"
    },
    "mini-ipip-7": {
      "text": "Die Probleme anderer Menschen interessieren mich nicht"
    },
    "mini-ipip-8": {
      "text": "Ich vergesse oft, Dinge an ihren Platz zurückzulegen"
    },
    "mini-ipip-9": {
      "text": "Ich bin die meiste Zeit entspannt"
    },
    "mini-ipip-10": {
      "text": "Ich interessiere mich nicht für abstrakte Ideen"
    },
    "mini-ipip-11": {
      "text": "Auf Partys spreche ich mit vielen verschiedenen Leuten"
    },
    "mini-ipip-12": {
      "text": "Ich spüre die Gefühle anderer"
    },
    "mini-ipip-13": {
      "text": "Ich mag Ordnung"
    },
    "mini-ipip-14": {
      "text": "Ich rege mich leicht auf"
    },
    "mini-ipip-15": {
      "text": "Es fällt mir schwer, abstrakte Ideen zu verstehen"
    },
    "mini-ipip-16": {
      "text": "Ich halte mich im Hintergrund"
    },
    "mini-ipip-17": {
      "text": "Ich interessiere mich nicht wirklich für andere"
    },
    "mini-ipip-18": {
      "text": "Bei mir geht alles drunter und drüber"
    },
    "mini-ipip-19": {
      "text": "Ich fühle mich selten niedergeschlagen"
    },
    "mini-ipip-20": {
      "text": "Ich habe keine gute Vorstellungskraft"
    }
  },
  "subscales": {
    "extraversion": {
      "label": "Extraversion"
    },
    "agreeableness": {
      "label": "Verträglichkeit"
    },
    "conscientiousness": {
      "label": "Gewissenhaftigkeit"
    },
    "neuroticism": {
      "label": "Neurotizismus"
    },
    "openness": {
      "label": "Offenheit (Intellekt/Vorstellungskraft)"
    }
  }
};

export default pack;
