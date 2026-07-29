import type { InventoryLocalePack } from "../../types.ts";

/**
 * Spanish locale pack for cbi. AI translation (Anthropic Claude,
 * claude-opus-5), unverified. See SOURCES.md.
 */
const pack: InventoryLocalePack = {
  "id": "cbi",
  "locale": "es",
  "title": "Inventario de Burnout de Copenhague (CBI)",
  "description": "Un instrumento de 19 ítems que mide el burnout en tres escalas puntuadas por separado: agotamiento personal, relacionado con el trabajo y relacionado con los clientes.",
  "instructions": "Elija la opción que mejor le describa. Donde las preguntas mencionan clientes, use la palabra que corresponda a su trabajo — pacientes, estudiantes, niños o con quien trabaje. Responda las preguntas sobre clientes solo si su trabajo los incluye.",
  "options": [
    "Siempre",
    "A menudo",
    "A veces",
    "Raramente",
    "Nunca/casi nunca"
  ],
  "questions": {
    "cbi-1": { "text": "¿Con qué frecuencia se siente cansado/a?" },
    "cbi-2": { "text": "¿Con qué frecuencia está físicamente agotado/a?" },
    "cbi-3": { "text": "¿Con qué frecuencia está emocionalmente agotado/a?" },
    "cbi-4": { "text": "¿Con qué frecuencia piensa: «ya no puedo más»?" },
    "cbi-5": { "text": "¿Con qué frecuencia se siente extenuado/a?" },
    "cbi-6": { "text": "¿Con qué frecuencia se siente débil y propenso/a a enfermar?" },
    "cbi-7": {
      "text": "¿Su trabajo es emocionalmente agotador?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-8": {
      "text": "¿Se siente quemado/a por su trabajo?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-9": {
      "text": "¿Su trabajo le frustra?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-10": { "text": "¿Se siente extenuado/a al final de la jornada laboral?" },
    "cbi-11": { "text": "¿Está agotado/a por la mañana al pensar en otro día de trabajo?" },
    "cbi-12": { "text": "¿Siente que cada hora de trabajo le resulta agotadora?" },
    "cbi-13": { "text": "¿Tiene suficiente energía para su familia y sus amigos en su tiempo libre?" },
    "cbi-14": {
      "text": "¿Le resulta difícil trabajar con clientes?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-15": {
      "text": "¿Le resulta frustrante trabajar con clientes?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-16": {
      "text": "¿Trabajar con clientes le agota la energía?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-17": {
      "text": "¿Siente que da más de lo que recibe cuando trabaja con clientes?",
      "options": [
        "En muy alto grado",
        "En alto grado",
        "Algo",
        "En bajo grado",
        "En muy bajo grado"
      ]
    },
    "cbi-18": { "text": "¿Está cansado/a de trabajar con clientes?" },
    "cbi-19": { "text": "¿A veces se pregunta cuánto tiempo más podrá seguir trabajando con clientes?" }
  },
  "subscales": {
    "personal": { "label": "Burnout personal" },
    "work": { "label": "Burnout relacionado con el trabajo" },
    "client": { "label": "Burnout relacionado con los clientes" }
  }
};

export default pack;
