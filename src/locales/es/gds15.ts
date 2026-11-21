import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for gds15. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "gds15",
  locale: "es",
  title: "Escala de Depresión Geriátrica, versión abreviada (GDS-15)",
  description: "Una escala de cribado de depresión en personas mayores, con 15 preguntas de sí o no.",
  instructions: "Elija la respuesta que mejor describa cómo se ha sentido durante la última semana:",
  options: ["Sí", "No"],
  questions: {
    "gds15-1": { text: "¿Está básicamente satisfecho(a) con su vida?" },
    "gds15-2": { text: "¿Ha dejado muchas de sus actividades e intereses?" },
    "gds15-3": { text: "¿Siente que su vida está vacía?" },
    "gds15-4": { text: "¿Se aburre a menudo?" },
    "gds15-5": { text: "¿Está de buen humor la mayor parte del tiempo?" },
    "gds15-6": { text: "¿Tiene miedo de que le vaya a pasar algo malo?" },
    "gds15-7": { text: "¿Se siente feliz la mayor parte del tiempo?" },
    "gds15-8": { text: "¿Se siente a menudo indefenso(a)?" },
    "gds15-9": { text: "¿Prefiere quedarse en casa en lugar de salir y hacer cosas nuevas?" },
    "gds15-10": { text: "¿Siente que tiene más problemas de memoria que la mayoría de la gente?" },
    "gds15-11": { text: "¿Piensa que es maravilloso estar vivo(a) en este momento?" },
    "gds15-12": { text: "¿Se siente bastante inútil tal como está ahora?" },
    "gds15-13": { text: "¿Se siente lleno(a) de energía?" },
    "gds15-14": { text: "¿Siente que su situación no tiene remedio?" },
    "gds15-15": { text: "¿Cree que la mayoría de la gente está mejor que usted?" },
  },
  bands: {
    "below-cutoff": "Por debajo del umbral de seguimiento",
    suggestive: "Sugiere depresión: conviene una entrevista de seguimiento",
    likely: "Casi siempre depresión",
  },
};

export default pack;
