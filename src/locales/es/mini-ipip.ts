import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for mini-ipip. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "mini-ipip",
  "locale": "es",
  "title": "Escala de Personalidad de los Cinco Grandes Mini-IPIP",
  "description": "Una medida de dominio público de 20 ítems de los cinco grandes rasgos de personalidad (extraversión, amabilidad, responsabilidad, neuroticismo, apertura), extraída del International Personality Item Pool.",
  "instructions": "Descríbase tal como es generalmente ahora, no como desea ser en el futuro. Indique con qué precisión le describe cada afirmación.",
  "options": [
    "Muy inexacto",
    "Moderadamente inexacto",
    "Ni exacto ni inexacto",
    "Moderadamente exacto",
    "Muy exacto"
  ],
  "questions": {
    "mini-ipip-1": {
      "text": "Soy el alma de la fiesta"
    },
    "mini-ipip-2": {
      "text": "Me identifico con los sentimientos de los demás"
    },
    "mini-ipip-3": {
      "text": "Hago las tareas de inmediato"
    },
    "mini-ipip-4": {
      "text": "Tengo cambios de humor frecuentes"
    },
    "mini-ipip-5": {
      "text": "Tengo una imaginación viva"
    },
    "mini-ipip-6": {
      "text": "No hablo mucho"
    },
    "mini-ipip-7": {
      "text": "No me interesan los problemas de los demás"
    },
    "mini-ipip-8": {
      "text": "A menudo olvido volver a poner las cosas en su sitio"
    },
    "mini-ipip-9": {
      "text": "Estoy relajado la mayor parte del tiempo"
    },
    "mini-ipip-10": {
      "text": "No me interesan las ideas abstractas"
    },
    "mini-ipip-11": {
      "text": "En las fiestas hablo con muchas personas diferentes"
    },
    "mini-ipip-12": {
      "text": "Siento las emociones de los demás"
    },
    "mini-ipip-13": {
      "text": "Me gusta el orden"
    },
    "mini-ipip-14": {
      "text": "Me altero con facilidad"
    },
    "mini-ipip-15": {
      "text": "Me cuesta entender las ideas abstractas"
    },
    "mini-ipip-16": {
      "text": "Me mantengo en un segundo plano"
    },
    "mini-ipip-17": {
      "text": "En realidad no me interesan los demás"
    },
    "mini-ipip-18": {
      "text": "Lo dejo todo hecho un desastre"
    },
    "mini-ipip-19": {
      "text": "Rara vez me siento triste"
    },
    "mini-ipip-20": {
      "text": "No tengo buena imaginación"
    }
  },
  "subscales": {
    "extraversion": {
      "label": "Extraversión"
    },
    "agreeableness": {
      "label": "Amabilidad"
    },
    "conscientiousness": {
      "label": "Responsabilidad"
    },
    "neuroticism": {
      "label": "Neuroticismo"
    },
    "openness": {
      "label": "Apertura (Intelecto/Imaginación)"
    }
  }
};

export default pack;
