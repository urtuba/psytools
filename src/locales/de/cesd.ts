import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for cesd. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "cesd",
  "locale": "de",
  "title": "CES-D — Center for Epidemiologic Studies Depression Scale",
  "description": "Eine 20-Item-Selbstbeurteilungsskala zur Erfassung depressiver Symptomatik in der Allgemeinbevölkerung.",
  "instructions": "Bitte lesen Sie jede Aussage sorgfältig und geben Sie an, wie oft Sie sich in der vergangenen Woche (einschließlich heute) so gefühlt oder so verhalten haben.",
  "options": [
    "Selten oder überhaupt nicht (weniger als 1 Tag)",
    "Manchmal oder ein wenig (1-2 Tage)",
    "Öfters oder eine mäßige Zeit lang (3-4 Tage)",
    "Meistens oder die ganze Zeit (5-7 Tage)"
  ],
  "questions": {
    "cesd-1": { "text": "Dinge haben mich gestört, die mich normalerweise nicht stören" },
    "cesd-2": { "text": "Ich hatte keine Lust zu essen; mein Appetit war schlecht" },
    "cesd-3": { "text": "Ich hatte das Gefühl, meine Niedergeschlagenheit selbst mit Hilfe meiner Familie und Freunde nicht abschütteln zu können" },
    "cesd-4": { "text": "Ich fühlte mich genauso gut wie andere Menschen" },
    "cesd-5": { "text": "Es fiel mir schwer, mich auf das zu konzentrieren, was ich gerade tat" },
    "cesd-6": { "text": "Ich fühlte mich deprimiert" },
    "cesd-7": { "text": "Alles, was ich tat, strengte mich an" },
    "cesd-8": { "text": "Ich blickte hoffnungsvoll in die Zukunft" },
    "cesd-9": { "text": "Ich dachte, mein Leben sei ein Misserfolg gewesen" },
    "cesd-10": { "text": "Ich hatte Angst" },
    "cesd-11": { "text": "Mein Schlaf war unruhig" },
    "cesd-12": { "text": "Ich war glücklich" },
    "cesd-13": { "text": "Ich sprach weniger als sonst" },
    "cesd-14": { "text": "Ich fühlte mich einsam" },
    "cesd-15": { "text": "Die Menschen waren unfreundlich" },
    "cesd-16": { "text": "Ich habe das Leben genossen" },
    "cesd-17": { "text": "Ich hatte Weinanfälle" },
    "cesd-18": { "text": "Ich fühlte mich traurig" },
    "cesd-19": { "text": "Ich hatte das Gefühl, dass die Leute mich nicht mögen" },
    "cesd-20": { "text": "Ich konnte einfach nicht in Gang kommen" }
  },
  "bands": {
    "below-cutoff": "Unterhalb des klinischen Grenzwerts",
    "elevated": "Erhöhte depressive Symptomatik (am oder über dem Grenzwert von 16)"
  }
};

export default pack;
