import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for audit. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "audit",
  "locale": "es",
  "title": "Test de Identificación de Trastornos por Consumo de Alcohol (AUDIT)",
  "description": "Un instrumento de cribado de la OMS de 10 ítems para detectar el consumo de alcohol de riesgo y perjudicial, así como una posible dependencia del alcohol.",
  "instructions": "Por favor, responda a las siguientes preguntas sobre su consumo de bebidas alcohólicas durante los últimos 12 meses. Una bebida se refiere a una bebida estándar (por ejemplo, un vaso de cerveza, una copa de vino o una medida de licor).",
  "options": [
    "Nunca",
    "Menos de una vez al mes",
    "Una vez al mes",
    "Una vez a la semana",
    "A diario o casi a diario"
  ],
  "questions": {
    "audit-1": {
      "text": "¿Con qué frecuencia consume alguna bebida que contenga alcohol?",
      "options": [
        "Nunca",
        "Una vez al mes o menos",
        "De 2 a 4 veces al mes",
        "De 2 a 3 veces a la semana",
        "4 o más veces a la semana"
      ]
    },
    "audit-2": {
      "text": "¿Cuántas bebidas que contienen alcohol consume en un día típico en que bebe?",
      "options": [
        "1 o 2",
        "3 o 4",
        "5 o 6",
        "De 7 a 9",
        "10 o más"
      ]
    },
    "audit-3": {
      "text": "¿Con qué frecuencia toma seis o más bebidas en una sola ocasión?"
    },
    "audit-4": {
      "text": "Durante el último año, ¿con qué frecuencia se ha dado cuenta de que no podía dejar de beber una vez que había empezado?"
    },
    "audit-5": {
      "text": "Durante el último año, ¿con qué frecuencia no pudo hacer lo que normalmente se esperaba de usted a causa de la bebida?"
    },
    "audit-6": {
      "text": "Durante el último año, ¿con qué frecuencia ha necesitado beber por la mañana para poder ponerse en marcha después de haber bebido mucho la noche anterior?"
    },
    "audit-7": {
      "text": "Durante el último año, ¿con qué frecuencia ha tenido sentimientos de culpa o remordimiento después de beber?"
    },
    "audit-8": {
      "text": "Durante el último año, ¿con qué frecuencia no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?"
    },
    "audit-9": {
      "text": "¿Usted u otra persona ha resultado herida como consecuencia de su consumo de alcohol?",
      "options": [
        "No",
        "Sí, pero no en el último año",
        "Sí, durante el último año"
      ]
    },
    "audit-10": {
      "text": "¿Algún familiar, amigo, médico u otro profesional de la salud ha mostrado preocupación por su consumo de alcohol o le ha sugerido que beba menos?",
      "options": [
        "No",
        "Sí, pero no en el último año",
        "Sí, durante el último año"
      ]
    }
  },
  "bands": {
    "zone-1": "Zona I: riesgo bajo — educación sobre el alcohol",
    "zone-2": "Zona II: consumo de riesgo — se recomienda un consejo simple",
    "zone-3": "Zona III: consumo perjudicial — consejería breve y seguimiento continuado",
    "zone-4": "Zona IV: posible dependencia — derivación para evaluación diagnóstica"
  }
};

export default pack;
