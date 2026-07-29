import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for bis-bas. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "bis-bas",
  "locale": "es",
  "title": "Escalas IPIP BIS/BAS",
  "description": "Una medida de dominio público de 36 ítems de la motivación de aproximación y evitación, construida con ítems del International Personality Item Pool orientados a los constructos de inhibición y activación conductual: sensibilidad al castigo (BIS) y tres facetas de la sensibilidad a la recompensa (impulso, búsqueda de diversión y reactividad a la recompensa del BAS).",
  "instructions": "Descríbase tal como es generalmente ahora, no como desea ser en el futuro. Indique con qué precisión le describe cada afirmación.",
  "options": [
    "Muy inexacto",
    "Moderadamente inexacto",
    "Ni exacto ni inexacto",
    "Moderadamente exacto",
    "Muy exacto"
  ],
  "questions": {
    "bis-bas-1": {
      "text": "Me preocupa lo que la gente piense de mí"
    },
    "bis-bas-2": {
      "text": "Siempre estoy preocupado por algo"
    },
    "bis-bas-3": {
      "text": "A menudo me preocupo por cosas que resultan no tener importancia"
    },
    "bis-bas-4": {
      "text": "Temo hacer algo equivocado"
    },
    "bis-bas-5": {
      "text": "Me hieren con facilidad"
    },
    "bis-bas-6": {
      "text": "Empiezo a entrar en pánico cuando hay peligro"
    },
    "bis-bas-7": {
      "text": "Los acontecimientos me desbordan"
    },
    "bis-bas-8": {
      "text": "Me estreso con facilidad"
    },
    "bis-bas-9": {
      "text": "Rara vez me preocupo"
    },
    "bis-bas-10": {
      "text": "No me avergüenzo con facilidad"
    },
    "bis-bas-11": {
      "text": "Me gusta actuar de forma espontánea"
    },
    "bis-bas-12": {
      "text": "He convencido a otros de hacer algo realmente aventurado o descabellado"
    },
    "bis-bas-13": {
      "text": "Estoy dispuesto a probar cualquier cosa al menos una vez"
    },
    "bis-bas-14": {
      "text": "Me gusta actuar por capricho"
    },
    "bis-bas-15": {
      "text": "Prefiero a los amigos que son emocionantemente impredecibles"
    },
    "bis-bas-16": {
      "text": "Hago locuras"
    },
    "bis-bas-17": {
      "text": "Disfruto siendo imprudente"
    },
    "bis-bas-18": {
      "text": "Nunca me lanzaría en ala delta ni haría puenting"
    },
    "bis-bas-19": {
      "text": "Rara vez disfruto comportándome de forma tonta"
    },
    "bis-bas-20": {
      "text": "Evito las situaciones peligrosas"
    },
    "bis-bas-21": {
      "text": "Quiero estar al mando"
    },
    "bis-bas-22": {
      "text": "Intento superar los logros de los demás"
    },
    "bis-bas-23": {
      "text": "Me gusta lucir mi cuerpo"
    },
    "bis-bas-24": {
      "text": "Sé cómo saltarme las reglas"
    },
    "bis-bas-25": {
      "text": "Tengo una fuerte necesidad de poder"
    },
    "bis-bas-26": {
      "text": "Tomo las riendas"
    },
    "bis-bas-27": {
      "text": "Me exijo muchísimo para tener éxito"
    },
    "bis-bas-28": {
      "text": "No tengo mucha motivación para tener éxito"
    },
    "bis-bas-29": {
      "text": "No soy una persona extraordinaria"
    },
    "bis-bas-30": {
      "text": "Odio ser el centro de atención"
    },
    "bis-bas-31": {
      "text": "Me siento entusiasmado o feliz sin motivo aparente"
    },
    "bis-bas-32": {
      "text": "Me contagio de la emoción cuando los demás celebran"
    },
    "bis-bas-33": {
      "text": "Tengo muchas ganas de calmar los sentimientos heridos"
    },
    "bis-bas-34": {
      "text": "Me pongo tan feliz o tan lleno de energía que casi pierdo la cabeza"
    },
    "bis-bas-35": {
      "text": "Rara vez me contagio de la emoción"
    },
    "bis-bas-36": {
      "text": "No me entusiasmo con las cosas"
    }
  },
  "subscales": {
    "bis-anxiety": {
      "label": "BIS — Inhibición conductual (ansiedad)"
    },
    "bas-fun-seeking": {
      "label": "BAS — Búsqueda de diversión"
    },
    "bas-drive": {
      "label": "BAS — Impulso"
    },
    "bas-reward-responsiveness": {
      "label": "BAS — Reactividad a la recompensa"
    }
  }
};

export default pack;
