import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for ucla-ls3. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "ucla-ls3",
  locale: "de",
  title: "UCLA-Einsamkeitsskala (Version 3)",
  description:
    "Ein Selbstbeurteilungsbogen mit 20 Fragen zum subjektiven Erleben von Einsamkeit und sozialer Isolation.",
  instructions:
    "Die folgenden Aussagen beschreiben, wie Menschen sich manchmal fühlen. Geben Sie bitte bei jeder Aussage an, wie oft Sie sich so fühlen, wie es beschrieben wird. Ein Beispiel: Wie oft fühlen Sie sich glücklich? Wenn Sie sich nie glücklich gefühlt haben, würden Sie mit „nie“ antworten; wenn Sie sich immer glücklich fühlen, mit „immer“.",
  options: ["Nie", "Selten", "Manchmal", "Immer"],
  questions: {
    "ucla-ls3-1": {
      text: "Wie oft haben Sie das Gefühl, mit den Menschen um Sie herum „auf einer Wellenlänge“ zu sein?",
    },
    "ucla-ls3-2": { text: "Wie oft haben Sie das Gefühl, dass Ihnen Gesellschaft fehlt?" },
    "ucla-ls3-3": { text: "Wie oft haben Sie das Gefühl, dass es niemanden gibt, an den Sie sich wenden können?" },
    "ucla-ls3-4": { text: "Wie oft fühlen Sie sich allein?" },
    "ucla-ls3-5": { text: "Wie oft fühlen Sie sich als Teil eines Freundeskreises?" },
    "ucla-ls3-6": {
      text: "Wie oft haben Sie das Gefühl, viel mit den Menschen um Sie herum gemeinsam zu haben?",
    },
    "ucla-ls3-7": { text: "Wie oft haben Sie das Gefühl, niemandem mehr nahe zu sein?" },
    "ucla-ls3-8": {
      text: "Wie oft haben Sie das Gefühl, dass Ihre Interessen und Ansichten von den Menschen um Sie herum nicht geteilt werden?",
    },
    "ucla-ls3-9": { text: "Wie oft fühlen Sie sich aufgeschlossen und freundlich?" },
    "ucla-ls3-10": { text: "Wie oft fühlen Sie sich anderen Menschen nahe?" },
    "ucla-ls3-11": { text: "Wie oft fühlen Sie sich ausgeschlossen?" },
    "ucla-ls3-12": {
      text: "Wie oft haben Sie das Gefühl, dass Ihre Beziehungen zu anderen nicht bedeutsam sind?",
    },
    "ucla-ls3-13": { text: "Wie oft haben Sie das Gefühl, dass niemand Sie wirklich gut kennt?" },
    "ucla-ls3-14": { text: "Wie oft fühlen Sie sich von anderen isoliert?" },
    "ucla-ls3-15": {
      text: "Wie oft haben Sie das Gefühl, Gesellschaft finden zu können, wenn Sie sie möchten?",
    },
    "ucla-ls3-16": { text: "Wie oft haben Sie das Gefühl, dass es Menschen gibt, die Sie wirklich verstehen?" },
    "ucla-ls3-17": { text: "Wie oft fühlen Sie sich schüchtern?" },
    "ucla-ls3-18": {
      text: "Wie oft haben Sie das Gefühl, dass Menschen um Sie herum sind, aber nicht bei Ihnen?",
    },
    "ucla-ls3-19": { text: "Wie oft haben Sie das Gefühl, dass es Menschen gibt, mit denen Sie reden können?" },
    "ucla-ls3-20": {
      text: "Wie oft haben Sie das Gefühl, dass es Menschen gibt, an die Sie sich wenden können?",
    },
  },
};

export default pack;
