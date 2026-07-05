import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for asrs6. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "asrs6",
  "locale": "es",
  "title": "Escala de Autoevaluación del TDAH en Adultos (ASRS-v1.1) — Cuestionario de cribado",
  "description": "Un cuestionario de cribado de 6 ítems para el trastorno por déficit de atención e hiperactividad en adultos, extraído de la ASRS completa de 18 ítems de la OMS.",
  "instructions": "Al responder cada pregunta, seleccione la opción que mejor describa cómo se ha sentido y comportado durante los últimos 6 meses.",
  "options": [
    "Nunca",
    "Rara vez",
    "A veces",
    "A menudo",
    "Muy a menudo"
  ],
  "questions": {
    "asrs6-1": {
      "text": "¿Con qué frecuencia tiene dificultades para ultimar los detalles finales de un proyecto, una vez terminadas las partes más difíciles?"
    },
    "asrs6-2": {
      "text": "¿Con qué frecuencia tiene dificultades para poner las cosas en orden cuando debe realizar una tarea que requiere organización?"
    },
    "asrs6-3": {
      "text": "¿Con qué frecuencia tiene problemas para recordar citas u obligaciones?"
    },
    "asrs6-4": {
      "text": "Cuando tiene una tarea que requiere pensar mucho, ¿con qué frecuencia evita o retrasa empezarla?"
    },
    "asrs6-5": {
      "text": "¿Con qué frecuencia mueve o agita las manos o los pies cuando tiene que permanecer sentado durante mucho tiempo?"
    },
    "asrs6-6": {
      "text": "¿Con qué frecuencia se siente demasiado activo y con la necesidad de hacer cosas, como si lo impulsara un motor?"
    }
  },
  "bands": {
    "negative": "Síntomas no compatibles con TDAH en adultos",
    "positive": "Síntomas altamente compatibles con TDAH en adultos — se recomienda una evaluación adicional"
  }
};

export default pack;
