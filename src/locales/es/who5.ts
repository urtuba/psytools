import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for who5. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "who5",
  "locale": "es",
  "title": "Índice de Bienestar de la OMS (WHO-5)",
  "description": "Una escala de autoinforme de 5 ítems que mide el bienestar psicológico subjetivo durante las últimas dos semanas. Las puntuaciones más altas indican un mayor bienestar.",
  "instructions": "Por favor, indique para cada una de las cinco frases cuál se acerca más a cómo se ha sentido durante las últimas dos semanas.",
  "options": [
    "En ningún momento",
    "Algunas veces",
    "Menos de la mitad del tiempo",
    "Más de la mitad del tiempo",
    "La mayor parte del tiempo",
    "Todo el tiempo"
  ],
  "questions": {
    "who5-1": {
      "text": "Me he sentido alegre y de buen ánimo"
    },
    "who5-2": {
      "text": "Me he sentido tranquilo y relajado"
    },
    "who5-3": {
      "text": "Me he sentido activo y enérgico"
    },
    "who5-4": {
      "text": "Me he despertado sintiéndome fresco y descansado"
    },
    "who5-5": {
      "text": "Mi vida diaria ha estado llena de cosas que me interesan"
    }
  },
  "bands": {
    "low": "Bienestar bajo — indica una probable depresión, se recomienda una evaluación",
    "reduced": "Bienestar reducido — se recomienda un cribado de depresión",
    "good": "Buen bienestar"
  }
};

export default pack;
