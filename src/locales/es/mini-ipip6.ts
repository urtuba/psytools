import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for mini-ipip6. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "mini-ipip6",
  "locale": "es",
  "title": "Escala de Personalidad de los Seis Grandes Mini-IPIP6",
  "description": "Una medida de dominio público de 24 ítems del International Personality Item Pool que evalúa seis factores amplios de personalidad: los cinco grandes (extraversión, amabilidad, responsabilidad, neuroticismo, apertura) y la honestidad-humildad.",
  "instructions": "Descríbase tal como es generalmente ahora, no como desea ser en el futuro. Indique con qué precisión le describe cada afirmación.",
  "options": [
    "Muy inexacto",
    "Moderadamente inexacto",
    "Ni exacto ni inexacto",
    "Moderadamente exacto",
    "Muy exacto"
  ],
  "questions": {
    "mini-ipip6-1": {
      "text": "Soy el alma de la fiesta"
    },
    "mini-ipip6-2": {
      "text": "Me identifico con los sentimientos de los demás"
    },
    "mini-ipip6-3": {
      "text": "Hago las tareas de inmediato"
    },
    "mini-ipip6-4": {
      "text": "Tengo cambios de humor frecuentes"
    },
    "mini-ipip6-5": {
      "text": "Tengo una imaginación viva"
    },
    "mini-ipip6-6": {
      "text": "No hablo mucho"
    },
    "mini-ipip6-7": {
      "text": "No me interesan los problemas de los demás"
    },
    "mini-ipip6-8": {
      "text": "A menudo olvido volver a poner las cosas en su sitio"
    },
    "mini-ipip6-9": {
      "text": "Estoy relajado la mayor parte del tiempo"
    },
    "mini-ipip6-10": {
      "text": "No me interesan las ideas abstractas"
    },
    "mini-ipip6-11": {
      "text": "En las fiestas hablo con muchas personas diferentes"
    },
    "mini-ipip6-12": {
      "text": "Siento las emociones de los demás"
    },
    "mini-ipip6-13": {
      "text": "Me gusta el orden"
    },
    "mini-ipip6-14": {
      "text": "Me altero con facilidad"
    },
    "mini-ipip6-15": {
      "text": "Me cuesta entender las ideas abstractas"
    },
    "mini-ipip6-16": {
      "text": "Me mantengo en un segundo plano"
    },
    "mini-ipip6-17": {
      "text": "En realidad no me interesan los demás"
    },
    "mini-ipip6-18": {
      "text": "Lo dejo todo hecho un desastre"
    },
    "mini-ipip6-19": {
      "text": "Rara vez me siento triste"
    },
    "mini-ipip6-20": {
      "text": "No tengo buena imaginación"
    },
    "mini-ipip6-21": {
      "text": "Siento que merezco más de todo"
    },
    "mini-ipip6-22": {
      "text": "Merezco más cosas en la vida"
    },
    "mini-ipip6-23": {
      "text": "Me gustaría que me vieran conduciendo un coche muy caro"
    },
    "mini-ipip6-24": {
      "text": "Poseer artículos de lujo caros me daría mucho placer"
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
      "label": "Apertura a la experiencia"
    },
    "honesty-humility": {
      "label": "Honestidad-Humildad"
    }
  }
};

export default pack;
