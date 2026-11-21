import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for gds15. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "gds15",
  locale: "tr",
  title: "Geriatrik Depresyon Ölçeği, Kısa Form (GDS-15)",
  description: "Yaşlı yetişkinlerde depresyonu taramak için evet/hayır yanıtlı, 15 maddelik bir ölçek.",
  instructions: "Son bir haftada kendinizi nasıl hissettiğinize en uygun yanıtı seçin:",
  options: ["Evet", "Hayır"],
  questions: {
    "gds15-1": { text: "Hayatınızdan genel olarak memnun musunuz?" },
    "gds15-2": { text: "Etkinliklerinizin ve ilgi alanlarınızın çoğunu bıraktınız mı?" },
    "gds15-3": { text: "Hayatınızın boş olduğunu hissediyor musunuz?" },
    "gds15-4": { text: "Sık sık canınız sıkılır mı?" },
    "gds15-5": { text: "Çoğu zaman keyfiniz yerinde mi?" },
    "gds15-6": { text: "Başınıza kötü bir şey geleceğinden korkuyor musunuz?" },
    "gds15-7": { text: "Çoğu zaman kendinizi mutlu hissediyor musunuz?" },
    "gds15-8": { text: "Sık sık kendinizi çaresiz hissediyor musunuz?" },
    "gds15-9": { text: "Dışarı çıkıp yeni şeyler yapmak yerine evde kalmayı mı tercih edersiniz?" },
    "gds15-10": { text: "Belleğinizle ilgili çoğu insandan daha fazla sorun yaşadığınızı düşünüyor musunuz?" },
    "gds15-11": { text: "Şu anda hayatta olmanın harika bir şey olduğunu düşünüyor musunuz?" },
    "gds15-12": { text: "Şu anki hâlinizle kendinizi oldukça değersiz hissediyor musunuz?" },
    "gds15-13": { text: "Kendinizi enerji dolu hissediyor musunuz?" },
    "gds15-14": { text: "Durumunuzun umutsuz olduğunu hissediyor musunuz?" },
    "gds15-15": { text: "Çoğu insanın sizden daha iyi durumda olduğunu düşünüyor musunuz?" },
  },
  bands: {
    "below-cutoff": "Takip eşiğinin altında",
    suggestive: "Depresyonu düşündürüyor: takip görüşmesi gerekir",
    likely: "Neredeyse her zaman depresyon",
  },
};

export default pack;
