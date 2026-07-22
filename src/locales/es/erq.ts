import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for erq. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "erq",
  "locale": "es",
  "title": "Cuestionario de Regulación Emocional (ERQ)",
  "description": "Una medida de 10 ítems de las diferencias individuales en el uso habitual de dos estrategias de regulación emocional: la reevaluación cognitiva y la supresión expresiva.",
  "instructions": "Nos gustaría hacerle algunas preguntas sobre su vida emocional, en particular, cómo controla (es decir, regula y maneja) sus emociones. Las siguientes preguntas se refieren a dos aspectos distintos de su vida emocional. Uno es su experiencia emocional, es decir, lo que siente por dentro. El otro es su expresión emocional, es decir, cómo muestra sus emociones al hablar, gesticular o comportarse. Aunque algunas de las siguientes preguntas puedan parecer similares entre sí, difieren en aspectos importantes.",
  "options": [
    "1 — Totalmente en desacuerdo",
    "2",
    "3",
    "4 — Neutral",
    "5",
    "6",
    "7 — Totalmente de acuerdo"
  ],
  "questions": {
    "erq-1": { "text": "Cuando quiero sentir más emociones positivas (como alegría o diversión), cambio lo que estoy pensando." },
    "erq-2": { "text": "Guardo mis emociones para mí." },
    "erq-3": { "text": "Cuando quiero sentir menos emociones negativas (como tristeza o enfado), cambio lo que estoy pensando." },
    "erq-4": { "text": "Cuando siento emociones positivas, tengo cuidado de no expresarlas." },
    "erq-5": { "text": "Cuando me enfrento a una situación estresante, me obligo a pensar en ella de una manera que me ayude a mantener la calma." },
    "erq-6": { "text": "Controlo mis emociones no expresándolas." },
    "erq-7": { "text": "Cuando quiero sentir más emociones positivas, cambio mi manera de pensar sobre la situación." },
    "erq-8": { "text": "Controlo mis emociones cambiando mi manera de pensar sobre la situación en la que me encuentro." },
    "erq-9": { "text": "Cuando siento emociones negativas, me aseguro de no expresarlas." },
    "erq-10": { "text": "Cuando quiero sentir menos emociones negativas, cambio mi manera de pensar sobre la situación." }
  },
  "subscales": {
    "reappraisal": { "label": "Reevaluación cognitiva" },
    "suppression": { "label": "Supresión expresiva" }
  }
};

export default pack;
