import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for phq8. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq8",
  locale: "tr",
  title: "Hasta Sağlığı Anketi-8 (PHQ-8)",
  description:
    "Depresyon şiddetini ölçen 8 maddelik bir öz bildirim ölçeği: PHQ-9'un kendine zarar verme düşüncelerini soran maddesi çıkarılmış hâli.",
  instructions: "Son 2 hafta içinde aşağıdaki sorunlardan herhangi biri sizi ne sıklıkta rahatsız etti?",
  options: ["Hiç", "Birkaç gün", "Günlerin yarısından fazlasında", "Hemen hemen her gün"],
  questions: {
    "phq8-1": { text: "Bir şeyler yapmaktan çok az ilgi ya da keyif almak" },
    "phq8-2": { text: "Kendini moralsiz, çökkün ya da umutsuz hissetmek" },
    "phq8-3": { text: "Uykuya dalmakta ya da uykuyu sürdürmekte güçlük çekmek ya da çok fazla uyumak" },
    "phq8-4": { text: "Yorgun hissetmek ya da çok az enerjisi olmak" },
    "phq8-5": { text: "İştahsızlık ya da aşırı yemek" },
    "phq8-6": {
      text: "Kendiniz hakkında kötü hissetmek ya da başarısız biri olduğunuzu veya kendinizi ya da ailenizi hayal kırıklığına uğrattığınızı düşünmek",
    },
    "phq8-7": { text: "Gazete okumak ya da televizyon izlemek gibi şeylere odaklanmakta güçlük çekmek" },
    "phq8-8": {
      text: "Başkalarının fark edebileceği kadar yavaş hareket etmek ya da konuşmak? Ya da tam tersi: her zamankinden çok daha fazla hareket edecek kadar kıpır kıpır ya da huzursuz olmak",
    },
  },
  bands: {
    minimal: "En az düzeyde depresyon",
    mild: "Hafif depresyon",
    moderate: "Orta düzeyde depresyon",
    "moderately-severe": "Orta-ağır düzeyde depresyon",
    severe: "Ağır depresyon",
  },
};

export default pack;
