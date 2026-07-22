import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for k10. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k10",
  "locale": "es",
  "title": "Escala Kessler de Malestar Psicológico (K10)",
  "description": "Una medida de cribado de 10 ítems sobre el malestar psicológico inespecífico durante los últimos 30 días.",
  "instructions": "Las siguientes preguntas se refieren a cómo se ha sentido durante los últimos 30 días.",
  "options": [
    "Nunca",
    "Un poco de tiempo",
    "Parte del tiempo",
    "La mayor parte del tiempo",
    "Todo el tiempo"
  ],
  "questions": {
    "k10-1": {
      "text": "¿Con qué frecuencia se sintió cansado/a sin una buena razón?"
    },
    "k10-2": {
      "text": "¿Con qué frecuencia se sintió nervioso/a?"
    },
    "k10-3": {
      "text": "¿Con qué frecuencia se sintió tan nervioso/a que nada podía calmarlo/a?"
    },
    "k10-4": {
      "text": "¿Con qué frecuencia se sintió desesperanzado/a?"
    },
    "k10-5": {
      "text": "¿Con qué frecuencia se sintió inquieto/a o agitado/a?"
    },
    "k10-6": {
      "text": "¿Con qué frecuencia se sintió tan inquieto/a que no podía quedarse quieto/a?"
    },
    "k10-7": {
      "text": "¿Con qué frecuencia se sintió deprimido/a?"
    },
    "k10-8": {
      "text": "¿Con qué frecuencia sintió que todo requería un esfuerzo?"
    },
    "k10-9": {
      "text": "¿Con qué frecuencia se sintió tan triste que nada podía animarlo/a?"
    },
    "k10-10": {
      "text": "¿Con qué frecuencia se sintió inútil?"
    }
  },
  "bands": {
    "low": "Probablemente bien",
    "mild": "Malestar psicológico leve",
    "moderate": "Malestar psicológico moderado",
    "severe": "Malestar psicológico grave"
  }
};

export default pack;
