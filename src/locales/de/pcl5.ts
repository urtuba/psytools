import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for pcl5. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "pcl5",
  locale: "de",
  title: "PTBS-Checkliste für DSM-5 (PCL-5)",
  description:
    "Ein Selbstbeurteilungsbogen mit 20 Fragen zu den DSM-5-Symptomen der posttraumatischen Belastungsstörung im letzten Monat.",
  instructions:
    "Nachfolgend finden Sie eine Liste von Problemen, die Menschen manchmal als Reaktion auf ein sehr belastendes Erlebnis haben. Denken Sie an Ihr schlimmstes Erlebnis, lesen Sie jedes Problem sorgfältig durch und geben Sie dann mit einer der Zahlen rechts an, wie stark Sie dieses Problem im letzten Monat belastet hat.",
  options: ["Überhaupt nicht", "Ein wenig", "Mäßig", "Ziemlich", "Extrem"],
  questions: {
    "pcl5-1": { text: "Wiederkehrende, belastende und ungewollte Erinnerungen an das belastende Erlebnis?" },
    "pcl5-2": { text: "Wiederkehrende, belastende Träume von dem belastenden Erlebnis?" },
    "pcl5-3": {
      text: "Plötzlich zu fühlen oder zu handeln, als würde das belastende Erlebnis gerade wieder geschehen (als wären Sie wirklich wieder dort und würden es erneut durchleben)?",
    },
    "pcl5-4": { text: "Sehr aufgewühlt zu sein, wenn Sie etwas an das belastende Erlebnis erinnert hat?" },
    "pcl5-5": {
      text: "Starke körperliche Reaktionen zu haben, wenn Sie etwas an das belastende Erlebnis erinnert hat (zum Beispiel Herzklopfen, Atemnot, Schwitzen)?",
    },
    "pcl5-6": { text: "Erinnerungen, Gedanken oder Gefühle im Zusammenhang mit dem belastenden Erlebnis zu vermeiden?" },
    "pcl5-7": {
      text: "Äußere Erinnerungsauslöser des belastenden Erlebnisses zu vermeiden (zum Beispiel Menschen, Orte, Gespräche, Aktivitäten, Gegenstände oder Situationen)?",
    },
    "pcl5-8": { text: "Schwierigkeiten, sich an wichtige Teile des belastenden Erlebnisses zu erinnern?" },
    "pcl5-9": {
      text: "Starke negative Überzeugungen über sich selbst, andere Menschen oder die Welt zu haben (zum Beispiel Gedanken wie: Ich bin schlecht, mit mir stimmt etwas grundlegend nicht, niemandem kann man trauen, die Welt ist durch und durch gefährlich)?",
    },
    "pcl5-10": {
      text: "Sich selbst oder jemand anderem die Schuld für das belastende Erlebnis oder das, was danach geschah, zu geben?",
    },
    "pcl5-11": {
      text: "Starke negative Gefühle wie Angst, Entsetzen, Wut, Schuld oder Scham zu haben?",
    },
    "pcl5-12": { text: "Verlust des Interesses an Aktivitäten, die Ihnen früher Freude gemacht haben?" },
    "pcl5-13": { text: "Sich anderen Menschen fern oder von ihnen abgeschnitten zu fühlen?" },
    "pcl5-14": {
      text: "Schwierigkeiten, positive Gefühle zu erleben (zum Beispiel keine Freude empfinden oder keine liebevollen Gefühle für nahestehende Menschen aufbringen zu können)?",
    },
    "pcl5-15": { text: "Reizbares Verhalten, Wutausbrüche oder aggressives Handeln?" },
    "pcl5-16": { text: "Zu große Risiken einzugehen oder Dinge zu tun, die Ihnen schaden könnten?" },
    "pcl5-17": { text: "Übermäßig wachsam, aufmerksam oder auf der Hut zu sein?" },
    "pcl5-18": { text: "Sich schreckhaft zu fühlen oder leicht zusammenzuzucken?" },
    "pcl5-19": { text: "Konzentrationsschwierigkeiten zu haben?" },
    "pcl5-20": { text: "Schwierigkeiten beim Ein- oder Durchschlafen?" },
  },
};

export default pack;
