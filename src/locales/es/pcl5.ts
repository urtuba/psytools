import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for pcl5. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pcl5",
  locale: "es",
  title: "Lista de Verificación del TEPT para el DSM-5 (PCL-5)",
  description:
    "Una escala autoaplicada de 20 ítems que mide los síntomas del trastorno de estrés postraumático según el DSM-5 durante el último mes.",
  instructions:
    "A continuación aparece una lista de problemas que las personas a veces tienen en respuesta a una experiencia muy estresante. Teniendo en mente su peor experiencia, lea cada problema con atención y luego seleccione uno de los números de la derecha para indicar cuánto le ha molestado ese problema durante el último mes.",
  options: ["Nada", "Un poco", "Moderadamente", "Bastante", "Extremadamente"],
  questions: {
    "pcl5-1": { text: "¿Recuerdos repetidos, perturbadores y no deseados de la experiencia estresante?" },
    "pcl5-2": { text: "¿Sueños repetidos y perturbadores sobre la experiencia estresante?" },
    "pcl5-3": {
      text: "¿Sentir o actuar de repente como si la experiencia estresante estuviera ocurriendo otra vez (como si realmente estuviera allí viviéndola de nuevo)?",
    },
    "pcl5-4": { text: "¿Sentirse muy alterado cuando algo le recordaba la experiencia estresante?" },
    "pcl5-5": {
      text: "¿Tener reacciones físicas intensas cuando algo le recordaba la experiencia estresante (por ejemplo, palpitaciones, dificultad para respirar, sudoración)?",
    },
    "pcl5-6": { text: "¿Evitar recuerdos, pensamientos o sentimientos relacionados con la experiencia estresante?" },
    "pcl5-7": {
      text: "¿Evitar cosas externas que le recuerden la experiencia estresante (por ejemplo, personas, lugares, conversaciones, actividades, objetos o situaciones)?",
    },
    "pcl5-8": { text: "¿Dificultad para recordar partes importantes de la experiencia estresante?" },
    "pcl5-9": {
      text: "¿Tener creencias negativas intensas sobre sí mismo, sobre otras personas o sobre el mundo (por ejemplo, pensamientos como: soy malo, hay algo gravemente mal en mí, no se puede confiar en nadie, el mundo es totalmente peligroso)?",
    },
    "pcl5-10": {
      text: "¿Culparse a sí mismo o culpar a otra persona por la experiencia estresante o por lo que ocurrió después?",
    },
    "pcl5-11": {
      text: "¿Tener sentimientos negativos intensos como miedo, horror, ira, culpa o vergüenza?",
    },
    "pcl5-12": { text: "¿Pérdida de interés en actividades que antes disfrutaba?" },
    "pcl5-13": { text: "¿Sentirse distante o desconectado de las demás personas?" },
    "pcl5-14": {
      text: "¿Dificultad para experimentar sentimientos positivos (por ejemplo, ser incapaz de sentir felicidad o de sentir cariño por las personas cercanas a usted)?",
    },
    "pcl5-15": { text: "¿Comportamiento irritable, arrebatos de ira o actuar de forma agresiva?" },
    "pcl5-16": { text: "¿Correr demasiados riesgos o hacer cosas que podrían causarle daño?" },
    "pcl5-17": { text: "¿Estar “superalerta”, vigilante o en guardia?" },
    "pcl5-18": { text: "¿Sentirse sobresaltado o asustarse con facilidad?" },
    "pcl5-19": { text: "¿Tener dificultad para concentrarse?" },
    "pcl5-20": { text: "¿Dificultad para conciliar el sueño o para mantenerse dormido?" },
  },
};

export default pack;
