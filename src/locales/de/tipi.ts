import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for tipi. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "tipi",
  locale: "de",
  title: "Zehn-Item-Persönlichkeitsinventar (TIPI)",
  description:
    "Ein Instrument mit 10 Aussagen zu den fünf großen Persönlichkeitsdimensionen (Big Five) für Situationen, in denen eine sehr kurze Messung nötig ist.",
  instructions:
    "Hier finden Sie einige Persönlichkeitseigenschaften, die auf Sie zutreffen können oder auch nicht. Bitte schreiben Sie neben jede Aussage eine Zahl, die angibt, inwieweit Sie dieser Aussage zustimmen oder nicht zustimmen. Bewerten Sie, inwieweit das Eigenschaftspaar auf Sie zutrifft, auch wenn eine der beiden Eigenschaften stärker zutrifft als die andere. Ich sehe mich selbst als:",
  options: [
    "Stimme überhaupt nicht zu",
    "Stimme eher nicht zu",
    "Stimme ein wenig nicht zu",
    "Weder Zustimmung noch Ablehnung",
    "Stimme ein wenig zu",
    "Stimme eher zu",
    "Stimme voll und ganz zu",
  ],
  questions: {
    "tipi-1": { text: "Extravertiert, enthusiastisch." },
    "tipi-2": { text: "Kritisch, streitsüchtig." },
    "tipi-3": { text: "Verlässlich, selbstdiszipliniert." },
    "tipi-4": { text: "Ängstlich, schnell aufgewühlt." },
    "tipi-5": { text: "Offen für neue Erfahrungen, komplex." },
    "tipi-6": { text: "Zurückhaltend, still." },
    "tipi-7": { text: "Mitfühlend, warmherzig." },
    "tipi-8": { text: "Unordentlich, nachlässig." },
    "tipi-9": { text: "Ruhig, emotional stabil." },
    "tipi-10": { text: "Konventionell, unkreativ." },
  },
  subscales: {
    extraversion: { label: "Extraversion" },
    agreeableness: { label: "Verträglichkeit" },
    conscientiousness: { label: "Gewissenhaftigkeit" },
    "emotional-stability": { label: "Emotionale Stabilität" },
    openness: { label: "Offenheit für Erfahrungen" },
  },
};

export default pack;
