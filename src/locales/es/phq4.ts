import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for phq4. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq4",
  locale: "es",
  title: "Cuestionario de Salud del Paciente-4 (PHQ-4)",
  description:
    "Un cribado ultrabreve de ansiedad y depresión de 4 ítems, formado por el GAD-2 y el PHQ-2.",
  instructions: "Durante las últimas 2 semanas, ¿con qué frecuencia le han afectado los siguientes problemas?",
  options: ["Nunca", "Varios días", "Más de la mitad de los días", "Casi todos los días"],
  questions: {
    "phq4-1": { text: "Sentirse nervioso(a), ansioso(a) o tenso(a)" },
    "phq4-2": { text: "No poder dejar de preocuparse ni controlar la preocupación" },
    "phq4-3": { text: "Tener poco interés o placer en hacer cosas" },
    "phq4-4": { text: "Sentirse bajo(a) de ánimo, deprimido(a) o sin esperanza" },
  },
  subscales: {
    anxiety: {
      label: "Ansiedad (GAD-2)",
      bands: {
        "below-cutoff": "Por debajo del punto de corte del cribado",
        positive: "Cribado positivo: completar con el GAD-7 y una entrevista clínica",
      },
    },
    depression: {
      label: "Depresión (PHQ-2)",
      bands: {
        "below-cutoff": "Por debajo del punto de corte del cribado",
        positive: "Cribado positivo: completar con el PHQ-9 y una entrevista clínica",
      },
    },
    total: { label: "Total (PHQ-4)" },
  },
};

export default pack;
