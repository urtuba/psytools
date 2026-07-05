import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for dass21. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "dass21",
  "locale": "es",
  "title": "Escalas de Depresión, Ansiedad y Estrés (DASS-21)",
  "description": "Un cuestionario de autoinforme de 21 ítems que mide la depresión, la ansiedad y el estrés durante la última semana.",
  "instructions": "Por favor, lea cada frase y seleccione la opción que indique en qué medida la frase se aplicó a usted durante la última semana. No hay respuestas correctas ni incorrectas. No dedique demasiado tiempo a ninguna frase.",
  "options": [
    "No se aplicó a mí en absoluto",
    "Se aplicó a mí en cierta medida, o parte del tiempo",
    "Se aplicó a mí en un grado considerable, o una buena parte del tiempo",
    "Se aplicó a mí mucho, o la mayor parte del tiempo"
  ],
  "questions": {
    "dass21-1": {
      "text": "Me costó calmarme"
    },
    "dass21-2": {
      "text": "Noté que tenía la boca seca"
    },
    "dass21-3": {
      "text": "No parecía poder experimentar ningún sentimiento positivo en absoluto"
    },
    "dass21-4": {
      "text": "Experimenté dificultad para respirar (p. ej., respiración excesivamente rápida, falta de aire sin haber hecho esfuerzo físico)"
    },
    "dass21-5": {
      "text": "Me resultó difícil tomar la iniciativa para hacer cosas"
    },
    "dass21-6": {
      "text": "Tendí a reaccionar de forma exagerada ante las situaciones"
    },
    "dass21-7": {
      "text": "Experimenté temblores (p. ej., en las manos)"
    },
    "dass21-8": {
      "text": "Sentí que estaba gastando mucha energía nerviosa"
    },
    "dass21-9": {
      "text": "Me preocupaban las situaciones en las que podría entrar en pánico y hacer el ridículo"
    },
    "dass21-10": {
      "text": "Sentí que no tenía nada que esperar con ilusión"
    },
    "dass21-11": {
      "text": "Me di cuenta de que me estaba agitando"
    },
    "dass21-12": {
      "text": "Me resultó difícil relajarme"
    },
    "dass21-13": {
      "text": "Me sentí desanimado y triste"
    },
    "dass21-14": {
      "text": "No toleraba nada que me impidiera seguir con lo que estaba haciendo"
    },
    "dass21-15": {
      "text": "Sentí que estaba a punto de entrar en pánico"
    },
    "dass21-16": {
      "text": "No fui capaz de entusiasmarme con nada"
    },
    "dass21-17": {
      "text": "Sentí que como persona no valía mucho"
    },
    "dass21-18": {
      "text": "Sentí que estaba bastante susceptible"
    },
    "dass21-19": {
      "text": "Fui consciente de los latidos de mi corazón sin haber hecho esfuerzo físico (p. ej., sensación de aumento del ritmo cardíaco, o de que el corazón se saltaba un latido)"
    },
    "dass21-20": {
      "text": "Me sentí asustado sin ninguna razón justificada"
    },
    "dass21-21": {
      "text": "Sentí que la vida no tenía sentido"
    }
  },
  "subscales": {
    "depression": {
      "label": "Depresión",
      "bands": {
        "normal": "Normal",
        "mild": "Leve",
        "moderate": "Moderado",
        "severe": "Grave",
        "extremely-severe": "Extremadamente grave"
      }
    },
    "anxiety": {
      "label": "Ansiedad",
      "bands": {
        "normal": "Normal",
        "mild": "Leve",
        "moderate": "Moderado",
        "severe": "Grave",
        "extremely-severe": "Extremadamente grave"
      }
    },
    "stress": {
      "label": "Estrés",
      "bands": {
        "normal": "Normal",
        "mild": "Leve",
        "moderate": "Moderado",
        "severe": "Grave",
        "extremely-severe": "Extremadamente grave"
      }
    }
  }
};

export default pack;
