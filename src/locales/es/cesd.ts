import type { InventoryLocalePack } from "../../types.ts";

/** Spanish locale pack for cesd. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "cesd",
  "locale": "es",
  "title": "Escala de Depresión del Centro de Estudios Epidemiológicos (CES-D)",
  "description": "Una escala de autoinforme de 20 ítems diseñada para medir la sintomatología depresiva en la población general.",
  "instructions": "Por favor, lea cada afirmación con atención e indique con qué frecuencia se sintió o se comportó de esta manera durante la última semana, incluido hoy.",
  "options": [
    "Rara vez o nunca (menos de 1 día)",
    "Alguna o poca parte del tiempo (1-2 días)",
    "Ocasionalmente o una cantidad moderada de tiempo (3-4 días)",
    "La mayor parte del tiempo o todo el tiempo (5-7 días)"
  ],
  "questions": {
    "cesd-1": { "text": "Me molestaron cosas que normalmente no me molestan" },
    "cesd-2": { "text": "No tenía ganas de comer; tenía poco apetito" },
    "cesd-3": { "text": "Sentía que no podía quitarme la tristeza ni siquiera con la ayuda de mi familia y amigos" },
    "cesd-4": { "text": "Sentía que era tan bueno/a como cualquier otra persona" },
    "cesd-5": { "text": "Me costaba mantener la mente en lo que estaba haciendo" },
    "cesd-6": { "text": "Me sentía deprimido/a" },
    "cesd-7": { "text": "Sentía que todo lo que hacía era un esfuerzo" },
    "cesd-8": { "text": "Me sentía esperanzado/a respecto al futuro" },
    "cesd-9": { "text": "Pensaba que mi vida había sido un fracaso" },
    "cesd-10": { "text": "Sentía miedo" },
    "cesd-11": { "text": "Mi sueño era inquieto" },
    "cesd-12": { "text": "Era feliz" },
    "cesd-13": { "text": "Hablaba menos de lo habitual" },
    "cesd-14": { "text": "Me sentía solo/a" },
    "cesd-15": { "text": "La gente no era amable" },
    "cesd-16": { "text": "Disfrutaba de la vida" },
    "cesd-17": { "text": "Tenía ataques de llanto" },
    "cesd-18": { "text": "Me sentía triste" },
    "cesd-19": { "text": "Sentía que no le agradaba a la gente" },
    "cesd-20": { "text": "No podía ponerme en marcha" }
  },
  "bands": {
    "below-cutoff": "Por debajo del punto de corte clínico",
    "elevated": "Síntomas depresivos elevados (en o por encima del punto de corte de 16)"
  }
};

export default pack;
