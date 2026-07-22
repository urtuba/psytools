import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for swls. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "swls",
  "locale": "es",
  "title": "Escala de Satisfacción con la Vida (SWLS)",
  "description": "Una medida de 5 ítems sobre la satisfacción global con la vida.",
  "instructions": "A continuación se presentan cinco afirmaciones con las que puede estar de acuerdo o en desacuerdo. Indique su grado de acuerdo con cada ítem. Por favor, responda con sinceridad y franqueza.",
  "options": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Ligeramente en desacuerdo",
    "Ni de acuerdo ni en desacuerdo",
    "Ligeramente de acuerdo",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "questions": {
    "swls-1": {
      "text": "En la mayoría de los aspectos, mi vida se acerca a mi ideal"
    },
    "swls-2": {
      "text": "Las condiciones de mi vida son excelentes"
    },
    "swls-3": {
      "text": "Estoy satisfecho/a con mi vida"
    },
    "swls-4": {
      "text": "Hasta ahora he conseguido las cosas importantes que quiero en la vida"
    },
    "swls-5": {
      "text": "Si pudiera vivir mi vida de nuevo, no cambiaría casi nada"
    }
  },
  "bands": {
    "extremely-dissatisfied": "Extremadamente insatisfecho/a",
    "dissatisfied": "Insatisfecho/a",
    "slightly-dissatisfied": "Ligeramente insatisfecho/a",
    "neutral": "Neutral",
    "slightly-satisfied": "Ligeramente satisfecho/a",
    "satisfied": "Satisfecho/a",
    "extremely-satisfied": "Extremadamente satisfecho/a"
  }
};

export default pack;
