import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for ucla-ls3. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "ucla-ls3",
  locale: "es",
  title: "Escala de Soledad UCLA (Versión 3)",
  description:
    "Una escala autoaplicada de 20 ítems que mide los sentimientos subjetivos de soledad y de aislamiento social.",
  instructions:
    "Las siguientes afirmaciones describen cómo se sienten las personas a veces. Para cada afirmación, indique con qué frecuencia se siente de la manera descrita. Aquí tiene un ejemplo: ¿Con qué frecuencia se siente feliz? Si nunca se ha sentido feliz, respondería “nunca”; si siempre se siente feliz, respondería “siempre”.",
  options: ["Nunca", "Rara vez", "A veces", "Siempre"],
  questions: {
    "ucla-ls3-1": { text: "¿Con qué frecuencia siente que está “en sintonía” con la gente que le rodea?" },
    "ucla-ls3-2": { text: "¿Con qué frecuencia siente que le falta compañía?" },
    "ucla-ls3-3": { text: "¿Con qué frecuencia siente que no hay nadie a quien pueda recurrir?" },
    "ucla-ls3-4": { text: "¿Con qué frecuencia se siente solo?" },
    "ucla-ls3-5": { text: "¿Con qué frecuencia se siente parte de un grupo de amigos?" },
    "ucla-ls3-6": {
      text: "¿Con qué frecuencia siente que tiene mucho en común con la gente que le rodea?",
    },
    "ucla-ls3-7": { text: "¿Con qué frecuencia siente que ya no está cerca de nadie?" },
    "ucla-ls3-8": {
      text: "¿Con qué frecuencia siente que quienes le rodean no comparten sus intereses ni sus ideas?",
    },
    "ucla-ls3-9": { text: "¿Con qué frecuencia se siente extrovertido y amigable?" },
    "ucla-ls3-10": { text: "¿Con qué frecuencia se siente cercano a la gente?" },
    "ucla-ls3-11": { text: "¿Con qué frecuencia se siente excluido?" },
    "ucla-ls3-12": {
      text: "¿Con qué frecuencia siente que sus relaciones con los demás no son significativas?",
    },
    "ucla-ls3-13": { text: "¿Con qué frecuencia siente que nadie le conoce realmente bien?" },
    "ucla-ls3-14": { text: "¿Con qué frecuencia se siente aislado de los demás?" },
    "ucla-ls3-15": {
      text: "¿Con qué frecuencia siente que puede encontrar compañía cuando la desea?",
    },
    "ucla-ls3-16": { text: "¿Con qué frecuencia siente que hay personas que realmente le comprenden?" },
    "ucla-ls3-17": { text: "¿Con qué frecuencia se siente tímido?" },
    "ucla-ls3-18": {
      text: "¿Con qué frecuencia siente que hay gente a su alrededor pero no con usted?",
    },
    "ucla-ls3-19": { text: "¿Con qué frecuencia siente que hay personas con las que puede hablar?" },
    "ucla-ls3-20": { text: "¿Con qué frecuencia siente que hay personas a las que puede recurrir?" },
  },
};

export default pack;
