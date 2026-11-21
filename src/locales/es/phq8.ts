import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for phq8. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq8",
  locale: "es",
  title: "Cuestionario de Salud del Paciente-8 (PHQ-8)",
  description:
    "Un cuestionario de autoinforme de 8 ítems sobre la gravedad de la depresión: el PHQ-9 sin su ítem sobre pensamientos de hacerse daño.",
  instructions:
    "Durante las últimas 2 semanas, ¿con qué frecuencia le ha afectado alguno de los siguientes problemas?",
  options: ["Nunca", "Varios días", "Más de la mitad de los días", "Casi todos los días"],
  questions: {
    "phq8-1": { text: "Tener poco interés o placer en hacer cosas" },
    "phq8-2": { text: "Sentirse bajo(a) de ánimo, deprimido(a) o sin esperanza" },
    "phq8-3": { text: "Dificultad para conciliar el sueño o mantenerlo, o dormir demasiado" },
    "phq8-4": { text: "Sentirse cansado(a) o con poca energía" },
    "phq8-5": { text: "Falta de apetito o comer en exceso" },
    "phq8-6": {
      text: "Sentirse mal consigo mismo(a), o sentir que es un fracaso o que se ha defraudado a sí mismo(a) o a su familia",
    },
    "phq8-7": {
      text: "Dificultad para concentrarse en cosas como leer el periódico o ver la televisión",
    },
    "phq8-8": {
      text: "¿Moverse o hablar tan despacio que otras personas podrían haberlo notado? O lo contrario: estar tan inquieto(a) o agitado(a) que se ha movido mucho más de lo habitual",
    },
  },
  bands: {
    minimal: "Depresión mínima",
    mild: "Depresión leve",
    moderate: "Depresión moderada",
    "moderately-severe": "Depresión moderadamente grave",
    severe: "Depresión grave",
  },
};

export default pack;
