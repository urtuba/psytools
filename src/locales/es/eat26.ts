import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for eat26. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const frequency = ["Siempre", "Casi siempre", "A menudo", "A veces", "Rara vez", "Nunca"];

const pack: InventoryLocalePack = {
  id: "eat26",
  locale: "es",
  title: "Test de Actitudes Alimentarias (EAT-26)",
  description:
    "Una escala autoaplicada de 26 ítems para la detección de síntomas y preocupaciones características de los trastornos alimentarios.",
  instructions:
    "Este es un instrumento de detección para ayudarle a determinar si podría tener un trastorno alimentario que necesite atención profesional. No está diseñado para diagnosticar un trastorno alimentario ni para sustituir una consulta profesional. Por favor, complete el siguiente formulario con la mayor exactitud, honestidad e integridad posible. No hay respuestas correctas ni incorrectas. Todas sus respuestas son confidenciales.",
  options: frequency,
  questions: {
    "eat26-1": { text: "Me aterra tener sobrepeso." },
    "eat26-2": { text: "Evito comer cuando tengo hambre." },
    "eat26-3": { text: "Me encuentro preocupado por la comida." },
    "eat26-4": { text: "He tenido atracones en los que sentía que quizá no podría parar." },
    "eat26-5": { text: "Corto mi comida en trozos pequeños." },
    "eat26-6": { text: "Soy consciente del contenido calórico de los alimentos que como." },
    "eat26-7": {
      text: "Evito especialmente los alimentos con alto contenido en carbohidratos (por ejemplo, pan, arroz, patatas, etc.)",
    },
    "eat26-8": { text: "Siento que los demás preferirían que yo comiera más." },
    "eat26-9": { text: "Vomito después de haber comido." },
    "eat26-10": { text: "Me siento muy culpable después de comer." },
    "eat26-11": { text: "Me obsesiona el deseo de estar más delgado." },
    "eat26-12": { text: "Pienso en quemar calorías cuando hago ejercicio." },
    "eat26-13": { text: "Los demás piensan que estoy demasiado delgado." },
    "eat26-14": { text: "Me obsesiona la idea de tener grasa en el cuerpo." },
    "eat26-15": { text: "Tardo más que los demás en comer." },
    "eat26-16": { text: "Evito los alimentos que contienen azúcar." },
    "eat26-17": { text: "Como alimentos dietéticos." },
    "eat26-18": { text: "Siento que la comida controla mi vida." },
    "eat26-19": { text: "Me controlo ante la comida." },
    "eat26-20": { text: "Siento que los demás me presionan para que coma." },
    "eat26-21": { text: "Dedico demasiado tiempo y pensamiento a la comida." },
    "eat26-22": { text: "Me siento incómodo después de comer dulces." },
    "eat26-23": { text: "Hago dieta." },
    "eat26-24": { text: "Me gusta tener el estómago vacío." },
    "eat26-25": { text: "Siento el impulso de vomitar después de las comidas." },
    "eat26-26": { text: "Disfruto probando comidas nuevas y sustanciosas.", options: frequency },
  },
  bands: {
    "below-cutoff": "Por debajo del punto de corte de derivación",
    "at-or-above-cutoff":
      "En el punto de corte de derivación o por encima — se recomienda una evaluación por un profesional cualificado",
  },
};

export default pack;
