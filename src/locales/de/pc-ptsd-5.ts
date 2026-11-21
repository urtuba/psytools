import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for pc-ptsd-5. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pc-ptsd-5",
  locale: "de",
  title: "PTBS-Screening für die Primärversorgung nach DSM-5 (PC-PTSD-5)",
  description:
    "Ein kurzes Screening auf eine wahrscheinliche posttraumatische Belastungsstörung: eine Frage zu traumatischen Erlebnissen im Laufe des Lebens, dann fünf Ja/Nein-Fragen dazu, wie sich das Trauma im letzten Monat ausgewirkt hat.",
  instructions:
    "Manchmal erleben Menschen Dinge, die ungewöhnlich oder besonders beängstigend, entsetzlich oder traumatisch sind. Zum Beispiel: ein schwerer Unfall oder Brand; ein körperlicher oder sexueller Übergriff oder Missbrauch; ein Erdbeben oder eine Überschwemmung; ein Krieg; mitansehen, wie jemand getötet oder schwer verletzt wird; der Verlust eines geliebten Menschen durch Tötung oder Suizid.",
  options: ["Ja", "Nein"],
  questions: {
    "pc-ptsd-5-trauma": {
      text: "Haben Sie jemals ein solches Ereignis erlebt? Wenn nein: Gesamtwert des Screenings = 0. Bitte hören Sie hier auf. Wenn ja: Bitte beantworten Sie die folgenden Fragen.",
    },
    "pc-ptsd-5-1": {
      text: "Hatten Sie im letzten Monat Albträume von dem Ereignis bzw. den Ereignissen oder mussten Sie daran denken, obwohl Sie es nicht wollten?",
    },
    "pc-ptsd-5-2": {
      text: "Haben Sie im letzten Monat angestrengt versucht, nicht an das Ereignis bzw. die Ereignisse zu denken, oder sind Sie Situationen, die Sie daran erinnerten, gezielt aus dem Weg gegangen?",
    },
    "pc-ptsd-5-3": {
      text: "Waren Sie im letzten Monat ständig auf der Hut, wachsam oder leicht schreckhaft?",
    },
    "pc-ptsd-5-4": {
      text: "Haben Sie sich im letzten Monat wie betäubt oder losgelöst von anderen Menschen, Aktivitäten oder Ihrer Umgebung gefühlt?",
    },
    "pc-ptsd-5-5": {
      text: "Haben Sie sich im letzten Monat schuldig gefühlt oder konnten Sie nicht aufhören, sich selbst oder anderen die Schuld an dem Ereignis bzw. den Ereignissen oder an daraus entstandenen Problemen zu geben?",
    },
  },
};

export default pack;
