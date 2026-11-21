import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for tipi. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "tipi",
  locale: "es",
  title: "Inventario de Personalidad de Diez Ítems (TIPI)",
  description:
    "Un instrumento de 10 ítems que mide las cinco grandes dimensiones de la personalidad, pensado para cuando se necesita una medida muy breve.",
  instructions:
    "A continuación hay una serie de rasgos de personalidad que pueden aplicarse o no a usted. Escriba un número junto a cada afirmación para indicar en qué medida está de acuerdo o en desacuerdo con ella. Valore en qué medida el par de rasgos se aplica a usted, aunque una de las características se aplique más que la otra. Me veo como una persona:",
  options: [
    "Muy en desacuerdo",
    "Moderadamente en desacuerdo",
    "Un poco en desacuerdo",
    "Ni de acuerdo ni en desacuerdo",
    "Un poco de acuerdo",
    "Moderadamente de acuerdo",
    "Muy de acuerdo",
  ],
  questions: {
    "tipi-1": { text: "Extravertida, entusiasta." },
    "tipi-2": { text: "Crítica, peleona." },
    "tipi-3": { text: "Fiable, autodisciplinada." },
    "tipi-4": { text: "Ansiosa, que se altera con facilidad." },
    "tipi-5": { text: "Abierta a nuevas experiencias, compleja." },
    "tipi-6": { text: "Reservada, callada." },
    "tipi-7": { text: "Comprensiva, cálida." },
    "tipi-8": { text: "Desorganizada, descuidada." },
    "tipi-9": { text: "Tranquila, emocionalmente estable." },
    "tipi-10": { text: "Convencional, poco creativa." },
  },
  subscales: {
    extraversion: { label: "Extraversión" },
    agreeableness: { label: "Amabilidad" },
    conscientiousness: { label: "Responsabilidad" },
    "emotional-stability": { label: "Estabilidad emocional" },
    openness: { label: "Apertura a la experiencia" },
  },
};

export default pack;
