import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for rses. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "rses",
  "locale": "es",
  "title": "Escala de Autoestima de Rosenberg (RSES)",
  "description": "Una medida de 10 ítems sobre el valor personal global, que evalúa tanto los sentimientos positivos como los negativos hacia uno/a mismo/a.",
  "instructions": "A continuación se presenta una lista de afirmaciones relacionadas con sus sentimientos generales acerca de sí mismo/a. Indique en qué medida está de acuerdo o en desacuerdo con cada afirmación.",
  "options": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "questions": {
    "rses-1": {
      "text": "En general, estoy satisfecho/a conmigo mismo/a"
    },
    "rses-2": {
      "text": "A veces pienso que no sirvo para nada en absoluto"
    },
    "rses-3": {
      "text": "Siento que tengo varias cualidades buenas"
    },
    "rses-4": {
      "text": "Soy capaz de hacer las cosas tan bien como la mayoría de las personas"
    },
    "rses-5": {
      "text": "Siento que no tengo mucho de lo que sentirme orgulloso/a"
    },
    "rses-6": {
      "text": "Ciertamente, a veces me siento inútil"
    },
    "rses-7": {
      "text": "Siento que soy una persona de valor, al menos en igualdad de condiciones con los demás"
    },
    "rses-8": {
      "text": "Desearía tener más respeto por mí mismo/a"
    },
    "rses-9": {
      "text": "En general, me inclino a pensar que soy un/a fracasado/a"
    },
    "rses-10": {
      "text": "Tengo una actitud positiva hacia mí mismo/a"
    }
  },
  "bands": {
    "low": "Autoestima baja",
    "normal": "Dentro del rango normal",
    "high": "Autoestima alta"
  }
};

export default pack;
