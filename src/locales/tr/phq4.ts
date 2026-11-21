import type { InventoryLocalePack } from "../../types.ts";

/** Turkish locale pack for phq4. AI translation (Anthropic Claude, claude-opus-5-5), unverified; see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq4",
  locale: "tr",
  title: "Hasta Sağlığı Anketi-4 (PHQ-4)",
  description:
    "Kaygı ve depresyon için 2 maddelik GAD-2 ile PHQ-2'den oluşan, 4 maddelik çok kısa bir tarama aracı.",
  instructions: "Son 2 hafta içinde aşağıdaki sorunlar sizi ne sıklıkta rahatsız etti?",
  options: ["Hiç", "Birkaç gün", "Günlerin yarısından fazlasında", "Hemen hemen her gün"],
  questions: {
    "phq4-1": { text: "Gergin, kaygılı ya da diken üstünde hissetmek" },
    "phq4-2": { text: "Endişelenmeyi durduramamak ya da kontrol edememek" },
    "phq4-3": { text: "Bir şeyler yapmaktan çok az ilgi ya da keyif almak" },
    "phq4-4": { text: "Kendini moralsiz, çökkün ya da umutsuz hissetmek" },
  },
  subscales: {
    anxiety: {
      label: "Kaygı (GAD-2)",
      bands: {
        "below-cutoff": "Tarama eşiğinin altında",
        positive: "Tarama olumlu: GAD-7 ve klinik görüşmeyle değerlendirin",
      },
    },
    depression: {
      label: "Depresyon (PHQ-2)",
      bands: {
        "below-cutoff": "Tarama eşiğinin altında",
        positive: "Tarama olumlu: PHQ-9 ve klinik görüşmeyle değerlendirin",
      },
    },
    total: { label: "Toplam (PHQ-4)" },
  },
};

export default pack;
