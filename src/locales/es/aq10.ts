import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for aq10. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "aq10",
  "locale": "es",
  "title": "Cociente del Espectro Autista (AQ-10) — Adultos",
  "description": "Un cuestionario de cribado de 10 ítems para rasgos autistas en adultos, condensado a partir del Cociente del Espectro Autista de 50 ítems.",
  "instructions": "Para cada afirmación, seleccione la respuesta que mejor lo describa.",
  "options": [
    "Totalmente en desacuerdo",
    "Ligeramente en desacuerdo",
    "Ligeramente de acuerdo",
    "Totalmente de acuerdo"
  ],
  "questions": {
    "aq10-1": {
      "text": "A menudo noto pequeños sonidos que otras personas no perciben"
    },
    "aq10-2": {
      "text": "Normalmente me concentro más en la imagen global que en los pequeños detalles"
    },
    "aq10-3": {
      "text": "Me resulta fácil hacer más de una cosa a la vez"
    },
    "aq10-4": {
      "text": "Si hay una interrupción, puedo volver muy rápidamente a lo que estaba haciendo"
    },
    "aq10-5": {
      "text": "Me resulta fácil 'leer entre líneas' cuando alguien me está hablando"
    },
    "aq10-6": {
      "text": "Sé darme cuenta de si la persona que me escucha se está aburriendo"
    },
    "aq10-7": {
      "text": "Cuando leo una historia, me resulta difícil deducir las intenciones de los personajes"
    },
    "aq10-8": {
      "text": "Me gusta recopilar información sobre categorías de cosas (p. ej., tipos de coches, de aves, de trenes, de plantas, etc.)"
    },
    "aq10-9": {
      "text": "Me resulta fácil deducir lo que alguien piensa o siente con solo mirarle la cara"
    },
    "aq10-10": {
      "text": "Me resulta difícil deducir las intenciones de las personas"
    }
  },
  "bands": {
    "below-threshold": "Por debajo del umbral de cribado",
    "above-threshold": "En el umbral o por encima — considere la derivación para una evaluación especializada de autismo"
  }
};

export default pack;
