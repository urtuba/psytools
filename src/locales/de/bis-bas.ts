import type { InventoryLocalePack } from "../../types.ts";

/** German locale pack for bis-bas. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "bis-bas",
  "locale": "de",
  "title": "IPIP BIS/BAS-Skalen",
  "description": "Ein gemeinfreies 36-Item-Instrument zur Messung von Annäherungs- und Vermeidungsmotivation, zusammengestellt aus Items des International Personality Item Pool, die auf die Konstrukte der Verhaltenshemmung und -aktivierung ausgerichtet sind: Bestrafungssensitivität (BIS) und drei Facetten der Belohnungssensitivität (BAS Antrieb, Spaßsuche und Belohnungsreagibilität).",
  "instructions": "Beschreiben Sie sich so, wie Sie im Allgemeinen jetzt sind, nicht wie Sie in Zukunft sein möchten. Geben Sie an, wie zutreffend jede Aussage Sie beschreibt.",
  "options": [
    "Trifft überhaupt nicht zu",
    "Trifft eher nicht zu",
    "Weder zutreffend noch unzutreffend",
    "Trifft eher zu",
    "Trifft voll und ganz zu"
  ],
  "questions": {
    "bis-bas-1": {
      "text": "Ich mache mir Gedanken darüber, was andere über mich denken"
    },
    "bis-bas-2": {
      "text": "Ich mache mir ständig über irgendetwas Sorgen"
    },
    "bis-bas-3": {
      "text": "Ich sorge mich oft um Dinge, die sich als unwichtig herausstellen"
    },
    "bis-bas-4": {
      "text": "Ich habe Angst, das Falsche zu tun"
    },
    "bis-bas-5": {
      "text": "Ich bin leicht zu verletzen"
    },
    "bis-bas-6": {
      "text": "Ich gerate in Panik, wenn Gefahr droht"
    },
    "bis-bas-7": {
      "text": "Ich fühle mich von Ereignissen überwältigt"
    },
    "bis-bas-8": {
      "text": "Ich gerate leicht unter Stress"
    },
    "bis-bas-9": {
      "text": "Ich mache mir selten Sorgen"
    },
    "bis-bas-10": {
      "text": "Ich bin nicht leicht in Verlegenheit zu bringen"
    },
    "bis-bas-11": {
      "text": "Ich handle gerne spontan"
    },
    "bis-bas-12": {
      "text": "Ich habe andere schon zu etwas wirklich Abenteuerlichem oder Verrücktem überredet"
    },
    "bis-bas-13": {
      "text": "Ich bin bereit, alles einmal auszuprobieren"
    },
    "bis-bas-14": {
      "text": "Ich handle gerne aus einer Laune heraus"
    },
    "bis-bas-15": {
      "text": "Ich bevorzuge Freunde, die aufregend unberechenbar sind"
    },
    "bis-bas-16": {
      "text": "Ich mache verrückte Dinge"
    },
    "bis-bas-17": {
      "text": "Ich bin gerne leichtsinnig"
    },
    "bis-bas-18": {
      "text": "Ich würde niemals Drachenfliegen oder Bungeejumping machen"
    },
    "bis-bas-19": {
      "text": "Ich habe selten Freude daran, mich albern zu verhalten"
    },
    "bis-bas-20": {
      "text": "Ich meide gefährliche Situationen"
    },
    "bis-bas-21": {
      "text": "Ich möchte das Sagen haben"
    },
    "bis-bas-22": {
      "text": "Ich versuche, die Leistungen anderer zu übertreffen"
    },
    "bis-bas-23": {
      "text": "Ich zeige gerne meinen Körper"
    },
    "bis-bas-24": {
      "text": "Ich weiß, wie man Regeln umgeht"
    },
    "bis-bas-25": {
      "text": "Ich habe ein starkes Bedürfnis nach Macht"
    },
    "bis-bas-26": {
      "text": "Ich übernehme die Führung"
    },
    "bis-bas-27": {
      "text": "Ich strenge mich sehr an, um erfolgreich zu sein"
    },
    "bis-bas-28": {
      "text": "Ich bin nicht sehr darauf aus, erfolgreich zu sein"
    },
    "bis-bas-29": {
      "text": "Ich bin kein außergewöhnlicher Mensch"
    },
    "bis-bas-30": {
      "text": "Ich hasse es, im Mittelpunkt zu stehen"
    },
    "bis-bas-31": {
      "text": "Ich fühle mich ohne erkennbaren Grund aufgeregt oder glücklich"
    },
    "bis-bas-32": {
      "text": "Ich lasse mich von der Begeisterung anstecken, wenn andere feiern"
    },
    "bis-bas-33": {
      "text": "Ich bin sehr darauf bedacht, verletzte Gefühle zu besänftigen"
    },
    "bis-bas-34": {
      "text": "Ich werde so glücklich oder energiegeladen, dass ich fast überdreht bin"
    },
    "bis-bas-35": {
      "text": "Ich lasse mich selten von der Begeisterung anstecken"
    },
    "bis-bas-36": {
      "text": "Ich begeistere mich nicht für Dinge"
    }
  },
  "subscales": {
    "bis-anxiety": {
      "label": "BIS — Verhaltenshemmung (Ängstlichkeit)"
    },
    "bas-fun-seeking": {
      "label": "BAS — Spaßsuche"
    },
    "bas-drive": {
      "label": "BAS — Antrieb"
    },
    "bas-reward-responsiveness": {
      "label": "BAS — Belohnungsreagibilität"
    }
  }
};

export default pack;
