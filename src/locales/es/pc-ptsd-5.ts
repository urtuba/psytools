import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for pc-ptsd-5. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pc-ptsd-5",
  locale: "es",
  title: "Cribado de TEPT en Atención Primaria para el DSM-5 (PC-PTSD-5)",
  description:
    "Un cribado breve de probable trastorno de estrés postraumático: una pregunta sobre la exposición a hechos traumáticos a lo largo de la vida y, después, cinco preguntas de sí o no sobre cómo le ha afectado ese trauma en el último mes.",
  instructions:
    "A veces a las personas les suceden cosas fuera de lo común o especialmente aterradoras, horribles o traumáticas. Por ejemplo: un accidente grave o un incendio; una agresión o un abuso físico o sexual; un terremoto o una inundación; una guerra; ver cómo matan o hieren gravemente a alguien; perder a un ser querido por homicidio o suicidio.",
  options: ["Sí", "No"],
  questions: {
    "pc-ptsd-5-trauma": {
      text: "¿Alguna vez ha vivido un hecho de este tipo? Si la respuesta es no, la puntuación total del cribado = 0. Deténgase aquí. Si la respuesta es sí, responda a las preguntas siguientes.",
    },
    "pc-ptsd-5-1": {
      text: "En el último mes, ¿ha tenido pesadillas sobre el hecho o los hechos, o ha pensado en ellos sin querer hacerlo?",
    },
    "pc-ptsd-5-2": {
      text: "En el último mes, ¿se ha esforzado mucho por no pensar en el hecho o los hechos, o ha hecho lo posible por evitar situaciones que se los recordaran?",
    },
    "pc-ptsd-5-3": {
      text: "En el último mes, ¿ha estado constantemente en guardia, vigilante o se ha sobresaltado con facilidad?",
    },
    "pc-ptsd-5-4": {
      text: "En el último mes, ¿se ha sentido insensible o desconectado(a) de las personas, de sus actividades o de su entorno?",
    },
    "pc-ptsd-5-5": {
      text: "En el último mes, ¿se ha sentido culpable o incapaz de dejar de culparse a sí mismo(a) o a otros por el hecho o los hechos, o por los problemas que hayan podido causar?",
    },
  },
};

export default pack;
