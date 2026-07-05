import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for dass21. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "dass21",
  "locale": "de",
  "title": "Depressions-Angst-Stress-Skalen (DASS-21)",
  "description": "Ein Selbstbeurteilungsfragebogen mit 21 Items zur Messung von Depression, Angst und Stress in der vergangenen Woche.",
  "instructions": "Bitte lesen Sie jede Aussage und wählen Sie die Option, die angibt, wie sehr die Aussage in der vergangenen Woche auf Sie zutraf. Es gibt keine richtigen oder falschen Antworten. Verbringen Sie nicht zu viel Zeit mit einer Aussage.",
  "options": [
    "Traf gar nicht auf mich zu",
    "Traf bis zu einem gewissen Grad oder manchmal auf mich zu",
    "Traf in beträchtlichem Maße oder einen guten Teil der Zeit auf mich zu",
    "Traf sehr stark oder die meiste Zeit auf mich zu"
  ],
  "questions": {
    "dass21-1": {
      "text": "Ich fand es schwer, mich zu beruhigen"
    },
    "dass21-2": {
      "text": "Ich bemerkte, dass mein Mund trocken war"
    },
    "dass21-3": {
      "text": "Ich konnte überhaupt keine positiven Gefühle mehr erleben"
    },
    "dass21-4": {
      "text": "Ich hatte Atemprobleme (z. B. übermäßig schnelle Atmung, Atemlosigkeit ohne körperliche Anstrengung)"
    },
    "dass21-5": {
      "text": "Es fiel mir schwer, die Initiative zu ergreifen, um Dinge zu erledigen"
    },
    "dass21-6": {
      "text": "Ich neigte dazu, auf Situationen überzureagieren"
    },
    "dass21-7": {
      "text": "Ich hatte Zittern (z. B. in den Händen)"
    },
    "dass21-8": {
      "text": "Ich fühlte, dass ich viel nervöse Energie verbrauchte"
    },
    "dass21-9": {
      "text": "Ich machte mir Sorgen über Situationen, in denen ich in Panik geraten und mich blamieren könnte"
    },
    "dass21-10": {
      "text": "Ich hatte das Gefühl, mich auf nichts mehr freuen zu können"
    },
    "dass21-11": {
      "text": "Ich merkte, dass ich unruhig wurde"
    },
    "dass21-12": {
      "text": "Es fiel mir schwer, mich zu entspannen"
    },
    "dass21-13": {
      "text": "Ich fühlte mich niedergeschlagen und traurig"
    },
    "dass21-14": {
      "text": "Ich konnte es nicht ertragen, von dem, was ich gerade tat, abgehalten zu werden"
    },
    "dass21-15": {
      "text": "Ich fühlte mich einer Panik nahe"
    },
    "dass21-16": {
      "text": "Ich konnte mich für nichts mehr begeistern"
    },
    "dass21-17": {
      "text": "Ich hatte das Gefühl, als Person nicht viel wert zu sein"
    },
    "dass21-18": {
      "text": "Ich fühlte, dass ich ziemlich empfindlich war"
    },
    "dass21-19": {
      "text": "Ich nahm meinen Herzschlag wahr, ohne mich körperlich angestrengt zu haben (z. B. Gefühl von Herzrasen oder Herzstolpern)"
    },
    "dass21-20": {
      "text": "Ich fühlte mich ohne triftigen Grund ängstlich"
    },
    "dass21-21": {
      "text": "Ich hatte das Gefühl, dass das Leben sinnlos ist"
    }
  },
  "subscales": {
    "depression": {
      "label": "Depression",
      "bands": {
        "normal": "Normal",
        "mild": "Leicht",
        "moderate": "Moderat",
        "severe": "Schwer",
        "extremely-severe": "Sehr schwer"
      }
    },
    "anxiety": {
      "label": "Angst",
      "bands": {
        "normal": "Normal",
        "mild": "Leicht",
        "moderate": "Moderat",
        "severe": "Schwer",
        "extremely-severe": "Sehr schwer"
      }
    },
    "stress": {
      "label": "Stress",
      "bands": {
        "normal": "Normal",
        "mild": "Leicht",
        "moderate": "Moderat",
        "severe": "Schwer",
        "extremely-severe": "Sehr schwer"
      }
    }
  }
};

export default pack;
