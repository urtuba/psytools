import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for k6. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k6",
  "locale": "es",
  "title": "Escala Kessler de Malestar Psicológico (K6)",
  "description": "Una medida de cribado de 6 ítems sobre el malestar psicológico inespecífico durante los últimos 30 días.",
  "instructions": "Las siguientes preguntas se refieren a cómo se ha sentido durante los últimos 30 días.",
  "options": [
    "Nunca",
    "Un poco de tiempo",
    "Parte del tiempo",
    "La mayor parte del tiempo",
    "Todo el tiempo"
  ],
  "questions": {
    "k6-1": {
      "text": "Durante los últimos 30 días, ¿con qué frecuencia se sintió nervioso/a?"
    },
    "k6-2": {
      "text": "Durante los últimos 30 días, ¿con qué frecuencia se sintió desesperanzado/a?"
    },
    "k6-3": {
      "text": "Durante los últimos 30 días, ¿con qué frecuencia se sintió inquieto/a o agitado/a?"
    },
    "k6-4": {
      "text": "Durante los últimos 30 días, ¿con qué frecuencia se sintió tan deprimido/a que nada podía animarlo/a?"
    },
    "k6-5": {
      "text": "Durante los últimos 30 días, ¿con qué frecuencia sintió que todo requería un esfuerzo?"
    },
    "k6-6": {
      "text": "Durante los últimos 30 días, ¿con qué frecuencia se sintió inútil?"
    }
  },
  "bands": {
    "low": "Malestar psicológico bajo",
    "moderate": "Malestar psicológico moderado",
    "serious": "Malestar psicológico grave"
  }
};

export default pack;
