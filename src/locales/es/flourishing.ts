import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for flourishing. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "flourishing",
  "locale": "es",
  "title": "Escala de Florecimiento (FS)",
  "description": "Una medida resumida de 8 ítems sobre el éxito autopercibido en áreas importantes como las relaciones, la autoestima, el propósito y el optimismo.",
  "instructions": "A continuación se presentan ocho afirmaciones con las que puede estar de acuerdo o en desacuerdo. Indique su grado de acuerdo con cada ítem.",
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
    "flourishing-1": {
      "text": "Llevo una vida con propósito y significado"
    },
    "flourishing-2": {
      "text": "Mis relaciones sociales son gratificantes y me brindan apoyo"
    },
    "flourishing-3": {
      "text": "Estoy comprometido/a e interesado/a en mis actividades diarias"
    },
    "flourishing-4": {
      "text": "Contribuyo activamente a la felicidad y al bienestar de los demás"
    },
    "flourishing-5": {
      "text": "Soy competente y capaz en las actividades que son importantes para mí"
    },
    "flourishing-6": {
      "text": "Soy una buena persona y llevo una buena vida"
    },
    "flourishing-7": {
      "text": "Soy optimista respecto a mi futuro"
    },
    "flourishing-8": {
      "text": "Las personas me respetan"
    }
  }
};

export default pack;
