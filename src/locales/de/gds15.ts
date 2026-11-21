import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for gds15. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "gds15",
  locale: "de",
  title: "Geriatrische Depressionsskala, Kurzform (GDS-15)",
  description: "Eine Screening-Skala mit 15 Ja/Nein-Fragen zur Erkennung von Depressionen bei älteren Menschen.",
  instructions: "Wählen Sie die Antwort, die am besten beschreibt, wie Sie sich in der vergangenen Woche gefühlt haben:",
  options: ["Ja", "Nein"],
  questions: {
    "gds15-1": { text: "Sind Sie grundsätzlich mit Ihrem Leben zufrieden?" },
    "gds15-2": { text: "Haben Sie viele Ihrer Aktivitäten und Interessen aufgegeben?" },
    "gds15-3": { text: "Haben Sie das Gefühl, Ihr Leben sei leer?" },
    "gds15-4": { text: "Ist Ihnen oft langweilig?" },
    "gds15-5": { text: "Sind Sie die meiste Zeit guter Laune?" },
    "gds15-6": { text: "Haben Sie Angst, dass Ihnen etwas Schlimmes zustoßen wird?" },
    "gds15-7": { text: "Fühlen Sie sich die meiste Zeit glücklich?" },
    "gds15-8": { text: "Fühlen Sie sich oft hilflos?" },
    "gds15-9": { text: "Bleiben Sie lieber zu Hause, anstatt auszugehen und Neues zu unternehmen?" },
    "gds15-10": { text: "Haben Sie das Gefühl, mehr Probleme mit dem Gedächtnis zu haben als die meisten anderen?" },
    "gds15-11": { text: "Finden Sie, es ist schön, jetzt zu leben?" },
    "gds15-12": { text: "Kommen Sie sich so, wie Sie jetzt sind, ziemlich wertlos vor?" },
    "gds15-13": { text: "Fühlen Sie sich voller Energie?" },
    "gds15-14": { text: "Haben Sie das Gefühl, Ihre Lage sei hoffnungslos?" },
    "gds15-15": { text: "Glauben Sie, dass es den meisten Menschen besser geht als Ihnen?" },
  },
  bands: {
    "below-cutoff": "Unterhalb der Schwelle für ein Nachgespräch",
    suggestive: "Hinweis auf eine Depression: ein Nachgespräch ist angezeigt",
    likely: "Fast immer eine Depression",
  },
};

export default pack;
