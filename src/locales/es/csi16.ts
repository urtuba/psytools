import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for csi16. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const trueScale = [
  "Nada CIERTO",
  "Un poco CIERTO",
  "Algo CIERTO",
  "Bastante CIERTO",
  "Casi completamente CIERTO",
  "Completamente CIERTO",
];

// The semantic differentials are numbered positions on the authors' own
// form, identical in every language — restated here because a locale pack
// must cover every per-question scale.
const down = ["5", "4", "3", "2", "1", "0"];
const up = ["0", "1", "2", "3", "4", "5"];

const pack: InventoryLocalePack = {
  id: "csi16",
  locale: "es",
  title: "Índice de Satisfacción de Pareja (CSI-16)",
  description:
    "Una escala autoaplicada de 16 ítems que mide la satisfacción con la relación, construida con teoría de respuesta al ítem para ganar precisión en el rango de insatisfacción.",
  instructions:
    "Para cada uno de los siguientes ítems, seleccione la respuesta que mejor describa cómo se siente respecto a su relación. Base sus respuestas en su primera impresión y en lo que siente de inmediato ante el ítem.",
  options: ["Nada", "Un poco", "Algo", "Bastante", "Casi completamente", "Completamente"],
  questions: {
    "csi16-1": {
      text: "Indique el grado de felicidad de su relación, considerándolo todo.",
      options: [
        "Extremadamente infeliz",
        "Bastante infeliz",
        "Un poco infeliz",
        "Feliz",
        "Muy feliz",
        "Extremadamente feliz",
        "Perfecta",
      ],
    },
    "csi16-2": {
      text: "En general, ¿con qué frecuencia piensa que las cosas entre usted y su pareja van bien?",
      options: [
        "Todo el tiempo",
        "La mayor parte del tiempo",
        "Más a menudo que no",
        "Ocasionalmente",
        "Rara vez",
        "Nunca",
      ],
    },
    "csi16-3": { text: "Nuestra relación es sólida", options: trueScale },
    "csi16-4": { text: "Mi relación con mi pareja me hace feliz", options: trueScale },
    "csi16-5": { text: "Tengo una relación cálida y cómoda con mi pareja", options: trueScale },
    "csi16-6": { text: "Realmente siento que formo un equipo con mi pareja", options: trueScale },
    "csi16-7": { text: "¿Cuán gratificante es su relación con su pareja?" },
    "csi16-8": { text: "¿En qué medida su pareja satisface sus necesidades?" },
    "csi16-9": { text: "¿Hasta qué punto su relación ha cumplido sus expectativas iniciales?" },
    "csi16-10": { text: "En general, ¿cuán satisfecho está con su relación?" },
    "csi16-11": { text: "INTERESANTE — ABURRIDA", options: down },
    "csi16-12": { text: "MALA — BUENA", options: up },
    "csi16-13": { text: "PLENA — VACÍA", options: down },
    "csi16-14": { text: "FIRME — FRÁGIL", options: down },
    "csi16-15": { text: "DESALENTADORA — ESPERANZADORA", options: up },
    "csi16-16": { text: "AGRADABLE — MISERABLE", options: down },
  },
  bands: {
    dissatisfied: "Insatisfacción notable con la relación",
    satisfied: "Sin insatisfacción notable con la relación",
  },
};

export default pack;
