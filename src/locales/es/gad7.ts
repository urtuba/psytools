import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for gad7. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "gad7",
  "locale": "es",
  "title": "Escala del Trastorno de Ansiedad Generalizada (GAD-7)",
  "description": "Un cuestionario de autoinforme de 7 ítems para la detección y la medición de la gravedad de la ansiedad generalizada.",
  "instructions": "Durante las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?",
  "options": [
    "Para nada",
    "Varios días",
    "Más de la mitad de los días",
    "Casi todos los días"
  ],
  "questions": {
    "gad7-1": {
      "text": "Sentirse nervioso(a), ansioso(a) o con los nervios de punta"
    },
    "gad7-2": {
      "text": "No poder dejar de preocuparse o controlar la preocupación"
    },
    "gad7-3": {
      "text": "Preocuparse demasiado por diferentes cosas"
    },
    "gad7-4": {
      "text": "Dificultad para relajarse"
    },
    "gad7-5": {
      "text": "Estar tan inquieto(a) que le resulta difícil quedarse quieto(a)"
    },
    "gad7-6": {
      "text": "Enfadarse o irritarse con facilidad"
    },
    "gad7-7": {
      "text": "Sentir miedo, como si algo terrible pudiera pasar"
    }
  },
  "bands": {
    "minimal": "Ansiedad mínima",
    "mild": "Ansiedad leve",
    "moderate": "Ansiedad moderada",
    "severe": "Ansiedad grave"
  }
};

export default pack;
