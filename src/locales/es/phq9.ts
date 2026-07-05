import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for phq9. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "phq9",
  "locale": "es",
  "title": "Cuestionario de Salud del Paciente (PHQ-9)",
  "description": "Un cuestionario de autoinforme de 9 ítems para la detección y la medición de la gravedad de la depresión.",
  "instructions": "Durante las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?",
  "options": [
    "Para nada",
    "Varios días",
    "Más de la mitad de los días",
    "Casi todos los días"
  ],
  "questions": {
    "phq9-1": {
      "text": "Poco interés o placer en hacer las cosas"
    },
    "phq9-2": {
      "text": "Sentirse desanimado(a), deprimido(a) o sin esperanza"
    },
    "phq9-3": {
      "text": "Dificultad para conciliar el sueño o mantenerse dormido(a), o dormir demasiado"
    },
    "phq9-4": {
      "text": "Sentirse cansado(a) o con poca energía"
    },
    "phq9-5": {
      "text": "Falta de apetito o comer en exceso"
    },
    "phq9-6": {
      "text": "Sentirse mal consigo mismo(a) — o sentir que es un fracaso o que se ha fallado a sí mismo(a) o a su familia"
    },
    "phq9-7": {
      "text": "Dificultad para concentrarse en actividades como leer el periódico o ver la televisión"
    },
    "phq9-8": {
      "text": "¿Se ha movido o ha hablado tan despacio que otras personas podrían haberlo notado? O lo contrario — estar tan inquieto(a) o agitado(a) que se ha estado moviendo mucho más de lo habitual"
    },
    "phq9-9": {
      "text": "Pensamientos de que estaría mejor muerto(a) o de hacerse daño de alguna manera"
    }
  },
  "bands": {
    "minimal": "Depresión mínima",
    "mild": "Depresión leve",
    "moderate": "Depresión moderada",
    "moderately-severe": "Depresión moderadamente grave",
    "severe": "Depresión grave"
  },
  "flags": {
    "suicidality": "Se informó de autolesión o ideación suicida (ítem 9) — requiere atención clínica"
  }
};

export default pack;
