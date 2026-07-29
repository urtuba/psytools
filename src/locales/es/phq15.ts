import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for phq15. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq15",
  locale: "es",
  title: "Cuestionario de Salud del Paciente-15 (PHQ-15)",
  description:
    "Una escala autoaplicada de 15 ítems que mide la gravedad de los síntomas físicos comunes y sirve para detectar somatización y trastornos somatomorfos.",
  instructions: "Durante las últimas 4 semanas, ¿cuánto le han molestado los siguientes problemas?",
  options: ["Nada molesto", "Un poco molesto", "Muy molesto"],
  questions: {
    "phq15-1": { text: "Dolor de estómago" },
    "phq15-2": { text: "Dolor de espalda" },
    "phq15-3": { text: "Dolor en brazos, piernas o articulaciones (rodillas, caderas, etc.)" },
    "phq15-4": { text: "Cólicos menstruales u otros problemas con la menstruación [solo mujeres]" },
    "phq15-5": { text: "Dolores de cabeza" },
    "phq15-6": { text: "Dolor en el pecho" },
    "phq15-7": { text: "Mareos" },
    "phq15-8": { text: "Desmayos" },
    "phq15-9": { text: "Sentir que el corazón le late fuerte o muy rápido" },
    "phq15-10": { text: "Falta de aire" },
    "phq15-11": { text: "Dolor o problemas durante las relaciones sexuales" },
    "phq15-12": { text: "Estreñimiento, heces sueltas o diarrea" },
    "phq15-13": { text: "Náuseas, gases o indigestión" },
    "phq15-14": { text: "Sentirse cansado o con poca energía" },
    "phq15-15": { text: "Problemas para dormir" },
  },
  bands: {
    minimal: "Síntomas somáticos mínimos",
    low: "Gravedad baja de síntomas somáticos",
    medium: "Gravedad media de síntomas somáticos",
    high: "Gravedad alta de síntomas somáticos",
  },
};

export default pack;
