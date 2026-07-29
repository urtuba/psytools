import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for mini-ipip6. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "mini-ipip6",
  "locale": "de",
  "title": "Mini-IPIP6 Big-Six-Persönlichkeitsskala",
  "description": "Ein gemeinfreies 24-Item-Instrument aus dem International Personality Item Pool zur Messung von sechs breiten Persönlichkeitsfaktoren — den Big Five (Extraversion, Verträglichkeit, Gewissenhaftigkeit, Neurotizismus, Offenheit) sowie Ehrlichkeit-Bescheidenheit.",
  "instructions": "Beschreiben Sie sich so, wie Sie im Allgemeinen jetzt sind, nicht wie Sie in Zukunft sein möchten. Geben Sie an, wie zutreffend jede Aussage Sie beschreibt.",
  "options": [
    "Trifft überhaupt nicht zu",
    "Trifft eher nicht zu",
    "Weder zutreffend noch unzutreffend",
    "Trifft eher zu",
    "Trifft voll und ganz zu"
  ],
  "questions": {
    "mini-ipip6-1": {
      "text": "Ich bin der Mittelpunkt jeder Party"
    },
    "mini-ipip6-2": {
      "text": "Ich fühle mit anderen mit"
    },
    "mini-ipip6-3": {
      "text": "Ich erledige anstehende Aufgaben sofort"
    },
    "mini-ipip6-4": {
      "text": "Meine Stimmung schwankt häufig"
    },
    "mini-ipip6-5": {
      "text": "Ich habe eine lebhafte Fantasie"
    },
    "mini-ipip6-6": {
      "text": "Ich rede nicht viel"
    },
    "mini-ipip6-7": {
      "text": "Die Probleme anderer Menschen interessieren mich nicht"
    },
    "mini-ipip6-8": {
      "text": "Ich vergesse oft, Dinge an ihren Platz zurückzulegen"
    },
    "mini-ipip6-9": {
      "text": "Ich bin die meiste Zeit entspannt"
    },
    "mini-ipip6-10": {
      "text": "Ich interessiere mich nicht für abstrakte Ideen"
    },
    "mini-ipip6-11": {
      "text": "Auf Partys spreche ich mit vielen verschiedenen Leuten"
    },
    "mini-ipip6-12": {
      "text": "Ich spüre die Gefühle anderer"
    },
    "mini-ipip6-13": {
      "text": "Ich mag Ordnung"
    },
    "mini-ipip6-14": {
      "text": "Ich rege mich leicht auf"
    },
    "mini-ipip6-15": {
      "text": "Es fällt mir schwer, abstrakte Ideen zu verstehen"
    },
    "mini-ipip6-16": {
      "text": "Ich halte mich im Hintergrund"
    },
    "mini-ipip6-17": {
      "text": "Ich interessiere mich nicht wirklich für andere"
    },
    "mini-ipip6-18": {
      "text": "Bei mir geht alles drunter und drüber"
    },
    "mini-ipip6-19": {
      "text": "Ich fühle mich selten niedergeschlagen"
    },
    "mini-ipip6-20": {
      "text": "Ich habe keine gute Vorstellungskraft"
    },
    "mini-ipip6-21": {
      "text": "Ich finde, mir steht von allem mehr zu"
    },
    "mini-ipip6-22": {
      "text": "Ich habe mehr vom Leben verdient"
    },
    "mini-ipip6-23": {
      "text": "Ich würde gerne in einem sehr teuren Auto gesehen werden"
    },
    "mini-ipip6-24": {
      "text": "Es würde mir große Freude bereiten, teure Luxusgüter zu besitzen"
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
      "label": "Offenheit für Erfahrungen"
    },
    "honesty-humility": {
      "label": "Ehrlichkeit-Bescheidenheit"
    }
  }
};

export default pack;
