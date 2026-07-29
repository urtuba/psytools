import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for csi16. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const trueScale = [
  "Hiç doğru değil",
  "Biraz doğru",
  "Kısmen doğru",
  "Büyük ölçüde doğru",
  "Neredeyse tamamen doğru",
  "Tamamen doğru",
];

// The semantic differentials are numbered positions on the authors' own
// form, identical in every language — restated here because a locale pack
// must cover every per-question scale.
const down = ["5", "4", "3", "2", "1", "0"];
const up = ["0", "1", "2", "3", "4", "5"];

const pack: InventoryLocalePack = {
  id: "csi16",
  locale: "tr",
  title: "Çift Doyumu Ölçeği (CSI-16)",
  description:
    "İlişki doyumunu ölçen, madde tepki kuramıyla geliştirilmiş ve doyumsuz uçta hassasiyeti yüksek 16 maddelik bir öz bildirim ölçeği.",
  instructions:
    "Aşağıdaki maddelerin her biri için, ilişkiniz hakkında hissettiklerinizi en iyi anlatan yanıtı seçin. Yanıtlarınızı maddeye ilişkin ilk izleniminize ve o anki duygularınıza dayandırın.",
  options: ["Hiç", "Biraz", "Kısmen", "Büyük ölçüde", "Neredeyse tamamen", "Tamamen"],
  questions: {
    "csi16-1": {
      text: "Her şey göz önüne alındığında ilişkinizin mutluluk derecesini belirtin.",
      options: [
        "Aşırı mutsuz",
        "Oldukça mutsuz",
        "Biraz mutsuz",
        "Mutlu",
        "Çok mutlu",
        "Aşırı mutlu",
        "Kusursuz",
      ],
    },
    "csi16-2": {
      text: "Genel olarak, siz ve partneriniz arasındaki şeylerin yolunda gittiğini ne sıklıkla düşünüyorsunuz?",
      options: [
        "Her zaman",
        "Çoğu zaman",
        "Çoğunlukla",
        "Ara sıra",
        "Nadiren",
        "Hiçbir zaman",
      ],
    },
    "csi16-3": { text: "İlişkimiz güçlüdür", options: trueScale },
    "csi16-4": { text: "Partnerimle olan ilişkim beni mutlu ediyor", options: trueScale },
    "csi16-5": { text: "Partnerimle sıcak ve rahat bir ilişkim var", options: trueScale },
    "csi16-6": { text: "Partnerimle gerçekten bir takımın parçası gibi hissediyorum", options: trueScale },
    "csi16-7": { text: "Partnerinizle olan ilişkiniz sizi ne kadar doyuruyor?" },
    "csi16-8": { text: "Partneriniz ihtiyaçlarınızı ne kadar iyi karşılıyor?" },
    "csi16-9": { text: "İlişkiniz başlangıçtaki beklentilerinizi ne ölçüde karşıladı?" },
    "csi16-10": { text: "Genel olarak ilişkinizden ne kadar memnunsunuz?" },
    "csi16-11": { text: "İLGİNÇ — SIKICI", options: down },
    "csi16-12": { text: "KÖTÜ — İYİ", options: up },
    "csi16-13": { text: "DOLU — BOŞ", options: down },
    "csi16-14": { text: "SAĞLAM — KIRILGAN", options: down },
    "csi16-15": { text: "CESARET KIRICI — UMUT VERİCİ", options: up },
    "csi16-16": { text: "KEYİFLİ — IZDIRAP VERİCİ", options: down },
  },
  bands: {
    dissatisfied: "Belirgin ilişki doyumsuzluğu",
    satisfied: "Belirgin ilişki doyumsuzluğu yok",
  },
};

export default pack;
